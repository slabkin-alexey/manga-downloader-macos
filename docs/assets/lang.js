(function () {
  var current = document.documentElement.lang || '';
  var links = document.querySelectorAll('[data-lang]');
  links.forEach(function (link) {
    if (link.getAttribute('data-lang') === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
