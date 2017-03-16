import Webiny from 'Webiny';

class Eye extends Webiny.Ui.Component {
    glance(rule) {
        if (Webiny.Model.get('User')) {
            const api = new Webiny.Api.Endpoint('/services/sauron/eye');
            return api.post('glance', {'rule': rule});
        }
    }
}

export default Eye;