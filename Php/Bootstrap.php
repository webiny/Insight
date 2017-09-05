<?php

namespace Apps\Insight\Php;

use Apps\Webiny\Php\Entities\User;
use Apps\Webiny\Php\Lib\Apps\App;

class Bootstrap extends \Apps\Webiny\Php\Lib\LifeCycle\Bootstrap
{
    public function run(App $app)
    {
        parent::run($app);
        User::onExtend(function (User $user) {
            // add the additional attributes
            // contains `score` and `level`
            $user->attr('insight')->object();
        });
    }
}