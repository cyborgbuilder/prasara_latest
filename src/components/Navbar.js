import { useRef, useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();
	const [show, setShow] = useState(false);

	// Show/hide mobile nav
	const toggleNavbar = useCallback(() => {
		if (navRef.current) {
			navRef.current.classList.toggle("responsive_nav");
		}
	}, []);

	// Scroll event handler
	const handleScroll = useCallback(() => {
		setShow(window.scrollY > 100);
	}, []);

	// Attach scroll listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<header className={`nav ${show ? "nav_white" : ""}`}>
			<img src="./logo2.webp" alt="Company Logo" />
			<nav ref={navRef} role="navigation" aria-label="Main Navigation">
				<Link to="/" onClick={toggleNavbar}>Home</Link>
				<Link to="/brands" onClick={toggleNavbar}>Brands</Link>
				<Link to="/about" onClick={toggleNavbar}>About Us</Link>
				<Link to="/sustainability" onClick={toggleNavbar}>Sustainability</Link>
				<Link to="/contact">
					<button className="button-89" onClick={toggleNavbar}>
						Contact Us
					</button>
				</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={toggleNavbar}
					aria-label="Close navigation menu"
				>
					<FaTimes />
				</button>
			</nav>
			<span>
				<button
					className="nav-btn"
					onClick={toggleNavbar}
					aria-label="Open navigation menu"
				>
					<FaBars />
				</button>
			</span>
		</header>
	);
}

export default Navbar;
