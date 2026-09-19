import fs from "fs";


const readFile = (inPath) => {

    // Read the original route source code.
    const sourceCode = fs.readFileSync(inPath, "utf8");

    return sourceCode;

};

export { readFile };