/**
 * GUIDO CASTELLOTTI — PORTFOLIO EDITORIAL
 * Controladores: Carrusel Deslizable + Efecto Telón Rojo (Curtain Reveal) + Ventana "HABLEMOS"
 */

document.addEventListener('DOMContentLoaded', () => {
  initPanoramaSlider();
  initHeroContraforma();
  initDraggableCarousel();
  initFloatingTalkWidget();
  initScrollReveal();
  initImageTrail();
  initMobileMenu();
  initFloatingWidgetVisibility();
});

/* =========================================================================
   1. Secuencia Panorámica Rápida (Corte Secuencial de Golpe cada 1s)
   ========================================================================= */
function initPanoramaSlider() {
  const slides = document.querySelectorAll('.panorama-slide');
  const prevBtn = document.getElementById('panoramaPrevBtn');
  const nextBtn = document.getElementById('panoramaNextBtn');
  const titleLabel = document.getElementById('panoramaTitleLabel');
  const descLabel = document.getElementById('panoramaDescLabel');
  const counterLabel = document.getElementById('panoramaCounterLabel');
  const viewport = document.getElementById('panoramaViewport');

  if (slides.length === 0) return;

  let currentIndex = 0;
  const total = slides.length;
  let intervalId = null;

  function showSlide(index) {
    currentIndex = (index + total) % total;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    const activeSlide = slides[currentIndex];
    const title = activeSlide.getAttribute('data-title') || '';
    const desc = activeSlide.getAttribute('data-desc') || '';
    const num = String(currentIndex + 1).padStart(2, '0');
    const totalNum = String(total).padStart(2, '0');

    if (titleLabel) titleLabel.textContent = title;
    if (descLabel) descLabel.textContent = desc;
    if (counterLabel) counterLabel.textContent = `${num} / ${totalNum}`;
  }

  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 1000); // Salto instantáneo cada 1 segundo (1000ms)
  }

  function stopAutoplay() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentIndex - 1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentIndex + 1);
      startAutoplay();
    });
  }

  // Swipe táctil en móviles
  if (viewport) {
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        showSlide(currentIndex + 1);
        startAutoplay();
      } else if (touchEndX - touchStartX > 50) {
        showSlide(currentIndex - 1);
        startAutoplay();
      }
    }, { passive: true });
  }

  // Arrancar inmediatamente
  showSlide(0);
  startAutoplay();
}


/* =========================================================================
   2. Logo en Contraforma con Revelado Interactivo (Canvas Knockout + Spotlight)
   ========================================================================= */
