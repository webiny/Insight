import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
const Table = Ui.List.Table;

class List extends Webiny.Ui.View {

}

List.defaultProps = {

    renderer: function render() {
        const listProps = {
            api: '/entities/core/users',
            fields: 'id,enabled,firstName,lastName,email,createdOn,gravatar,sauron',
            sort: '-sauron.score',
            connectToRouter: true,
            searchFields: 'firstName,lastName,email'
        };


        return (
            <Ui.View.List>
                <Ui.View.Header
                    title="Score Card"
                    description="Overview of user ranks based on their Sauron score."/>
                <Ui.View.Body>
                    <Ui.List {...listProps}>
                        <Ui.List.FormFilters>
                            {(applyFilters) => (
                                <Ui.Input
                                    name="_searchQuery"
                                    placeholder="Search by name or email"
                                    onEnter={applyFilters()}/>
                            )}
                        </Ui.List.FormFilters>
                        <Table>
                            <Table.Row>
                                <Table.GravatarField name="gravatar"/>
                                <Table.Field name="firstName" label="First Name" sort="firstName" route="Sauron.ScoreCard.Details">
                                    {data => (
                                        <span>
                                            <strong>{data.firstName} {data.lastName}</strong>
                                            <br/>Level: {_.get(data.sauron, 'level', 1)}
                                        </span>
                                    )}
                                </Table.Field>
                                <Table.Field name="email" sort="email" label="Email"/>
                                <Table.Field name="sauron.score" sort="score" label="Score" align="center"/>

                                <Table.Actions>
                                    <Table.EditAction route="Sauron.ScoreCard.Details"/>
                                    <Table.DeleteAction/>
                                </Table.Actions>
                            </Table.Row>
                            <Table.Footer/>
                        </Table>
                        <Ui.List.Pagination/>
                    </Ui.List>
                </Ui.View.Body>
            </Ui.View.List>
        );
    }
};

export default List;