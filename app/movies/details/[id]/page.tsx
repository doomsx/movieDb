import MovieDetails from "@/components/MovieDetails"
import { getMovieCredis, getMovieDetails, getMovieImages, getMovieRecommendations, IMAGE_URL } from "@/lib/actions"

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const movieDetails = await getMovieDetails(id)
    // const movieCredits = await getMovieCredis(id)
    // const movieRecommendation = await getMovieRecommendations(id)
    // const movieImages = await getMovieImages(id)

    // console.log(movieCredits)
    // console.log(movieRecommendation)

    return (
        <section className="px-5 py-10">
            <MovieDetails movieDetails={movieDetails} />
        </section>
    )
}

export default page
