import Image from "next/image"
import { movies } from "@/lib/types"
const API_KEY = process.env.TMDB_API_KEY

export default async function Home() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    if (!response.ok) {
        throw new Error("error fetching data");
    }

    const data = await response.json()
    const movieList = data.results

    console.log(movieList)

    return (
        <section>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {movieList.map((movie: movies) =>
                    <div key={movie.id} className="border border-black p-4 my-5">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            layout="responsive"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-base md:text-xl font-bold text-center">{movie.title}</h2>
                        <p className="text-center">{movie.release_date}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
