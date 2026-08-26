import { Link } from "react-router-dom";
import apps from "../data/apps";
import AppCard from "../components/AppCard";

import heroImage from "../assets/hero.png";

const Home = () => {
  const topApps = apps.slice(0, 8);

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="container hero-container">

          <div className="hero-content">
            <h1>
              We Build
              <br />
              <span>Productive</span> Apps
            </h1>

            <p>
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn
              your ideas into digital experiences that truly make an impact.
            </p>

            <div className="store-buttons">

              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noreferrer"
                className="store-button"
              >
                <span className="play-icon">▶</span>
                <span>Google Play</span>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="store-button"
              >
                <span className="apple-icon">●</span>
                <span>App Store</span>
              </a>

            </div>
          </div>

          <div className="hero-image-container">
            <img
              src={heroImage}
              alt="HERO.IO Apps"
              className="hero-image"
            />
          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container">

          <h2>Trusted By Millions, Built For You</h2>

          <div className="stats-grid">

            <div className="stat-item">
              <p>Total Downloads</p>
              <h3>29.6M</h3>
              <span>21% More Than Last Month</span>
            </div>

            <div className="stat-item">
              <p>Total Reviews</p>
              <h3>906K</h3>
              <span>46% More Than Last Month</span>
            </div>

            <div className="stat-item">
              <p>Active Apps</p>
              <h3>132+</h3>
              <span>31 More Will Launch</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= TRENDING APPS ================= */}
      <section className="trending-section">

        <div className="container">

          <div className="section-heading">
            <h2>Trending Apps</h2>

            <p>
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>


          <div className="apps-grid">
            {topApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
              />
            ))}
          </div>


          <div className="show-all-container">
            <Link
              to="/apps"
              className="show-all-button"
            >
              Show All
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;