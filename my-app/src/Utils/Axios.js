import axios from "axios";
const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}; //https://crawler-company.herokuapp.com
//http://localhost:4000
//https://craw-company-redux.herokuapp.com
export const Axios = (method, url, data = {}) => {
  url = "https://app-trac-nghiem.herokuapp.com" + url;
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      headers: {
        Authorization: getCookie("token"),
      },
    })
      .then((resuft) => {
        resolve(resuft);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//mongodb+srv://cong:d26051998@cluster0-32j4k.mongodb.net/test?retryWrites=true&w=majority
