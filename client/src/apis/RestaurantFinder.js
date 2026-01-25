import axios from "axios";

export default axios.create({
    baseURL: "https://saltykelp.com/api/v1/restaurants",
});