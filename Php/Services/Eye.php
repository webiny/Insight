<?php

namespace Apps\Sauron\Php\Services;

use Apps\Core\Php\DevTools\Services\AbstractService;
use Apps\Sauron\Php\Entities\Rule;
use Apps\Sauron\Php\Entities\ScoreCard;

class Eye extends AbstractService
{
    public function __construct()
    {
        /**
         * @api.name Sauron Eye - tracks users based on the triggered rules.
         * @api.description Glance service is triggered by the Eye class which calls the service once a user triggers a certain rule.
         */
        $this->api('POST', 'glance', function () {
            // get user
            $user = $this->wAuth()->getUser();
            if (empty($user)) {
                return;
            }

            // get rule
            $slug = $this->wRequest()->payload('rule');
            $rule = Rule::findOne(['slug' => $slug]);
            if (!$rule) {
                return;
            }

            // update score card
            $scoreCard = ScoreCard::findOne(['user' => $user->id, 'rule' => $rule->id]);
            if (!$scoreCard) {
                $scoreCard = new ScoreCard();
                $scoreCard->user = $user;
                $scoreCard->rule = $rule;
                $scoreCard->activities = 1;
                $scoreCard->lastActivity = time();
                $scoreCard->score = $rule->score;
            } else {
                $scoreCard->activities++;
                $scoreCard->lastActivity = time();
                $scoreCard->score += $rule->score;
            }
            $scoreCard->save();

            // update user score
            if($user->getAttribute('sauron')){
                $user->sauron->score+= $rule->score;
                $user->sauron->level = $scoreCard->getLevel($user->sauron->score);
            }else{
                $user->sauron->score = $rule->score;
                $user->sauron->level = $scoreCard->getLevel($rule->score);
            }
            $user->save();

            return true;

        })->setPublic();
    }

}