import _ from 'lodash';
import Webiny from 'Webiny';

class Eye extends Webiny.Ui.Component {
    glance(rule) {
        let user = Webiny.Model.get('User');
        if (_.get(user, 'id', false)) {
            const api = new Webiny.Api.Endpoint('/services/sauron/eye');
            return api.post('glance', {'rule': rule});
        }
    }
}

export default Eye;