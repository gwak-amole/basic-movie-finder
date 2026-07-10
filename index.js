const search_box = document.getElementById("search");
const search_content = search_box.textContent;

const getMovieData = async () => {
    const url = `http://www.omdbapi.comf39e4e1b&t{}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }

}

getMovieData();