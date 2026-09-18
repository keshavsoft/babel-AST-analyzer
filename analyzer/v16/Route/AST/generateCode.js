const StartFunc = (sourceCode, ast) => {

    const nodes = ast.program.body;

    if (!nodes.length) return sourceCode;

    const firstNode = nodes[0];
    const lastNode = nodes[nodes.length - 1];

    return (
        "// This is starting\n" +
        sourceCode.slice(0, firstNode.start) +
        sourceCode.slice(firstNode.start, lastNode.end) +
        "\n// This is ending\n" +
        sourceCode.slice(lastNode.end)
    );
};

export { StartFunc };