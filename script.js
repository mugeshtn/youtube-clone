const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');


// menu.addEventListener('click', function () {
//   sidebar.classList.toggle('show-sidebar');
// });

menu.addEventListener('click', showFn);

function showFn(){
  sidebar.classList.toggle('show-sidebar');
}