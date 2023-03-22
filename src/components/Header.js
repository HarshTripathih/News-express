import React from 'react'
import { Link } from 'react-router-dom'
import newslogo from '../../src/components/images/newslogo.png';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="nav-link active" to="/news">
        <img src={newslogo} alt="loading" style={{ width: "120px", height: "60px" }}></img>
    </Link>
        {/* <a className="navbar-brand" href="/">Express News</a> */}
        <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <li classNameName="nav-item">
                    <Link className="nav-link active" style={{ color: "red" }} to="/news">Trending</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/sport">Sports</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/tech">Tech</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/world">World</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/finance">Finance</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/politics">Politics</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/economics">Economics</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/beauty">Beauty</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/travel">Travel</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/music">Music</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/food">Food</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/gaming">Gaming</Link>
                </li>
                <li classNameName="nav-item">
                    <Link className="nav-link" to="/energy">Energy</Link>
                </li>
            </div>
        </div>
    </div>
</nav>

  )
}

export default Header