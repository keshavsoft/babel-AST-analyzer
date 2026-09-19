import fs from "fs";

const writeFile = (outPath, data) => {
    fs.writeFileSync(outPath, data, "utf8");
};

export { writeFile };