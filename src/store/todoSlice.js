import { createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
  }
  
const todoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:JSON.parse(localStorage.getItem('todo')) !== null
        ? JSON.parse(localStorage.getItem('todo'))
        : { todos: [] },
        filterBy: filters.ALL,
    },
    reducers:{
        addTodo(state, action){
            state.todos.push({
            id: uuidv4(),
            text: action.payload.text,
            completed: action.payload.radio,
    })

        localStorage.setItem('todo', JSON.stringify(state.todos));
       },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
           
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },
        toggleComplete(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },
        filterBy(state, action){
            state.filterBy = action.payload;
        },
        clearComplited(state, action){
            state.todos = state.todos.filter(todo => todo.completed !== action.payload);
            localStorage.setItem('todo', JSON.stringify(state.todos));
        },
        dragAndDropSave(state, action) {
            state.todos = action.payload;
          },
    }
});
export const {addTodo,removeTodo,toggleComplete,filterBy,clearComplited,dragAndDropSave} = todoSlice.actions;
export default todoSlice.reducer;
