import React from 'react';
import Webiny from 'webiny';
import List from './Views/List';
import Form from './Views/Form';

/**
 * @i18n.namespace Insight.Backend.Rules
 */
class Rules extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'insight';

        this.registerMenus(
            <Menu label={this.i18n('Marketing Tools')} icon="fa-bell">
                <Menu label={this.i18n('Insight')} role={role}>
                    <Menu label={this.i18n('Rules')} route="Insight.Rule.List"/>
                </Menu>
            </Menu>
        );

        this.registerRoutes(
            new Webiny.Route('Insight.Rule.List', '/insight/rules', List, 'Insight - Rules').setRole(role),
            new Webiny.Route('Insight.Rule.Create', '/insight/rule', Form, 'Insight - New Rule').setRole(role),
            new Webiny.Route('Insight.Rule.Edit', '/insight/rule/:id', Form, 'Insight - Edit Rule').setRole(role)
        );
    }
}

export default Rules;