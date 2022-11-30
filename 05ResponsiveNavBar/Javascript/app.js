const open_sidebar = document.getElementById('icon')
const sidebar = document.getElementById('sidebar')

// show sidebar
open_sidebar.addEventListener('click', function () {
    sidebar.style.display = 'block'
})

// hide sidebar once clicked outside div
document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target)) {
        sidebar.style.display = 'none'
    }
})