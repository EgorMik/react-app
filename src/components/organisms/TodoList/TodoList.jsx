import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { filters, dragAndDropSave } from '../../../store/todoSlice';
import Todo from '../../molecules/Todo/Todo';
import Footer from '../../molecules/FooterList/Footer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styles from './List.module.css';

const TodoList = ({displayStyle}) =>{
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector((state) => state.todos.filterBy);
    const dispatch = useDispatch();
    const filteredTodo = () => {
      if(filter === filters.COMPLETED) {
        const newTodos = todos.filter(todo => todo.completed);
        return [...newTodos]
      }
        if(filter === filters.NOT_COMPLETED) {
        const newTodos = todos.filter(todo => !todo.completed)
        return [...newTodos]
      }
        return [...todos];
      };
      const onDragEndHandler = (result) => {
        const { destination, source } = result;
        if (!destination) {
          console.log(destination);
          return;
        }
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        if (filter === "NOT_COMPLETED" || filter === "COMPLETED") {
          const todosUpdated = Array.from(filteredTodo());
          const [reorderedTodo] = todosUpdated.splice(source.index, 1);
          todosUpdated.splice(destination.index, 0, reorderedTodo);
          if (filter  === filters.NOT_COMPLETED) {
            const checked = todos.filter((todo) => todo.completed === true);
            const finallTodoList = checked.concat(todosUpdated);
            dispatch(dragAndDropSave(finallTodoList));
            return;
          }
        }
        const todosUpdated = Array.from(todos);
        const [reorderedTodo] = todosUpdated.splice(source.index, 1);
        todosUpdated.splice(destination.index, 0, reorderedTodo);
    
        dispatch(dragAndDropSave(todosUpdated));
      };
    return (
      <div className="list">
      <div className={styles.list_box}>
      <DragDropContext onDragEnd={onDragEndHandler}>
      <Droppable droppableId="todos">
      {(provided) => (
    <ul {...provided.droppableProps} ref={provided.innerRef} className="dodo-list">
        {filteredTodo().map((item,index) => (
            
                <Todo
                    key={item.id}
                    id={item.id}
                    completed={item.completed}
                    text ={item.text}
                    index={index}
                />
        ))}
      {provided.placeholder}
    </ul>
    )}
    </Droppable>
    </DragDropContext>
    
      </div>
      <Footer displayStyle={displayStyle}/>
      </div>    
);
};
export default TodoList;