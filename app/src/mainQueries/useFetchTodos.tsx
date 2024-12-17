import { useQuery } from "@tanstack/react-query"
import FetchTodos from "../API/FetchTodos"
import { ITodo } from "../Interfaces/InterfaceMain"

const useFetchTodos = () => {
    const result = useQuery<ITodo[]>({
        queryKey: ['todos'],
        queryFn: FetchTodos
    })

  return result
}

export default useFetchTodos
