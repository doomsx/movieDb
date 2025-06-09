import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const categories = [
        { key: "popular", label: "Popular" },
        { key: "trending", label: "Trending" },
        { key: "top-rated", label: "Top Rated" },
        { key: "upcoming", label: "Upcoming" },
        { key: "now-playing", label: "Now Playing" },
    ];
    return (
        <nav className='flex justify-between p-2'>
            <div>
                <Link href='/'>
                    <h1 className="text-xl ">MovieDb</h1>
                </Link>
            </div>
            <div className="flex gap-3">
                {categories.map((cat) => (
                    <Link href={`/movies/${cat.key}`} key={cat.key} className="underline">{cat.label}</Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
