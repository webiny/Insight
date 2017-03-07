import Webiny from 'Webiny';
import RuleList from './Views/RuleList';
import RuleForm from './Views/RuleForm';

class Main extends Webiny.Module {

    init() {
        this.name = 'Main';
        const Menu = Webiny.Ui.Menu;
        const role = 'sauron';

        this.registerMenus(
            new Menu('Sauron', 'Sauron.Rule.List', 'fa-eye').setRole(role)
        );

        this.registerRoutes(
            new Webiny.Route('Sauron.Rule.List', '/sauron/rules', RuleList, 'Sauron - Rules').setRole(role),
            new Webiny.Route('Sauron.Rule.Create', '/sauron/rule', RuleForm, 'Sauron - New Rule').setRole(role),
            new Webiny.Route('Sauron.Rule.Edit', '/sauron/rule/:id', RuleForm, 'Sauron - Edit Rule').setRole(role)
        );
    }
}

export default Main;