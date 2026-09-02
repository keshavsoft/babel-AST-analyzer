# babel-AST-analyzer
A Node.js tool that uses Babel Parser to analyze JavaScript and TypeScript projects, scan source files, count AST nodes, and generate a project analysis report.

## Overview
- Parses source files into Babel AST.
- Scans `.js` and `.mjs` files recursively.
- Uses src `app.js` as the base project file.
- Counts AST nodes and node types.
- Generates a JSON analysis report.

## Project Structure
```text
babel-AST-analyzer/
│
├── analyzer/
│   └── v1/
│       ├── core/
│       └── run.js
│
├── src/
│   ├── Api/
│   └── app.js
│
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```
## Run
```bash
npm i
npm run start
```
Run the command from the project root.
## Output
`dist/project-ast.json` contains the analysis report.

### 📖 Project Story
1. `Run Analyzer` – Execute analyzer/v1/run.js from the project root.
2. `Find Source` – The analyzer identifies the src folder as the project source.
3. `Read Base File` – src/app.js is used as the base file for the analysis.
4. `Scan Files` – All .js and .mjs files inside src are scanned.
5. `Parse Code` – Each source file is passed to Babel Parser.
6. `Create AST` – Babel converts the source code into an Abstract Syntax Tree (AST).
7. `Walk AST` – The analyzer walks through the AST and identifies different node types.
8. `Count Nodes` – AST nodes and node types are counted for each file.
9. `Create Report` – All file analysis results are combined into one project report.
10. `Save Output` – The final report is saved as dist/project-ast.json.

## Analysis Flow
```text
run.js
  ↓
src/app.js
  ↓
Scan src Files
  ↓
Babel Parser
  ↓
AST
  ↓
Walk & Count Nodes
  ↓
Project Report
  ↓
dist/project-ast.json
```
## Author
**KeshavSoft** — Parse · Inspect · Analyze · Automate
