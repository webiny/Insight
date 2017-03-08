import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
const Table = Ui.List.Table;

class Details extends Webiny.Ui.View {

    constructor(props) {
        super(props);
    }
}

Details.defaultProps = {
    renderer() {
        const listProps = {
            api: '/entities/sauron/score-card',
            url: '/user/' + Webiny.Router.getParams('id')
        };

        return (
            <Ui.Data ui="stats" {...listProps}>
                {data => (
                    <Ui.View.List>
                        <Ui.View.Header
                            title={'Score Card/'+data[0].user.firstName+' '+data[0].user.lastName}
                            description="User score card details">
                            <Ui.Link type="default" align="right" route="Sauron.ScoreCard.List">Back</Ui.Link>
                        </Ui.View.Header>
                        <Ui.View.Body>
                            <h2>Level: {data[0].user.sauron.level} / Total score: {data[0].user.sauron.score}</h2>
                            <Table data={data}>
                                <Table.Row>
                                    <Table.Field name="score" align="left" label="Score" sort="score" align="center">
                                        {data => (
                                            <h1>{data.score}</h1>
                                        )}
                                    </Table.Field>
                                    <Table.Field name="activities" align="left" label="Activities" sort="activities">
                                        {data => (
                                            <div>
                                                <strong>Activities</strong>: {data.activities}<br/>
                                                <strong>Last activity on</strong>: <Ui.Filters.DateTime value={data.lastActivity}/>
                                            </div>

                                        )}
                                    </Table.Field>
                                    <Table.Field name="rule.name" align="left" label="Rule" sort="rule.name">
                                        {data => (
                                            <span>
                                            <strong>{data.rule.name}</strong><br/>{data.rule.description}
                                        </span>
                                        )}
                                    </Table.Field>

                                </Table.Row>
                            </Table>
                        </Ui.View.Body>
                    </Ui.View.List>
                )}
            </Ui.Data>
        );
    }
};


export default Details;
