// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var mobileNav = document.querySelector('.nav__mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();

// Copy button for code blocks
(function () {
  document.querySelectorAll('pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = code ? code.textContent : pre.textContent;

      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () {
          btn.textContent = 'Copy';
        }, 2000);
      });
    });

    pre.style.position = 'relative';
    pre.appendChild(btn);
  });

  // Inject copy button styles
  var style = document.createElement('style');
  style.textContent =
    '.copy-btn{position:absolute;top:0.5rem;right:0.5rem;' +
    'background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);' +
    'border:1px solid rgba(255,255,255,0.15);border-radius:6px;' +
    'padding:0.25rem 0.625rem;font-size:0.75rem;cursor:pointer;' +
    'font-family:inherit;transition:all 150ms ease}' +
    '.copy-btn:hover{background:rgba(255,255,255,0.2);color:#fff}';
  document.head.appendChild(style);
})();

// UMAP parallax — slow scroll + mouse drift
(function () {
  var umap = document.querySelector('.bio-umap');
  if (!umap) return;

  var scrollY = 0;
  var mouseX = 0;
  var mouseY = 0;
  var currentX = 0;
  var currentY = 0;

  window.addEventListener('scroll', function () {
    scrollY = window.pageYOffset;
  }, { passive: true });

  document.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function animate() {
    currentX += (mouseX * 8 - currentX) * 0.04;
    currentY += (mouseY * 8 - currentY) * 0.04;

    var parallaxY = scrollY * -0.12;
    umap.style.transform = 'translate(' + currentX + 'px, ' + (parallaxY + currentY) + 'px)';

    requestAnimationFrame(animate);
  }

  animate();
})();
