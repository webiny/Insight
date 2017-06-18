import Webiny from 'Webiny';

class Details extends Webiny.Ui.View {

}

Details.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/sauron/score-cards',
            url: '/user/' + Webiny.Router.getParams('id')
        };

        return (
            <Webiny.Ui.LazyLoad modules={['Data', 'View', 'Link', 'List', 'Filters']}>
                {(Ui) => (
                    <Ui.Data {...listProps}>
                        {data => {
                            if(!data.length) {
                                return <Ui.List.Table.Empty/>
                            }

                            return (
                                <Ui.View.List>
                                    <Ui.View.Header
                                        title={'Score Card/' + data[0].user.firstName + ' ' + data[0].user.lastName}
                                        description="User score card details">
                                        <Ui.Link type="default" align="right" route="Sauron.ScoreCard.List">Back</Ui.Link>
                                    </Ui.View.Header>
                                    <Ui.View.Body>
                                        <h2>Level: {data[0].user.sauron.level} / Total score: {data[0].user.sauron.score}</h2>
                                        <Ui.List.Table data={data}>
                                            <Ui.List.Table.Row>
                                                <Ui.List.Table.Field name="score" label="Score" sort="score" align="center">
                                                    {data => (
                                                        <h1>{data.score}</h1>
                                                    )}
                                                </Ui.List.Table.Field>
                                                <Ui.List.Table.Field name="activities" align="left" label="Activities" sort="activities">
                                                    {data => (
                                                        <div>
                                                            <strong>Activities</strong>: {data.activities}<br/>
                                                            <strong>Last activity on</strong>: <Ui.Filters.DateTime value={data.lastActivity}/>
                                                        </div>

                                                    )}
                                                </Ui.List.Table.Field>
                                                <Ui.List.Table.Field name="rule.name" align="left" label="Rule" sort="rule.name">
                                                    {data => (
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
