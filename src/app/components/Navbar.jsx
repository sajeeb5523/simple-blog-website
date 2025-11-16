import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className='flex justify-center mt-5'>
                <ul className='flex justify-between w-1/2'>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>

            </nav>
        </div>
    )
}
