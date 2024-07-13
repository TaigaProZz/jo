import axios  from "axios";

const axiosBase = (contentType = "application/json") => {
  return axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/",
    headers: {
      "Content-Type": contentType,
    },
  });
}

export { axiosBase }