const light_button = document.getElementById("light-mode")

const light = () => {
    document.body.classList.toggle("light");
}

light_button.addEventListener("click", light)