import fs from "fs";
import parser from "@babel/parser";


// -----------------------------------------
// File paths
// -----------------------------------------

const RoutePath = "./route.js";

const newRoutePath = "./route_new.js";


// -----------------------------------------
// Read File
// -----------------------------------------

const readFile = (filePath) => {

    return fs.readFileSync(
        filePath,
        "utf-8"
    );

};


// -----------------------------------------
// Parse AST
// -----------------------------------------

const parseAst = (source) => {

    return parser.parse(source, {
        sourceType: "unambiguous"
    });

};


// -----------------------------------------
// AST Middleware
// -----------------------------------------

const astMiddleware = (ast) => {

    const body = ast.program.body;

    if (body.length === 0) {
        return ast;
    }


    // Add starting comment
    body[0].leadingComments = [
        {
            type: "CommentLine",
            value: " This is starting"
        }
    ];


    // Add ending comment
    ast.program.trailingComments = [
        {
            type: "CommentLine",
            value: " This is ending"
        }
    ];


    return ast;

};


// -----------------------------------------
// Generate Code
// -----------------------------------------

const generateCode = (source, ast) => {

    const body = ast.program.body;

    if (body.length === 0) {
        return source;
    }


    const firstNode = body[0];

    const lastNode = body[body.length - 1];


    const startComment =
        "// This is starting\n";


    const endComment =
        "\n// This is ending";


    const before = source.slice(
        0,
        firstNode.start
    );


    const originalCode = source.slice(
        firstNode.start,
        lastNode.end
    );


    const after = source.slice(
        lastNode.end
    );


    return (
        before +
        startComment +
        originalCode +
        endComment +
        after
    );

};


// -----------------------------------------
// Write File
// -----------------------------------------

const writeFile = (filePath, code) => {

    fs.writeFileSync(
        filePath,
        code,
        "utf-8"
    );

};


// -----------------------------------------
// Run
// -----------------------------------------

export const Run = () => {

    // 1. Read original route.js

    const source = readFile(RoutePath);

    console.log("1. route.js read");


    // 2. Create AST

    const ast = parseAst(source);

    console.log("2. AST created");


    // 3. Modify AST in middleware

    const modifiedAst = astMiddleware(ast);

    console.log("3. AST middleware executed");


    // 4. Generate new source
    // Original formatting is preserved

    const newCode = generateCode(
        source,
        modifiedAst
    );

    console.log("4. New code generated");


    // 5. Write route_new.js

    writeFile(
        newRoutePath,
        newCode
    );

    console.log("5. route_new.js created");

};


Run();