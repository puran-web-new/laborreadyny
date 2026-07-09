(function () {
  // Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', String(open));
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active Link Detection
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav a').forEach(function (link) {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href === page || (page === '' && href === 'index.html')) link.classList.add('active');
  });

  // Header Scroll Effect
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Reveal Animations
  const revealTargets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (target) { observer.observe(target); });
  } else {
    revealTargets.forEach(function (target) { target.classList.add('visible'); });
  }

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  if (counters.length && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const raw = el.getAttribute('data-target') || el.textContent;
          const target = parseInt(String(raw).replace(/[^0-9]/g, ''), 10) || 0;
          const suffix = String(raw).replace(/[0-9,]/g, '').trim();
          const duration = 1400;
          let startTime = null;
          function tick(now) {
            if (!startTime) startTime = now;
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (counter) { counterObserver.observe(counter); });
  }

  // Floating Particles
  const particleField = document.querySelector('.particle-field');
  if (particleField) {
    for (let i = 0; i < 35; i += 1) {
      const dot = document.createElement('div');
      dot.className = 'particle';
      const size = Math.random() * 5 + 2;
      const opacity = Math.random() * 0.4 + 0.15;
      const duration = Math.random() * 4 + 6;
      dot.style.cssText = 'width:' + size + 'px;height:' + size + 'px;left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;background:' + (Math.random() > 0.5 ? 'rgba(225,83,31,' + opacity + ')' : 'rgba(255,165,0,' + opacity + ')') + ';animation: float ' + duration + 's ease-in-out infinite;';
      particleField.appendChild(dot);
    }
  }

  // Accordion Functionality
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', function () {
        const wasOpen = item.classList.contains('open');
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(function (i) {
          i.classList.remove('open');
        });
        // Open clicked item if it wasn't already open
        if (!wasOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Form Handling
  document.querySelectorAll('form[data-formspree]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const success = form.querySelector('.form-success');
      const error = form.querySelector('.form-error-msg');
      const originalLabel = btn ? btn.textContent : '';
      if (btn) {
        btn.textContent = 'Sending…';
        btn.disabled = true;
      }
      fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (response) {
          if (response.ok) {
            if (success) {
              success.style.display = 'block';
              form.reset();
            }
          } else {
            throw new Error('Send failed');
          }
        })
        .catch(function () {
          if (error) error.style.display = 'block';
        })
        .finally(function () {
          if (btn) {
            btn.textContent = originalLabel;
            btn.disabled = false;
          }
        });
    });
  });

  // Timesheet Calculator
  function calcTimesheet() {
    let total = 0;
    document.querySelectorAll('.ts-hours').forEach(function (input) {
      total += parseFloat(input.value) || 0;
    });
    const output = document.getElementById('tsTotal');
    if (output) output.textContent = total.toFixed(1) + ' hrs';
  }
  document.querySelectorAll('.ts-hours').forEach(function (input) {
    input.addEventListener('input', calcTimesheet);
  });
})();
