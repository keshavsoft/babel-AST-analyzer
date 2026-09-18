import fs from "fs";
import parser from "@babel/parser";

const inputFile = new URL("./route.js", import.meta.url);
const outputFile = new URL("./route_new.js", import.meta.url);


const addCommentsToAst = (ast) => {

    const nodes = ast.program.body;

    if (!nodes.length) return ast;

    nodes[0].leadingComments = [
        {
            type: "CommentLine",
            value: " This is starting"
        }
    ];

    ast.program.trailingComments = [
        {
            type: "CommentLine",
            value: " This is ending"
        }
    ];

    return ast;
};


const generateCode = (sourceCode, ast) => {

    const nodes = ast.program.body;

    if (!nodes.length) return sourceCode;

    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];

    return (
        "// This is starting\n" +
        sourceCode.slice(0, firstNode.start) +
        sourceCode.slice(firstNode.start, lastNode.end) +
        "\n// This is ending\n" +
        sourceCode.slice(lastNode.end)
    );
};


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