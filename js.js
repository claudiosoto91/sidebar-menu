const toggleBtn = document.querySelector('#sidebar .toggle-sidebar');
const sidebar = document.querySelector('#sidebar');


toggleBtn.addEventListener('click', function (){
    sidebar.classList.toggle('hide');
});