/**
 * GUIDO CASTELLOTTI — ARCHIVO DE TRABAJOS (trabajos.html)
 * Renderizado de grilla editorial con filtros por disciplina y soporte para URL hash/params
 */

const CATALOG_PROJECTS = [
  {
    categoryKey: "integrales",
    categoryLabel: "Proyectos Integrales",
    date: "2021",
    slug: "copia-de-bastilla",
    img: "img/proyectos/guido_0074.jpg",
    alt: "CALIOPE FAMILY — Guido Castellotti",
    title: "CALIOPE FAMILY",
    desc: "Fotografía en exterior · Diseño de piezas para redes sociales · Backstage Caliope Family x Kerchak"
  },
  {
    categoryKey: "integrales",
    categoryLabel: "Proyectos Integrales",
    date: "2021",
    slug: "bastilla",
    img: "img/proyectos/guido_0021.jpg",
    alt: "BASTILLA — Guido Castellotti",
    title: "BASTILLA",
    desc: "Diseño de piezas para redes sociales · Fotografía en estudio"
  },
  {
    categoryKey: "integrales",
    categoryLabel: "Proyectos Integrales",
    date: "2021",
    slug: "suave-lomito",
    img: "img/proyectos/guido_0027.jpg",
    alt: "SUAVE LOMITO — Guido Castellotti",
    title: "SUAVE LOMITO",
    desc: "Desarrollo de identidad integral"
  },
  {
    categoryKey: "integrales",
    categoryLabel: "Proyectos Integrales",
    date: "2021",
    slug: "kerchak",
    img: "img/proyectos/guido_0025.jpg",
    alt: "KERCHAK — Guido Castellotti",
    title: "KERCHAK",
    desc: "Fotografía en exterior · Diseño de piezas para redes sociales · Backstage"
  },
  {
    categoryKey: "integrales",
    categoryLabel: "Proyectos Integrales",
    date: "2024",
    slug: "gladyson-panther",
    img: "img/proyectos/guido_0023.jpg",
    alt: "GLADYSON PANTHER — Guido Castellotti",
    title: "GLADYSON PANTHER",
    desc: "Producción audiovisual · Fotografía analógica · Identidad visual"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2024",
    slug: "lira-bikes",
    img: "img/proyectos/guido_0215.jpg",
    alt: "LIRA BIKES — Guido Castellotti",
    title: "LIRA BIKES",
    desc: "Producción audiovisual en colaboración con Agustín Menéndez · Montaje dinámico y cámara gimbal"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2023",
    slug: "cms-arquitectas",
    img: "img/proyectos/guido_0160.jpg",
    alt: "CMS ARQUITECTAS — Guido Castellotti",
    title: "CMS ARQUITECTAS",
    desc: "Fotografía y video de arquitectura · Seguimiento de obra e informes de avance"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2023",
    slug: "dege-muebles",
    img: "img/proyectos/guido_0165.jpg",
    alt: "DEGË MUEBLES — Guido Castellotti",
    title: "DEGË MUEBLES",
    desc: "Fotografía e-commerce · Contenido audiovisual para redes y catálogo"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2024",
    slug: "karma-negro-pelicula",
    img: "img/proyectos/guido_0168.jpg",
    alt: "KARMA NEGRO PELÍCULA — Guido Castellotti",
    title: "KARMA NEGRO PELÍCULA",
    desc: "Cobertura fotográfica y audiovisual del estreno en Cine El Cairo"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2023",
    slug: "au-exclusive",
    img: "img/proyectos/guido_0180.jpg",
    alt: "AU EXCLUSIVE — Guido Castellotti",
    title: "AU EXCLUSIVE",
    desc: "Proyecto fotográfico para marca de indumentaria urbana inspirada en la cultura hip hop"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2023",
    slug: "mirenka",
    img: "img/proyectos/guido_0217.jpg",
    alt: "MIRENKA — Guido Castellotti",
    title: "MIRENKA",
    desc: "Sesión fotográfica en estudio para accesorios de autor moldeados a mano"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2022",
    slug: "anti-pop",
    img: "img/proyectos/guido_0172.jpg",
    alt: "ANTIPOP — Guido Castellotti",
    title: "ANTIPOP",
    desc: "Producción de fotografía y video en Chapadmalal para marca de indumentaria"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2024",
    slug: "on-tentacion-turismo",
    img: "img/proyectos/guido_0170.jpg",
    alt: "BRASIL┃ON TENTACIÓN TURISMO — Guido Castellotti",
    title: "BRASIL ┃ ON TENTACIÓN TURISMO",
    desc: "Producción audiovisual y fotografía de viajes · Contenido para redes sociales"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2023",
    slug: "sonder",
    img: "img/proyectos/guido_0174.jpg",
    alt: "SONDER — Guido Castellotti",
    title: "SONDER",
    desc: "Campaña audiovisual y fotografía de estudio para marca deportiva"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2024",
    slug: "panes-y-peces-restaurante-uruguay",
    img: "img/proyectos/guido_0176.jpg",
    alt: "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
    title: "URUGUAY ┃ PANES Y PECES",
    desc: "Fotografía gastronómica y ambiental de restaurante"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2024",
    slug: "fapyd-unr",
    img: "img/proyectos/guido_0182.jpg",
    alt: "FAPYD (UNR) — Guido Castellotti",
    title: "FAPYD (UNR)",
    desc: "Registro fotográfico institucional y arquitectónico · Facultad de Arquitectura"
  },
  {
    categoryKey: "fotovideo",
    categoryLabel: "Fotografía & Video",
    date: "2022",
    slug: "lila-grace",
    img: "img/proyectos/guido_0178.jpg",
    alt: "LILA GRACE — Guido Castellotti",
    title: "LILA GRACE",
    desc: "Fotografía en exterior para el lanzamiento de la colección de verano"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2024",
    slug: "ballet-para-las-masas",
    img: "img/proyectos/guido_0495.jpg",
    alt: "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — Guido Castellotti",
    title: "BALLET PARA LAS MASAS",
    desc: "Desarrollo de identidad · Dirección tipográfica · Afiches y visualizers"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2024",
    slug: "rosario-es-un-eclipse",
    img: "img/proyectos/guido_0469.jpg",
    alt: "ROSARIO ES UN ECLIPSE — Guido Castellotti",
    title: "ROSARIO ES UN ECLIPSE",
    desc: "Desarrollo de sistema editorial completo · Tapas, contratapa, interiores y colofón"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2023",
    slug: "diseno-editorial-de-revista",
    img: "img/proyectos/guido_0473.jpg",
    alt: "DISEÑO EDITORIAL — Guido Castellotti",
    title: "DISEÑO EDITORIAL DE REVISTA",
    desc: "Dirección de arte · Maquetación editorial y diseño tipográfico"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2024",
    slug: "gyor",
    img: "img/proyectos/guido_0471.jpg",
    alt: "GYOR — Guido Castellotti",
    title: "GYOR",
    desc: "Diseño de catálogo · Jerarquización de información e identidad visual"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2023",
    slug: "kid-kerchak",
    img: "img/proyectos/guido_0467.jpg",
    alt: "KERCHAK — Guido Castellotti",
    title: "KID KERCHAK",
    desc: "Diseño de tapa para single y piezas gráficas para redes sociales"
  },
  {
    categoryKey: "diseno",
    categoryLabel: "Diseño",
    date: "2024",
    slug: "no-paro-ni-a-palo",
    img: "img/proyectos/guido_0475.jpg",
    alt: "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
    title: "FESTIVAL NO PARO NI A PALO",
    desc: "Proyecto de diseño para festival de trap · Piezas digitales e impresas"
  },
  {
    categoryKey: "impresa",
    categoryLabel: "Obra Impresa",
    date: "2024",
    slug: "print",
    img: "img/proyectos/guido_0576.jpg",
    alt: "FOTOGRAFÍA IMPRESA — Guido Castellotti",
    title: "FOTOGRAFÍA IMPRESA",
    desc: "Risografías A3 en papel obra 120g a una y dos tintas"
  },
  {
    categoryKey: "impresa",
    categoryLabel: "Obra Impresa",
    date: "2024",
    slug: "rosario-es-un-eclipse-print",
    img: "img/proyectos/guido_0568.jpg",
    alt: "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
    title: "PRINT ROSARIO ES UN ECLIPSE",
    desc: "Prints en formato A3 impresos en risografía y calcomanías de autor"
  },
  {
    categoryKey: "impresa",
    categoryLabel: "Obra Impresa",
    date: "2023",
    slug: "fanzine",
    img: "img/proyectos/guido_0566.jpg",
    alt: "ZINE INFIERNOS — Guido Castellotti",
    title: "ZINE INFIERNOS",
    desc: "Publicación independiente · Selección de fotografías y encuadernación artesanal"
  },
  {
    categoryKey: "impresa",
    categoryLabel: "Obra Impresa",
    date: "2024",
    slug: "fanzine-bpm",
    img: "img/proyectos/guido_0570.jpg",
    alt: "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
    title: "ZINE BALLET PARA LAS MASAS",
    desc: "Publicación editorial en colaboración con Nasir Catriel y Fasciolo"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initWorksArchive();
});

