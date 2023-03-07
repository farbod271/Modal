
modal = document.querySelector(".modal")

document.querySelector("button").addEventListener("click", () => {
    modal.classList.add("show");
})

document.querySelector(".cancel").addEventListener("click", () => {
    modal.classList.toggle("show");
})