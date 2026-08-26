import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Download,
  Star,
  MessageSquare,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast from "react-hot-toast";

import apps from "../data/apps";
import Loading from "../components/Loading";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const foundApp = apps.find(
        (item) => item.id === Number(id)
      );

      setApp(foundApp || null);

      if (foundApp) {
        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];

        const alreadyInstalled = installedApps.some(
          (item) => item.id === foundApp.id
        );

        setIsInstalled(alreadyInstalled);
      }

      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  const handleInstall = () => {
    if (!app || isInstalled) return;

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    const alreadyExists = installedApps.some(
      (item) => item.id === app.id
    );

    if (!alreadyExists) {
      const updatedApps = [...installedApps, app];

      localStorage.setItem(
        "installedApps",
        JSON.stringify(updatedApps)
      );
    }

    setIsInstalled(true);

    toast.success(
      `${app.title} installed successfully!`
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (!app) {
    return (
      <main className="app-not-found">
        <div className="container">
          <div className="not-found-content">
            <h1>OPPS!! APP NOT FOUND</h1>

            <p>
              The App you are requesting is not found on our
              system. Please try another app.
            </p>

            <button
              className="primary-btn"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="details-page">

      <div className="container">

        {/* ================= APP INFORMATION ================= */}

        <section className="app-details-top">

          <div className="details-image-wrapper">
            <img
              src={app.image}
              alt={app.title}
              className="details-image"
            />
          </div>

          <div className="details-info">

            <h1>{app.title}</h1>

            <p className="company-name">
              Developed by{" "}
              <span>{app.companyName}</span>
            </p>

            <div className="details-divider"></div>

            <div className="details-stats">

              {/* DOWNLOADS */}

              <div className="detail-stat">

                <Download
                  size={34}
                  className="download-icon"
                />

                <span>Downloads</span>

                <strong>
                  {app.downloads >= 1000000
                    ? `${(
                        app.downloads / 1000000
                      ).toFixed(0)}M`
                    : `${(
                        app.downloads / 1000
                      ).toFixed(0)}K`}
                </strong>

              </div>


              {/* RATINGS */}

              <div className="detail-stat">

                <Star
                  size={34}
                  fill="currentColor"
                  className="rating-icon"
                />

                <span>Average Ratings</span>

                <strong>
                  {app.ratingAvg}
                </strong>

              </div>


              {/* REVIEWS */}

              <div className="detail-stat">

                <MessageSquare
                  size={34}
                  className="review-icon"
                />

                <span>Total Reviews</span>

                <strong>
                  {app.reviews >= 1000
                    ? `${(
                        app.reviews / 1000
                      ).toFixed(0)}K`
                    : app.reviews}
                </strong>

              </div>

            </div>


            {/* INSTALL BUTTON */}

            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`install-btn ${
                isInstalled ? "installed" : ""
              }`}
            >
              {isInstalled
                ? "Installed"
                : `Install Now (${app.size} MB)`}
            </button>

          </div>

        </section>


        {/* ================= RATINGS ================= */}

        <section className="ratings-section">

          <h2>Ratings</h2>

          <div className="chart-wrapper">

            <ResponsiveContainer
              width="100%"
              height={350}
            >

              <BarChart
                data={app.ratings}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 30,
                  left: 30,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                />

                <XAxis
                  type="number"
                  tick={{
                    fill: "#64748b",
                  }}
                />

                <YAxis
                  dataKey="name"
                  type="category"
                  width={70}
                  tick={{
                    fill: "#64748b",
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="count"
                  fill="#ff8a00"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </section>


        {/* ================= DESCRIPTION ================= */}

        <section className="description-section">

          <h2>Description</h2>

          <p>
            {app.description}
          </p>

          <p>
            This application is designed to provide a
            simple and practical experience for users who
            want to improve their productivity and organize
            their daily activities. With an easy-to-use
            interface, users can manage their tasks,
            maintain focus, and build better habits.
          </p>

          <p>
            The app combines useful productivity features
            with a clean and modern interface. It helps
            users stay organized, reduce distractions, and
            make better use of their time throughout the
            day.
          </p>

        </section>

      </div>

    </main>
  );
};

export default AppDetails;