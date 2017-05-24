<?php
namespace Apps\Sauron\Php\Entities;

use Apps\Webiny\Php\DevTools\Entity\AbstractEntity;
use Apps\Webiny\Php\DevTools\WebinyTrait;
use Webiny\Component\Mongo\Index\SingleIndex;

/**
 * Class Rule
 *
 * @property string  $id
 * @property string  $name
 * @property string  $slug
 * @property integer $score
 *
 * @package Apps\Sauron\Php\Entities
 *
 */
class Rule extends AbstractEntity
{
    use WebinyTrait;

    protected static $entityCollection = 'SauronRule';

    public function __construct()
    {
        parent::__construct();

        $this->index(new SingleIndex('slug', 'slug'));

        $this->attr('name')->char()->setToArrayDefault();
        $this->attr('slug')->char()->setToArrayDefault()->setValidators('unique')->setValidationMessages([
            'unique' => 'A rule with the same slug already exists.'
        ])->setToArrayDefault();
        $this->attr('score')->integer()->setToArrayDefault();
        $this->attr('description')->char()->setToArrayDefault();
    }
}