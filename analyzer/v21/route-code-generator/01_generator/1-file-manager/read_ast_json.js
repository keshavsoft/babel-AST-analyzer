import fs from "fs";

const insertAstFile = new URL("../../02_input/insert-ast.json", import.meta.url);

const readAstFile = () => {

    // Read the original route source code.
    const sourceCode = JSON.parse(fs.readFileSync(insertAstFile, "utf8"));

    return sourceCode;

};

export { readAstFile };