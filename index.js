let btn = document.querySelector("#btn")
let sidebar = document.querySelector(".sidebar")
let searchBtn = document.querySelector(".bx-search")
let arrow = document.querySelector(".arrow")

btn.onclick = function() {
    sidebar.classList.toggle('active')
}

searchBtn.onclick = function() {
    sidebar.classList.toggle('active')
}

arrow.onclick = function() {
    sidebar.classList.toggle('open')
}
