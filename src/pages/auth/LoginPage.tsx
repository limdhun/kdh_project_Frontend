import { useNavigate } from 'react-router-dom'
import { login } from '../../api/auth'
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
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)] bg-gray-50">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">로그인</h2>
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    )
}
