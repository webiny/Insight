<?php

namespace Apps\Sauron\Php\Services;

use Apps\Webiny\Php\DevTools\Services\AbstractService;
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
            $sauron = new \Apps\Sauron\Php\Lib\Eye();

            return $sauron->glance($this->wRequest()->payload('rule'));
        })->setPublic();
    }
}