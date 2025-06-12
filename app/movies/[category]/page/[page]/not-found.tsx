import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Category Not Found
                </h1>
                <p className="text-gray-600 mb-4">
                    The movie category you&apos;re looking for doesn&apos;t exist.
                </p>
                <Link
                    href="/movies/popular"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    View Popular Movies
                </Link>
            </div>
        </div>
    )
}

export default NotFound
