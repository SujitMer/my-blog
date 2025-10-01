import { useState } from "react";

export default function Navbar({ setInputText }) {

    let [input, setInput] = useState("");

    let handleSearch = (e) => {
        e.preventDefault();
        setInputText(input)
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg a">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Blog Site</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon toggle-Btn"></span>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#blogCard">Blog</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active" aria-current="page" href="#blogBtns">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#footer">Contact</a>
                            </li>

                        </ul>
                        <form className="d-flex searchBar" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search Blog" aria-label="Search"
                                onChange={(e) => {
                                    setInput(e.target.value);
                                }}
                            />
                            <button className="btn btn-outline-success searchBtn" type="submit" onClick={handleSearch}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}