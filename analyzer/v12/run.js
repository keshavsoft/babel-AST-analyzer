import {
    appPath,
    astPath,
    newAppPath
} from "./config/paths.js";

import { readFile } from "./services/readFile.js";

import { parseAst } from "./services/parseAst.js";

import { createAstJson } from "./services/createAstJson.js";

import { astMiddleware } from "./middleware/astMiddleware.js";

import { generateCode } from "./services/generateCode.js";

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


    // --------------------------------
    // STEP 4: Modify AST in middleware
    // --------------------------------

    const modifiedAst = astMiddleware(ast);

    console.log("4. AST middleware executed");


    // --------------------------------
    // STEP 5: Generate app_new.js
    // --------------------------------

    const newCode = generateCode(
        source,
        modifiedAst
    );

    writeFile(
        newAppPath,
        newCode
    );

    console.log("5. app_new.js created");

};


Run();