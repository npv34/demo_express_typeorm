import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "reflect-metadata";
import router from "@routers/web.router";
import { AppDataSource } from "@databases/data-source";
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

app.use(router)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});