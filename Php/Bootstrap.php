<?php

namespace Apps\Sauron\Php;

use Apps\Webiny\Php\Entities\User;
use Apps\Webiny\Php\AppManager\App;

class Bootstrap extends \Apps\Webiny\Php\DevTools\LifeCycle\Bootstrap
{
    public function run(App $app)
    {
        parent::run($app);
        User::onExtend(function (User $user) {
            // add the additional attributes
            // contains `score` and `level`
            $user->attr('sauron')->object();
        });
    }
}