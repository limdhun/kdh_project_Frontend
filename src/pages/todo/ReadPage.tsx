import { useParams } from 'react-router-dom'
import ReadComponent from '../../components/todo/ReadComponent'

export default function ReadPage() {
    const { tno } = useParams()

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">할 일 상세보기</h2>
            <ReadComponent tno={Number(tno)} />
        </div>
    )
}
