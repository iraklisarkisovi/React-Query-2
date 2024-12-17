import React from 'react'
import { ITodo } from '../Interfaces/InterfaceMain'
import { useNavigate } from 'react-router-dom'

interface todo {
    todos: ITodo[] | undefined
}

const TodoItem:React.FC<todo> = ({ todos }) => {
  const navigate = useNavigate()
  return (
    <div>
      {todos?.map(({ id, title, isCompleted }) => (
        <div
          onClick={() => navigate(`/todos/${id}`)}
          className="border cursor-pointer border-gray-50"
        >
          <h1>{title}</h1>
          <h2>{isCompleted ? "true" : "false"}</h2>
        </div>
      ))}
    </div>
  );
}

export default TodoItem
