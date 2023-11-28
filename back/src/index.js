import app from "./app.js";
import { port } from "./config.js";
import {connectDB } from "./db.js"

app.listen(port)
console.log('>>> *** Servidor *** <<<', port)
connectDB()