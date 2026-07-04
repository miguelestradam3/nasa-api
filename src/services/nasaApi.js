const BASE_URL = "https://images-api.nasa.gov";

export async function searchImages(query) {
    const response = await fetch(
        `${BASE_URL}/search?q=${encodeURIComponent(query)}&media_type=image`
    );

    if (!response.ok) {
        throw new Error("Unable to load NASA images.");
    }

    const data = await response.json();

    return data.collection.items;
}