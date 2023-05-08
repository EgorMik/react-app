import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../../../store/todoSlice';

const Todo = ({ id, text, completed}) => {
  const dispatch = useDispatch();
  
  return (
    <li >
        <em onClick={() => dispatch(toggleComplete({ id }))} className={completed ? 'selected' : null}></em>
                 <p onChange={() => dispatch(toggleComplete({ id }))} onClick={() => dispatch(toggleComplete({ id }))} style={{
                    textDecoration: completed
                        ? 'line-through'
                         : 'none', color: completed ? 'grey':'black'
                 }}>
                    {text}
                </p>
                <span onClick={() => dispatch(removeTodo({id}))}>X</span>
    </li>
  );
};
export default Todo;