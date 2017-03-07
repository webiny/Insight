import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;

class RuleForm extends Webiny.Ui.View {

    constructor(props) {
        super(props);
    }
}

RuleForm.defaultProps = {
    renderer() {
        const formProps = {
            api: '/entities/sauron/rule',
            fields: '*',
            connectToRouter: true,
            onSubmitSuccess: 'Sauron.Rule.List',
            onCancel: 'Sauron.Rule.List'
        };

        return (
            <Ui.Form{...formProps}>
                {(model, container) => (
                    <Ui.View.Form>
                        <Ui.View.Header title="Rule"/>

                        <Ui.View.Body>
                            <Ui.Grid.Row>
                                <Ui.Grid.Col all={12}>

                                    <Ui.Form.Fieldset title="Rule"/>

                                    <Ui.Input label="Name" name="name" validate="required"/>
                                    <Ui.Input label="Slug" name="slug" validate="required"/>
                                    <Ui.Input label="Score" name="score" validate="required,number"/>
                                    <Ui.Textarea label="Description" name="description"/>

                                </Ui.Grid.Col>

                            </Ui.Grid.Row>
                        </Ui.View.Body>

                        <Ui.View.Footer>
                            <Ui.Button type="default" onClick={container.cancel} label="Go back"/>
                            <Ui.Button type="primary" onClick={container.submit} label="Save rule" align="right"/>
                        </Ui.View.Footer>
                    </Ui.View.Form>
                )}
            </Ui.Form>
        );
    }
};


export default RuleForm;
