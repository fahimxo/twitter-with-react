import axios from "axios";

const axiosInstance = () => {
  return axios.create({
    baseURL: "https://twitterapi.liara.run/api",
    headers: {
      "x-auth-token": JSON.parse(localStorage.getItem("user"))["x-auth-token"],
    },
  });
};

export default axiosInstance;
