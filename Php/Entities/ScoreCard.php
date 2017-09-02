<?php
namespace Apps\Insight\Php\Entities;

use Apps\Webiny\Php\DevTools\Entity\AbstractEntity;
use Apps\Webiny\Php\DevTools\WebinyTrait;
use Apps\Webiny\Php\Entities\User;
use Webiny\Component\Mongo\Index\CompoundIndex;
use Webiny\Component\Mongo\Index\SingleIndex;

/**
 * Class ScoreCard
 *
 * @property string  $id
 * @property User    $user
 * @property Rule    $rule
 * @property integer $score
 * @property integer $activities
 * @property integer $lastActivity
 *
 * @package Apps\Insight\Php\Entities
 *
 */
class ScoreCard extends AbstractEntity
{
    use WebinyTrait;

    protected static $entityCollection = 'InsightScoreCard';

    public function __construct()
    {
        parent::__construct();

        $this->index(new SingleIndex('user', 'user'));
        $this->index(new SingleIndex('rule', 'rule'));
        $this->index(new CompoundIndex('user-rule', ['user', 'rule'], false, true));

        $user = '\Apps\Webiny\Php\Entities\User';
        $this->attr('user')->many2one()->setEntity($user);

        $rule = '\Apps\Insight\Php\Entities\Rule';
        $this->attr('rule')->many2one()->setEntity($rule);

        $this->attr('score')->integer()->setToArrayDefault();
        $this->attr('activities')->integer()->setToArrayDefault();
        $this->attr('lastActivity')->datetime()->setToArrayDefault();
        
        $this->api('GET', 'user/{user}', function(User $user){
            $scoreCard = $this->find(['user'=>$user->id], ['-score']);
            return $scoreCard->toArray('user.firstName,user.lastName,user.insight,rule.name,rule.description,score,activities,lastActivity');
        });
    }

    /**
     * Returns level based on the give score.
     *
     * @param integer $score Score
     *
     * @return int
     */
    public function getLevel($score)
    {
        $level = 0;

        do {
            $level++;
        } while ((pow(2, $level)) < $score);

        return $level;
    }
}