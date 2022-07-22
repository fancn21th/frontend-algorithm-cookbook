// const example = {
//   foo: {
//     bar: {
//       baz: {
//         value: 'hello there'
//       }
//     }
//   }
// }
const reducer = function (object, propName) {
  if (object) {
    return object[propName];
  }
  return false;
};

export const getNestedPropByPath = (path) => (obj) =>
  path.split(".").reduce(reducer, obj);
