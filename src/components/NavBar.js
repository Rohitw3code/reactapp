import React from 'react'
import {
    Link
} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-start">
                    <Link to="/" className="btn btn-outline-success me-2" type="button">Posts</Link>
                    <Link to="/WritePost" className="btn btn-sm btn-outline-secondary" type="button">Write Post</Link>
                </form>
            </nav>
        </div>
    )
}