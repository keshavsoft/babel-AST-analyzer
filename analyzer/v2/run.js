import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "@babel/parser";

const projectRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../.."
);

// 1. Read app.js file
const source = fs.readFileSync(
    path.join(projectRoot, "src", "app.js"),
    "utf8"
);

// 2. Parse source into Babel AST
const ast = parse(source, {
    sourceType: "module"
});

// 3. Process AST nodes
const output = ast.program.body.map((node) => ({
    type: node.type,
    text: source.slice(node.start, node.end).trim(),

    raka: node.source?.value || null,

    poka:
        node.specifiers?.[0]?.local?.name ||
        node.declarations?.[0]?.id?.name ||
        null,

    routePath:
        node.expression?.arguments?.[0]?.value ||
        null,

    routeHandler:
        node.expression?.arguments?.[1]?.name ||
        null
}));

// 4. Count node types
const nodeTypeCounts = {};

ast.program.body.forEach((node) => {
    nodeTypeCounts[node.type] =
        (nodeTypeCounts[node.type] || 0) + 1;
});

// 5. Create final JSON
const result = {
    totalNodes: ast.program.body.length,
    nodeTypeCounts,
    nodes: output
};

// 6. Write output to app.json
const outputDir = path.join(projectRoot, "dist");

fs.mkdirSync(outputDir, { recursive: true });

fs.writeFileSync(
    path.join(outputDir, "app.json"),
    JSON.stringify(result, null, 2),
    "utf8"
);

console.log("=== AST Output Captured to app.json ===");
console.log("Total Nodes:", result.totalNodes);
console.log("Node Types:", nodeTypeCounts);