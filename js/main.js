/**
 * Hizohaib (MZK) Portfolio - JavaScript Interactions
 * Features:
 *  - Interactive Eye Tracking (Pupils follow cursor)
 *  - Occasional Natural Blinking
 *  - Copy Email to Clipboard with UI feedback
 *  - Lenis Smooth Scroll integration
 *  - Scroll-triggered reveal animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initLenisSmoothScroll();
  initHeaderAutoHide();
  initEyeTracking();
  initCopyEmail();
  initScrollReveal();
  initNavTabs();
  initLayoutToggle();
  initProjectCarousel();
  initDiscussButton();
});

/* ==========================================================================
   1. Lenis Smooth Scroll
   ========================================================================== */
function initLenisSmoothScroll() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

/* ==========================================================================
   2. Interactive Eyes Widget (Mouse Tracking + Blinking)
   ========================================================================== */
function initEyeTracking() {
  const eyesWidget = document.getElementById('eyesWidget');
  const pupils = document.querySelectorAll('.eye-pupil');
  const sockets = document.querySelectorAll('.eye-socket');

  if (!eyesWidget || pupils.length === 0) return;

  const MAX_PUPIL_RADIUS = 5.5; // Max displacement inside socket

  // Target and current position for smooth interpolation (lerp)
  const eyeStates = [
    { currentX: 0, currentY: 0, targetX: 0, targetY: 0 },
    { currentX: 0, currentY: 0, targetX: 0, targetY: 0 }
  ];

  window.addEventListener('mousemove', (e) => {
    pupils.forEach((pupil, index) => {
      const socket = sockets[index];
      if (!socket) return;

      const rect = socket.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 12, MAX_PUPIL_RADIUS);

      eyeStates[index].targetX = Math.cos(angle) * distance;
      eyeStates[index].targetY = Math.sin(angle) * distance;
    });
  });

  // Animation frame loop for smooth pupil movement
  function animatePupils() {
    pupils.forEach((pupil, index) => {
      const state = eyeStates[index];
      // Linear interpolation (lerp)
      state.currentX += (state.targetX - state.currentX) * 0.2;
      state.currentY += (state.targetY - state.currentY) * 0.2;

      pupil.style.transform = `translate(${state.currentX.toFixed(2)}px, ${state.currentY.toFixed(2)}px)`;
    });
    requestAnimationFrame(animatePupils);
  }
  animatePupils();

  // Natural Blinking Effect (every 3 to 6 seconds)
  function triggerBlink() {
    sockets.forEach(socket => socket.classList.add('blink'));
    setTimeout(() => {
      sockets.forEach(socket => socket.classList.remove('blink'));
    }, 250);

    const nextBlinkTime = Math.random() * 3000 + 3000;
    setTimeout(triggerBlink, nextBlinkTime);
  }
  setTimeout(triggerBlink, 3500);

  // Blink on click
  eyesWidget.addEventListener('click', () => {
    sockets.forEach(socket => socket.classList.add('blink'));
    setTimeout(() => {
      sockets.forEach(socket => socket.classList.remove('blink'));
    }, 250);
  });
}

/* ==========================================================================
   3. Copy Email to Clipboard with State Transition
   ========================================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const copyBadge = document.getElementById('copyBadge');
  const copyText = document.getElementById('copyText');
  const copyIcon = document.getElementById('copyIcon');

  if (!copyBtn || !copyBadge) return;

  const emailToCopy = 'andre.analytics@gmail.com';
  let timeoutId = null;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = emailToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    // Update UI
    copyBadge.classList.add('copied');
    if (copyText) copyText.textContent = 'Copied';
    if (copyIcon) {
      copyIcon.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
    }

    if (timeoutId) clearTimeout(timeoutId);

    // Reset after 2.2 seconds
    timeoutId = setTimeout(() => {
      copyBadge.classList.remove('copied');
      if (copyText) copyText.textContent = 'Copy';
      if (copyIcon) {
        copyIcon.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        `;
      }
    }, 2200);
  });
}

/* ==========================================================================
   4. Scroll-Triggered Reveal Animations
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once revealed for optimal performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
/* ==========================================================================
   5. Nav Tab Switcher & Logo Top Scroll
   ========================================================================== */
function initNavTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = tab.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      let targetEl = null;
      if (target === 'work') targetEl = document.getElementById('workSection');
      else if (target === 'systems') targetEl = document.getElementById('systemsSection');
      else if (target === 'about') targetEl = document.getElementById('aboutSection');
      else if (target === 'reviews') targetEl = document.getElementById('testimonialsSection');

      if (targetEl) {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(targetEl);
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

/* ==========================================================================
   6. Header Gradual Fade on Scroll (Smooth & Progressive)
   ========================================================================== */
function initHeaderAutoHide() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  // Maximum scroll distance over which header gradually fades out
  const FADE_DISTANCE = 120; // in pixels
  let ticking = false;

  function updateHeaderFade(scrollY) {
    const currentY = Math.max(0, scrollY);

    if (currentY <= 0) {
      header.style.opacity = '1';
      header.style.transform = 'translateY(0px)';
      header.style.pointerEvents = 'auto';
      header.style.visibility = 'visible';
    } else if (currentY < FADE_DISTANCE) {
      const progress = currentY / FADE_DISTANCE;
      const opacity = Math.max(0, 1 - progress);
      const translateY = -progress * 24;

      header.style.opacity = opacity.toFixed(3);
      header.style.transform = `translateY(${translateY.toFixed(1)}px)`;
      header.style.pointerEvents = progress > 0.8 ? 'none' : 'auto';
      header.style.visibility = 'visible';
    } else {
      header.style.opacity = '0';
      header.style.transform = 'translateY(-24px)';
      header.style.pointerEvents = 'none';
      header.style.visibility = 'hidden';
    }
  }

  // Hook into Lenis smooth scroll for 60fps/120fps sync
  if (window.__lenis) {
    window.__lenis.on('scroll', (e) => {
      updateHeaderFade(e.scroll);
    });
  }

  // Also hook window scroll as backup
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateHeaderFade(window.scrollY);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial call
  updateHeaderFade(window.scrollY || 0);
}

