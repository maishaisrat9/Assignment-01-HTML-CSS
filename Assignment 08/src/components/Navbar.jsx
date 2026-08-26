import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="navbar">
      <div className="container navbar-inner">

        {/* Logo */}
        <Link to="/" className="logo">
          <span className="hero-logo-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4L25 16L5 28V4Z"
                stroke="#2563EB"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M10 8L25 16L10 24"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <span>HERO.IO</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-menu">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/apps" className={navClass}>
            Apps
          </NavLink>

          <NavLink to="/installation" className={navClass}>
            Installation
          </NavLink>

        </nav>

        {/* GitHub Contribute */}
        <a
          href="https://github.com/maishaisrat9"
          target="_blank"
          rel="noopener noreferrer"
          className="contribute-btn"
        >

          {/* GitHub Logo */}
          <svg
            className="github-icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>

          <span>Contribute</span>

        </a>

      </div>
    </header>
  );
};

export default Navbar;