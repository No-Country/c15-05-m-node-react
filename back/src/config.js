import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;

export const urlFrond = process.env.URL_FRONT_END

export const mongodb_uri_key = process.env.MONGO_URI_KEY;

//  ? JWT
export const token_secret = process.env.TOKEN_SECRET;

//? Cloudinary
export const cloud_name = process.env.CLOUD_NAME
export const api_key = process.env.CLOUD_API_KEY
export const api_secret = process.env.CLOUD_API_SECRET
