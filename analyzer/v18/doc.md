# Route Code Generator

## 1. Overview
This process adds new route code to an existing JavaScript file.
The original `route.js` file is never changed.
A new file called `route_new.js` is created.

## 2. Required Files
The process uses three files:
- `route.js` — original source file.
- `insert_ast.json` — insertion information.
- `generate.js` — performs the generation.

## 3. Insert JSON
The JSON contains two important values:
- `start` — position where the new code should be inserted.
- `insertText` — code that should be added.

The `end` position is not required.

## 4. How It Works
1. Read the original `route.js`.
2. Read `insert_ast.json`.
3. Take the `start` position.
4. Take the `insertText`.
5. Find the `start` position in the source.
6. Split the source at that position.
7. Add the new code.
8. Join the source again.
9. Save the result as `route_new.js`.

## 5. Why Use `start`?
The requirement is only to find where new code should begin.
Therefore, only the insertion position is needed.
The existing source after that position remains unchanged.

## 6. Role of AST
Babel AST provides the position information.
The AST identifies where the required code location exists.
That position is stored as `start` in the insertion JSON.

## 7. Output
The generated result is written to:
`route_new.js`

The original:
`route.js`
remains unchanged.

## 8. Simple Process
```text
route.js
   ↓
Read source
   ↓
Read AST insertion data
   ↓
Get start position
   ↓
Insert new code
   ↓
Create route_new.js
```

## 9. How to Use
1. Keep the original route file ready.
2. Create the insertion JSON.
3. Put the required `start` position in the JSON.
4. Put the new code in `insertText`.
5. Run the generator.js in terminal.
6. Check the generated `route_new.js`.

## 10. Main Idea
The AST is used to find the insertion location.
Only the `start` position is required for insertion.
The original source is used to create the new file.
This keeps the process simple and avoids modifying the original file.

## 11. One-Line Explanation
> Read the original file, use the AST `start` position, insert the required code, and create a new route file without changing the original.
