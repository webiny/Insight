import Webiny from 'Webiny';
import Main from './Modules/Main';

class SauronBackend extends Webiny.App {
    constructor() {
        super('Sauron.Backend');
        this.modules = [
            new Main(this)
        ];

        this.beforeRender(() => {
            return Webiny.includeApp('Sauron.Shared').then(app => app.run());
        });
    }


}

Webiny.registerApp(new SauronBackend());