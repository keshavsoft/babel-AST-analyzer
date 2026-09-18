import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const appPath = path.join(__dirname, "..","App","app.js");
export const newAppPath = path.join(
    __dirname,
    "..","App","app_new.js"
);

export const RoutePath = path.join(__dirname, "..","Route","route.js");
export const newRoutePath = path.join(
    __dirname,
    "..","Route","route_new.js"
);

export const nodeTypePath = path.join(
    __dirname,
    "..",
    "node_types.json"
);