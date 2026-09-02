import path from "node:path";

export const PROJECT_ROOT = process.cwd();

export const BASE_FILE = "app.js";

export const BASE_FILE_PATH = path.join(
    PROJECT_ROOT,
    "src",
    BASE_FILE
);

export const SOURCE_DIR = path.join(
    PROJECT_ROOT,
    "src"
);

export const OUTPUT_DIR = path.join(
    PROJECT_ROOT,
    "dist"
);

export const OUTPUT_FILE = path.join(
    OUTPUT_DIR,
    "project-ast.json"
);

export const IGNORE_DIRS = new Set([
    "node_modules",
    ".git",
    ".vscode",
    "dist"
]);