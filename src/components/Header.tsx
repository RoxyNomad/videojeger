import "@/styles/header.scss";
import Link from "next/link";

export default function Header() {
	return (
		<header className="header">
			<h1>Videojeger</h1>
			<nav>
				<ul>
					<li><Link href="/">Home</Link></li>
					<li><Link href="/portfolio">Portfolio</Link></li>
					<li><Link href="/about">About</Link></li>
					<li><Link href="/contact">Contact</Link></li>
				</ul>
			</nav>
		</header>
	);
}