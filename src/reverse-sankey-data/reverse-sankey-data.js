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

    const toNode = {
      name: target,
      sequence: 2,
      next: null,
      value,
    };

    acc[target] = toNode;

    const fromNode = {
      name: source,
      sequence: 1,
      next: [toNode],
      value,
    };

    acc[source] = fromNode;

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
