import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 p-4">
                {children}
            </main>
            <Footer />
        </>
    )
}
