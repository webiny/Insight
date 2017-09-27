import React from 'react';
import Webiny from 'webiny';

/**
 * @i18n.namespace Insight.Backend.Rules.List
 */
class List extends Webiny.Ui.View {
}

List.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/insight/rules',
            fields: '*',
            searchFields: 'name',
            connectToRouter: true
        };

        const searchProps = {
            placeholder: this.i18n('Search by name'),
            name: '_searchQuery'
        };

        return (
            <Webiny.Ui.LazyLoad modules={['View', 'Grid', 'Link', 'Icon', 'List', 'Input']}>
                {(Ui) => (
                    <Ui.View.List>
                        <Ui.View.Header title={this.i18n('Rules')}>
                            <Ui.Link type="primary" align="right" route="Insight.Rule.Create">
                                <Ui.Icon icon="icon-plus-circled"/>
                                {this.i18n('Create new Rule')}
                            </Ui.Link>
                        </Ui.View.Header>
                        <Ui.View.Body>
                            <Ui.List {...listProps}>
                                <Ui.List.FormFilters>
                                    {({apply, reset}) => (
                                        <Ui.Grid.Row>
                                            <Ui.Grid.Col all={12}>
                                                <Ui.Input {...searchProps} onEnter={apply()}/>
                                            </Ui.Grid.Col>
                                        </Ui.Grid.Row>
                                    )}
                                </Ui.List.FormFilters>
                                <Ui.List.Table>
                                    <Ui.List.Table.Row>
                                        <Ui.List.Table.Field name="name" align="left" label={this.i18n('Name')} sort="name" route="Insight.Rule.Edit">
                                            {({data}) => (
                                                <span>
                                                    <strong>{data.name}</strong><br/>{data.description}
                                                </span>
                                            )}
                                        </Ui.List.Table.Field>
                                        <Ui.List.Table.Field name="slug" align="left" label={this.i18n('Slug')} sort="slug"/>
                                        <Ui.List.Table.Field name="score" label={this.i18n('Score')} sort="score" align="center"/>
                                        <Ui.List.Table.TimeAgoField name="createdOn" align="left" label={this.i18n('Created')} sort="createdOn"/>
                                        <Ui.List.Table.Actions>
                                            <Ui.List.Table.EditAction route="Insight.Rule.Edit"/>
                                            <Ui.List.Table.DeleteAction/>
                                        </Ui.List.Table.Actions>
                                    </Ui.List.Table.Row>
                                </Ui.List.Table>
                                <Ui.List.Pagination/>
                            </Ui.List>
                        </Ui.View.Body>
                    </Ui.View.List>
                )}
            </Webiny.Ui.LazyLoad>
        );
    }
};

export default List;