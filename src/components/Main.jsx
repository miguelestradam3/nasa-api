import { useState } from "react";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";
import { searchImages } from "../services/nasaApi";
import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";

function Main() {

    const { images, setImages } = useContext(ImagesContext);
    const [currentPage, setCurrentPage] = useState(1);

    const imagesPerPage = 6;

    async function handleSearch(query) {
        try {
            const results = await searchImages(query);

            setImages(results);
            setCurrentPage(1);

        } catch (error) {
            console.error(error);
        }
    }

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;

    const currentImages = images.slice(
        indexOfFirstImage,
        indexOfLastImage
    );

    const totalPages = Math.ceil(images.length / imagesPerPage);

    return (

    <div className="container my-5">

        <SearchBar onSearch={handleSearch} />

        <div className="row g-4">

            {currentImages.map(image => (

                <ImageCard
                    key={image.data[0].nasa_id}
                    image={image}
                />

            ))}

        </div>

            {images.length > 0 && (
            <div className="d-flex justify-content-center align-items-center gap-3 mt-5">

                <button
                className="btn btn-outline-primary"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                >
                Previous
                </button>

                <span className="fw-bold">
                Page {currentPage} of {totalPages || 1}
                </span>

                <button
                className="btn btn-outline-primary"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
                >
                Next
                </button>

            </div>
            )}

    </div>

    );

}

export default Main;