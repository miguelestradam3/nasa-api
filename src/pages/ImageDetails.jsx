import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ImagesContext } from "../context/ImagesContext";

function ImageDetails() {
  const { id } = useParams();
  const { images } = useContext(ImagesContext);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const found = images.find(
      (item) => item.data[0].nasa_id === id
    );

    setImage(found || null);
  }, [id, images]);

  if (!image) {
    return (
      <div className="container mt-5">
        <p>Image not found. Please go back and search again.</p>

        <Link to="/" className="btn btn-primary">
          Back
        </Link>
      </div>
    );
  }

  const data = image.data[0];
  const img = image.links?.[0]?.href;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">
        ← Back
      </Link>

      <div className="card shadow p-3">
        <img src={img} className="img-fluid" alt={data.title} />

        <div className="mt-3">
          <h2>{data.title}</h2>
          <p className="text-muted">
            {data.date_created.substring(0, 10)}
          </p>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageDetails;