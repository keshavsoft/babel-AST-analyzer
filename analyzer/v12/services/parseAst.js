import parser from "@babel/parser";

export const parseAst = (code) => {

    return parser.parse(code, {
        sourceType: "unambiguous"
    });

};