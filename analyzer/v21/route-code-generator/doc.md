# Route Code Generator

## 1. Purpose
This project generates a new route file without changing the original route file.

## 2. Project Structure

```text
route-code-generator/
├── 00-main.js
├── 01-generator/
│   └── generate-route.js
├── 02-input/
│   ├── route.js
│   └── insert-ast.json
├── 03-output/
│   └── route-new.js
└── doc.md
```

## 3. File Meaning

- `00-main.js` — starts the process.
- `01-generator/` — contains generation logic.
- `generate-route.js` — performs the task.
- `02-input/` — contains input files.
- `route.js` — original route source.
- `insert-ast.json` — insertion information.
- `03-output/` — contains generated files.
- `route-new.js` — generated route.
- `doc.md` — explains the process.

## 4. Process

1. Start the main file.
2. Read the input route.
3. Read the AST insertion data.
4. Get the `start` position.
5. Insert the required route code.
6. Generate the new route file.
7. Save it inside `03-output`.

## 5. How to Run

Open the terminal in the project folder.

Run:

```bash
node 00-main.js
```

## 6. Result

After running, check:

```text
03-output/route-new.js
```

The original `01-input/route.js` remains unchanged.

## 7. Simple Flow

```text
00-main.js
    ↓
01-generator
    ↓
02-input
    ↓
03-output
```

**Input → Generate → Output**
