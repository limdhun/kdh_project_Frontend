import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-gray-50">
                <div className="max-w-5xl mx-auto py-4 px-4">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    )
}
