import jwt from "jsonwebtoken";
import { token_secret } from "../config.js";

const createAccessToken = async(payload) => {
  return await new Promise((resolve, reject) => {
   jwt.sign(
      payload,
      token_secret,
      {
        expiresIn: "24h"//60 * 60 * 24,//24 horas
      },
      (error, token) => {
        if (error) reject(error);
          resolve(token)
      }
    );
  });
};
export default createAccessToken;