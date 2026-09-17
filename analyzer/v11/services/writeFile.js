import fs from "fs";

export const writeFile = (filePath, code) => {

    fs.writeFileSync(
        filePath,
        code,
        "utf-8"
    );

};