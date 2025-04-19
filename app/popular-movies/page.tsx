import Card from '@/components/Card';
import { popularMovies } from '@/lib/actions';
import { movies } from '@/lib/types';
import React from 'react'

const PopularMovies = async () => {
    const movieList = await popularMovies()
    return (
        <section>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {movieList.map((movie: movies) =>
                    <Card key={movie.id} movie={movie} />
                )}
            </div>
        </section>
    )
}

export default PopularMovies
