import $Todos from "../http/axios";

export default async function FetchTodo(id: string) {
    const res = await $Todos.get(`/todos/${id}`)
    return res.data
}