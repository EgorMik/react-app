import { createSlice} from '@reduxjs/toolkit';

    export const filters = {
        ALL: "ALL",
        COMPLETED: "COMPLETED",
        NOT_COMPLETED: "NOT_COMPLETED"
    }
    const localStorageTodos = JSON.parse(localStorage.getItem('todo'));

    if (!localStorageTodos) {
    const initalTodos = {
        todos: [],
        filterBy:filters.ALL
    };
    localStorage.setItem('todo', JSON.stringify(initalTodos));
    }

    
const todoSlice = createSlice({
    name:'todos',
    initialState:  JSON.parse(localStorage.getItem('todo')) !== null
    ? JSON.parse(localStorage.getItem('todo'))
    : { todos: [], filterBy:filters.ALL },
    reducers:{
        addTodo(state, action){
            state.todos.push(action.payload)
            localStorage.setItem('todo', JSON.stringify(state));
       },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
           
            localStorage.setItem('todo', JSON.stringify(state));
        },
        toggleComplete(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
            localStorage.setItem('todo', JSON.stringify(state));
        },
        filterBy(state, action){
            state.filterBy = action.payload;
        },
        clearComplited(state, action){
            state.todos = state.todos.filter(todo => todo.completed !== action.payload);
            localStorage.setItem('todo', JSON.stringify(state));
        },
        dragAndDropSave(state, action) {
            state.todos = action.payload;
            localStorage.setItem('todo', JSON.stringify(state));
          },
    }
});
export const {addTodo,removeTodo,toggleComplete,filterBy,clearComplited,dragAndDropSave} = todoSlice.actions;
export default todoSlice.reducer;
