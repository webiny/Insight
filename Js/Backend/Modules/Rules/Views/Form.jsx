import React from 'react';
import Webiny from 'webiny';

/**
 * @i18n.namespace Insight.Backend.Rules.Form
 */
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
                                <Ui.View.Header title={this.i18n('Rule')}/>
                                <Ui.View.Body>
                                    <Ui.Grid.Row>
                                        <Ui.Grid.Col all={12}>
                                            <Ui.Section title={this.i18n('Rule')}/>
                                            <Ui.Input label={this.i18n('Name')} name="name" validate="required"/>
                                            <Ui.Input label={this.i18n('Slug')} name="slug" validate="required"/>
                                            <Ui.Input label={this.i18n('Score')} name="score" validate="required,number"/>
                                            <Ui.Textarea label={this.i18n('Description')} name="description"/>
                                        </Ui.Grid.Col>
                                    </Ui.Grid.Row>
                                </Ui.View.Body>
                                <Ui.View.Footer>
                                    <Ui.Button type="default" onClick={form.cancel} label={this.i18n('Go back')}/>
                                    <Ui.Button type="primary" onClick={form.submit} label={this.i18n('Save rule')} align="right"/>
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
