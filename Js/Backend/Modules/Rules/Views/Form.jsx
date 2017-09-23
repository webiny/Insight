import React from 'react';
import Webiny from 'webiny';

class Form extends Webiny.Ui.View {

}

Form.defaultProps = {
    renderer() {
        const formProps = {
            api: '/entities/insight/rules',
            fields: '*',
            connectToRouter: true,
            onSubmitSuccess: 'Insight.Rule.List',
            onCancel: 'Insight.Rule.List'
        };

        return (
            <Webiny.Ui.LazyLoad modules={['Form', 'View', 'Grid', 'Section', 'Input', 'Textarea', 'Button']}>
                {(Ui) => (
                    <Ui.Form {...formProps}>
                        {({form}) => (
                            <Ui.View.Form>
                                <Ui.View.Header title="Rule"/>
                                <Ui.View.Body>
                                    <Ui.Grid.Row>
                                        <Ui.Grid.Col all={12}>
                                            <Ui.Section title="Rule"/>
                                            <Ui.Input label="Name" name="name" validate="required"/>
                                            <Ui.Input label="Slug" name="slug" validate="required"/>
                                            <Ui.Input label="Score" name="score" validate="required,number"/>
                                            <Ui.Textarea label="Description" name="description"/>
                                        </Ui.Grid.Col>
                                    </Ui.Grid.Row>
                                </Ui.View.Body>
                                <Ui.View.Footer>
                                    <Ui.Button type="default" onClick={form.cancel} label="Go back"/>
                                    <Ui.Button type="primary" onClick={form.submit} label="Save rule" align="right"/>
                                </Ui.View.Footer>
                            </Ui.View.Form>
                        )}
                    </Ui.Form>
                )}
            </Webiny.Ui.LazyLoad>
        );
    }
};


export default Form;
