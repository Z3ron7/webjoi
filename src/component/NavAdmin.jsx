import React from 'react'
import { Link } from 'react-router-dom'

function NavAdmin() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/admin'>Admin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/admin'>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" to="#">Transactions</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" to="#">Orders</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavAdmin