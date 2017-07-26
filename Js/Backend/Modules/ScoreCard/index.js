import Webiny from 'webiny';
import List from './Views/List';
import Details from './Views/Details';

class ScoreCard extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'sauron';

        this.registerMenus(
            new Menu('Marketing Tools', [
                new Menu('Sauron', [
                    new Menu('Score Card', 'Sauron.ScoreCard.List')
                ]).setRole(role)
            ], 'icon-bell')
        );

        this.registerRoutes(
            new Webiny.Route('Sauron.ScoreCard.List', '/sauron/score-card', List, 'Sauron - Score Card').setRole(role),
            new Webiny.Route('Sauron.ScoreCard.Details', '/sauron/score-card/:id', Details, 'Sauron - Score Card').setRole(role)
        );
    }
}

export default ScoreCard;