import fs from "fs";

const inputFile = new URL("./route.js", import.meta.url);
const updateFile = new URL("./insert.json", import.meta.url);
const outputFile = new URL("./route_new.js", import.meta.url);


const Run = () => {

    // Read original file
    const sourceCode = fs.readFileSync(
        inputFile,
        "utf8"
    );

    // Read update JSON
    const updates = JSON.parse(
        fs.readFileSync(updateFile, "utf8")
    );

    // Convert file into lines
    const lines = sourceCode.split("\n");


    // Insert lines from JSON
    updates
        .sort((a, b) => b.lineNumber - a.lineNumber)
        .forEach(({ lineNumber, line }) => {

            lines.splice(
                lineNumber - 1,
                0,
                line
            );

        });


    // Create route_new.js
    fs.writeFileSync(
        outputFile,
        lines.join("\n"),
        "utf8"
    );

    console.log("route_new.js created successfully");
};


Run();