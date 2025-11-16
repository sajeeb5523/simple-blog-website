import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 right-0 bg-white shadow-md z-50'>
            <nav className='flex justify-center mt-5 mb-5'>
                <ul className='flex justify-between w-1/2'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/blogs"><li>Blogs</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/login"><li>Login</li></Link>
                    <Link href="/register"><li>Register</li></Link>
                </ul>
            </nav>
        </div>
    )
}