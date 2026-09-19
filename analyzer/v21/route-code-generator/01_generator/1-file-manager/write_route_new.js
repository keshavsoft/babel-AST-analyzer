import fs from "fs";

const sourceFile = new URL("../../03_output/route-new.js", import.meta.url);

const writeFile = (data) => {
    
    fs.writeFileSync(sourceFile, data, "utf8");
};

export { writeFile };