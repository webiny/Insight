import Webiny from 'webiny';
import List from './Views/List';
import Form from './Views/Form';

class Rules extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'sauron';

        this.registerMenus(
            new Menu('Marketing Tools', [
                new Menu('Sauron', [
                    new Menu('Rules', 'Sauron.Rule.List')
                ]).setRole(role)
            ], 'icon-bell')
        );

        this.registerRoutes(
            new Webiny.Route('Sauron.Rule.List', '/sauron/rules', List, 'Sauron - Rules').setRole(role),
            new Webiny.Route('Sauron.Rule.Create', '/sauron/rule', Form, 'Sauron - New Rule').setRole(role),
            new Webiny.Route('Sauron.Rule.Edit', '/sauron/rule/:id', Form, 'Sauron - Edit Rule').setRole(role)
        );
    }
}

export default Rules;