const transform = ({ sourceRouteCode, insertions }) => {
    
    const insertNode = insertions[0];

    const newCode =
        sourceRouteCode.slice(0, insertNode.start) +
        insertNode.insertText +
        "\n\n" +
        sourceRouteCode.slice(insertNode.start);
    
    return newCode;
};

export { transform };