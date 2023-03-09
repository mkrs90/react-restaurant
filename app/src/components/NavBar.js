function NavBar() {
    return (
        <div className="navigation">
            
            <nav className="navbar navbar-expand">
                <div className="container">
                    <a href="/" className="navbar-brand" style={{fontFamily: 'Shantell Sans'}}>Happy Escape Eatery</a>
                    <div>
                        <ul className="navbar-nav ml-auto">                            
                                <a href="/" className="nav-item ms-5 me-5">Menu</a>
                                <a href="/" className="nav-item ms-5 me-5">About</a>
                                <a href="/" className="nav-item ms-5 me-5">Locations</a>                            
                        </ul>
                    </div>
                </div> 
            </nav>
        </div>
    );
}

export default NavBar;