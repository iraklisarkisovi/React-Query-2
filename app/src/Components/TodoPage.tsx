import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchTodo from '../mainQueries/useFetchTodo'
import TodosItem from './TodosItem'
import { ITodo } from '../Interfaces/InterfaceMain'

const TodoPage:React.FC = () => {
    const {id} = useParams()
    const {data, isLoading, error} = useFetchTodo(id!)
    const { id: todoID, isCompleted, title } = data || ({} as ITodo);

    if(error) return <h3>{error.message}</h3>
    if(isLoading) return <h3>Loading...</h3>
  return (
    <div>
      <TodosItem completed={isCompleted} id={todoID} title={title} />
    </div>
  );
}

export default TodoPage
