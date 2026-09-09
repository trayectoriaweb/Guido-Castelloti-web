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
  initHeaderScroll();
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

    if (typeof window.onPanoramaSlideChange === 'function') {
      window.onPanoramaSlideChange(currentIndex);
    }
  }

  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 1500); // Ritmo cinematográfico cada 1.5 segundos
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
   2. Logo Flotante con Mosaico Craquelado Interior (Sigue al Cursor)
   ========================================================================= */
function initHeroContraforma() {
  const canvas = document.getElementById('heroContraformaCanvas');
  const viewport = document.getElementById('panoramaViewport');
  if (!canvas || !viewport) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Path SVG del monograma geométrico de Guido Castellotti (viewBox 825 x 385)
  const logoSvgPath = "M0,0h92v301h-92z M222,0h92v302h-92z M378,0h447v82h-447z M378,82h446v1h-446z M444,83h92v218h-92z M667,83h92v302h-92z M0,301h93v1h-93z M443,301h93v1h-93z M0,302h536v83h-536z";
  const logoPath2D = new Path2D(logoSvgPath);
  const LOGO_ORIG_W = 825;
  const LOGO_ORIG_H = 385;

  // Generador de trama de grano analógico "trash" (estilo risografía / serigrafía / fanzine)
  let noisePattern = null;
  function createNoisePattern() {
    try {
      const nCanvas = document.createElement('canvas');
      nCanvas.width = 160;
      nCanvas.height = 160;
      const nCtx = nCanvas.getContext('2d');
      if (!nCtx) return null;

      const imgData = nCtx.createImageData(160, 160);
      const d = imgData.data;
      for (let i = 0; i < d.length; i += 4) {
        const isWhite = Math.random() < 0.45;
        const v = isWhite ? 255 : 0;
        const a = Math.floor(Math.random() * 85);
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = a;
      }
      nCtx.putImageData(imgData, 0, 0);
      return ctx.createPattern(nCanvas, 'repeat');
    } catch (e) {
      return null;
    }
  }

  let width = 0, height = 0;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isHovering = false;
  let isVisible = true;
  let animId = null;

  // Detección de dispositivos móviles / táctiles
  let isMobile = false;
  function updateMobileState() {
    isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches || 
               (window.innerWidth <= 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
  }

  // Pre-carga de imágenes del carrusel para reproducir dentro del logo en mobile
  const slideImgs = Array.from(viewport.querySelectorAll('.panorama-img'));
  const mobileLogoImgs = slideImgs.map(img => {
    const pre = new Image();
    pre.src = img.getAttribute('src');
    return pre;
  });
  let mobileSlideIndex = 0;

  // Sincronización con el cambio de panorámica del hero
  window.onPanoramaSlideChange = (slideIndex) => {
    mobileSlideIndex = (slideIndex + 2) % (mobileLogoImgs.length || 1);
  };

  // Autoplay interno en mobile cada 2s para asegurar dinamismo continuo
  setInterval(() => {
    if (isMobile && isVisible) {
      mobileSlideIndex = (mobileSlideIndex + 1) % (mobileLogoImgs.length || 1);
    }
  }, 2000);

  // Giroscopio: respuesta fluida al tilt del teléfono en mobile
  let tiltTargetX = 0;
  let tiltTargetY = 0;

  function onDeviceOrientation(e) {
    if (!isMobile) return;
    const gamma = (typeof e.gamma === 'number' && !isNaN(e.gamma)) ? e.gamma : 0;
    const beta = (typeof e.beta === 'number' && !isNaN(e.beta)) ? e.beta : 48;

    // Normalización reactiva al movimiento de muñeca (gamma lateral, beta vertical, neutro ~45°)
    const normX = Math.max(-1, Math.min(1, gamma / 18));
    const normY = Math.max(-1, Math.min(1, (beta - 45) / 16));

    // Rango amplio y desatado: el logo recorre holgadamente toda la pantalla del teléfono
    const maxOffsetW = width * 0.45;
    const maxOffsetH = height * 0.42;
    tiltTargetX = normX * maxOffsetW;
    tiltTargetY = normY * maxOffsetH;

    targetX = (width / 2) + tiltTargetX;
    targetY = (height / 2) + tiltTargetY;
  }

  let orientationInitialized = false;
  function initOrientation() {
    if (orientationInitialized) return;
    if (typeof window.DeviceOrientationEvent !== 'undefined') {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        const reqIOS = () => {
          DeviceOrientationEvent.requestPermission()
            .then(state => {
              if (state === 'granted') {
                window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
                orientationInitialized = true;
              }
            })
            .catch(() => {});
        };
        window.addEventListener('touchstart', reqIOS, { passive: true, once: true });
      } else {
        window.addEventListener('deviceorientation', onDeviceOrientation, { passive: true });
        orientationInitialized = true;
      }
    }
  }

  function resize() {
    updateMobileState();
    initOrientation();
    const rect = viewport.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    noisePattern = createNoisePattern();

    if (!isHovering && !isMobile) {
      currentX = targetX = width / 2;
      currentY = targetY = height / 2;
    } else if (isMobile) {
      targetX = (width / 2) + tiltTargetX;
      targetY = (height / 2) + tiltTargetY;
      if (currentX === 0 && currentY === 0) {
        currentX = targetX;
        currentY = targetY;
      }
    }
  }

  window.addEventListener('resize', resize);
  resize();

  // Seguimiento del cursor: en desktop sigue libremente el puntero
  function onPointerMove(e) {
    if (isMobile) return;
    const rect = viewport.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= 0 && e.clientY <= rect.bottom) {
      targetX = e.clientX - rect.left;
      targetY = Math.max(0, e.clientY - rect.top);
      isHovering = true;
    } else {
      isHovering = false;
      targetX = width / 2;
      targetY = height / 2;
    }
  }

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerdown', onPointerMove, { passive: true });

  viewport.addEventListener('pointerleave', () => {
    if (isMobile) return;
    isHovering = false;
    targetX = width / 2;
    targetY = height / 2;
  });

  // Render loop a 60/120 fps
  function render() {
    if (!isVisible) return;

    // Movimiento orgánico magnético: inercia reactiva (0.09 en mobile para fluidez con el giroscopio, 0.12 en desktop)
    const lerpSpeed = isMobile ? 0.09 : 0.12;
    currentX += (targetX - currentX) * lerpSpeed;
    currentY += (targetY - currentY) * lerpSpeed;

    // Limpieza completa del canvas
    ctx.clearRect(0, 0, width, height);

    // Escala del logo según resolución
    const logoW = width > 768 
      ? Math.min(Math.max(width * 0.30, 270), 440) 
      : Math.min(Math.max(width * 0.68, 230), 330);
    const scale = logoW / LOGO_ORIG_W;
    const logoH = LOGO_ORIG_H * scale;

    // Centrado del logo en el cursor / giroscopio acotado al viewport
    const rawX = currentX - logoW / 2;
    const rawY = currentY - logoH / 2;
    const logoX = Math.max(0, Math.min(width - logoW, rawX));
    const logoY = Math.max(0, Math.min(height - logoH, rawY));

    // 1. Recorte EXACTO y RECTO a la silueta vectorial del logo
    ctx.save();
    ctx.translate(logoX, logoY);
    ctx.scale(scale, scale);
    ctx.clip(logoPath2D);

    if (isMobile) {
      // Mobile: Dibujar foto activa del carrusel con ajuste cover dentro del logo
      const currentImg = mobileLogoImgs[mobileSlideIndex % mobileLogoImgs.length];
      if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
        const imgRatio = currentImg.naturalWidth / currentImg.naturalHeight;
        const logoRatio = LOGO_ORIG_W / LOGO_ORIG_H;
        let dw, dh, dx, dy;
        if (imgRatio > logoRatio) {
          dh = LOGO_ORIG_H;
          dw = dh * imgRatio;
          dx = (LOGO_ORIG_W - dw) / 2;
          dy = 0;
        } else {
          dw = LOGO_ORIG_W;
          dh = dw / imgRatio;
          dx = 0;
          dy = (LOGO_ORIG_H - dh) / 2;
        }
        ctx.drawImage(currentImg, dx, dy, dw, dh);

        // Capa de tinte rojo Xerox (#e51d1d) fusionada con la fotografía
        ctx.save();
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = '#e51d1d';
        ctx.fillRect(0, 0, LOGO_ORIG_W, LOGO_ORIG_H);
        ctx.restore();

        // Destello sutil para realzar altas luces en el rojo
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = 'rgba(229, 29, 29, 0.20)';
        ctx.fillRect(0, 0, LOGO_ORIG_W, LOGO_ORIG_H);
        ctx.restore();
      } else {
        ctx.fillStyle = '#e51d1d';
        ctx.globalAlpha = 0.85;
        ctx.fillRect(0, 0, LOGO_ORIG_W, LOGO_ORIG_H);
        ctx.globalAlpha = 1.0;
      }
    } else {
      // 2. Desktop: Relleno base en rojo identitario con opacidad calibrada para revelar nítidamente la foto
      ctx.fillStyle = '#e51d1d';
      ctx.globalAlpha = 0.85;
      ctx.fillRect(0, 0, LOGO_ORIG_W, LOGO_ORIG_H);
      ctx.globalAlpha = 1.0;
    }

    // 3. Scanlines analógicas de fotocopiadora espaciadas (la foto respira entre líneas)
    for (let ly = 0; ly < LOGO_ORIG_H; ly += 4) {
      const isThick = (ly % 12 === 0);
      ctx.fillStyle = isThick ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.18)';
      ctx.fillRect(0, ly, LOGO_ORIG_W, isThick ? 2 : 1);
    }

    // 4. Tiras de desplazamiento de escaneo / glitch sutil
    ctx.fillStyle = 'rgba(255, 255, 255, 0.28)';
    const slices = [55, 120, 195, 260, 325];
    slices.forEach(sy => {
      ctx.fillRect(0, sy, LOGO_ORIG_W, 2);
    });

    // 5. Trama de grano analógico "trash" (motas de tóner y risografía)
    if (noisePattern) {
      ctx.fillStyle = noisePattern;
      ctx.globalAlpha = 0.35;
      ctx.fillRect(0, 0, LOGO_ORIG_W, LOGO_ORIG_H);
      ctx.globalAlpha = 1.0;
    }

    // 6. Micro-desgaste analógico de tinta (sello)
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.30)';
    const scratches = [
      [45, 60, 24, 2], [140, 180, 18, 2], [230, 90, 32, 2.5],
      [260, 220, 20, 2], [390, 40, 45, 2], [470, 140, 28, 2],
      [510, 250, 22, 2], [680, 110, 35, 2.5], [740, 290, 30, 2]
    ];
    for (let i = 0; i < scratches.length; i++) {
      const s = scratches[i];
      ctx.fillRect(s[0], s[1], s[2], s[3]);
    }
    ctx.restore();

    ctx.restore();

    animId = requestAnimationFrame(render);
  }

  // Pausar animación al hacer scroll para 0% de uso de CPU fuera del Hero
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

  const widget = document.getElementById('floatingTalkWidget');

  function openPanel(prefillService = '') {
    if (widget) {
      widget.classList.remove('is-hidden');
    }
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

    const contactSection = document.getElementById('contacto');
    if (contactSection && widget) {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        widget.classList.add('is-hidden');
      }
    }
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
  const panel = document.getElementById('floatingTalkPanel');

  if (!widget || !contactSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!panel || !panel.classList.contains('open')) {
          widget.classList.add('is-hidden');
        }
      } else {
        widget.classList.remove('is-hidden');
      }
    });
  }, {
    threshold: 0.12
  });

  observer.observe(contactSection);
}

/* =========================================================================
   7. Cabecera Transparente Estratégica (Hero en Inicio y Fotos en Proyecto)
   ========================================================================= */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const isHome = document.querySelector('.hero-panorama-section') !== null;
  const isProject = document.body.classList.contains('project-detail-body');

  function updateHeader() {
    const scrollY = window.scrollY || window.pageYOffset || 0;

    if (isHome) {
      const hero = document.getElementById('hero');
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      // En el Hero (al inicio): transparente para apreciar las fotos. Al pasar el Hero: blanco
      if (scrollY < heroHeight - 80) {
        header.classList.add('is-transparent');
      } else {
        header.classList.remove('is-transparent');
      }
    } else if (isProject) {
      // En el detalle de proyecto: al inicio blanco (junto al botón de volver),
      // y al bajar por las fotos se hace transparente para aprovechar todo el espacio visual
      if (scrollY > 60) {
        header.classList.add('is-transparent');
      } else {
        header.classList.remove('is-transparent');
      }
    } else {
      header.classList.remove('is-transparent');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}
