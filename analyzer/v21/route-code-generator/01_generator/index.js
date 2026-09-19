import { readRouteFile } from "./1-file-manager/read_route.js";

import { readAstFile } from "./1-file-manager/read_ast_json.js";

import { writeFile } from "./1-file-manager/write_route_new.js";

import { transform } from "./2-transform/transform-route.js";


const StartFunc = () => {

    const sourceRouteCode = readRouteFile();

    const insertions = readAstFile();

    const newCode = transform({ sourceRouteCode, insertions });

    writeFile(newCode);

    console.log("route-new.js created successfully");
};

export { StartFunc };