<?php

namespace Apps\Insight\Php\Services;

use Apps\Webiny\Php\Lib\Api\ApiContainer;
use Apps\Webiny\Php\Lib\Services\AbstractService;

class Eye extends AbstractService
{
    protected function serviceApi(ApiContainer $api)
    {
        /**
         * @api.name Insight Eye - tracks users based on the triggered rules.
         * @api.description Glance service is triggered by the Eye class which calls the service once a user triggers a certain rule.
         */
        $api->post('glance', function () {
            $insight = new \Apps\Insight\Php\Lib\Eye();

            return $insight->glance($this->wRequest()->payload('rule'));
        })->setPublic();
    }
}