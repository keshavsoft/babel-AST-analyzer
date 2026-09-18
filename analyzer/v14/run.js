import {
    appPath,
    nodeTypePath,
    newAppPath
} from "./config/paths.js";

import { readFile } from "./services/readFile.js";
import { parseAst } from "./services/parseAst.js";
import { countNodeTypes } from "./services/countNodeTypes.js";
import { astMiddleware } from "./middleware/astMiddleware.js";
import { generateCode } from "./services/generateCode.js";
import { writeFile } from "./services/writeFile.js";


export const Run = () => {

    // 1. Read app.js
    const source = readFile(appPath);

    console.log("1. app.js read");


    // 2. Create AST
    const ast = parseAst(source);

    console.log("2. AST created");


    // 3. Count AST node types
    const typeCounts = countNodeTypes(ast);

    writeFile(
        nodeTypePath,
        JSON.stringify(typeCounts, null, 4)
    );

    console.log("3. node_types.json created");


    // 4. Modify AST in middleware
    const modifiedAst = astMiddleware(ast);

    console.log("4. AST middleware executed");


    // 5. Generate app_new.js
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