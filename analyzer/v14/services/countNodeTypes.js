export const countNodeTypes = (ast) => {

    const typeCounts = {};

    ast.program.body.forEach((node) => {

        const type = node.type;

        if (typeCounts[type]) {
            typeCounts[type]++;
        } else {
            typeCounts[type] = 1;
        }

    });

    return typeCounts;
};