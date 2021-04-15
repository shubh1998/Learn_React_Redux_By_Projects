import React from 'react'
import { Link } from 'react-router-dom'

const Haeder = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand text-center">
                    Various React Forms Using React Form Hooks. Use Inspect element console to see forms output.
                </Link>
            </div>
        </nav>
    )
}

export default Haeder
