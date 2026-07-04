import { useState } from "react";

function SearchBar({ onSearch }) {

    const [query, setQuery] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (!query.trim()) return;

        onSearch(query);

    }

    return (

        <form
            onSubmit={handleSubmit}
            className="row g-2 mb-5"
        >

            <div className="col-md-10">

                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search NASA images..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

            </div>

            <div className="col-md-2">

                <button
                    className="btn btn-primary btn-lg w-100"
                >
                    Search
                </button>

            </div>

        </form>

    );

}

export default SearchBar;