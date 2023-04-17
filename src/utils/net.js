import axios from "axios";

export default function fetchData(method, data, path) {
  return axios({
    method,
    url: "http://localhost:8080/" + path,
    data,
    headers: {
      "x-token": localStorage.getItem("token")
    },
  })
}