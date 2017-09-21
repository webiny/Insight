<?php

namespace Apps\Insight\Php\Lib;

use Apps\Insight\Php\Entities\Rule;
use Apps\Insight\Php\Entities\ScoreCard;
use Apps\Webiny\Php\Lib\WebinyTrait;

class Eye
{
    use WebinyTrait;

    /**
     * Glance triggers an Insight action for the given rule.
     *
     * @param string $ruleSlug Rule slug.
     *
     * @return bool True if glance registered the score, false if user or Insight rule was not found.
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
        if ($user->getAttribute('insight')) {
            $user->insight->score += $rule->score;
            $user->insight->level = $scoreCard->getLevel($user->insight->score);
        } else {
            $user->insight->score = $rule->score;
            $user->insight->level = $scoreCard->getLevel($rule->score);
        }
        $user->save();

        return true;
    }
}