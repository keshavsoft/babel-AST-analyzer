const transform = ({ sourceCode, insertions }) => {

    const insertNode = insertions[0];

    const newCode =
        sourceCode.slice(0, insertNode.start) +
        insertNode.insertText +
        "\n\n" +
        sourceCode.slice(insertNode.start);
    
    return newCode;
};

export { transform };