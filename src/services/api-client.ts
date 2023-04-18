import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f80b0f813e18410c99a0d227fc1bb113",
  },
});
