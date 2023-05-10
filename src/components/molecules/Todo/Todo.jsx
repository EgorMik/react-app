import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../../../store/todoSlice';
import { Draggable } from 'react-beautiful-dnd';

const Todo = ({ id, text, completed, index}) => {
  const dispatch = useDispatch();
  
  return (
    <Draggable key={id} draggableId={id} index={index}>
    {(provided) => (
    <li 
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}>
        <em onClick={() => dispatch(toggleComplete({ id }))} className={completed ? 'selected' : null}></em>
        <p  onClick={() => dispatch(toggleComplete({ id }))} style={{
          textDecoration: completed
          ? 'line-through'
            : 'none', color: completed ? 'grey':'black'
        }}>
        {text}
      </p>
                <span onClick={() => dispatch(removeTodo({id}))}>X</span>
    </li>
    )}
    </Draggable>
  );
};
export default Todo;