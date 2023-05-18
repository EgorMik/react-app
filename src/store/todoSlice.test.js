import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {addTodo,removeTodo,filterBy, clearComplited, filters} from "./todoSlice";

const mock = {
  id: "4",
  text: "mock",
  completed: true,
};

const setup = (
  initialState = { todos: [], filterBy: "ALL" }
) => {
  return configureStore({
    reducer: {
      todos: todoReducer
    },
    todos: {
      todos: initialState,
    },
  });
};

describe("todoSlice", () => {
  test("creating a store", () => {
    // Arrange
    const store = configureStore({
      reducer: {
        todos: todoReducer,
      },
    });
    // Assert
    expect(store.getState().todos).toEqual({
        todos: [],
        filterBy:"ALL"
        });
    })

    test("loading state from local storage", () => {
        // Arrange
        const state = {
            todos: {
            todos: [
                {
                id: "34lf-44d",
                text:"test message",
                completed: true,
                }
            ],
            filterBy: "ALL",
            }
        };
        localStorage.setItem('todo', JSON.stringify(state.todos));
    
        const localStorageTodo = JSON.parse(localStorage.getItem('todo'));
        // Assert
        expect(localStorageTodo).toEqual(state.todos);
        localStorage.removeItem("todo");
    });
    

    test("adding a new todo", () => {
          // Arrange
          const store = setup();
      
          // Act
          store.dispatch(
            addTodo({
              text: "test todo",
            })
          );
          const todos = store.getState();
      
          // Assert
          expect(todos.todos.todos).toHaveLength(1);
          expect(todos.todos.todos[0].text).toEqual("test todo");
    });
      
    test("removing a todo", () => {
      // Arrange
      const store = setup({
        todos: [mock],
      });
  
      // Act
      store.dispatch(
        removeTodo({
          id: mock.id,
        })
      );
      const todos = store.getState();
  
      // Assert
      expect(todos.todos.todos).toHaveLength(0);
    });

    test("setting the filter", () => {
      // Arrange
      const store = setup();
  
      // Act
      store.dispatch(filterBy(filters.COMPLETED));
  
      // Assert
      const filterValue = store.getState().todos.filterBy;
      expect(filterValue).toEqual(filters.COMPLETED);
    }); 

    test("clearing comleated todos", () => {
      // Arrange
      const store = setup({
        todos: [mock],
      });
  
      // Act
      store.dispatch(
        clearComplited(true)
      );
      const todos = store.getState();
  
      // Assert
      expect(todos.todos.todos).toHaveLength(0);
    });

    
})