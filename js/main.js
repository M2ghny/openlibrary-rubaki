/* ==========================================================
   RUBAKI - Ruang Baca Kita
   js/main.js (dipakai semua halaman)
   Muat di setiap halaman: <script src="js/main.js" defer></script>
   Isi: 1) hamburger navbar  2) tombol kembali ke atas
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* 1. Hamburger: buka/tutup menu navbar */
  var tombolMenu = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.navbar-menu');

  if (tombolMenu && menu) {
    tombolMenu.addEventListener('click', function () {
      var terbuka = menu.classList.toggle('buka');
      tombolMenu.setAttribute('aria-expanded', terbuka ? 'true' : 'false');
    });
  }

  /* 2. Tombol kembali ke atas */
  var kembaliAtas = document.querySelector('.kembali-atas');

  if (kembaliAtas) {
    kembaliAtas.addEventListener('click', function () {
      window.scrollTo({ top: 0 });
    });
  }

});
