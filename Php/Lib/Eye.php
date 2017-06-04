<?php

namespace Apps\Sauron\Php\Lib;

use Apps\Sauron\Php\Entities\Rule;
use Apps\Sauron\Php\Entities\ScoreCard;
use Apps\Webiny\Php\DevTools\WebinyTrait;

class Eye
{
    use WebinyTrait;

    /**
     * Glance triggers a Sauron action for the given rule.
     *
     * @param string $ruleSlug Rule slug.
     *
     * @return bool True if glance registered the score, false if user or Sauron rule was not found.
     */
    public function glance($ruleSlug)
    {
        // get user
        $user = $this->wAuth()->getUser();
        if (empty($user)) {
            return;
        }

        // get rule
        $rule = Rule::findOne(['slug' => $ruleSlug]);
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
        if ($user->getAttribute('sauron')) {
            $user->sauron->score += $rule->score;
            $user->sauron->level = $scoreCard->getLevel($user->sauron->score);
        } else {
            $user->sauron->score = $rule->score;
            $user->sauron->level = $scoreCard->getLevel($rule->score);
        }
        $user->save();

        return true;
    }
}