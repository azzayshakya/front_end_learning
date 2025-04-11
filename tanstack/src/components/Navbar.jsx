import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex w-full items-center justify-between bg-[var(--navy-blue)] px-6 py-4 shadow-md">
        <h1 className="text-xl font-bold text-[var(--primary)]">MyBrand</h1>
        <ul className="flex space-x-6 text-[var(--muted-foreground)]">
          <li>
            <Link to="/" className="transition hover:text-[var(--primary)]">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/SimpleApi"
              className="transition hover:text-[var(--primary)]"
            >
              SimpleApi
            </Link>
          </li>
          <li>
            <Link
              to="/Tanstack"
              className="transition hover:text-[var(--primary)]"
            >
              Tanstack
            </Link>
          </li>

          <li>
            <Link
              to="/MapFunction"
              className="transition hover:text-[var(--primary)]"
            >
              MapFunction
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
