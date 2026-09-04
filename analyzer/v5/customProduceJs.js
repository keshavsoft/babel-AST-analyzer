import fs from "node:fs";

// Read AST JSON
const astData = JSON.parse(
    fs.readFileSync("./customApp.json", "utf8")
);

// Get nodes
const nodes = astData.nodes;

// Convert nodes back to JavaScript
const sourceCode = nodes
    .map(node => node.text)
    .join("\n\n");

// Create app.js
fs.writeFileSync(
    "./customApp.js",
    sourceCode,
    "utf8"
);

console.log("================================");
console.log("AST → JavaScript completed");
console.log("================================");
console.log("Input :", "./customApp.json");
console.log("Output:", "./customProduceJs.js");
console.log("Nodes :", nodes.length);