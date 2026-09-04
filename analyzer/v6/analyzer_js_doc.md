# `analyzer.js` Documentation
## Overview
`analyzer.js` analyzes `app.js` using Babel Parser.
It reads the source code and creates an AST.
The AST is converted into structured JSON data.
The output is saved as `app.json`.
## 1. Dependencies
`node:fs` is used to read and write files.
`node:path` is used for file path handling.
`@babel/parser` converts JavaScript into an AST.
## 2. Read Source
`fs.readFileSync("./app.js", "utf8")` reads `app.js`.
The source code is stored in the `source` variable.
## 3. Parse AST
`parse(source, { sourceType: "module" })` parses the source.
Babel creates an Abstract Syntax Tree from the code.
`sourceType: "module"` supports ES module imports.
## 4. Process Nodes
`ast.program.body` contains top-level AST nodes.
`map()` processes each node and creates an output object.
`type` identifies the type of AST node.
`start` stores the starting character position.
`end` stores the ending character position.
`text` extracts source code using `source.slice()`.
`raka` extracts the imported module path.
`poka` extracts an import or variable identifier.
`routePath` extracts the first function argument.
`routeHandler` extracts the second function argument.
Optional chaining `?.` safely accesses missing properties.
## 5. Count Nodes
`nodeTypeCounts` stores the number of each node type.
`forEach()` checks every top-level AST node.
For example, two imports produce `ImportDeclaration: 2`.
## 6. Create Result
`totalNodes` stores the number of top-level nodes.
`nodeTypeCounts` stores node type statistics.
`nodes` stores the processed AST information.
## 7. Write Output
`JSON.stringify(result, null, 2)` formats the JSON.
`fs.writeFileSync()` writes the result to `app.json`.