import Card from "@/components/Card"
import { fetchMoviesByCategory } from "@/lib/actions"
import { movies } from "@/lib/types"
import Link from "next/link"

const page = async ({ params }: { params: Promise<{ category: string }> }) => {
    const category = (await params).category
    const data = await fetchMoviesByCategory(category)

    return (
        <section className="uppercase text-center my-10">
            <h1 className="capitalize text-2xl font-bold">{category} movies</h1>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                {data.results.map((movie: movies) => (
                    <Link href={`/movies/details/${movie.id}`} key={movie.id} >
                        <Card movie={movie} />
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default page
