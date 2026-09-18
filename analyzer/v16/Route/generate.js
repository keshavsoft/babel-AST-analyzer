import fs from "fs";
import parser from "@babel/parser";

import { StartFunc as addCommentsToAst } from "./AST/addCommentsToAst.js";
import { StartFunc as generateCode } from "./AST/generateCode.js";

const inputFile = new URL("./route.js", import.meta.url);
const outputFile = new URL("./route_new.js", import.meta.url);


const Run = () => {

    // Read route.js
    const sourceCode = fs.readFileSync(
        inputFile,
        "utf8"
    );

    // Create AST
    const ast = parser.parse(sourceCode, {
        sourceType: "unambiguous"
    });

    // Modify AST
    const modifiedAst = addCommentsToAst(ast);

    // Generate new code
    const generatedCode = generateCode(
        sourceCode,
        modifiedAst
    );

    // Create route_new.js
    fs.writeFileSync(
        outputFile,
        generatedCode,
        "utf8"
    );

    console.log("route_new.js created successfully");
};

Run();