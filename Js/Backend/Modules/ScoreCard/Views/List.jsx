import React from 'react';
import _ from 'lodash';
import Webiny from 'webiny';

/**
 * @i18n.namespace Insight.Backend.ScoreCard.List
 */
class List extends Webiny.Ui.View {

}

List.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/webiny/users',
            fields: 'id,enabled,firstName,lastName,email,createdOn,gravatar,insight',
            sort: '-insight.score',
            connectToRouter: true,
            searchFields: 'firstName,lastName,email'
        };


        return (
            <Webiny.Ui.LazyLoad modules={['View', 'List', 'Input']}>
                {(Ui) => (
                    <Ui.View.List>
                        <Ui.View.Header
                            title={this.i18n('Score Card')}
                            description={this.i18n('Overview of user ranks based on their Insight score.')}/>
                        <Ui.View.Body>
                            <Ui.List {...listProps}>
                                <Ui.List.FormFilters>
                                    {({apply}) => (
                                        <Ui.Input
                                            name="_searchQuery"
                                            placeholder={this.i18n('Search by name or email')}
                                            onEnter={apply()}/>
                                    )}
                                </Ui.List.FormFilters>
                                <Ui.List.Table>
                                    <Ui.List.Table.Row>
                                        <Ui.List.Table.GravatarField name="gravatar"/>
                                        <Ui.List.Table.Field
                                            name="firstName"
                                            label={this.i18n('First Name')}
                                            sort="firstName"
                                            route="Insight.ScoreCard.Details">
                                            {({data}) => (
                                                <span>
                                                    <strong>{data.firstName} {data.lastName}</strong>
                                                    <br/>{this.i18n('Level: {level}', {level: _.get(data.insight, 'level', 1)})}
                                                </span>
                                            )}
                                        </Ui.List.Table.Field>
                                        <Ui.List.Table.Field name="email" sort="email" label={this.i18n('Email')}/>
                                        <Ui.List.Table.Field name="insight.score" sort="score" label={this.i18n('Score')} align="center"/>
                                        <Ui.List.Table.Actions>
                                            <Ui.List.Table.EditAction route="Insight.ScoreCard.Details"/>
                                            <Ui.List.Table.DeleteAction/>
                                        </Ui.List.Table.Actions>
                                    </Ui.List.Table.Row>
                                    <Ui.List.Table.Footer/>
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