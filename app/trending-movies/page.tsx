import Card from '@/components/Card';
import { trendingMovies } from '@/lib/actions';
import { movies } from '@/lib/types';
import React from 'react'
import Link from 'next/link'

const TrendingMovies = async () => {
    const movieList = await trendingMovies()
    console.log(movieList)
    return (
        <section className='mt-10 p-6'>
            <h1 className='text-center text-5xl font-bold'>Trending Movies</h1>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
                {movieList.map((movie: movies) =>
                    <Link key={movie.id} href={`/trending-movies/${movie.id}`}>
                        <Card movie={movie} />
                    </Link>
                )}
            </div>
        </section>
    )
}

export default TrendingMovies
