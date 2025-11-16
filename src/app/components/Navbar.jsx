import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-center mt-5'>
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
