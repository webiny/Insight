<?php

namespace Apps\Sauron\Php;

use Apps\Core\Php\Entities\User;
use Apps\Core\Php\PackageManager\App;

class Bootstrap extends \Apps\Core\Php\DevTools\LifeCycle\Bootstrap
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