document.getElementById('btn-menu-mobile').addEventListener('click', function() {
    var menu = document.getElementById('menu-mobile');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.add('block');
    } else {
      menu.classList.remove('block');
      menu.classList.add('hidden');
    }
});