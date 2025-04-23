import { useEffect, useState } from 'react'
import { getTodo, updateTodo } from '../../api/todo'
import { useNavigate } from 'react-router-dom'

export default function EditComponent({ tno }: { tno: number }) {
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        getTodo(tno).then(res => setTitle(res.data.title))
    }, [tno])

    const handleUpdate = async () => {
        await updateTodo(tno, { title })
        alert('수정 완료')
        navigate(`/todo/read/${tno}`)
    }

    return (
        <div className="max-w-xl mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold">🛠️ 할 일 수정</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border p-3 rounded shadow"
            />
            <div className="flex gap-2">
                <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
                    수정
                </button>
                <button onClick={() => navigate('/todo/list')} className="bg-gray-200 px-4 py-2 rounded">
                    목록으로
                </button>
            </div>
        </div>
    )
}
