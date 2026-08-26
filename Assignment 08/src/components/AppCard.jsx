import { Link } from "react-router-dom";
import { Download, Star } from "lucide-react";

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="app-card">

      <div className="app-card-image-wrapper">
        <img
          src={app.image}
          alt={app.title}
          className="app-card-image"
        />
      </div>

      <h3>{app.title}</h3>

      <div className="app-card-info">

        <span className="download-count">
          <Download size={14} />

          {app.downloads >= 1000000
            ? `${(app.downloads / 1000000).toFixed(0)}M`
            : `${(app.downloads / 1000).toFixed(0)}K`}
        </span>

        <span className="rating-count">
          <Star
            size={14}
            fill="currentColor"
          />

          {app.ratingAvg}
        </span>

      </div>

    </Link>
  );
};

export default AppCard;