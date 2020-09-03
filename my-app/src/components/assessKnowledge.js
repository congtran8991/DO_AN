import React, { Component } from "react";
//import { Line } from "react-chartjs-2";
import TabFunction from "../components/tabFunction";
import Header from "../components/header";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { bindActionCreators } from "redux";
import { Redirect, Link } from "react-router-dom";
import * as appActions from "../actions/index";
import { getCookie } from "../Utils/dataGetCookie";
import { connect } from "react-redux";
import { Axios } from "../Utils/Axios";
import "../App.css";
charts(FusionCharts);

class assessKnowledge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exer_format: [],
      des_exer_format: [],
      dataChap: "",
    };
  }
  onChangeContent = (event) => {
    this.setState({
      dataChap: event.target.value,
    });
  };
  onClickContent = () => {
    console.log(this.state.dataChap);
    let { dataChap } = this.state;
    console.log(getCookie("username"));
    let data = {
      user: getCookie("username"),
      dataChap,
    };
    this.props.appActions.actShowChart(data);
  };
  nhanxet_danhgia = () => {
    //return this.props.ActDataShowChart;
    let { ActDataShowChart } = this.props;
    let phantram1 = 0;
    let phantram2 = 0;
    let phantram3 = 0;
    let dataTime = [];
    let dataoneTime = [];
    let datatwoTime = [];
    let dem = 0;
    let nhanxet1 = " ";
    let nhanxet2 = " ";
    if (ActDataShowChart.length != 0) {
      let endTime = new Date(
        ActDataShowChart[ActDataShowChart.length - 1].time_test
      ).getTime();
      let beginTime = new Date(
        ActDataShowChart[ActDataShowChart.length - 1].time_test
      );
      beginTime.setDate(beginTime.getDate() - 5);
      let beginfiveTime = new Date(beginTime).getTime();
      dataTime = ActDataShowChart.filter((timedata, index) => {
        let dataTime1 = new Date(timedata.time_test).getTime();
        return dataTime1 >= beginfiveTime && dataTime1 <= endTime;
      });

      // let begintenTime = beginTime.setDate(beginTime.getDate() - 10);
      let onelength = ActDataShowChart.length - dataTime.length - 1;
      if (onelength >= 0) {
        dem++;
        let endoneTime = new Date(
          ActDataShowChart[onelength].time_test
        ).getTime();
        let beginoneTime = new Date(ActDataShowChart[onelength].time_test);
        beginoneTime.setDate(beginoneTime.getDate() - 5);
        let beginonefiveTime = new Date(beginoneTime).getTime();
        dataoneTime = ActDataShowChart.filter((timedata, index) => {
          let dataoneTime = new Date(timedata.time_test);
          return dataoneTime >= beginonefiveTime && dataoneTime <= endoneTime;
        });
      }

      let twolength =
        ActDataShowChart.length - dataTime.length - dataoneTime.length - 1;
      if (twolength >= 0) {
        dem++;
        let endtwoTime = new Date(
          ActDataShowChart[twolength].time_test
        ).getTime();
        let begintwoTime = new Date(ActDataShowChart[twolength].time_test);
        begintwoTime.setDate(begintwoTime.getDate() - 5);
        let begintwofiveTime = new Date(begintwoTime).getTime();
        datatwoTime = ActDataShowChart.filter((timedata, index) => {
          let datatwoTime = new Date(timedata.time_test);
          return datatwoTime >= begintwofiveTime && datatwoTime <= endtwoTime;
        });
      }
      if (dem == 0) {
        nhanxet1 =
          "Thời gian làm bài test của bạn chưa đủ để chúng tôi đưa ra nhận xét về quá trình làm bài của bạn.";
      } else if (dem == 1) {
        dataTime.forEach((element) => {
          console.log(element);
          phantram1 = phantram1 + element.phamtramdiem;
        });
        dataoneTime.forEach((element) => {
          phantram2 = phantram2 + element.phamtramdiem;
        });
        let tb1 = phantram1 / dataTime.length;
        let tb2 = phantram2 / dataoneTime.length;
        if (tb1 > tb2) {
          nhanxet1 = "Qua thời gian làm bài test bạn có sự tiến bộ.";
        } else {
          nhanxet1 =
            "Qua thời gian làm bài test bạn. Bạn không có sự tiến bộ so với khoảng thời gian trước";
        }
        if (tb1 < 50) {
          nhanxet2 =
            "Tuy nhiên kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test chưa cao. Bạn cần cố gắng cải thiện hơn nữa";
        } else if (tb1 >= 50 && tb1 < 70) {
          nhanxet2 =
            "Tuy nhiên kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình";
        } else if (tb1 >= 70 && tb1 < 85) {
          nhanxet2 =
            "Kiến thức của bạn ở phần này khá tốt. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa";
        } else {
          nhanxet2 =
            "Kiến thức của bạn ở phần này rất tốt. Nhưng không vì thế mà chủ quan. Tích cực bổ xung kiến thức để hoàn thiện hơn nữa";
        }
      } else if (dem == 2) {
        dataTime.forEach((element) => {
          console.log(element);
          phantram1 = phantram1 + element.phamtramdiem;
        });
        dataoneTime.forEach((element) => {
          phantram2 = phantram2 + element.phamtramdiem;
        });
        datatwoTime.forEach((element) => {
          phantram3 = phantram3 + element.phamtramdiem;
        });
        let tb1 = phantram1 / dataTime.length;
        console.log(tb1);
        let tb2 = phantram2 / dataoneTime.length;
        console.log(tb2);
        let tb3 = phantram3 / datatwoTime.length;
        console.log(tb1);
        console.log(tb2);
        console.log(tb3);
        if (tb1 >= tb2 && tb1 >= tb3) {
          if (tb3 < tb2) {
            nhanxet1 = "Bạn có sự tiến bộ ổn định trong thời gian qua.";
            if (tb1 < 50) {
              nhanxet2 =
                "Tuy nhiên kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test chưa cao. Bạn cần cố gắng cải thiện hơn nữa";
            } else if (tb1 >= 50 && tb1 < 70) {
              nhanxet2 =
                "Tuy nhiên kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình";
            } else if (tb1 >= 70 && tb1 < 85) {
              nhanxet2 =
                "Kiến thức của bạn ở phần này khá tốt. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa";
            } else {
              nhanxet2 =
                "Kiến thức của bạn ở phần này rất tốt. Nhưng không vì thế mà chủ quan. Tích cực bổ xung kiến thức để hoàn thiện hơn nữa";
            }
          } else {
            nhanxet1 = "Bạn có sự tiến bộ ổn định hơn trong thời gian trước";
            if (tb1 < 50) {
              nhanxet2 =
                "Tuy nhiên sự ổn định này không được đánh giá cao vì kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test chưa cao. Bạn cần cố gắng cải thiện hơn nữa";
            } else if (tb1 >= 50 && tb1 < 70) {
              nhanxet2 =
                "Tuy nhiên kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình";
            } else if (tb1 >= 70 && tb1 < 85) {
              nhanxet2 =
                "Kiến thức của bạn ở phần này khá tốt. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa";
            } else {
              nhanxet2 =
                "Kiến thức của bạn ở phần này rất tốt. Nhưng không vì thế mà chủ quan. Tích cực bổ xung kiến thức để hoàn thiện hơn nữa";
            }
          }
        } else if (tb2 <= tb3 && tb2 >= tb1) {
          nhanxet1 =
            "Bạn không có sự tiến bộ trong thời gian qua. Kết quả các bài kiếm tra có chứa nội dung này đang giảm.";
          if (tb1 < 50) {
            nhanxet2 =
              "Kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test chưa cao. Bạn cần cố gắng cải thiện hơn nữa";
          } else if (tb1 >= 50 && tb1 < 70) {
            nhanxet2 =
              "Kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình";
          } else if (tb1 >= 70 && tb1 < 85) {
            nhanxet2 =
              "Tuy nhiên kiến thức của bạn ở phần này khá tốt. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa";
          } else {
            nhanxet2 =
              "Tuy nhiên kiến thức của bạn ở phần này rất tốt. Nhưng không vì thế mà chủ quan. Tích cực bổ xung kiến thức để có kết quả tốt hơn";
          }
        } else if (tb2 >= tb1 && tb2 >= tb3) {
          nhanxet1 =
            "Trong thời gian gần đây bnj không có tiến bộ. Kết quả các bài kiểm tra có chứa nội dung này giảm xuống.";
          if (tb1 < 50) {
            nhanxet2 =
              "Kiến thức phần này của bạn còn rất hạn chế điểm phần này của các bài test chưa cao. Bạn cần cố gắng cải thiện hơn nữa";
          } else if (tb1 >= 50 && tb1 < 70) {
            nhanxet2 =
              "Kiến thức của bạn ở phần này chỉ ở mức trung bình. Bạn cần cố gắng hơn để cải thiện thành tích của mình";
          } else if (tb1 >= 70 && tb1 < 85) {
            nhanxet2 =
              "Tuy điểm giảm.Nhưng nhìn chung điểm của nội dung này vẫn cao. Bạn cố gắng thêm để đặt được số điểm cao hơn nữa";
          } else {
            nhanxet2 =
              "Tuy điểm giảm.Nhưng nhìn chung điểm của nội dung này vẫn rất tốt. Nhưng không vì thế mà chủ quan. Tích cực bổ xung kiến thức để có kết quả tốt hơn";
          }
        }
      }
      return {
        nx1: nhanxet1,
        nx2: nhanxet2,
      };
    }
  };
  componentDidMount() {
    (async () => {
      let contentChap = await Axios("get", "/Api/question/contentChap");
      console.log(contentChap.data);
      this.setState({
        exer_format: contentChap.data.exer_format,
        des_exer_format: contentChap.data.des_exer_format,
      });
    })();
  }
  render() {
    console.log(this.nhanxet_danhgia());
    let nhanxetdanhgia = this.nhanxet_danhgia();
    let data_nhanxet = {};
    let { exer_format, des_exer_format } = this.state;
    let { ActLabelShowChart, ActValueShowChart } = this.props;
    console.log(ActValueShowChart);
    if (nhanxetdanhgia == undefined) {
      data_nhanxet["nx1"] = "Chưa có nhận xét";
    } else {
      data_nhanxet = nhanxetdanhgia;
    }
    let optionContent = exer_format.map((exer, index) => {
      return (
        <option value={exer} key={index}>
          {des_exer_format[index]}
        </option>
      );
    });
    const dataSource = {
      chart: {
        caption: "Biểu đồ đánh giá",
        showvalues: "0",
        theme: "candy",
        palette: "3",
        paletteColors: "#0372AB",
        numvisibleplot: "9",
        plottooltext: "Bạn làm được <b>$dataValue</b>%",
      },
      categories: [
        {
          category: ActLabelShowChart,
        },
      ],
      dataset: [
        {
          data: ActValueShowChart,
        },
      ],
    };
    return (
      <div>
        <Header />
        <div className="container-fluid boder-right">
          <div className="row">
            <TabFunction />
            <div className="col-9 border-content">
              <div className="">
                <div className="pt-4 d-flex">
                  <div className="selected-test">
                    <label className="mr-5">Nội dung kiến thức :</label>
                    <select
                      className="browser-default custom-select width-selected"
                      onChange={this.onChangeContent}
                    >
                      <option>Chọn nội dung kiến thức</option>
                      {optionContent}
                      {/* <option value="1">60 phút</option>
                                            <option value="2">75 phút</option>
                                            <option value="3">90 phút</option> */}
                    </select>
                  </div>
                  <div className="createButon">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.onClickContent}
                    >
                      Tìm kiếm
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <ReactFusioncharts
                  type="scrollline2d"
                  width="80%"
                  height="60%"
                  dataFormat="JSON"
                  dataSource={dataSource}
                />
              </div>
              <div className="mt-5 ml-3">
                <span className="font-weight-bold text-primary">
                  Nhận xét:{" "}
                </span>
                <span>{data_nhanxet.nx1}</span>. <span>{data_nhanxet.nx2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToprops = (state) => {
  console.log(state);
  return {
    ActLabelShowChart: state.ActLabelShowChart,
    ActValueShowChart: state.ActValueShowChart,
    ActDataShowChart: state.ActDataShowChart,
  };
};

const mapDispathToprops = (dispatch) => {
  console.log(dispatch);

  return {
    //    findAllCatagory : (categorys) =>{
    //        dispatch(findCategory(categorys));
    //    }
    appActions: bindActionCreators(appActions, dispatch),
  };
};
export default connect(mapStateToprops, mapDispathToprops)(assessKnowledge);
