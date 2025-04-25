import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='mt-10 h-5 text-center'>Dominique &copy; {currentYear}</footer>
    )
}

export default Footer
