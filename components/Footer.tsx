import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer>{currentYear}</footer>
    )
}

export default Footer
