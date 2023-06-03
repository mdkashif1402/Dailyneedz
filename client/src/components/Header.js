import React from 'react';
import img1 from './images/icon.png';
import img2 from './images/poster-d.jpg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand" src={img1} alt="fav-icon" />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex search-bar col-sm-7" role="search">
                            <input className="form-control me-2" type="search" placeholder="What's in your mind today!!"
                                aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" id="dropdownmenu1">
                            Login
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownmenu1">
                            <li><a className="dropdown-item" href="#">Vendor Login</a></li>
                            <li><a className="dropdown-item" href="#">User Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-lg-6 first-sec">
                    <h1 className='tagline'>Your one-stop shop for daily essentials.</h1>
                    <p className='sub-tagline'>Discover a convenient and hassle-free way to fulfill all your daily needs with
                        DailyNeedz,
                        the ultimate
                        destination for fresh produce, groceries, and more.
                    </p>
                    <div className="row">
                        <div className='col-lg-4'>

                        </div>
                        <div className="col-lg-4">
                            <button className="btn btn-warning" type="button">Sign up as Vendor</button>
                        </div>
                        <div className="col-lg-4" id='user-btn'>
                            <button className="btn btn-dark user-btn" type="button">Sign up as User</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <img className='poster-d' src={img2} alt='poster-d' />
                </div>
            </div>
        </div>
    )
}

export default Header