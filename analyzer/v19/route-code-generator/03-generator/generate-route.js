import fs from "fs";

const sourceFile = new URL("../01-source/route.js", import.meta.url);
const insertFile = new URL("../02-insertion/insert-ast.json", import.meta.url);
const outputFile = new URL("../04-output/route-new.js", import.meta.url);

const generateRoute = () => {
    const sourceCode = fs.readFileSync(sourceFile, "utf8");

    const insertions = JSON.parse(
        fs.readFileSync(insertFile, "utf8")
    );

    const insertNode = insertions[0];

    const newCode =
        sourceCode.slice(0, insertNode.start) +
        insertNode.insertText +
        "\n\n" +
        sourceCode.slice(insertNode.start);

    fs.writeFileSync(outputFile, newCode, "utf8");

    console.log("route-new.js created successfully");
};
export { generateRoute };