import { useQuery } from "@tanstack/react-query"
import FetchTodo from "../API/FetchTodo"
import { ITodo } from "../Interfaces/InterfaceMain"

const useFetchTodo = (id: string) => {
    const result = useQuery<ITodo>({
        queryKey: ['todo'],
        queryFn: () => FetchTodo(id)
    })
  return result
}

export default useFetchTodo
