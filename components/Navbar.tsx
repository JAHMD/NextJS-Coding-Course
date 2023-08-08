import Link from "next/link";

const Navbar = () => {
	return (
		<header className="border-b border-white/20">
			<nav className="container flex justify-between items-center py-6">
				<Link href="/">Logo</Link>
				<ul className="flex items-center">
					<li>
						<Link href="/posts">Posts</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
