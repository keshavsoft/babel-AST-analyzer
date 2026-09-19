import fs from "fs";

const sourceFile = new URL("./route.js", import.meta.url);
const insertFile = new URL("./insert_ast.json", import.meta.url);
const outputFile = new URL("./route_new.js", import.meta.url);


const Run = () => {

    // Read original route.js
    const sourceCode = fs.readFileSync(
        sourceFile,
        "utf8"
    );


    // Read insertion JSON
    const insertions = JSON.parse(
        fs.readFileSync(
            insertFile,
            "utf8"
        )
    );


    // Take first insertion
    const insertNode = insertions[0];


    // Insert after selected AST node
    const newCode =
        sourceCode.slice(0, insertNode.end) +
        "\n\n" +
        insertNode.insertText +
        "\n\n" +
        sourceCode.slice(insertNode.end);


    // Create route_new.js
    fs.writeFileSync(
        outputFile,
        newCode,
        "utf8"
    );


    console.log("route_new.js created successfully");
};


Run();