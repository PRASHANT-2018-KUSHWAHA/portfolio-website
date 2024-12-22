import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 bg-gray-800 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prashant's Portfolio</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
