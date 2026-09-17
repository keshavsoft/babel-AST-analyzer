export const createAstJson = (ast, source) => {

    const output = [];

    let previousEnd = 0;

    ast.program.body.forEach((node) => {

        output.push({

            type: node.type,

            start: node.start,

            end: node.end,

            before: source.slice(
                previousEnd,
                node.start
            ),

            text: source.slice(
                node.start,
                node.end
            ),

            raka:
                node.source?.value ||
                null,

            poka:
                node.specifiers?.[0]?.local?.name ||
                node.declarations?.[0]?.id?.name ||
                null,

            routePath:
                node.expression?.arguments?.[0]?.value ||
                null,

            routeHandler:
                node.expression?.arguments?.[1]?.name ||
                null
        });

        previousEnd = node.end;

    });

    return output;
};