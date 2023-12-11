import './header.css';

function Header() {
    return (
        <div className="main_div">
            <header>
                <div className="logo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><a href="home">HOME</a></li>
                            <li><a href="about">ABOUT US</a></li>
                            <li><a href="services">SERVICES</a></li>
                            <li><a href="contact">CONTACT US</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;