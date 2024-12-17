import React from 'react'
import useFetchTodos from '../mainQueries/useFetchTodos'
import TodoPage from './TodoItem'

const TodosPage:React.FC = () => {
    const {data, error, isLoading} = useFetchTodos()
    if(error) return <h3>{error.message}</h3>
    if(isLoading) return <h3>Loading...</h3>
  return (
    <div>
        <TodoPage todos={data}/>
    </div>
  )
}

export default TodosPage
