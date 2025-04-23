import { useParams } from 'react-router-dom'
import EditComponent from '../../components/todo/EditComponent'

export default function EditPage() {
    const { tno } = useParams()

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">할 일 수정</h2>
            <EditComponent tno={Number(tno)} />
        </div>
    )
}
