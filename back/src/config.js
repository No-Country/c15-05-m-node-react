import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;

export const mongodb_uri_key = process.env.MONGO_URI_KEY;

export const token_secret = process.env.TOKEN_SECRET;

export const urlFrond = process.env.URL_FRONT_END