import _ from 'lodash';
import Webiny from 'webiny';
import Eye from './Eye';

class Module extends Webiny.App.Module {

    init() {
        this.name = 'Insight';
        _.set(Webiny, 'Insight.Plugins.Eye', Eye);
    }
}

export default Module;