import fs from "node:fs";

// Read AST JSON
const astData = JSON.parse(
    fs.readFileSync("./app.json", "utf8")
);

// Get nodes
const nodes = astData.nodes || [];

// Convert nodes back to JavaScript while preserving spaces and newline gaps
const sourceCode = nodes.reduce((result, node) => {
    return result + (node.before || "") + (node.text || "");
}, "") + (astData.trailingText || "");

// Create app.js
fs.writeFileSync(
    "./app.js",
    sourceCode,
    "utf8"
);

console.log("================================");
console.log("AST → JavaScript completed");
console.log("================================");
console.log("Input :", "./app.json");
console.log("Output:", "./app.js");
console.log("Nodes :", nodes.length);