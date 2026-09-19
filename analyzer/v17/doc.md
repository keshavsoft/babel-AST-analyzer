# v17 Route Code Generator

## 1. What is v17?

v17 is a small code generator that reads an existing `route.js` file and creates a new file called `route_new.js`.

The original `route.js` file is never changed.

```text
route.js
   ↓
Read file
   ↓
Find insertion position
   ↓
Insert new code
   ↓
route_new.js
```

## 2. Why do we need it?

When we want to add new route code, we should not manually change the original file.

Instead, v17 finds the required position and inserts the new code automatically.

This makes the process easier and safer.

## 3. Route Method

The first method uses a **line number**.

Example `insert.json`:

```json
[
  {
    "lineNumber": 3,
    "line": "import { router as routerFromdoctors } from './doctors/end-points.js';"
  }
]
```

The generator reads `route.js`, finds line 3, and inserts the new line.

```text
route.js
   ↓
Read line number
   ↓
Insert new line
   ↓
route_new.js
```

This method is simple and useful when we already know the exact line number.

## 4. RouteNode Method

The second method uses the **AST (Abstract Syntax Tree)**.

Instead of using a line number, we use the AST node's `start` and `end` positions.

Example:

```json
[
  {
    "start": 32,
    "end": 64,
    "insertText": "import { router as routerFromdoctors } from './doctors/end-points.js';\n\nrouter.use(\"/doctors\", routerFromdoctors);"
  }
]
```

The `end` value tells the generator where the existing AST node finishes.

The new code is inserted at that position.

## 5. Example

Original `route.js`:

```js
import express from 'express';

const router = express.Router();

export { router };
```

Generated `route_new.js`:

```js
import express from 'express';

const router = express.Router();

import { router as routerFromdoctors } from './doctors/end-points.js';

router.use("/doctors", routerFromdoctors);

export { router };
```

The original file remains unchanged.

## 6. How RouteNode Works

The basic flow is:

```text
route.js
   ↓
Read source code
   ↓
Parse source using Babel
   ↓
Get AST node positions
   ↓
Read insert_ast.json
   ↓
Use start/end position
   ↓
Insert new code
   ↓
Write route_new.js
```

## 7. Why use AST?

AST gives us information about the actual JavaScript code structure.

For example:

```js
const router = express.Router();
```

is represented as an AST node.

The node contains information such as:

```text
type
start
end
```

We can use the `end` position to insert code exactly after that JavaScript statement.

## 8. Important Point

We do **not** regenerate the complete file using Babel Generator.

Instead, we use the AST only to find the position.

Then we insert text into the original source code.

This helps preserve the existing formatting and blank lines.

```text
AST
 ↓
Find position

Original Source
 ↓
Insert text
 ↓
New Source
```

## 9. Output

Both methods create:

```text
route_new.js
```

The original:

```text
route.js
```

is not modified.

## 10. Simple Difference

| Method | Uses | Best for |
|---|---|---|
| Route | Line number | Simple insertion |
| RouteNode | AST `start` / `end` | Code-aware insertion |

## 11. One-Line Explanation

> v17 reads the original route file, finds where new code should be inserted using either a line number or AST position, and generates a new `route_new.js` without changing the original file.
