import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const appPath = path.join(
    __dirname,
    "..",
    "app.js"
);

export const astPath = path.join(
    __dirname,
    "..",
    "app_ast.json"
);