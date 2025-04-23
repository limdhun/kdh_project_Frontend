// src/components/auth/LoginForm.tsx
import { useState } from 'react'

interface Props {
    onLogin: (username: string, password: string) => void
}

export default function LoginForm({ onLogin }: Props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="max-w-sm mx-auto p-4 w-full">
            <input
                type="text"
                className="w-full border p-2 mb-2 rounded"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="w-full border p-2 mb-4 rounded"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 w-full rounded"
                onClick={() => onLogin(username, password)}
            >
                로그인
            </button>
        </div>
    )
}
