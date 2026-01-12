(function () {
  // Homepage path for this site
  const HOME = '/';

  function handleNavHashClick(e) {
    const anchor = e.currentTarget;
    const href = anchor.getAttribute('href') || '';
    if (!href.startsWith('#')) return;

    const id = href.slice(1);
    // If the element exists on this page, allow normal scrolling behavior.
    if (document.getElementById(id)) return;

    // Normalize path (remove trailing slash) and compare to HOME
    const normalize = p => (p || '/').replace(/\/+$/, '') || '/';
    if (normalize(window.location.pathname) === normalize(HOME)) return;

    // Prevent default and navigate to homepage with the hash so the homepage can handle it.
    e.preventDefault();
    window.location.assign(HOME + href);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // VERY intentionally scoped: only affect these nav links so risk is minimal.
    document.querySelectorAll('nav a[href="#services"], nav a[href="#events"]')
      .forEach(a => a.addEventListener('click', handleNavHashClick, false));
  });
})();
