import axios from "axios";

import url from "../../config/config";

export const verifyTokenRequet = () => axios.get(`${url}/verify`)