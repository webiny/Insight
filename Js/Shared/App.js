import Webiny from 'webiny';
import Plugins from './Modules/Plugins';

class InsightShared extends Webiny.App {
    constructor() {
        super('Insight.Shared');
        this.modules = [
            new Plugins(this)
        ];
    }
}

Webiny.registerApp(new InsightShared());