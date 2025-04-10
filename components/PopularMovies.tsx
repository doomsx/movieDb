import { popularMovies } from '@/lib/actions';
import { movies } from '@/lib/types';
import Image from 'next/image';
import React from 'react'

const PopularMovies = async () => {
    const movieList = await popularMovies()
    console.log(movieList)
    return (
        <section>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {movieList.map((movie: movies) =>
                    <div key={movie.id} className="border border-black p-4 my-5">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
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

export default PopularMovies
