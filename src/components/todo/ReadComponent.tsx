import { useEffect, useState } from 'react'
import { getTodo, deleteTodo } from '../../api/todo'
import { useNavigate } from 'react-router-dom'

export default function ReadComponent({ tno }: { tno: number }) {
    const [todo, setTodo] = useState<{ tno: number; title: string } | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        getTodo(tno).then(res => setTodo(res.data))
    }, [tno])

    const handleDelete = async () => {
        if (!window.confirm('삭제하시겠습니까?')) return
        await deleteTodo(tno)
        alert('삭제 완료')
        navigate('/todo/list')
    }

    if (!todo) return <div className="text-center">로딩 중...</div>

    return (
        <div className="max-w-xl mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold">📋 할 일 상세</h2>
            <div className="border p-4 rounded shadow">
                <p><strong>번호:</strong> {todo.tno}</p>
                <p><strong>제목:</strong> {todo.title}</p>
            </div>
            <div className="flex gap-2">
                <button onClick={() => navigate('/todo/list')} className="bg-gray-200 px-4 py-2 rounded">
                    목록으로
                </button>
                <button onClick={() => navigate(`/todo/edit/${todo.tno}`)} className="bg-green-500 text-white px-4 py-2 rounded">
                    수정
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
                    삭제
                </button>
            </div>
        </div>
    )
}
