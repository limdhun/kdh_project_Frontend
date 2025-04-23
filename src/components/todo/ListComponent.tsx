import { Link } from 'react-router-dom'

interface Todo {
    tno: number
    title: string
}

interface Props {
    todos: Todo[]
}

export default function ListComponent({ todos }: Props) {
    return (
        <ul className="grid gap-4">
            {todos.map((todo) => (
                <li
                    key={todo.tno}
                    className="p-4 bg-white rounded-lg shadow flex justify-between items-center"
                >
                    <span className="text-lg font-medium">{todo.title}</span>
                    <div className="flex gap-2 text-sm">
                        <Link to={`/todo/read/${todo.tno}`} className="text-blue-500 hover:underline">보기</Link>
                        <Link to={`/todo/edit/${todo.tno}`} className="text-green-500 hover:underline">수정</Link>
                    </div>
                </li>
            ))}
        </ul>
    )
}
