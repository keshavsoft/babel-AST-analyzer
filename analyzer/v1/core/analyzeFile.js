import fs from "node:fs";
import path from "node:path";

import {
    parseJavaScriptFile
} from "./parseJavaScriptFile.js";

import {
    walkAst
} from "./walkAst.js";

export function analyzeFile(
    filePath,
    sourceDir
) {
    const relativePath =
        path.relative(
            sourceDir,
            filePath
        );

    try {
        const source =
            fs.readFileSync(
                filePath,
                "utf8"
            );

        const ast =
            parseJavaScriptFile(
                source
            );

        const result = {
            file: relativePath,
            totalNodes: 0,
            nodeTypes: {}
        };

        walkAst(
            ast.program,
            result
        );

        return result;

    } catch (error) {

        return {
            file: relativePath,
            error: error.message
        };
    }
}