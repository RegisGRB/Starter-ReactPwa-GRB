import React from 'react';
import Todolist from '../../components/TodoList/TodoList';
import Starter from '../Starter/starter';

const TodoPage = () => {
    return (
      <Starter>
        <Todolist></Todolist>
      </Starter>
    );
};

export default TodoPage;