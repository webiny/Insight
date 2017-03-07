import Webiny from 'Webiny';
import Eye from './Eye';

class Module extends Webiny.Module {

    init() {
        this.name = 'Sauron';
        _.set(Webiny, 'Sauron.Plugins.Eye', Eye);
    }
}

export default Module;