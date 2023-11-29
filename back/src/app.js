import express  from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import saleRouter from './routes/sale.routes.js'
import { urlFrond } from "./config.js"

const app = express();

app.use(
    cors({
      origin:urlFrond,
      credentials: true,
    })
  );

app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser());

app.use('/api',userRouter)
app.use('/api/',productRouter)
app.use('/api/',saleRouter)


export default app;