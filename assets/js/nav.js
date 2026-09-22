// Mobilnézetben a menü gombbal nyitható. JS nélkül a menü mindig látszik.
// A nyelvválasztás megmarad: aki angolra váltott, a magyar kezdőlapról az angolra kerül.
document.documentElement.classList.add('js');

function readLang() {
  try { return localStorage.getItem('seraph-lang'); } catch (e) { return null; }
}
function saveLang(lang) {
  try { localStorage.setItem('seraph-lang', lang); } catch (e) { /* nincs tároló */ }
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.body.hasAttribute('data-home') && readLang() === 'en') {
    window.location.replace('en/');
    return;
  }

  var sw = document.querySelector('.lang-switch');
  if (sw) {
    sw.addEventListener('click', function () { saveLang(sw.getAttribute('data-lang')); });
  }

  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
