import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center text-white justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* Conditional rendering based on useremail */}

          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
