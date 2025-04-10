import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <Link href='/popular-movies' className="underline text-blue-500">Popular Movies</Link>
            <Link href='/login' className="underline text-blue-500">Login</Link>
        </div>
    )
}

export default Navbar
