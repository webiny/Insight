import React from 'react';
import Webiny from 'webiny';
import List from './Views/List';
import Details from './Views/Details';

class ScoreCard extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'sauron';

        this.registerMenus(
            <Menu label="Marketing Tools" icon="fa-bell">
                <Menu label="Sauron" role={role}>
                    <Menu label="Score Card" route="Sauron.ScoreCard.List"/>
                </Menu>
            </Menu>
        );

        this.registerRoutes(
            new Webiny.Route('Sauron.ScoreCard.List', '/sauron/score-card', List, 'Sauron - Score Card').setRole(role),
            new Webiny.Route('Sauron.ScoreCard.Details', '/sauron/score-card/:id', Details, 'Sauron - Score Card').setRole(role)
        );
    }
}

export default ScoreCard;