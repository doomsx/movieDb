import { movies } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const Card = ({ movie }: { movie: movies }) => {
    return (
        <div className='border border-black p-4 my-2'>
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                alt={movie.title}
                width={300}
                height={300}
            />
            <div className="my-2">
                <h2 className='text-base md:text-xl font-bold text-center'>{movie.title}</h2>
                <p className='text-center'>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default Card
