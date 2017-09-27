import React from 'react';
import Webiny from 'webiny';

/**
 * @i18n.namespace Insight.Backend.ScoreCard.Details
 */
class Details extends Webiny.Ui.View {

}

Details.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/insight/score-cards',
            url: '/user/' + Webiny.Router.getParams('id')
        };

        return (
            <Webiny.Ui.LazyLoad modules={['Data', 'View', 'Link', 'List', 'Filters']}>
                {(Ui) => (
                    <Ui.Data {...listProps}>
                        {({data}) => {
                            if (!data.length) {
                                return <Ui.List.Table.Empty/>
                            }

                            return (
                                <Ui.View.List>
                                    <Ui.View.Header
                                        description={this.i18n('User score card details')}
                                        title={this.i18n('Score Card / {firstName} {lastName}', {
                                            firstName: data[0].user.firstName,
                                            lastName: data[0].user.lastName
                                        })}>
                                        <Ui.Link type="default" align="right" route="Insight.ScoreCard.List">{this.i18n('Back')}</Ui.Link>
                                    </Ui.View.Header>
                                    <Ui.View.Body>
                                        <h2>
                                            {this.i18n('Level: {level} / Total score: {score}', {
                                                level: data[0].user.insight.level,
                                                score: data[0].user.insight.score
                                            })}
                                        </h2>
                                        <Ui.List.Table data={data}>
                                            <Ui.List.Table.Row>
                                                <Ui.List.Table.Field name="score" label={this.i18n('Score')} sort="score" align="center">
                                                    {({data}) => (
                                                        <h1>{data.score}</h1>
                                                    )}
                                                </Ui.List.Table.Field>
                                                <Ui.List.Table.Field
                                                    name="activities"
                                                    align="left"
                                                    label={this.i18n('Activities')}
                                                    sort="activities">
                                                    {({data}) => (
                                                        <div>
                                                            <strong>{this.i18n('Activities')}</strong>: {data.activities}<br/>
                                                            <strong>{this.i18n('Last activity on')}</strong>: <Ui.Filters.DateTime
                                                            value={data.lastActivity}/>
                                                        </div>

                                                    )}
                                                </Ui.List.Table.Field>
                                                <Ui.List.Table.Field
                                                    name="rule.name" align="left"
                                                    label={this.i18n('Rule')}
                                                    sort="rule.name">
                                                    {({data}) => (
                                                        <span>
                                                            <strong>{data.rule.name}</strong><br/>{data.rule.description}
                                                        </span>
                                                    )}
                                                </Ui.List.Table.Field>

                                            </Ui.List.Table.Row>
                                        </Ui.List.Table>
                                    </Ui.View.Body>
                                </Ui.View.List>
                            );
                        }}
                    </Ui.Data>
                )}
            </Webiny.Ui.LazyLoad>
        );
    }
};


export default Details;
