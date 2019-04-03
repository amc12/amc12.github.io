    /*
     * Open the drawer when the menu is clicked.
     */
    var menu = document.querySelector('#menu');
    var main = document.querySelector('main');
    var drawer = document.querySelector('.main-nav');

    menu.addEventListener('click', function (e) {
      drawer.classList.toggle('open');
      e.stopPropagation();
    });
    main.addEventListener('click', function () {
      drawer.classList.remove('open');
    });