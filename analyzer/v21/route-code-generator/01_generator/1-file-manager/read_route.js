import fs from "fs";

const sourceFile = new URL("../../02_input/route.js", import.meta.url);

const readRouteFile = () => {

    // Read the original route source code.
    const sourceCode = fs.readFileSync(sourceFile, "utf8");

    return sourceCode;

};

export { readRouteFile };