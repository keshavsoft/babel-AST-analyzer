# Route Code Generator

## Purpose
This task adds new route code to an existing `route.js` file without changing the original file.

## Process

### Step 1 — Source
Keep the original route file inside `01-source`.
This is the input file for the task.

### Step 2 — Insertion Data
Keep the AST insertion information inside `02-insertion`.
It contains the position where the new code should be added and the new code itself.

### Step 3 — Find Position
The AST provides the `start` position.
This position identifies where the new route code should be inserted.

### Step 4 — Generate
The generator inside `03-generator` reads the source and insertion data.
It inserts the new code at the required position.

### Step 5 — Output
The generated file is placed inside `04-output`.
The output is a new route file.

### Step 6 — Protect Original
The original source file is not modified.
Only the new output file is created.

## Folder Flow

```text
Route-Code-Generator
│
├── README.md
├── 01-source
│   └── route.js
├── 02-insertion
│   └── insert-ast.json
├── 03-generator
│   └── generate-route.js
└── 04-output
    └── route-new.js
```

## File Responsibilities

| File | Meaning |
|---|---|
| `README.md` | Main process and task explanation |
| `route.js` | Original source route |
| `insert-ast.json` | Insertion position and new route code |
| `generate-route.js` | Performs the route generation |
| `route-new.js` | Generated result |

## Simple Flow

```text
Original Route
      ↓
Insertion Data
      ↓
Start Position
      ↓
Generate New Route
      ↓
Generated Route
```

## Main Idea

**Read → Locate → Insert → Generate**

The task uses the AST `start` position to locate the insertion point.
The original route remains safe, and the generated route is written separately.
