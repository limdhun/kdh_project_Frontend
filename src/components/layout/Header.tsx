// src/components/layout/Header.tsx
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('ACCESS_TOKEN') // ✅ 토큰 삭제
        navigate('/login') // ✅ 로그인 페이지로 이동
    }

    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">KDH_TodoApp</h1>
                <nav className="space-x-4 text-sm flex items-center">
                    <Link to="/todo/list" className="hover:underline">Todo</Link>
                    <Link to="/product/list" className="hover:underline">Product</Link>
                    <Link to="/board/list" className="hover:underline">Board</Link>

                    <button
                        onClick={handleLogout}
                        className="ml-4 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
                    >
                        로그아웃
                    </button>
                </nav>
            </div>
        </header>
    )
}
