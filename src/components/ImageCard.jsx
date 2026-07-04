import { Link } from "react-router-dom";

function ImageCard({ image }) {
  const data = image.data[0];

  const preview = image.links?.[0]?.href;

  return (
    <div className="col-md-4">
      <Link
        to={`/image/${data.nasa_id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card h-100 shadow">

          <img
            src={preview}
            className="card-img-top"
            alt={data.title}
            style={{ height: "220px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="text-muted">
              {data.date_created.substring(0, 10)}
            </p>
          </div>

        </div>
      </Link>
    </div>
  );
}

export default ImageCard;