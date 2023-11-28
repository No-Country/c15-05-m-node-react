import express  from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import { urlFrond } from "./config.js"

const app = express();

app.use(
    cors({
      origin:urlFrond ,
      credentials: true,
    })
  );

app.use(morgan('dev'));
app.use(express.json())

app.use('/api',userRouter)
app.use('/api/',productRouter)


export default app;