import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-enterprise/chartsModule";
import "ag-grid-enterprise";

class OtherProps extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Athlete",
                    field: "athlete"
                },
                {
                    headerName: "Sport",
                    field: "sport",
                    chartDataType: "category"
                },
                {
                    eaderName: "Age",
                    field: "age",
                    type: "numberColumn",
                    chartDataType: "series"
                },
                {
                    headerName: "Year",
                    field: "year",
                    type: "numberColumn",
                    chartDataType: "series"
                },
                {
                    headerName: "Date",
                    field: "date",
                    type: ["dateColumn", "nonEditableColumn"],
                    width: 200
                },
                {
                    headerName: "Medals",
                    groupId: "medalsGroup",
                    children: [
                        {
                            headerName: "Total",
                            field: "total",
                            type: "medalColumn",
                            columnGroupShow: "closed"
                        },
                        {
                            headerName: "Gold",
                            field: "gold",
                            type: "medalColumn",
                            columnGroupShow: "open"
                        },
                        {
                            headerName: "Silver",
                            field: "silver",
                            type: "medalColumn",
                            columnGroupShow: "open"
                        },
                        {
                            headerName: "Bronze",
                            field: "bronze",
                            type: "medalColumn",
                            columnGroupShow: "open"
                        }
                    ]
                }
            ],

            defaultColDef: {
                width: 150,
                editable: true,
                filter: "agTextColumnFilter",
                resizable: true,
                enableRowGroup: true,
                enablePivot: true
            },

            defaultColGroupDef: { marryChildren: true },

            columnTypes: {
                numberColumn: {
                    width: 83,
                    filter: "agNumberColumnFilter"
                },
                medalColumn: {
                    width: 100,
                    columnGroupShow: "open",
                    filter: false
                },
                nonEditableColumn: { editable: false },

                dateColumn: {
                    filter: "agDateColumnFilter"
                }
            },
            icons: {
                clipboardCopy: '<i class="far fa-copy"/>',
                clipboardPaste: '<i class="fa fa-paste"/>'
            },
            rowData: null,
        };

        this.child = React.createRef();
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        const httpRequest = new XMLHttpRequest();

        httpRequest.open(
            "GET",
            "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
        );
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                updateData(JSON.parse(httpRequest.responseText));
            }
        };

        const updateData = data => {
            this.setState({ rowData: data });
        };
    };

    changeLanguage(event) {
        var lang = event.target.value;
        this.setState({ language: lang });
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{ height: "700px", width: "55%" }}
            >
                <AgGridReact
                    key={this.state.language}
                    columnDefs={this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    defaultColGroupDef={this.state.defaultColGroupDef}
                    columnTypes={this.state.columnTypes}
                    rowData={this.state.rowData}
                    floatingFilter={true}
                    enableRangeSelection
                    enableCharts
                    onGridReady={this.onGridReady}
                    enableSorting
                    pagination={true}
                    paginationPageSize={20}
                    icons={this.state.icons}
                    sideBar={true}
                    getContextMenuItems={this.getContextMenuItems}
                />
            </div>
        );
    }
}

export default OtherProps;
