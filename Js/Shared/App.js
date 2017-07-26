import Webiny from 'webiny';
import Plugins from './Modules/Plugins';

class SauronShared extends Webiny.App {
    constructor() {
        super('Sauron.Shared');
        this.modules = [
            new Plugins(this)
        ];
    }
}

Webiny.registerApp(new SauronShared());