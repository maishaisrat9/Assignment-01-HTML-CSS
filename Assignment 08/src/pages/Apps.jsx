import { useEffect, useState } from "react";
import apps from "../data/apps";
import AppCard from "../components/AppCard";
import Loading from "../components/Loading";

const Apps = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredApps, setFilteredApps] = useState(apps);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const result = apps.filter((app) =>
        app.title.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredApps(result);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <main className="apps-page">

      {/* ================= TITLE ================= */}
      <section className="apps-heading">
        <div className="container">
          <h1>Our All Applications</h1>

          <p>
            Explore All Apps on the Market developed by us. We code for
            Millions
          </p>
        </div>
      </section>

      {/* ================= APPS SECTION ================= */}
      <section className="apps-list-section">
        <div className="container">

          <div className="apps-toolbar">

            <h2>
              ({filteredApps.length}) Apps Found
            </h2>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search Apps"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

          </div>

          {/* ================= LOADING ================= */}
          {isLoading ? (
            <Loading />

          ) : filteredApps.length === 0 ? (

            <div className="no-app-found">
              <h2>No App Found</h2>

              <p>
                We couldn't find any app matching "{searchText}".
              </p>
            </div>

          ) : (

            <div className="apps-grid">
              {filteredApps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                />
              ))}
            </div>

          )}

        </div>
      </section>

    </main>
  );
};

export default Apps;