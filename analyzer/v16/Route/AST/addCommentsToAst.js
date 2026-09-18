const StartFunc = (ast) => {

    const nodes = ast.program.body;

    if (!nodes.length) return ast;

    nodes[0].leadingComments = [
        {
            type: "CommentLine",
            value: " This is starting"
        }
    ];

    ast.program.trailingComments = [
        {
            type: "CommentLine",
            value: " This is ending"
        }
    ];

    return ast;
};
export { StartFunc };