import React from 'react';
import Webiny from 'webiny';
import List from './Views/List';
import Form from './Views/Form';

class Rules extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'sauron';

        this.registerMenus(
            <Menu label="Marketing Tools" icon="fa-bell">
                <Menu label="Sauron" role={role}>
                    <Menu label="Rules" route="Sauron.Rule.List"/>
                </Menu>
            </Menu>
        );

        this.registerRoutes(
            new Webiny.Route('Sauron.Rule.List', '/sauron/rules', List, 'Sauron - Rules').setRole(role),
            new Webiny.Route('Sauron.Rule.Create', '/sauron/rule', Form, 'Sauron - New Rule').setRole(role),
            new Webiny.Route('Sauron.Rule.Edit', '/sauron/rule/:id', Form, 'Sauron - Edit Rule').setRole(role)
        );
    }
}

export default Rules;