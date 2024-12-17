import $Todos from "../http/axios";


export default async function FetchTodos() {
    const res = await $Todos.get('/todos')
    return res.data
}