import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterBy, filters, clearComplited } from '../../../store/todoSlice';
import styles from './Footer.module.scss';
const Footer= ()=> {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const filter = useSelector((state) => state.todos.filterBy);
    return (
        <div className={styles.footer}>
          <div>
            <p>{Object.values(todos.todos).filter(e=>e.completed === false).length} items left</p>
            </div>
          <div>
        <button onClick={() => dispatch(filterBy(filters.ALL))} className={filter=== "ALL" ? styles.active : styles.unactive }>All</button>
        <button onClick={() => dispatch(filterBy(filters.COMPLETED))} className={filter=== "COMPLETED" ? styles.active : styles.unactive }>Completed</button>
        <button onClick={() => dispatch(filterBy(filters.NOT_COMPLETED))} className={filter=== "NOT_COMPLETED" ? styles.active : styles.unactive }>
          Active
        </button>
        </div>
        <div>
        <button 
        className={styles.unactive}
        onClick={() => dispatch(clearComplited(true))} >
          Clear Compleated
        </button>
        </div>
      </div>
    );
  }
 
  export default Footer;