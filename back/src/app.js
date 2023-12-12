import express  from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import saleRouter from './routes/sale.routes.js'
import companyRouter from './routes/company.routes.js'
import categoriesRoutes from './routes/category.routes.js'
import passwordRouter from './routes/recoverPassword.routes.js'
import { urlFrond } from "./config.js"
import bodyParser from "body-parser";

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express();

app.use(
    cors({
      origin:urlFrond || "http://localhost:5173",
      credentials: true,
    })
  );
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  

app.use(morgan('dev'));
app.use(express.json())
app.use(cookieParser());

app.use(express.static(join(__dirname,"page")));
app.use('/api',userRouter)
app.use('/api',companyRouter)
app.use('/api/',productRouter)
app.use('/api/',saleRouter)
app.use('/api/',categoriesRoutes)
app.use(passwordRouter)


export default app;