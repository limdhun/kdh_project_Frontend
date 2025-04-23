import { Navigate } from 'react-router-dom'
import {JSX} from "react";

interface Props {
    children: JSX.Element
}

export default function PrivateRoute({ children }: Props) {
    const token = sessionStorage.getItem('ACCESS_TOKEN')

    return token ? children : <Navigate to="/login" replace />
}