function initHeroContraforma() {
  const canvas = document.getElementById('heroContraformaCanvas');
  const viewport = document.getElementById('panoramaViewport');
  if (!canvas || !viewport) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Path SVG original del monograma geométrico de Guido Castellotti (viewBox 825 x 385)
  const logoSvgPath = "M0,0h92v301h-92z M222,0h92v302h-92z M378,0h447v82h-447z M378,82h446v1h-446z M444,83h92v218h-92z M667,83h92v302h-92z M0,301h93v1h-93z M443,301h93v1h-93z M0,302h536v83h-536z";
  const logoPath2D = new Path2D(logoSvgPath);
  const LOGO_ORIG_W = 825;
  const LOGO_ORIG_H = 385;

  let width = 0;
  let height = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let spotlightRadius = 0;
  let targetRadius = 0;
  let tiltX = 0;
  let tiltY = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let isHovering = false;
  let isVisible = true;
  let animId = null;

  function resize() {
    const rect = viewport.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!isHovering) {
      currentX = targetX = width / 2;
      currentY = targetY = height / 2;
    }
  }

  window.addEventListener('resize', resize);
  resize();

  function onPointerMove(e) {
    const rect = viewport.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;
    targetRadius = Math.max(160, Math.min(width * 0.24, 290));
    isHovering = true;

    // Sutil paralaje en la contraforma según distancia al centro
    const normX = (targetX / width) - 0.5;
    const normY = (targetY / height) - 0.5;
    targetTiltX = normX * 20;
    targetTiltY = normY * 12;
  }

  viewport.addEventListener('pointermove', onPointerMove, { passive: true });
  viewport.addEventListener('pointerdown', onPointerMove, { passive: true });

  viewport.addEventListener('pointerleave', () => {
    isHovering = false;
    targetRadius = 0;
    targetTiltX = 0;
    targetTiltY = 0;
  });

  // Render loop a 60/120 fps con interpolación física suave (lerp)
  function render() {
    if (!isVisible) return;

    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    spotlightRadius += (targetRadius - spotlightRadius) * 0.09;
    tiltX += (targetTiltX - tiltX) * 0.08;
    tiltY += (targetTiltY - tiltY) * 0.08;

    ctx.clearRect(0, 0, width, height);

    // 1. Capa oscura velo cinematográfico (96% opacidad para contraste editorial y recorte puro)
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(8, 8, 8, 0.96)';
    ctx.fillRect(0, 0, width, height);

    // 2. Cálculo responsivo de proporciones del logo centrado
    const maxLogoW = width > 768 
      ? Math.min(width * 0.46, 600) 
      : Math.min(width * 0.76, 360);
    const scale = maxLogoW / LOGO_ORIG_W;
    const logoW = LOGO_ORIG_W * scale;
    const logoH = LOGO_ORIG_H * scale;
    const logoX = (width - logoW) / 2 + tiltX;
    // Elevamos ligeramente el logo para dejar respiro al subtítulo
    const logoY = (height - logoH) / 2 - (height > 600 ? 28 : 16) + tiltY;

    // 3. CONTRAFORMA: Calar la capa oscura con la silueta del logo (destination-out)
    ctx.globalCompositeOperation = 'destination-out';
    ctx.save();
    ctx.translate(logoX, logoY);
    ctx.scale(scale, scale);
    ctx.fillStyle = '#000000';
    ctx.fill(logoPath2D);
    ctx.restore();

    // 4. REVELADO DINÁMICO: Apertura de foco en la posición del puntero
    if (spotlightRadius > 1.5) {
      const grad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, spotlightRadius);
      grad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      grad.addColorStop(0.45, 'rgba(0, 0, 0, 0.8)');
      grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.28)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(currentX, currentY, spotlightRadius, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. FILETE EDITORIAL: Trazo vectorial nítido para enmarcar la geometría del logo
    ctx.globalCompositeOperation = 'source-over';
    ctx.save();
    ctx.translate(logoX, logoY);
    ctx.scale(scale, scale);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
    ctx.lineWidth = 1.6 / scale;
    ctx.stroke(logoPath2D);
    ctx.restore();

    animId = requestAnimationFrame(render);
  }

  // Optimización de rendimiento: pausar render cuando el Hero no esté visible en pantalla
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animId) {
          animId = requestAnimationFrame(render);
        } else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      });
    }, { threshold: 0.05 });
    observer.observe(viewport);
  } else {
    animId = requestAnimationFrame(render);
  }
}


/* =========================================================================
   3. Carrusel Deslizable Horizontal (Rueda de Mouse, Flechas Nav y Touch)
   ========================================================================= */
