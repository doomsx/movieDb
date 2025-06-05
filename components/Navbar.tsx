import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-around py-2'>
            <div>
                <Link href='/'>
                    <h1 className="text-xl ">MovieDb</h1>
                </Link>
            </div>
            <div className="flex gap-3">
                <Link href='/movies' className="underline">Movies</Link>
            </div>
        </div>
    )
}

export default Navbar
