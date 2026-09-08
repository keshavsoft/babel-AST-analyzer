# JSON to Babel Data to JavaScript

## Purpose
This script rebuilds JavaScript from the analyzer JSON file.
The pipeline is `app.json` -> stored Babel node data -> `app.js`.
It restores source text; it does not execute the application.

## 1. Read the JSON
`fs.readFileSync()` loads `app.json` as UTF-8 text.
`JSON.parse()` converts that text into the `astData` object.
The JSON contains node counts and an array of analyzed nodes.

## 2. Get the Nodes
`astData.nodes` is assigned to the `nodes` variable.
Each item represents one top-level statement from the original file.
The item includes Babel metadata such as `type`, `start`, and `end`.
It also includes the original statement in its `text` property.

## 3. Restore JavaScript Text
`map()` visits every node in its original array order.
`node.text` selects the preserved JavaScript statement.
The `type`, positions, and extracted fields are not written back.
Only the original source text is needed to rebuild the file.

## 4. Join the Statements
`join("\n\n")` places two blank lines between statements.
This creates one JavaScript source string called `sourceCode`.
The result contains imports, declarations, routes, and other expressions.
The generated formatting follows the text stored in the JSON file.

## 5. Write the JavaScript
`fs.writeFileSync()` writes `sourceCode` to `app.js`.
The `utf8` option ensures the file is written as text.
Any existing `app.js` content is replaced by the generated content.

## Result
The six JSON nodes recreate the six top-level statements in `app.js`.
The script logs the input path, output path, and number of nodes processed.
Run `node analyzerJs.js` from this folder to regenerate the JavaScript file.