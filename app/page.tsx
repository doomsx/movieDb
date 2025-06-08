import { fetchMoviesByCategory, getAllCategory } from "@/lib/actions"
import { previewMovies } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"

const page = async () => {
    const categories = getAllCategory();
    const movieResults = await Promise.all(
        categories.map(category => fetchMoviesByCategory(category))
    );

    const [popular, trending, top_rated, upcoming, now_playing] = movieResults;

    return (
        <section className="px-5 space-y-5">
            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1>Popular</h1>
                    <Link href="/movies/popular">See More...</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {popular.results.slice(0, 5).map((data: previewMovies) => (
                        <div key={data.id} className="">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`}
                                alt=""
                                width={300}
                                height={300}
                            />
                            <h1 className="text-xl font-bold text-center">{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1>Trending</h1>
                    <Link href="/movies/trending">See More...</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {trending.results.slice(0, 5).map((data: previewMovies) => (
                        <div key={data.id} className="">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`}
                                alt=""
                                width={300}
                                height={300}
                            />
                            <h1 className="text-xl font-bold text-center">{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1>Top Rated</h1>
                    <Link href="/movies/top-rated">See More...</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {top_rated.results.slice(0, 5).map((data: previewMovies) => (
                        <div key={data.id} className="">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`}
                                alt=""
                                width={300}
                                height={300}
                            />
                            <h1 className="text-xl font-bold text-center">{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1>Upcoming</h1>
                    <Link href="/movies/upcoming">See More...</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {upcoming.results.slice(0, 5).map((data: previewMovies) => (
                        <div key={data.id} className="">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`}
                                alt=""
                                width={300}
                                height={300}
                            />
                            <h1 className="text-xl font-bold text-center">{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <h1>Now Playing</h1>
                    <Link href="/movies/now-playing">See More...</Link>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                    {now_playing.results.slice(0, 5).map((data: previewMovies) => (
                        <div key={data.id} className="">
                            <Image
                                src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`}
                                alt=""
                                width={300}
                                height={300}
                            />
                            <h1 className="text-xl font-bold text-center">{data.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page