/* ==========================================================================
   7. Layout Grid / List View Switcher (Featured Projects)
   ========================================================================== */
function initLayoutToggle() {
  const btnGrid = document.getElementById('btnGridView');
  const btnList = document.getElementById('btnListView');
  const grid = document.getElementById('projectsGrid');

  if (!btnGrid || !btnList || !grid) return;

  btnGrid.addEventListener('click', () => {
    btnGrid.classList.add('active');
    btnList.classList.remove('active');
    grid.classList.remove('list-view');
  });

  btnList.addEventListener('click', () => {
    btnList.classList.add('active');
    btnGrid.classList.remove('active');
    grid.classList.add('list-view');
  });
}

/* ==========================================================================
   8. Interactive Project Carousel (Hero Left Column)
   ========================================================================== */
function initProjectCarousel() {
  const carousel = document.getElementById('projectCarousel');
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');
  const dotsContainer = document.getElementById('carouselDots');
  if (!carousel || !track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.c-dot') : [];
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;
  const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds

  function updateCarousel(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    // Smooth vertical translation UPWARDS ("smooth ke atas")
    track.style.transform = `translateY(-${currentIndex * 100}%)`;

    // Update active slide class
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // Update peek card image for the upcoming slide with a smooth hint
    const peekImg = document.getElementById('peekImg');
    if (peekImg && slides[currentIndex]) {
      const nextImg = slides[currentIndex].getAttribute('data-next-img');
      if (nextImg) {
        peekImg.style.opacity = '0.4';
        peekImg.style.transform = 'translateY(8px)';
        setTimeout(() => {
          peekImg.src = nextImg;
          peekImg.style.opacity = '1';
          peekImg.style.transform = 'translateY(0)';
        }, 180);
      }
    }
  }

  // Peek card click triggers next slide smoothly upwards
  const peekCard = document.getElementById('carouselPeekCard');
  if (peekCard) {
    peekCard.addEventListener('click', () => {
      updateCarousel(currentIndex + 1);
      startAutoPlay();
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Next / Prev buttons
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      updateCarousel(currentIndex + 1);
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      updateCarousel(currentIndex - 1);
      startAutoPlay();
    });
  }

  // Dots click
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetIndex = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(targetIndex)) {
        updateCarousel(targetIndex);
        startAutoPlay();
      }
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);

  // Touch Swipe Support (Up/Down and Left/Right) for Mobile
  let touchStartY = 0;
  let touchEndY = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    touchEndX = e.changedTouches[0].screenX;
    const diffY = touchStartY - touchEndY;
    const diffX = touchStartX - touchEndX;

    if (Math.abs(diffY) > 30 || Math.abs(diffX) > 30) {
      if (diffY > 30 || diffX > 30) {
        // Swiped up or left -> Next slide upwards
        updateCarousel(currentIndex + 1);
      } else {
        // Swiped down or right -> Previous slide downwards
        updateCarousel(currentIndex - 1);
      }
    }
    startAutoPlay();
  }, { passive: true });

  // Keyboard accessibility when carousel is hovered / focused
  document.addEventListener('keydown', (e) => {
    // Only if carousel is visible in viewport
    const rect = carousel.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isVisible) return;

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      updateCarousel(currentIndex - 1);
      startAutoPlay();
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      updateCarousel(currentIndex + 1);
      startAutoPlay();
    }
  });

  // Initialize
  updateCarousel(0);
  startAutoPlay();
}

/* ==========================================================================
   9. Hero "Discuss a Project" Smooth Scroll & Interaction
   ========================================================================== */
function initDiscussButton() {
  const discussBtn = document.getElementById('heroDiscussBtn');
  const copyBtn = document.getElementById('copyEmailBtn');

  if (!discussBtn) return;

  discussBtn.addEventListener('click', (e) => {
    if (copyBtn) {
      e.preventDefault();
      if (window.__lenis) {
        window.__lenis.scrollTo(copyBtn, { offset: -100 });
      } else {
        copyBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Highlight copy button momentarily
      setTimeout(() => {
        copyBtn.style.transform = 'scale(1.04)';
        copyBtn.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        setTimeout(() => {
          copyBtn.style.transform = '';
          copyBtn.style.boxShadow = '';
        }, 1200);
      }, 700);
    }
  });
}


