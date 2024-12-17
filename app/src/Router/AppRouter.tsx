import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TodosPage from '../Components/TodosPage'
import TodoPage from '../Components/TodoItem'
import TodosItem from '../Components/TodosItem'

const AppRouter:React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<TodosPage/>}/>
        <Route path='/todo' element={<TodosPage/>}/>
        <Route path='/todo/:id' element={<TodoPage />}/>
    </Routes>
  )
}

export default AppRouter
