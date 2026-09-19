import { readFile } from "./1-file-manager/read-file.js";

import { writeFile } from "./1-file-manager/write-file.js";

import { transform } from "./2-transform/transform-route.js";

const sourceFile = new URL("../02_input/route.js", import.meta.url);

const insertFile = new URL("../02_input/insert-ast.json", import.meta.url);

const outputFile = new URL("../03_output/route-new.js", import.meta.url);


const StartFunc = () => {

    const sourceCode = readFile(sourceFile);

    const insertions = JSON.parse(readFile(insertFile));

    const newCode = transform({ sourceCode, insertions });

    writeFile(outputFile, newCode);

    console.log("route-new.js created successfully");
};

export { StartFunc };