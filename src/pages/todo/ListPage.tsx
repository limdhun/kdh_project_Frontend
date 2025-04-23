import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // ✅ 추가
import { getTodos } from '../../api/todo'
import ListComponent from '../../components/todo/ListComponent'

interface Todo {
    tno: number
    title: string
}

export default function ListPage() {
    const [allTodos, setAllTodos] = useState<Todo[]>([])
    const [page, setPage] = useState(1)
    const size = 5
    const navigate = useNavigate() // ✅ 추가

    useEffect(() => {
        getTodos().then(res => setAllTodos(res.data))
    }, [])

    const start = (page - 1) * size
    const currentTodos = allTodos.slice(start, start + size)
    const totalPages = Math.ceil(allTodos.length / size)

    return (
        <div className="space-y-6 max-w-3xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Todo 목록</h2>
                <button
                    onClick={() => navigate('/todo/add')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    ➕ 새로운 Todo 추가
                </button>
            </div>

            <ListComponent todos={currentTodos} />

            <div className="flex justify-center gap-2">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    ◀
                </button>

                {Array.from({ length: totalPages }, (_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setPage(idx + 1)}
                        className={`px-3 py-1 rounded ${
                            page === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    ▶
                </button>
            </div>
        </div>
    )
}
