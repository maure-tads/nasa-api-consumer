import axios from "axios";

export default axios.create({
  baseURL: "https://api.nasa.gov/planetary/apod",
  headers: {
    "Content-type": "application/json"
  },
  params: {
    api_key: "2HZUR2KYDDaRaNjIBRuNtp5JrjLAwokixVklp07a"
  }
});
