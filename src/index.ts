import express, {NextFunction, Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "reflect-metadata";
import webRouter from "@routers/web.router";
import apiRouter from "@routers/api.router";

import { AppDataSource } from "@databases/data-source";
import { checkAPPKey } from "./middlewares/checkAPI.middleware";
import { blockIP } from "./middlewares/blockIP";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// config views engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

AppDataSource.initialize().then(() => { 
    console.log('initialized')
}).catch(() => {
  console.error('Error while connecting to the database')
  process.exit(1)  // exit with error code 1 to indicate failure to connect to the database
});

app.use(blockIP)
app.use("/", webRouter)
app.use("/api", checkAPPKey, apiRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});