import Webiny from 'webiny';
import Rules from './Modules/Rules';
import ScoreCard from './Modules/ScoreCard';

class SauronBackend extends Webiny.App {
    constructor() {
        super('Sauron.Backend');
        this.modules = [
            new Rules(this),
            new ScoreCard(this)
        ];

        this.beforeRender(() => {
            return Webiny.includeApp('Sauron.Shared').then(app => app.run());
        });
    }
}

Webiny.registerApp(new SauronBackend());