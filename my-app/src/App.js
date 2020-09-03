import React, { Component } from 'react';
import './../src/App.css';
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-primary bg-primary">
          <div className="titleNameProject">
            WEBSITE ĐÁNH GIÁ KIẾN THỨC TOÁN TRUNG HỌC PHỔ THÔNG
          </div>
        </nav>
        <div className="container-fluid boder-right">
          <div className="row">
            <div className="col-3">
              <div className="card mt-3 cardCategory-Height">
                <div className="card-body card-list">
                  <p>
                    <i className="fas fa-caret-right">&nbsp;&nbsp;TẠO ĐỀ THI</i>
                  </p>
                  <p>
                    <i className="fas fa-caret-right">&nbsp;&nbsp;THÔNG TIN HỌC TẬP</i>
                  </p>
                  <p>
                    <i className="fas fa-caret-right">&nbsp;&nbsp;ĐÁNH GIÁ KẾT QUẢ</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-9 border-content">
              <div className="content-category">
                <div className="pt-5">
                  <div className="selected-test">
                    <label className="mr-5">
                      Mức độ :
                    </label>
                    <select className="browser-default custom-select width-selected left-selected">
                      <option>Chọn mức độ</option>
                      <option value="1">dễ</option>
                      <option value="2">Trung bình</option>
                      <option value="3">Khó</option>
                    </select>
                  </div>
                  <div className="selected-test mt-3">
                    <label className="mr-5">Thời gian làm bài :</label>
                    <select className="browser-default custom-select width-selected">
                      <option>Chọn thời gian làm bài</option>
                      <option value="1">60 phút</option>
                      <option value="2">75 phút</option>
                      <option value="3">90 phút</option>
                    </select>
                  </div>
                  <div className="selected-test mt-5 d-flex">
                    <label className="mr-5">Chương kiến thức :</label>
                    <div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="defaultUncheckedDisabled0" />
                        <label className="custom-control-label" htmlFor="defaultUncheckedDisabled0">Default unchecked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled1" />
                        <label className="custom-control-label" htmlFor="defaultCheckedDisabled1">Default checked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="defaultUncheckedDisabled2" />
                        <label className="custom-control-label" htmlFor="defaultUncheckedDisabled2">Default unchecked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled3" />
                        <label className="custom-control-label" htmlFor="defaultCheckedDisabled3">Default checked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled4" />
                        <label className="custom-control-label" htmlFor="defaultCheckedDisabled4">Default checked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" className="custom-control-input" id="defaultUncheckedDisabled5" />
                        <label className="custom-control-label" htmlFor="defaultUncheckedDisabled5">Default unchecked disabled</label>
                      </div>
                      <div className="custom-control custom-checkbox mb-2">
                        <input type="checkbox" class="custom-control-input" id="defaultCheckedDisabled6" />
                        <label className="custom-control-label" htmlFor="defaultCheckedDisabled6">Default checked disabled</label>
                      </div>
                    </div>
                  </div>
                  <div className="createButon mt-4">
                    <button type="button" class="btn btn-primary">Primary</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

