import { IMAGE_URL } from "@/lib/actions"
import { MovieDetailsType } from "@/lib/types"
import Image from "next/image"

const MovieDetails = ({ movieDetails }: { movieDetails: MovieDetailsType }) => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-2xl font-bold">{movieDetails.original_title}</h1>
                <p className="font-medium">Release date: {movieDetails.release_date}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="md:w-1/4">
                    <Image
                        src={`${IMAGE_URL}${movieDetails.poster_path || movieDetails.backdrop_path}`}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="space-y-5 md:w-3/4">
                    <div className="flex flex-col gap-1">
                        <h2 className="font-semibold text-lg">Overview</h2>
                        <p>{movieDetails.overview}</p>
                    </div>
                    <div>
                        <p>Rating: {movieDetails.vote_average} ({movieDetails.vote_count})</p>
                        <div className="flex flex-row gap-3 mt-1 items-center">
                            <p>Genres:</p>
                            {movieDetails.genres.map((genre) => (
                                <p key={genre.id} className="border border-gray-800 px-1 rounded-xl text-sm">
                                    {genre.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails
