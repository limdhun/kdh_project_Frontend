import { Routes, Route } from 'react-router-dom'
import AddPage from '../pages/todo/AddPage'
import ListPage from '../pages/todo/ListPage'
import ReadPage from '../pages/todo/ReadPage'
import EditPage from '../pages/todo/EditPage'
import LoginPage from '../pages/auth/LoginPage'
import PrivateRoute from '../components/common/PrivateRoute'

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/todo/list" element={<ListPage />} /> {/* ✅ 공개 */}
            <Route path="/todo/add" element={<PrivateRoute><AddPage /></PrivateRoute>} />
            <Route path="/todo/read/:tno" element={<PrivateRoute><ReadPage /></PrivateRoute>} />
            <Route path="/todo/edit/:tno" element={<PrivateRoute><EditPage /></PrivateRoute>} />
        </Routes>
    )
}
