import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        {/*<a className="navbar-brand" href="#">Lessons Handouts</a>*/}
                        <Link className="navbar-brand" to="/">Lessons Handouts</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {/*<a className="nav-link active" aria-current="page" href="/">Home</a>*/}
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href="/linux/">linux</a>*/}
                                    <Link className="nav-link" to="/linux/">linux</Link>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href="/django/">django</a>*/}
                                    <Link className="nav-link" to="/django/">django</Link>
                                </li>
                                <li className="nav-item">
                                    {/*<a className="nav-link" href={"/web/"}>web</a>*/}
                                    <Link className="nav-link" to={"/web/"}>web</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;