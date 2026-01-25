import axios from "axios";

export default axios.create({
    baseURL: "https://0.0.0.0:5001/api/v1/restaurants",
});