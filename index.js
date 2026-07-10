const search_box = document.getElementById("search");
const search_button = document.getElementById("search-button");
const renderMovies = (jsonfile) => {
    const readable = JSON.parse(jsonfile);
    const movie_div = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = readable.Title;
    const year = document.createElement("p");
    year.textContent = readable.Year;
    const img = document.createElement("img");
    img.src = readable.Poster;
    movie_div.appendChild(title);
    movie_div.appendChild(year);
    movie_div.appendChild(img);
    movie_div.classList.add('movie-div');
}


const getMovieData = async () => {
    const search_content = search_box.value;
    const url = `http://www.omdbapi.com/?apikey=f39e4e1b&s=${search_content}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response: ${response.status}`);
        }
        const result = await response.json();
        renderMovies(result);

    } catch (error) {
        console.error(error.message);
    }
}
search_button.addEventListener("click", getMovieData);