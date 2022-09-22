import { reverseSankeyData } from "./reverse-sankey-data";

// describe("do not consider data is complete", () => {
//   test("single flow with two nodes", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     const expected = { 1: { foo: 10 }, 2: { bar: 10 } };

//     expect(result).toStrictEqual(expected);
//   });

//   test("single flow with three nodes in a row", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = { 1: { foo: 10 }, 2: { bar: 30 }, 3: { baz: 20 } };

//     expect(result).toStrictEqual(expected);
//   });

//   test("two flows in fork with four nodes in two rows", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//       {
//         source: "foo",
//         target: "foz",
//         value: 20,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = {
//       1: { foo: 30 },
//       2: { bar: 30, foz: 20 },
//       3: { baz: 20 },
//     };

//     expect(result).toStrictEqual(expected);
//   });

//   test("two flows in parallel with four nodes in two rows", () => {
//     const source = [
//       {
//         source: "foo",
//         target: "bar",
//         value: 10,
//       },
//       {
//         source: "bar",
//         target: "baz",
//         value: 20,
//       },
//       {
//         source: "foz",
//         target: "coz",
//         value: 30,
//       },
//       {
//         source: "coz",
//         target: "noz",
//         value: 40,
//       },
//     ];

//     const result = reverseSankeyData(source);

//     console.log({
//       result,
//     });

//     // the data of test case is incomplete, some node is missing in level 1 and level 3
//     const expected = {
//       1: { foo: 10, foz: 30 },
//       2: { bar: 30, coz: 70 },
//       3: { baz: 20, noz: 40 },
//     };

//     expect(result).toStrictEqual(expected);
//   });
// });

describe("do consider data is complete", () => {
  test("data is spread in two levels", () => {
    /*
        / b
      a
        \ c
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "foo",
        target: "baz",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = { 1: { foo: 20 }, 2: { bar: 10, baz: 10 } };

    expect(result).toStrictEqual(expected);
  });

  test("data is in a row", () => {
    /*
      a - b - c
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "bar",
        target: "baz",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = { 1: { foo: 10 }, 2: { bar: 10 }, 3: { baz: 10 } };

    expect(result).toStrictEqual(expected);
  });

  test("data is spread in three levels ", () => {
    /*
            / b (10 ) \
      a (20)            d (20)
            \ c (10) / 
    */

    const source = [
      {
        source: "foo",
        target: "bar",
        value: 10,
      },
      {
        source: "bar",
        target: "coo",
        value: 10,
      },
      {
        source: "foo",
        target: "baz",
        value: 10,
      },
      {
        source: "baz",
        target: "coo",
        value: 10,
      },
    ];

    const result = reverseSankeyData(source);

    console.log({
      result,
    });

    const expected = {
      1: { foo: 20 },
      2: { bar: 10, baz: 10 },
      3: { coo: 20 },
    };

    expect(result).toStrictEqual(expected);
  });

  // test("data is spread in three levels ", () => {
  //   /*

  //         / d
  //       / b
  //     a   \ e
  //       \
  //        \c/ f
  //         \ g
  //   */

  //   const source = [
  //     {
  //       source: "foo",
  //       target: "bar",
  //       value: 10,
  //     },
  //     {
  //       source: "bar",
  //       target: "baz",
  //       value: 10,
  //     },
  //     {
  //       source: "foo",
  //       target: "baz",
  //       value: 10,
  //     },
  //   ];

  //   const result = reverseSankeyData(source);

  //   console.log({
  //     result,
  //   });

  //   const expected = { 1: { foo: 20 }, 2: { bar: 10, baz: 10 } };

  //   expect(result).toStrictEqual(expected);
  // });
});
