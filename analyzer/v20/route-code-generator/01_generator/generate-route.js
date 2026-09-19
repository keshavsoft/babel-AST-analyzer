import fs from "fs";

import { transform } from "./transform-route.js";

const sourceFile = new URL("../02_input/route.js", import.meta.url);

const insertFile = new URL("../02_input/insert-ast.json", import.meta.url);

const outputFile = new URL("../03_output/route-new.js", import.meta.url);

const generateRoute = () => {

    // Read the original route source code.
    const sourceCode = fs.readFileSync(sourceFile, "utf8");

    // Read and convert the insertion JSON into JavaScript data.
    const insertions = JSON.parse(fs.readFileSync(insertFile, "utf8"));

    // Transform the original source using the insertion information.
    const newCode = transform({ sourceCode, insertions });

    // Write the transformed code into the output file.
    fs.writeFileSync(outputFile, newCode, "utf8");

    console.log("route-new.js created successfully");
};

export { generateRoute };