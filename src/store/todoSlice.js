import { createSlice} from '@reduxjs/toolkit';
import TodoList from '../components/organisms/TodoList/TodoList';
export const filters = {
    ALL: "ALL",
    COMPLETED: "COMPLETED",
    NOT_COMPLETED: "NOT_COMPLETED"
  }
const todoSlice = createSlice({
    name:'todos',
    initialState:{
        todos:[],
        filterBy: filters.ALL,
        draggedItemIndex: null
    },
    reducers:{
        addTodo(state, action){
            console.log(state);
            console.log(action);
            state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.text,
            completed: action.payload.radio,
    })

        localStorage.setItem('todo', JSON.stringify(state.todos));
       },
        removeTodo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            var storedTodo = JSON.parse(localStorage.getItem('todo')); 
            for ( var i = 0; i < storedTodo.length; i++ ) {
                if ( storedTodo[i].id === action.payload.id ) {
                    
                    storedTodo.splice(i,1); 
                }
            }
            localStorage.getItem['todo'] = JSON.stringify(storedTodo);
        },
        toggleComplete(state, action){
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        filterBy(state, action){
            state.filterBy = action.payload;
        },
        clearComplited(state, action){
            state.todos = state.todos.filter(todo => todo.completed !== action.payload);
        },
        dragAndDropSave(state, action) {
            state.todos = action.payload;
            localStorage.setItem('todoList', JSON.stringify(state));
          },
    }
});
export const {addTodo,removeTodo,toggleComplete,filterBy,clearComplited,dragAndDropSave} = todoSlice.actions;
export default todoSlice.reducer;
