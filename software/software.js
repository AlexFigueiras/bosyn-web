// BOSYN Software — comportamento leve das landing pages (sem dependências externas)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.sw-nav-toggle');
  var nav = document.querySelector('.sw-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('.sw-nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });
  }
});
