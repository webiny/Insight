import Webiny from 'Webiny';
const Ui = Webiny.Ui.Components;
const Table = Ui.List.Table;

class RuleList extends Webiny.Ui.View {
    constructor(props) {
        super(props);
    }
}

RuleList.defaultProps = {

    renderer() {
        const listProps = {
            api: '/entities/sauron/rule',
            fields: '*',
            searchFields: 'name',
            connectToRouter: true
        };

        const searchProps = {
            placeholder: 'Search by name',
            name: '_searchQuery'
        };

        return (
            <Ui.View.List>
                <Ui.View.Header title="Rules">
                    <Ui.Link type="primary" align="right" route="Sauron.Rule.Create">
                        <Ui.Icon icon="icon-plus-circled"/>
                        Create new Rule
                    </Ui.Link>
                </Ui.View.Header>

                <Ui.View.Body>
                    <Ui.List {...listProps}>

                        <Ui.List.FormFilters>
                            {(applyFilters, resetFilters) => (
                                <Ui.Grid.Row>
                                    <Ui.Grid.Col all={12}>
                                        <Ui.Input {...searchProps} onEnter={applyFilters()}/>
                                    </Ui.Grid.Col>
                                </Ui.Grid.Row>
                            )}
                        </Ui.List.FormFilters>

                        <Table>
                            <Table.Row>
                                <Table.Field name="name" align="left" label="Name" sort="name" route="Sauron.Rule.Edit">
                                    {data => (
                                        <span>
                                            <strong>{data.name}</strong><br/>{data.description}
                                        </span>
                                    )}
                                </Table.Field>
                                <Table.Field name="slug" align="left" label="Slug" sort="slug"/>
                                <Table.Field name="score" align="left" label="Score" sort="score" align="center"/>
                                <Table.TimeAgoField name="createdOn" align="left" label="Created" sort="createdOn"/>

                                <Table.Actions>
                                    <Table.EditAction route="Sauron.Rule.Edit"/>
                                    <Table.DeleteAction/>
                                </Table.Actions>
                            </Table.Row>
                        </Table>

                        <Ui.List.Pagination/>
                    </Ui.List>
                </Ui.View.Body>
            </Ui.View.List>
        );
    }
};

export default RuleList;