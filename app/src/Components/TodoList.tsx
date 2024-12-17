import React from 'react'
import { ITodo } from '../Interfaces/InterfaceMain'
import TodosItem from './TodosItem'

interface todo {
    todos: ITodo[] | undefined
}

const TodoList:React.FC<todo> = ({ todos }) => {
  return (
    <div>
      {todos?.map(({ id, title, isCompleted }) => (
        <TodosItem id={id} key={id} completed={isCompleted} title={title} />
      ))}
    </div>
  );
}

export default TodoList
