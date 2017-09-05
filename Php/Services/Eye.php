<?php

namespace Apps\Insight\Php\Services;

use Apps\Webiny\Php\Lib\Services\AbstractService;

class Eye extends AbstractService
{
    public function __construct()
    {
        /**
         * @api.name Insight Eye - tracks users based on the triggered rules.
         * @api.description Glance service is triggered by the Eye class which calls the service once a user triggers a certain rule.
         */
        $this->api('POST', 'glance', function () {
            $insight = new \Apps\Insight\Php\Lib\Eye();

            return $insight->glance($this->wRequest()->payload('rule'));
        })->setPublic();
    }
}