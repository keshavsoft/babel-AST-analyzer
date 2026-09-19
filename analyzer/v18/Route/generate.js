import fs from "fs";

const sourceFile = new URL("./route.js", import.meta.url);
const insertFile = new URL("./insert_ast.json", import.meta.url);
const outputFile = new URL("./route_new.js", import.meta.url);

const Run = () => {

    const sourceCode = fs.readFileSync(
        sourceFile,
        "utf8"
    );

    const insertions = JSON.parse(
        fs.readFileSync(
            insertFile,
            "utf8"
        )
    );

    const insertNode = insertions[0];

    const newCode =
        sourceCode.slice(0, insertNode.start) +
        insertNode.insertText +
        "\n\n" +
        sourceCode.slice(insertNode.start);

    fs.writeFileSync(
        outputFile,
        newCode,
        "utf8"
    );

    console.log("route_new.js created successfully");
};

Run();