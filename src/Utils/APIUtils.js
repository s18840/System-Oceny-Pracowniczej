import axios from "axios";

export function login(data) {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}Account/login`, data);
}

export function post(path, body) {
  return axios.post(`${process.env.REACT_APP_API_ADDRESS}${path}`, body,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ContentType: "application/json"
      },
    })
}

export function get(path) {
  return axios.get(`${process.env.REACT_APP_API_ADDRESS}${path}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      ContentType: "application/json"
    },
  })
}

export function put(path, body) {
  return axios.put(`${process.env.REACT_APP_API_ADDRESS}${path}`, body,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        ContentType: "application/json"
      },
    })
}
