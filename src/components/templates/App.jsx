import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import Form from '../molecules/Form/Form';
import Page from '../pages/Page';
import TodoList from '../organisms/TodoList/TodoList';
import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const [text, setText] = useState('');
  const [radio, setRadio] = useState(false);
  const [ displayStyle, setDisplayStyle ] = useState(false);
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({text,radio}));
      setText('');
      setDisplayStyle(true);
    }
  }
  const handleRadio = () => {
    setRadio(!radio);
    }
    
  return (
    <div className="container">
      <Page/>
      <Form
        value={text}
        radio={radio}
        updateText={setText}
        handleRadio={handleRadio}
        handleAction={handleAction}
      />
      <TodoList displayStyle={displayStyle}/>
    </div>
  );
}
export default App;
