import { useState } from 'react'
import { addTodo } from '../../api/todo'
import { useNavigate } from 'react-router-dom'

export default function AddComponent() {
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    const handleAdd = async () => {
        if (!title.trim()) {
            alert('할 일을 입력해주세요.')
            return
        }

        try {
            await addTodo({ title })
            alert('등록 완료')
            navigate('/todo/list')
        } catch (err) {
            console.error(err)
            alert('등록 실패')
        }
    }

    return (
        <div className="max-w-xl mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold">✏️ 할 일 등록</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="할 일을 입력하세요"
                className="w-full border p-3 rounded shadow"
            />
            <div className="flex gap-2">
                <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
                    등록
                </button>
                <button onClick={() => navigate('/todo/list')} className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
                    목록으로
                </button>
            </div>
        </div>
    )
}
