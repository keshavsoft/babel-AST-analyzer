import { exec } from "child_process";
import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

import express from "express";

import { router as routerFromApi }
    from './Api/router/controller/repo/routes.js';

import { router as routerFromV2 } from './V2/routes.js';
import { router as routerFromV1 } from './V1/routes.js';

import setupRoutes from "./routes.js";
import startServer from "./server.js";

const app = express()

setupRoutes(app);

const { port } = startServer(app);

app.use("/Api", routerFromApi);

app.use("/V2", routerFromV2);
app.use("/V1", routerFromV1);

if (process.env.OPEN_BROWSER === "true") {
    exec(`start http://localhost:${port}/v3/doctors/index.html`);
};
