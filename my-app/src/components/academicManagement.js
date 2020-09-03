import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { withRouter } from "react-router-dom";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import TabFunction from "../components/tabFunction";
import { getCookie } from "../Utils/dataGetCookie";
import { Axios } from "../Utils/Axios";
import Header from "../components/header";
import "../App.css";
class academicMangement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHistory: [],
    };
  }
  componentDidMount() {
    (async () => {
      let data = {
        user: getCookie("username"),
      };
      let dataList = await Axios(
        "post",
        "/Api/saveTheQuiz/listHistoryTest",
        data
      );
      console.log(dataList.data);
      this.setState({
        dataHistory: dataList.data,
      });
    })();
  }
  render() {
    const columns = [
      {
        dataField: "examCode",
        text: "Mã đề",
        headerStyle: { height: "20px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "numberQuestion",
        text: "Số câu",
        headerStyle: { width: "500px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "chaptersTest",
        text: "Kiến thức",
        headerStyle: { width: "200px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
        formatter: (cell, row, rowIndex) => {
          console.log(cell);
          return cell.map((data, index) => {
            return (
              <span key={index}>
                {data}
                <br />
              </span>
            );
          });
        },
      },
      {
        dataField: "timeTest",
        text: "Thời gian (Phút)",
        headerStyle: { width: "500px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "levelTest",
        text: "Độ khó",
        headerStyle: { width: "500px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "testScores",
        text: "Điểm",
        headerStyle: { width: "500px", fontsize: 20 + "px" },
        headerAlign: "center",
        align: "center",
      },
      {
        dataField: "dateTest",
        text: "Thời gian thi",
        headerStyle: { width: "500px".f },
        headerAlign: "center",
        align: "center",
      },
    ];

    const selectRow = {
      mode: "checkbox",
      clickToSelect: false,
      headerStyle: { width: "500px" },
      headerAlign: "center",
    };
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        (async () => {
          let user = getCookie("username");
          let data = await Axios(
            "get",
            "/Api/saveTheQuiz/showEvaluate/" + `${user}` + "/" + `${row._id}`
          );
          sessionStorage.dataChuong = JSON.stringify(data.data[0].chaptersTest);
          sessionStorage.dataSave = JSON.stringify(data.data[0]);
          this.props.history.push(
            "/academicManagement/" +
              `${getCookie("username")}` +
              "/" +
              `${row._id}`
          );
        })();
      },
    };
    let { dataHistory } = this.state;
    console.log(dataHistory);
    return (
      <div>
        <Header />
        <div className="container-fluid boder-right">
          <div className="row">
            <TabFunction />
            <div className="col-9 border-content">
              <div className="text-center mt-4 mb-4 title-mangement">
                <h3>QUẢN LÍ HỌC TẬP</h3>
              </div>
              <ToolkitProvider
                keyField="examCode"
                data={dataHistory}
                columns={columns}
                exportCSV={{ onlyExportSelection: true, exportAll: false }}
              >
                {(props) => (
                  <div>
                    <BootstrapTable
                      {...props.baseProps}
                      // selectRow={selectRow}
                      pagination={paginationFactory()}
                      rowEvents={rowEvents}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(academicMangement);
