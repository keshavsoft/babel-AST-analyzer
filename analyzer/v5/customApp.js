import express from "express";

import dotenv from "dotenv";

import { router as routerFromApi } from
    './Api/routes.js';

const app = express()

const port = 3000;

app.use("/Api", routerFromApi);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});