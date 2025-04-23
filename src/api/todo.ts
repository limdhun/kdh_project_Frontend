import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

// ✅ 토큰 설정 함수
const authHeader = () => {
    const token = sessionStorage.getItem('ACCESS_TOKEN')
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

export const getTodos = () => API.get('/todos')

export const getTodo = (tno: number) =>
    API.get(`/todos/${tno}`, authHeader()) // ✅

export const updateTodo = (tno: number, todo: { title: string }) =>
    API.put(`/todos/${tno}`, todo, authHeader()) // ✅

export const deleteTodo = (tno: number) =>
    API.delete(`/todos/${tno}`, authHeader()) // ✅

export const addTodo = (todo: { title: string }) =>
    API.post(`/todos`, todo, authHeader()) // ✅
