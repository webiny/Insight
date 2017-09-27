import React from 'react';
import Webiny from 'webiny';
import List from './Views/List';
import Details from './Views/Details';

/**
 * @i18n.namespace Insight.Backend.ScoreCard
 */
class ScoreCard extends Webiny.App.Module {

    init() {
        this.name = 'Rules';
        const Menu = Webiny.Ui.Menu;
        const role = 'insight';

        this.registerMenus(
            <Menu label={Webiny.I18n('Marketing Tools')} icon="fa-bell">
                <Menu label={Webiny.I18n('Insight')} role={role}>
                    <Menu label={Webiny.I18n('Score Card')} route="Insight.ScoreCard.List"/>
                </Menu>
            </Menu>
        );

        this.registerRoutes(
            new Webiny.Route('Insight.ScoreCard.List', '/insight/score-card', List, 'Insight - Score Card').setRole(role),
            new Webiny.Route('Insight.ScoreCard.Details', '/insight/score-card/:id', Details, 'Insight - Score Card').setRole(role)
        );
    }
}

export default ScoreCard;