import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const isLoggedIn = !!sessionStorage.getItem('ACCESS_TOKEN') // ✅ 로그인 상태 판단

    const handleLogout = () => {
        sessionStorage.removeItem('ACCESS_TOKEN')
        navigate('/login')
    }

    return (
        <header className="bg-blue-600 text-white p-4 shadow">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">KDH_TodoApp</h1>
                <nav className="space-x-4 text-sm flex items-center">
                    <Link to="/todo/list" className="hover:underline">Todo</Link>
                    <Link to="/product/list" className="hover:underline">Product</Link>
                    <Link to="/board/list" className="hover:underline">Board</Link>

                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="ml-4 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
                        >
                            로그아웃
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="ml-4 bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100"
                        >
                            로그인
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
