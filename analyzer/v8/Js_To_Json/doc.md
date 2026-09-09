# JavaScript to Babel AST to JSON

## Purpose
This analyzer converts JavaScript source into structured JSON.
The pipeline is `app.js` -> Babel AST -> `app.json`.
It does not execute the application or change the JavaScript code.

## 1. Read the JavaScript
`fs.readFileSync()` loads `app.js` as UTF-8 text.
The complete source is kept in the `source` variable.

## 2. Parse with Babel
`@babel/parser` converts the source text into an Abstract Syntax Tree (AST).
The parser uses `sourceType: "module"` for `import` and `export` syntax.
The AST represents syntax as nested JavaScript objects.
Each node includes a `type`, `start`, and `end` position.

## 3. Read Top-Level Nodes
`ast.program.body` contains the statements at the top level of the file.
`map()` creates one simplified JSON object for each statement.
The original node type is saved in `type`.
`start` and `end` identify the source range of the node.
`source.slice(start, end)` retrieves the original statement text.

## 4. Extract Useful Values
`raka` stores an import module path from `node.source.value`.
`poka` stores an imported name or variable name when available.
`routePath` stores the first call argument, such as `/Api`.
`routeHandler` stores the second call argument name, such as `routerFromApi`.
Optional chaining prevents errors when a property does not exist.
Missing values are represented by `null`.

## 5. Count Syntax Types
Each top-level node is checked in a second pass.
`nodeTypeCounts` records how many times each Babel node type occurs.
For the example, the counts are two imports, two declarations, and two expressions.

## 6. Write the JSON Result
The final object contains `totalNodes`, `nodeTypeCounts`, and `nodes`.
`JSON.stringify(result, null, 2)` formats the result for readability.
`fs.writeFileSync()` writes the formatted data to `app.json`.

Run `node analyzeJs.js` from this folder to regenerate the JSON file.