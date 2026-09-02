import path from "node:path";

import {
    SOURCE_DIR,
    BASE_FILE,
    OUTPUT_DIR,
    OUTPUT_FILE
} from "./core/config.js";

import {
    getJavaScriptFiles
} from "./core/getJavaScriptFiles.js";

import {
    analyzeFile
} from "./core/analyzeFile.js";

import {
    createReport
} from "./core/createReport.js";

import {
    updateReport
} from "./core/updateReport.js";

import {
    sortNodeTypes
} from "./core/sortNodeTypes.js";

import {
    writeReport
} from "./core/writeReport.js";

import {
    displayReport
} from "./core/displayReport.js";

// ------------------------------------------
// 1. Create project report
// ------------------------------------------

const report =
    createReport(BASE_FILE);

// ------------------------------------------
// 2. Find JavaScript files inside src
// ------------------------------------------

const jsFiles =
    getJavaScriptFiles(
        SOURCE_DIR
    );

// ------------------------------------------
// 3. Keep src/app.js first
// ------------------------------------------

jsFiles.sort((a, b) => {

    if (
        path.basename(a) === BASE_FILE
    ) {
        return -1;
    }

    if (
        path.basename(b) === BASE_FILE
    ) {
        return 1;
    }

    return a.localeCompare(b);
});

// ------------------------------------------
// 4. Analyze every source file
// ------------------------------------------

for (const file of jsFiles) {

    const result =
        analyzeFile(
            file,
            SOURCE_DIR
        );

    updateReport(
        report,
        result
    );
}

// ------------------------------------------
// 5. Sort node types
// ------------------------------------------

sortNodeTypes(report);

// ------------------------------------------
// 6. Write JSON report
// ------------------------------------------

writeReport(
    OUTPUT_DIR,
    OUTPUT_FILE,
    report
);

// ------------------------------------------
// 7. Display result
// ------------------------------------------

displayReport(
    report,
    OUTPUT_FILE
);