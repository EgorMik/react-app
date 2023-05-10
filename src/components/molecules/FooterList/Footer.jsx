import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterBy, filters, clearComplited } from '../../../store/todoSlice';

const Footer= ({displayStyle })=> {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    return (
        <div className="footer">
          <div className="left">
            <p>{Object.keys(todos.todos.filter(e=>e.completed === false)).length} items left</p>
            </div>
            <div className="middle">
        <button onClick={() => dispatch(filterBy(filters.ALL))}>All</button>
        <button onClick={() => dispatch(filterBy(filters.COMPLETED))} >Completed</button>
        <button onClick={() => dispatch(filterBy(filters.NOT_COMPLETED))} >
          Active
        </button>
        </div>
        <div className="right">
        <button onClick={() => dispatch(clearComplited(true))} >
          Clear Compleated
        </button>
        </div>
      </div>
    );
  }
  export default Footer;