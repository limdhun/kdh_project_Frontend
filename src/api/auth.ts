// src/api/auth.ts
import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const login = (username: string, password: string) =>
    API.post('/auth/login', { username, password })

export default API
