export const generateCode = (source, ast) => {

    const startComment = "// This is starting\n";

    const endComment = "\n// This is ending";

    const body = ast.program.body;

    if (body.length === 0) {
        return source;
    }

    const firstNode = body[0];

    const lastNode = body[body.length - 1];

    const startPosition = firstNode.start;

    const endPosition = lastNode.end;

    const before = source.slice(0, startPosition);

    const originalCode = source.slice(
        startPosition,
        endPosition
    );

    const after = source.slice(endPosition);

    return (
        before +
        startComment +
        originalCode +
        endComment +
        after
    );
};