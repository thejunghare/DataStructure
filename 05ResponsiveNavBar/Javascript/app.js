// hide sidebar once clicked outside div
const sidebar = document.getElementById('sidebar')

document.addEventListener('click', function(event){
    if (!sidebar.contains(event.target)){
        sidebar.style.display = 'none'
    }
})