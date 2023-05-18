// import React from "react";
// import renderer from "react-test-renderer";
// import Todo from "./Todo";
// import { Provider } from "react-redux";
// import store from '../../../store'
// import { Draggable } from 'react-beautiful-dnd';
// import { DragDropContext} from 'react-beautiful-dnd';
// const props = {
//     id: "1",
//     index: 0,
//     isCompleted: false,
    
//   };
// describe("Todo", () => {
//     it("should renders correctly", () => {
//       const tree = renderer
//         .create(
//           <Provider store={store}>
//             <DragDropContext>
//             {/* <Droppable> */}
//             {/* <Draggable> */}
//             <Todo {...props}/>
//             {/* </Draggable> */}
//             {/* </Droppable> */}
//             </DragDropContext>
//           </Provider>
//         )
//         .toJSON();
//       expect(tree).toMatchSnapshot();
//     })});
