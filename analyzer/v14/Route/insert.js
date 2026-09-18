import fs from "fs";
import parser from "@babel/parser";

const RoutePath = "./route.js";
const newRoutePath = "./route_new.js";

const Run = () => {

    const source = fs.readFileSync(RoutePath, "utf8");

    const ast = parser.parse(source, {
        sourceType: "unambiguous"
    });

    const body = ast.program.body;

    if (!body.length) return;

    // Modify AST
    body[0].leadingComments = [
        { type: "CommentLine", value: " This is starting" }
    ];

    ast.program.trailingComments = [
        { type: "CommentLine", value: " This is ending" }
    ];

    // Preserve original formatting
    const newCode =
        "// This is starting\n" +
        source.slice(0, body[0].start) +
        source.slice(body[0].start, body.at(-1).end) +
        "\n// This is ending\n" +
        source.slice(body.at(-1).end);

    fs.writeFileSync(newRoutePath, newCode, "utf8");

    console.log("route_new.js created");
};

Run();