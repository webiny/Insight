<?php

namespace Apps\Insight\Php;

use Apps\Webiny\Php\Entities\User;

class App extends \Apps\Webiny\Php\Lib\Apps\App
{
    public function bootstrap()
    {
        parent::bootstrap();
        User::onExtend(function (User $user) {
            // add the additional attributes
            // contains `score` and `level`
            $user->attr('insight')->object();
        });
    }
}