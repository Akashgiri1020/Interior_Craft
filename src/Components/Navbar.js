import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Logo from "./Logo.png"
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3><img src={Logo}></img></h3>
			<nav ref={navRef}>
				<a href="/#">Interior</a>
				<a href="/#">Exterior</a>
				<a href="/#">Canopy</a>
				<a href="/#">Staircase</a>
				<a href="/#">Gates</a>
				<a href="/#">Railing</a>
				<a href="/#">Interior</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
