import fs from "node:fs";
import path from "node:path";

// Project root
const projectRoot = path.resolve("..", "..");

// Input AST JSON
const astPath = path.join(
    projectRoot,
    "dist",
    "app.json"
);

// Output JavaScript
const outputPath = path.join(
    projectRoot,
    "dist",
    "app.js"
);

// Check whether app.json exists
if (!fs.existsSync(astPath)) {
    console.error("AST file not found:");
    console.error(astPath);
    process.exit(1);
}

// Read AST JSON
const astData = JSON.parse(
    fs.readFileSync(astPath, "utf8")
);

// Get nodes
const nodes = astData.nodes;

// Convert nodes back to JavaScript
const sourceCode = nodes
    .map(node => node.text)
    .join("\n\n");

// Create app.js
fs.writeFileSync(
    outputPath,
    sourceCode,
    "utf8"
);

console.log("================================");
console.log("AST → JavaScript completed");
console.log("================================");
console.log("Input :", astPath);
console.log("Output:", outputPath);
console.log("Nodes :", nodes.length);