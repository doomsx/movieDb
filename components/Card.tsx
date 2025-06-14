import { IMAGE_URL } from '@/lib/actions'
import { movies } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

const Card = ({ movie }: { movie: movies }) => {
    return (
        <div className='p-4 my-2'>
            <Image
                src={`${IMAGE_URL}${movie.poster_path || movie.backdrop_path}`}
                alt={movie.title}
                width={300}
                height={300}
            />
            <div className="my-2">
                <h2 className='text-base md:text-lg font-bold text-center'>{movie.title}</h2>
                <p className='text-center'>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default Card
