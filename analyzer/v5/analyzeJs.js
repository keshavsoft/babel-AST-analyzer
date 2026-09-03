import fs from "node:fs";
import path from "node:path";
import { parse } from "@babel/parser";

// 1. Read app.js file
const source = fs.readFileSync("./app.js", "utf8"
);

// 2. Parse source into Babel AST
const ast = parse(source, {
    sourceType: "module"
});

// 3. Process AST nodes
const output = ast.program.body.map((node) => ({
    type: node.type,

    start: node.start,
    end: node.end,

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

fs.writeFileSync(
    path.join( "app.json"),
    JSON.stringify(result, null, 2),
    "utf8"
);

console.log("=== AST Output Captured to app.json ===");
console.log("Total Nodes:", result.totalNodes);
console.log("Node Types:", nodeTypeCounts);