import jwt from "jsonwebtoken";
import { token_secret } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Autorización denegada" });

  jwt.verify(token, token_secret, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalido" });
    req.user = user;
  });
  next();
};
