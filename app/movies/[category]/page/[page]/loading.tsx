const loading = () => {
    return (
        <section className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center mb-8">
                    <div className="flex space-x-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-10 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>

            <header className="text-center mb-8">
                <div className="h-10 bg-gray-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-300 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                        <div className="bg-gray-300 h-64 rounded-xl mb-4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <div className="h-10 bg-gray-300 rounded-lg w-80 animate-pulse"></div>
            </div>
        </section>
    )
}

export default loading
