// src/pages/auth/LoginPage.tsx
import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth' // 🔁 상대경로로
import LoginForm from '../../components/auth/LoginForm'

export default function LoginPage() {
    const navigate = useNavigate()

    const handleLogin = async (username: string, password: string) => {
        try {
            const res = await login(username, password)
            const token = res.data.token

            sessionStorage.setItem('ACCESS_TOKEN', token)

            navigate('/todo/list')
        } catch (e) {
            alert('로그인 실패 😢')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">로그인</h2>
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    )
}