function initWorksArchive() {
  const gridContainer = document.getElementById('worksArchiveGrid');
  const filterBtns = document.querySelectorAll('.works-filter-btn');
  const counterLabel = document.getElementById('worksArchiveCounter');

  if (!gridContainer) return;

  // 1. Renderizar todas las tarjetas inicialmente
  renderCards(CATALOG_PROJECTS);

  // 2. Comprobar si hay un filtro preseleccionado vía URL (?filter=... o #...)
  const params = new URLSearchParams(window.location.search);
  const filterFromParam = params.get('filter');
  const hashFromUrl = window.location.hash.replace('#', '');
  const activeInitialFilter = filterFromParam || hashFromUrl || 'all';

  if (activeInitialFilter !== 'all') {
    applyFilter(activeInitialFilter);
  }

  // 3. Listener para botones de filtro
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter') || 'all';
      applyFilter(targetFilter);

      // Actualizar URL sin recargar
      const newUrl = targetFilter === 'all' 
        ? window.location.pathname 
        : `${window.location.pathname}?filter=${targetFilter}`;
      window.history.replaceState(null, '', newUrl);
    });
  });

  function applyFilter(filterKey) {
    // Actualizar clase activa en botones
    filterBtns.forEach(b => {
      if (b.getAttribute('data-filter') === filterKey) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    // Filtrar proyectos
    const filtered = (filterKey === 'all')
      ? CATALOG_PROJECTS
      : CATALOG_PROJECTS.filter(p => p.categoryKey === filterKey);

    renderCards(filtered);

    // Actualizar contador
    if (counterLabel) {
      counterLabel.textContent = `Mostrando ${filtered.length} de ${CATALOG_PROJECTS.length} proyectos`;
    }
  }

  function renderCards(projects) {
    gridContainer.innerHTML = '';

    projects.forEach((proj, index) => {
      const article = document.createElement('article');
      article.className = 'works-archive-card';
      article.style.animationDelay = `${(index % 9) * 0.04}s`;

      article.innerHTML = `
        <a href="proyecto.html?id=${proj.slug}" class="works-archive-link" aria-label="${proj.title}">
          <div class="works-archive-thumb-wrap">
            <img 
              src="${proj.img}" 
              alt="${proj.alt}" 
              class="works-archive-thumb-img" 
              loading="lazy" 
              draggable="false"
            />
            <div class="works-archive-badge">${proj.categoryLabel}</div>
          </div>
          <div class="works-archive-content">
            <div class="works-archive-meta">
              <span class="works-archive-date">${proj.date}</span>
            </div>
            <h3 class="works-archive-title">
              <span>${proj.title}</span>
              <span class="works-arrow-icon">↗</span>
            </h3>
            <p class="works-archive-desc">${proj.desc}</p>
          </div>
        </a>
      `;

      gridContainer.appendChild(article);
    });
  }
}
