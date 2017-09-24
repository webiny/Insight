<?php

namespace Apps\Insight\Php\Entities;

use Apps\Webiny\Php\Lib\Entity\AbstractEntity;
use Apps\Webiny\Php\Lib\Entity\Indexes\IndexContainer;
use Webiny\Component\Mongo\Index\CompoundIndex;
use Webiny\Component\Mongo\Index\SingleIndex;

/**
 * Class Rule
 *
 * @property string  $id
 * @property string  $name
 * @property string  $slug
 * @property integer $score
 */
class Rule extends AbstractEntity
{
    protected static $classId = 'Insight.Entities.Rule';
    protected static $collection = 'InsightRule';

    public function __construct()
    {
        parent::__construct();

        $this->attr('name')->char()->setToArrayDefault();
        $this->attr('slug')->char()->setToArrayDefault()->setValidators('unique')->setValidationMessages([
            'unique' => 'A rule with the same slug already exists.'
        ])->setToArrayDefault();
        $this->attr('score')->integer()->setToArrayDefault();
        $this->attr('description')->char()->setToArrayDefault();
    }

    protected static function entityIndexes(IndexContainer $indexes)
    {
        parent::entityIndexes($indexes);
        $indexes->add(new CompoundIndex('slug', ['slug', 'deletedOn'], false, true));
    }
}