function initDraggableCarousel() {
  const viewport = document.getElementById('worksCarouselViewport');
  const track = document.getElementById('worksCarouselTrack');
  const filterBtns = document.querySelectorAll('.works-carousel-section .filter-btn');
  const cards = document.querySelectorAll('.carousel-card');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (!viewport || !track) return;

  // 1. Desplazamiento orgánico con la rueda del mouse (Wheel)
  viewport.addEventListener('wheel', (e) => {
    // Si el usuario gira verticalmente la rueda
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      const maxScroll = viewport.scrollWidth - viewport.clientWidth;
      const isAtStart = viewport.scrollLeft <= 2;
      const isAtEnd = Math.ceil(viewport.scrollLeft) >= maxScroll - 2;

      // Si no estamos en el extremo del carrusel, deslizar horizontalmente
      if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
        e.preventDefault();
        viewport.scrollLeft += e.deltaY * 1.5;
        updateArrowStates();
      }
      // Si llega al final o al inicio, no previene el default y el usuario continúa scrolleando verticalmente la página
    }
  }, { passive: false });

  // 2. Control de flechas editoriales ← y →
  function getScrollStep() {
    const visibleCard = Array.from(cards).find(c => !c.classList.contains('is-hidden'));
    const cardWidth = visibleCard ? visibleCard.offsetWidth : 330;
    return cardWidth + 32; // card + gap
  }

  function updateArrowStates() {
    if (!prevBtn || !nextBtn) return;
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    prevBtn.disabled = viewport.scrollLeft <= 5;
    nextBtn.disabled = Math.ceil(viewport.scrollLeft) >= maxScroll - 5;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: -getScrollStep() * 1.5, behavior: 'smooth' });
      setTimeout(updateArrowStates, 350);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      viewport.scrollBy({ left: getScrollStep() * 1.5, behavior: 'smooth' });
      setTimeout(updateArrowStates, 350);
    });
  }

  viewport.addEventListener('scroll', () => {
    updateArrowStates();
  }, { passive: true });

  // 3. Arrastre opcional suave (sin bloquear la interacción natural)
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;

  viewport.addEventListener('mousedown', (e) => {
    isDown = true;
    hasDragged = false;
    startX = e.pageX - viewport.offsetLeft;
    scrollLeft = viewport.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (isDown) {
      isDown = false;
      viewport.classList.remove('is-dragging');
    }
  });

  viewport.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const x = e.pageX - viewport.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 6) {
      hasDragged = true;
      viewport.classList.add('is-dragging');
      e.preventDefault();
      viewport.scrollLeft = scrollLeft - (walk * 1.5);
      updateArrowStates();
    }
  });

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (hasDragged) {
        e.preventDefault();
      }
    });
  });

  // 4. Filtros de categoría
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.split(' ').includes(filter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });

      viewport.scrollTo({ left: 0, behavior: 'smooth' });
      setTimeout(updateArrowStates, 350);
    });
  });

  updateArrowStates();
}

/* =========================================================================
   2. Ventana Flotante Rectangular "HABLEMOS"
   ========================================================================= */
