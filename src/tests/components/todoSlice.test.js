// import todoSlice, { initialState} from "../../store/todoSlice";
// import { v4 as uuidv4 } from 'uuid';

 
// test("initialize slice with initialValue", () => {
//   expect(todoSlice(initialState)).toBe(initialState);
// });
// describe("tests for ListSlice", () => {
//   test("initialize slice with initialValue", () => {
//     const listSliceInit = todoSlice(initialState);
//     expect(listSliceInit).toBe(initialState);
//   });

//   test("addTodo", () => {
//     const testData = {
//         id: uuidv4(),
//         text: "first list item",
//         completed: false,
//     };

//     const afterReducerOperation = todoSlice(
//       initialState,
//       addTodo(testData)
//     );

//     expect(afterReducerOperation).toStrictEqual({
//       value: [initialState.value, testData],
//     });
//   });
// });