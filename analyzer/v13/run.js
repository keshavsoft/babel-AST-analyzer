import {
    appPath,
    astPath
} from "./config/paths.js";

import { readFile } from "./services/readFile.js";

import { parseAst } from "./services/parseAst.js";

import { createAstJson } from "./services/createAstJson.js";

import { writeFile } from "./services/writeFile.js";


export const Run = () => {

    // --------------------------------
    // STEP 1: Read app.js
    // --------------------------------

    const source = readFile(appPath);

    console.log("1. app.js read");


    // --------------------------------
    // STEP 2: Create AST
    // --------------------------------

    const ast = parseAst(source);

    console.log("2. AST created");


    // --------------------------------
    // STEP 3: Create app_ast.json
    // --------------------------------

    const astJson = createAstJson(
        ast,
        source
    );

    writeFile(
        astPath,
        JSON.stringify(astJson, null, 4)
    );

    console.log("3. app_ast.json created");

};


Run();