const search_box = document.getElementById("search");
const search_button = document.getElementById("search-button");
const light_button = document.getElementById("light-mode");
const div_movies = document.getElementById("movie-show-search");

const renderMovies = (array) => {
    div_movies.innerHTML = "";
    array.forEach((object) => {
        const movie_div = document.createElement("div");
        const title = document.createElement("h2");
        title.textContent = object.Title;
        const year = document.createElement("p");
        year.textContent = object.Year;
        const img = document.createElement("img");
        img.src = object.Poster;
        img.classList.add("movie-img")
        movie_div.appendChild(title);
        movie_div.appendChild(year);
        movie_div.appendChild(img);
        movie_div.classList.add('movie-div');
        div_movies.appendChild(movie_div);
    })
}

const getMovieData = async (event) => {
    if (event.key === "Enter" || event.type === "click") {
        const search_content = search_box.value;
        const url = `https://www.omdbapi.com/?apikey=f39e4e1b&s=${search_content}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response: ${response.status}`);
            }
            const result_parent_array = await response.json();
            const result = result_parent_array.Search;
            console.log(result);
            renderMovies(result);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const light = () => {
    document.body.classList.toggle("light");
}

light_button.addEventListener("click", light)
search_box.addEventListener("keydown", (event) => getMovieData(event))
search_button.addEventListener("click", (event) => getMovieData(event))