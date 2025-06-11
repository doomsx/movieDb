"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import burger from "@/public/burger.svg"
import close from "@/public/close.svg"

const Navbar = () => {
    const nav = useRef<HTMLHtmlElement | null>(null)

    const openNav = () => {
        if (nav.current) {
            nav.current.classList.toggle("hidden");
        }
    };

    const categories = [
        { key: "popular", label: "Popular" },
        { key: "trending", label: "Trending" },
        { key: "top-rated", label: "Top Rated" },
        { key: "upcoming", label: "Upcoming" },
        { key: "now-playing", label: "Now Playing" },
    ];

    return (
        <header className='bg-gray-800 flex justify-between items-center px-2 py-3'>
            <Link href='/'>
                <h1 className="text-xl text-white">MovieDb</h1>
            </Link>

            <nav ref={nav} className="hidden bg-gray-800 fixed top-0 right-0 z-50 h-screen w-3/4 md:relative md:h-auto md:w-auto md:flex md:flex-row gap-3">
                <Image
                    src={close}
                    onClick={openNav}
                    alt=''
                    width={40}
                    height={40}
                    className='block right-0 fixed px-2 py-3 md:hidden'
                />
                <ul className='flex flex-col gap-5 mt-10 md:flex-row md:mt-0'>
                    {categories.map((cat) => (
                        <li key={cat.key}>
                            <Link
                                href={`/movies/${cat.key}`}
                                className="text-white">{cat.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Image
                src={burger}
                alt=""
                onClick={openNav}
                width={40}
                height={40}
                className='block md:hidden'
            />
        </header>
    )
}

export default Navbar
