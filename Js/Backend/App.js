import Webiny from 'webiny';
import Rules from './Modules/Rules';
import ScoreCard from './Modules/ScoreCard';

class InsightBackend extends Webiny.App {
    constructor() {
        super('Insight.Backend');
        this.modules = [
            new Rules(this),
            new ScoreCard(this)
        ];

        this.beforeRender(() => {
            return Webiny.includeApp('Insight.Shared').then(app => app.run());
        });
    }
}

Webiny.registerApp(new InsightBackend());