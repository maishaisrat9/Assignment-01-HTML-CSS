import { useEffect, useState } from "react";
import { Download, Star } from "lucide-react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const savedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    setInstalledApps(savedApps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(
      (app) => app.id !== id
    );

    setInstalledApps(updatedApps);

    localStorage.setItem(
      "installedApps",
      JSON.stringify(updatedApps)
    );
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high-low") {
      return b.size - a.size;
    }

    if (sortOrder === "low-high") {
      return a.size - b.size;
    }

    return 0;
  });

  return (
    <main className="installation-page">
      <div className="container">

        {/* ================= HEADER ================= */}

        <section className="installation-header">
          <h1>Your Installed Apps</h1>

          <p>
            Explore All Trending Apps on the Market developed by us
          </p>
        </section>


        {/* ================= TOOLBAR ================= */}

        <div className="installation-toolbar">

          <h2 className="installation-count">
            {sortedApps.length}{" "}
            {sortedApps.length === 1 ? "App" : "Apps"} Found
          </h2>

          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By Size</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>

        </div>


        {/* ================= INSTALLED APPS ================= */}

        {sortedApps.length === 0 ? (

          <div className="no-installed-apps">
            <h2>No Installed Apps</h2>

            <p>
              You haven't installed any apps yet. Explore our apps
              and install your favorite ones.
            </p>
          </div>

        ) : (

          <div className="installed-apps">

            {sortedApps.map((app) => (

              <div
                className="installed-app-card"
                key={app.id}
              >

                {/* IMAGE */}

                <img
                  src={app.image}
                  alt={app.title}
                  className="installed-app-image"
                />


                {/* INFORMATION */}

                <div className="installed-app-info">

                  <h3>{app.title}</h3>

                  <div className="installed-app-meta">

                    <span className="installed-download">
                      <Download size={16} />
                      {app.downloads >= 1000000
                        ? `${(app.downloads / 1000000).toFixed(0)}M`
                        : `${(app.downloads / 1000).toFixed(0)}K`}
                    </span>

                    <span className="installed-rating">
                      <Star
                        size={16}
                        fill="currentColor"
                      />
                      {app.ratingAvg}
                    </span>

                    <span className="installed-size">
                      {app.size} MB
                    </span>

                  </div>

                </div>


                {/* UNINSTALL */}

                <button
                  className="uninstall-btn"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>

              </div>

            ))}

          </div>

        )}

      </div>
    </main>
  );
};

export default Installation;