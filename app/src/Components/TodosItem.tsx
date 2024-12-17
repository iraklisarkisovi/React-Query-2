import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchTodo from '../mainQueries/useFetchTodo'

interface inter {
    id: number,
    title: string,
    completed: boolean
}

const TodosItem:React.FC<inter> = ({id, title, completed}) => {
  return (
    <div className='border border-gray-50' key={id}>
        <h1>{title}</h1>
        <h1>{completed ? 'done' : 'pending'}</h1>
    </div>
  )
}

export default TodosItem
