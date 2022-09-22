export const reverseSankeyData = (flowsData) => {
  const nodes = flowsData.reduce((acc, cur, index) => {
    const { source, target, value } = cur;

    // step 1: create a number of flows
    //  each flows consist of nodes and linked in one direction
    //  a1 -> b1 -> c1 | a1 -> b2 -> c3
    // step 2:
    //  group each node

    /**
     *  data structure
     *      basically node is unique
     *
     *      node a1
     *      'a1': {
     *        name: 'a1'
     *        sequence: 0,
     *        next: [node b1, node b2]
     *        value:
     *      }
     *      b1: node b1
     *      {
     *        name: 'b1'
     *        sequence: 1,
     *        next: [node c1]
     *        value:
     *      }
     *
     * */

    // source node

    let fromNode = undefined;
    let isSourceAlreadyExisted = false;

    // source is already existed
    if (acc[source]) {
      fromNode = { ...acc[source], value: acc[source].value + value };
      isSourceAlreadyExisted = true;
    } else {
      fromNode = {
        name: source,
        sequence: 1,
        value,
      };
    }

    // override
    acc[source] = fromNode;

    // target node

    let toNode = undefined;

    if (acc[target]) {
      toNode = { ...acc[target], value: acc[target].value + value };
    } else {
      toNode = {
        name: target,
        sequence: isSourceAlreadyExisted ? fromNode.sequence + 1 : 2,
        value,
      };
    }

    // override
    acc[target] = toNode;

    return acc;
  }, {});

  console.log({
    nodes,
  });

  return Object.keys(nodes).reduce((acc, key) => {
    const { name, sequence, value } = nodes[key];

    if (!acc[sequence]) {
      acc[sequence] = {};
    }

    acc[sequence][name] = value;

    return acc;
  }, {});
};
