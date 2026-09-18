import {
    appPath,
    newAppPath
} from "./config/paths.js";

import { readFile } from "./services/readFile.js";
import { parseAst } from "./services/parseAst.js";
import { astMiddleware } from "./middleware/astMiddleware.js";
import { generateCode } from "./services/generateCode.js";
import { writeFile } from "./services/writeFile.js";


export const Run = () => {

    // 1. Read original app.js
    const source = readFile(appPath);

    console.log("1. app.js read");


    // 2. Create AST
    const ast = parseAst(source);

    console.log("2. AST created");


    // 3. Modify AST
    const modifiedAst = astMiddleware(ast);

    console.log("3. AST middleware executed");


    // 4. Generate new source
    // Original formatting is preserved
    const newCode = generateCode(
        source,
        modifiedAst
    );

    console.log("4. New code generated");


    // 5. Write app_new.js
    writeFile(
        newAppPath,
        newCode
    );

    console.log("5. app_new.js created");
};


Run();