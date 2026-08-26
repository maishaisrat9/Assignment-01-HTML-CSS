import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">

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
                    stroke="#60A5FA"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M10 8L25 16L10 24"
                    stroke="#A855F7"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span>HERO.IO</span>

            </Link>

            <p>
              We build productive apps to make your everyday life
              simpler, smarter, and better.
            </p>

          </div>


          {/* Quick Links */}
          <div className="footer-links">

            <h3>Quick Links</h3>

            <Link to="/">Home</Link>

            <Link to="/apps">Apps</Link>

            <Link to="/installation">
              Installation
            </Link>

          </div>


          {/* Social Links */}
          <div className="footer-social">

            <h3>Follow Us</h3>

            <div className="social-icons">

              {/* GitHub */}
              <a
                href="https://github.com/maishaisrat9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="social-text">in</span>
              </a>


              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="social-text facebook-text">f</span>
              </a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            Copyright © 2025 - All rights reserved
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;