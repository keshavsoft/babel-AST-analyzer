export const astMiddleware = (ast) => {

    const body = ast.program.body;

    if (body.length === 0) {
        return ast;
    }

    // Add starting comment to AST
    body[0].leadingComments = [
        {
            type: "CommentLine",
            value: " This is starting"
        }
    ];

    // Add ending comment to AST
    ast.program.trailingComments = [
        {
            type: "CommentLine",
            value: " This is ending"
        }
    ];

    return ast;
};