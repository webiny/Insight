<?php
namespace Apps\Sauron\Php;

use Apps\Core\Php\DevTools\AbstractBootstrap;
use Apps\Core\Php\Entities\User;
use Apps\Core\Php\PackageManager\App;

class Bootstrap extends AbstractBootstrap
{
    public function run(App $app)
    {
        User::onExtend(function(User $user){
            // add the additional attributes
            // contains `score` and `level`
            $user->attr('sauron')->object();
        });
    }
}