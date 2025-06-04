import { popularMovies, trendingMovies } from "@/lib/actions"
import { previewMovies} from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
    const trending = await trendingMovies()
    const popular = await popularMovies()
    return (
        <>
            <section className="bg-black text-white p-6">
                <h1 className="font-black text-3xl md:text-5xl text-center">Welcome to MovieHub</h1>
                <p className="text-center text-xl md:text-3xl">Discover the latest trending and popular movies</p>
            </section>

            <section className="p-6">
                <div className="flex justify-between items-center gap-3">
                    <h2 className="text-2xl font-bold">Trending Movies</h2>
                    <Link href='/trending-movies' className="underline">See More</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                    {trending.slice(0, 5).map((movie: previewMovies) => (
                        <div key={movie.id} className="p-4 my-2">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                                alt={movie.title}
                                width={300}
                                height={300}
                            />
                            <div className="my-2">
                                <h3 className="text-center">{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="p-6">
                <div className="flex justify-between items-center gap-3">
                    <h2 className="text-2xl font-bold">Popular Movies</h2>
                    <Link href='/popular-movies' className="underline">See More</Link>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                    {popular.slice(0, 5).map((movie: previewMovies) => (
                        <div key={movie.id} className="p-4 my-2">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                                alt={movie.title}
                                width={300}
                                height={300}
                            />
                            <div className="my-2">
                                <h3 className="text-center">{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