function initFloatingTalkWidget() {
  const btnOpen = document.getElementById('btnOpenTalkModal');
  const btnClose = document.getElementById('btnCloseTalkModal');
  const panel = document.getElementById('floatingTalkPanel');
  const backdrop = document.getElementById('talkBackdrop');
  const form = document.getElementById('contactTalkForm');
  const extraTriggers = document.querySelectorAll('.open-talk-trigger');
  const inputType = document.getElementById('talkType');

  if (!btnOpen || !panel) return;

  function openPanel(prefillService = '') {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.classList.add('open');

    if (prefillService && inputType) {
      inputType.value = prefillService;
    }

    const firstInput = document.getElementById('talkName');
    if (firstInput) setTimeout(() => firstInput.focus(), 150);
  }

  function closePanel() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.classList.remove('open');
  }

  btnOpen.addEventListener('click', (e) => {
    e.stopPropagation();
    if (panel.classList.contains('open')) {
      closePanel();
    } else {
      openPanel();
    }
  });

  btnClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePanel();
  });

  backdrop?.addEventListener('click', closePanel);

  extraTriggers.forEach(t => {
    t.addEventListener('click', () => {
      const service = t.getAttribute('data-service') || '';
      openPanel(service);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closePanel();
    }
  });

  const btnMail = document.getElementById('btnSendMail');
  const btnWa = document.getElementById('btnSendWhatsapp');

  function getFormData() {
    const name = document.getElementById('talkName')?.value.trim() || '';
    const email = document.getElementById('talkEmail')?.value.trim() || '';
    const type = document.getElementById('talkType')?.value.trim() || 'Fotografía';
    const message = document.getElementById('talkMessage')?.value.trim() || '';
    return { name, email, type, message };
  }

  btnWa?.addEventListener('click', () => {
    const { name, email, type, message } = getFormData();
    if (!name || !message) {
      if (!name) document.getElementById('talkName')?.focus();
      else document.getElementById('talkMessage')?.focus();
      return;
    }
    const text = encodeURIComponent(
      `Hola Guido, mi nombre es ${name}${email ? ' (' + email + ')' : ''}. Te escribo para consultar por un proyecto de ${type}:\n\n"${message}"`
    );
    window.open(`https://wa.me/5493412752234?text=${text}`, '_blank');
    form.reset();
    closePanel();
  });

  btnMail?.addEventListener('click', () => {
    const { name, email, type, message } = getFormData();
    if (!name || !message) {
      if (!name) document.getElementById('talkName')?.focus();
      else document.getElementById('talkMessage')?.focus();
      return;
    }
    const subject = encodeURIComponent(`Consulta de Proyecto: ${type} - ${name}`);
    const body = encodeURIComponent(
      `Hola Guido,\n\nMi nombre es ${name}.\nEmail de contacto: ${email}\nTipo de proyecto: ${type}\n\nMensaje:\n${message}\n\nEnviado desde portfolio editorial.`
    );
    window.location.href = `mailto:contacto@juliancosta.com?subject=${subject}&body=${body}`;
    form.reset();
    closePanel();
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

/* =========================================================================
   3. Animación de Entrada Suave (Scroll Reveal con IntersectionObserver)
   ========================================================================= */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

/* =========================================================================
   4. Rastro de Imágenes Interactivo con Cursor (Image Trail)
   ========================================================================= */
function initImageTrail() {
  const canvas = document.getElementById('canvasTrail');
  const container = document.getElementById('trailContainer');
  if (!canvas || !container) return;

  const images = [
    'img/proyectos/guido_0160.jpg',
    'img/proyectos/guido_0074.jpg',
    'img/proyectos/guido_0243.jpg',
    'img/proyectos/guido_0001.jpg',
    'img/proyectos/guido_0021.jpg',
    'img/proyectos/guido_0030.jpg',
    'img/proyectos/guido_0559.jpg',
    'img/proyectos/guido_0215.jpg'
  ];

  let currentIndex = 0;
  let lastX = -9999;
  let lastY = -9999;
  const minDistance = 65; // Distancia mínima en píxeles de movimiento para spawnear
  let zCounter = 10;

  const sizePalette = [220, 260, 200, 280, 210, 250, 240];
  let sizeIndex = 0;

  function spawnImage(x, y) {
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.alt = 'Fotografía de archivo';
    img.className = 'trail-image-item';

    // Ancho variable manteniendo proporción natural
    const isMobile = window.innerWidth <= 768;
    const baseWidth = sizePalette[sizeIndex % sizePalette.length];
    const finalWidth = isMobile ? Math.round(baseWidth * 0.65) : baseWidth;
    sizeIndex++;

    img.style.width = `${finalWidth}px`;
    img.style.height = 'auto';

    // Rotación sutil aleatoria (-6deg a 6deg) para sensación de collage editorial
    const randomRot = (Math.random() * 12 - 6).toFixed(1) + 'deg';
    img.style.setProperty('--rot', randomRot);

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.zIndex = ++zCounter;

    container.appendChild(img);
    currentIndex = (currentIndex + 1) % images.length;

    // Desvanecer después de 1.2s y remover limpiamente del DOM
    setTimeout(() => {
      img.classList.add('fading');
      setTimeout(() => {
        if (img.parentNode) {
          img.remove();
        }
      }, 700);
    }, 1200);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dist = Math.hypot(x - lastX, y - lastY);
    if (dist > minDistance) {
      lastX = x;
      lastY = y;
      spawnImage(x, y);
    }
  });

  // Soporte para dispositivos táctiles (Touch)
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist > minDistance) {
        lastX = x;
        lastY = y;
        spawnImage(x, y);
      }
    }
  }, { passive: true });
}

/* =========================================================================
   5. Menú Hamburguesa & Navegación Móvil
   ========================================================================= */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const overlay = document.getElementById('mobileNavOverlay');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !overlay) return;

  function toggleMenu() {
    const isOpen = overlay.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('mobile-menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* =========================================================================
   6. Ocultar Widget Flotante al Llegar al Bloque de Contacto / Footer
   ========================================================================= */
function initFloatingWidgetVisibility() {
  const widget = document.getElementById('floatingTalkWidget');
  const contactSection = document.getElementById('contacto');

  if (!widget || !contactSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        widget.classList.add('is-hidden');
      } else {
        widget.classList.remove('is-hidden');
      }
    });
  }, {
    threshold: 0.12
  });

  observer.observe(contactSection);
}
