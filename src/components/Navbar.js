import { useRef, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const [show, handleShow] = useState(false);

    const trasnitionNavBar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }else {
            handleShow(false);
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", trasnitionNavBar);
        return () => window.removeEventListener("scroll", trasnitionNavBar)
    }, [])

	return (
		<header className={`nav ${show && "nav_white"}` }>
			<img src="./logo2.png" />
			<div>
			<nav ref={navRef}>
				
				<Link to='/'><a onClick={showNavbar} >Home</a></Link>
				<Link to='/brands'><a onClick={showNavbar}>Brands</a></Link>
				<Link to='/about'><a onClick={showNavbar}>About Us</a></Link>		
				<Link to='/sustainability'><a onClick={showNavbar}>Sustainability</a></Link>
				{/* <Link to='/production'><a>Productions</a></Link> */}
				
				<Link to='/contact'><button onClick={showNavbar} className="button-89" href="/Contact">Contact Us</button></Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<span>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
			</span>
			</div>
		</header>
	);
}

export default Navbar