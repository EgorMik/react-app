import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { filters, moveItem } from '../../../store/todoSlice';
import Todo from '../../molecules/Todo/Todo';
import Footer from '../../molecules/FooterList/Footer';


const TodoList = ({displayStyle}) =>{
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector((state) => state.todos.filterBy);
    const dispatch = useDispatch();
    const filteredTodo = () => {
        if(filter === filters.COMPLETED) {
          return todos.filter(todo => todo.completed);
        }
        if(filter === filters.NOT_COMPLETED) {
          return todos.filter(todo => !todo.completed)
        }
        return todos;
      }
    return (
    <ul className="dodo-list">
        {filteredTodo().map((todo,index) => (
            
                <Todo
                    key={todo.id}
                    {...todo}
                    todo={todo}
                    index={index}
                />
        ))}
        <Footer displayStyle={displayStyle}/>
    </ul>
);
};
export default TodoList;