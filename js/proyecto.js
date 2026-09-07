/**
 * GUIDO CASTELLOTTI — PROYECTOS & DETALLE
 * Realizador Audiovisual & Diseñador Gráfico · Rosario, Argentina
 * Controlador dinámico para renderizar proyectos y galería completa
 */

const PROJECTS_DATA = [
  {
    "id": 1,
    "slug": "copia-de-bastilla",
    "category": "Proyectos Integrales",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "title": "CALIOPE FAMILY",
    "description": "FOTOGRAFÍA EN EXTERIOR\n\nDISEÑO DE PIEZAS PARA REDES SOCIALES\n\nBACKSTAGE CALIOPE FAMILY X KERCHAK",
    "mainImage": "img/proyectos/guido_0001.jpg",
    "alt": "CALIOPE FAMILY — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0001.jpg",
        "title": "CALIOPE FAMILY — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0002.jpg",
        "title": "CALIOPE FAMILY — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0003.jpg",
        "title": "CALIOPE FAMILY — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0004.jpg",
        "title": "CALIOPE FAMILY — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0005.jpg",
        "title": "CALIOPE FAMILY — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0006.jpg",
        "title": "CALIOPE FAMILY — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0007.jpg",
        "title": "CALIOPE FAMILY — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0008.jpg",
        "title": "CALIOPE FAMILY — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0009.gif",
        "title": "CALIOPE FAMILY — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0010.gif",
        "title": "CALIOPE FAMILY — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0011.gif",
        "title": "CALIOPE FAMILY — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0012.gif",
        "title": "CALIOPE FAMILY — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0013.gif",
        "title": "CALIOPE FAMILY — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0014.gif",
        "title": "CALIOPE FAMILY — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0015.jpg",
        "title": "CALIOPE FAMILY — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0016.jpg",
        "title": "CALIOPE FAMILY — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0017.jpg",
        "title": "CALIOPE FAMILY — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0018.jpg",
        "title": "CALIOPE FAMILY — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0019.gif",
        "title": "CALIOPE FAMILY — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0020.gif",
        "title": "CALIOPE FAMILY — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "title": "CALIOPE FAMILY — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "title": "CALIOPE FAMILY — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "title": "CALIOPE FAMILY — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "title": "CALIOPE FAMILY — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "title": "CALIOPE FAMILY — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "title": "CALIOPE FAMILY — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "title": "CALIOPE FAMILY — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "title": "CALIOPE FAMILY — 28",
        "tag": "Proyectos Integrales"
      }
    ]
  },
  {
    "id": 2,
    "slug": "bastilla",
    "category": "Proyectos Integrales",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "title": "BASTILLA",
    "description": "DISEÑO DE PIEZAS PARA REDES SOCIALES\n\nFOTOGRAFÍA EN ESTUDIO",
    "mainImage": "img/proyectos/guido_0029.jpg",
    "alt": "BASTILLA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/JRtQ9krSbZv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/F3BLd3gBYuY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/LjpeqoHWFEy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0029.jpg",
        "title": "BASTILLA — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0030.jpg",
        "title": "BASTILLA — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0031.jpg",
        "title": "BASTILLA — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0032.jpg",
        "title": "BASTILLA — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0033.jpg",
        "title": "BASTILLA — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0034.jpg",
        "title": "BASTILLA — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0035.jpg",
        "title": "BASTILLA — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0036.jpg",
        "title": "BASTILLA — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0037.jpg",
        "title": "BASTILLA — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0038.jpg",
        "title": "BASTILLA — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0039.jpg",
        "title": "BASTILLA — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0040.jpg",
        "title": "BASTILLA — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0041.jpg",
        "title": "BASTILLA — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0042.jpg",
        "title": "BASTILLA — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0043.jpg",
        "title": "BASTILLA — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0044.jpg",
        "title": "BASTILLA — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0045.jpg",
        "title": "BASTILLA — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0046.jpg",
        "title": "BASTILLA — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0047.jpg",
        "title": "BASTILLA — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0048.jpg",
        "title": "BASTILLA — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0049.jpg",
        "title": "BASTILLA — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0050.jpg",
        "title": "BASTILLA — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0051.jpg",
        "title": "BASTILLA — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0052.jpg",
        "title": "BASTILLA — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0053.jpg",
        "title": "BASTILLA — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0054.jpg",
        "title": "BASTILLA — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0055.jpg",
        "title": "BASTILLA — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0056.jpg",
        "title": "BASTILLA — 28",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0057.jpg",
        "title": "BASTILLA — 29",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0058.jpg",
        "title": "BASTILLA — 30",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0059.jpg",
        "title": "BASTILLA — 31",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0060.jpg",
        "title": "BASTILLA — 32",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0061.jpg",
        "title": "BASTILLA — 33",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0062.jpg",
        "title": "BASTILLA — 34",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0063.jpg",
        "title": "BASTILLA — 35",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0064.jpg",
        "title": "BASTILLA — 36",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0065.jpg",
        "title": "BASTILLA — 37",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0066.jpg",
        "title": "BASTILLA — 38",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0067.jpg",
        "title": "BASTILLA — 39",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0068.jpg",
        "title": "BASTILLA — 40",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0069.jpg",
        "title": "BASTILLA — 41",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0070.jpg",
        "title": "BASTILLA — 42",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0071.jpg",
        "title": "BASTILLA — 43",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0072.jpg",
        "title": "BASTILLA — 44",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0073.jpg",
        "title": "BASTILLA — 45",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "title": "BASTILLA — 46",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "title": "BASTILLA — 47",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "title": "BASTILLA — 48",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "title": "BASTILLA — 49",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "title": "BASTILLA — 50",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "title": "BASTILLA — 51",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "title": "BASTILLA — 52",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "title": "BASTILLA — 53",
        "tag": "Proyectos Integrales"
      }
    ]
  },
  {
    "id": 3,
    "slug": "suave-lomito",
    "category": "Proyectos Integrales",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "title": "SUAVE LOMITO",
    "description": "DESARROLLO DE IDENTIDAD",
    "mainImage": "img/proyectos/guido_0076.png",
    "alt": "SUAVE LOMITO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CNkUdowkUKH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0076.png",
        "title": "SUAVE LOMITO — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0077.png",
        "title": "SUAVE LOMITO — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0078.jpg",
        "title": "SUAVE LOMITO — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0079.jpg",
        "title": "SUAVE LOMITO — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0080.jpg",
        "title": "SUAVE LOMITO — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0081.jpg",
        "title": "SUAVE LOMITO — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0082.jpg",
        "title": "SUAVE LOMITO — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0083.jpg",
        "title": "SUAVE LOMITO — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0084.jpg",
        "title": "SUAVE LOMITO — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0085.jpg",
        "title": "SUAVE LOMITO — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0086.jpg",
        "title": "SUAVE LOMITO — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0087.jpg",
        "title": "SUAVE LOMITO — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0088.png",
        "title": "SUAVE LOMITO — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0089.png",
        "title": "SUAVE LOMITO — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0090.png",
        "title": "SUAVE LOMITO — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0091.png",
        "title": "SUAVE LOMITO — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0092.png",
        "title": "SUAVE LOMITO — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0093.png",
        "title": "SUAVE LOMITO — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0094.png",
        "title": "SUAVE LOMITO — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0095.png",
        "title": "SUAVE LOMITO — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0096.jpg",
        "title": "SUAVE LOMITO — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0097.png",
        "title": "SUAVE LOMITO — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0098.jpg",
        "title": "SUAVE LOMITO — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0099.jpg",
        "title": "SUAVE LOMITO — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0100.jpg",
        "title": "SUAVE LOMITO — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0101.jpg",
        "title": "SUAVE LOMITO — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0102.jpg",
        "title": "SUAVE LOMITO — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0103.jpg",
        "title": "SUAVE LOMITO — 28",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0104.jpg",
        "title": "SUAVE LOMITO — 29",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0105.jpg",
        "title": "SUAVE LOMITO — 30",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0106.jpg",
        "title": "SUAVE LOMITO — 31",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0107.jpg",
        "title": "SUAVE LOMITO — 32",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0108.jpg",
        "title": "SUAVE LOMITO — 33",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0109.jpg",
        "title": "SUAVE LOMITO — 34",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0110.jpg",
        "title": "SUAVE LOMITO — 35",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0111.jpg",
        "title": "SUAVE LOMITO — 36",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0112.jpg",
        "title": "SUAVE LOMITO — 37",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0113.jpeg",
        "title": "SUAVE LOMITO — 38",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0114.gif",
        "title": "SUAVE LOMITO — 39",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0115.gif",
        "title": "SUAVE LOMITO — 40",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0116.gif",
        "title": "SUAVE LOMITO — 41",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0117.gif",
        "title": "SUAVE LOMITO — 42",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0118.gif",
        "title": "SUAVE LOMITO — 43",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0119.gif",
        "title": "SUAVE LOMITO — 44",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0120.gif",
        "title": "SUAVE LOMITO — 45",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0121.gif",
        "title": "SUAVE LOMITO — 46",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0122.gif",
        "title": "SUAVE LOMITO — 47",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0123.gif",
        "title": "SUAVE LOMITO — 48",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0124.gif",
        "title": "SUAVE LOMITO — 49",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0125.gif",
        "title": "SUAVE LOMITO — 50",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0126.jpg",
        "title": "SUAVE LOMITO — 51",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0127.jpg",
        "title": "SUAVE LOMITO — 52",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0128.jpg",
        "title": "SUAVE LOMITO — 53",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0129.jpg",
        "title": "SUAVE LOMITO — 54",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0130.jpg",
        "title": "SUAVE LOMITO — 55",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0131.jpg",
        "title": "SUAVE LOMITO — 56",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "title": "SUAVE LOMITO — 57",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "title": "SUAVE LOMITO — 58",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "title": "SUAVE LOMITO — 59",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "title": "SUAVE LOMITO — 60",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "title": "SUAVE LOMITO — 61",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "title": "SUAVE LOMITO — 62",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "title": "SUAVE LOMITO — 63",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "title": "SUAVE LOMITO — 64",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0132.png",
        "title": "SUAVE LOMITO — 65",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0133.png",
        "title": "SUAVE LOMITO — 66",
        "tag": "Proyectos Integrales"
      }
    ]
  },
  {
    "id": 4,
    "slug": "kerchak",
    "category": "Proyectos Integrales",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "title": "KERCHAK",
    "description": "FOTOGRAFÍA EN EXTERIOR\n\nDISEÑO DE PIEZAS PARA REDES SOCIALES\n\nBACKSTAGE CALIOPE FAMILY X KERCHAK",
    "mainImage": "img/proyectos/guido_0134.jpg",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0134.jpg",
        "title": "KERCHAK — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0135.jpg",
        "title": "KERCHAK — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0136.jpg",
        "title": "KERCHAK — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0137.jpg",
        "title": "KERCHAK — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0138.jpg",
        "title": "KERCHAK — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0139.jpg",
        "title": "KERCHAK — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0140.jpg",
        "title": "KERCHAK — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0141.jpg",
        "title": "KERCHAK — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0142.gif",
        "title": "KERCHAK — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0143.gif",
        "title": "KERCHAK — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0144.gif",
        "title": "KERCHAK — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0145.gif",
        "title": "KERCHAK — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0146.gif",
        "title": "KERCHAK — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0147.gif",
        "title": "KERCHAK — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0148.jpg",
        "title": "KERCHAK — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0149.jpg",
        "title": "KERCHAK — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0150.jpg",
        "title": "KERCHAK — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0151.jpg",
        "title": "KERCHAK — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0152.gif",
        "title": "KERCHAK — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0153.gif",
        "title": "KERCHAK — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "title": "KERCHAK — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "title": "KERCHAK — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "title": "KERCHAK — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "title": "KERCHAK — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "title": "KERCHAK — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "title": "KERCHAK — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "title": "KERCHAK — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "title": "KERCHAK — 28",
        "tag": "Proyectos Integrales"
      }
    ]
  },
  {
    "id": 5,
    "slug": "gladyson-panther",
    "category": "Proyectos Integrales",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2024",
    "title": "GLADYSON PANTHER",
    "description": "ROSARIO 2018 - GLADYSON PANTHER",
    "mainImage": "img/proyectos/guido_0023.jpg",
    "alt": "GLADYSON PANTHER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/NUTmDvpDqdo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0154.gif",
        "title": "GLADYSON PANTHER — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0155.gif",
        "title": "GLADYSON PANTHER — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0156.gif",
        "title": "GLADYSON PANTHER — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0157.gif",
        "title": "GLADYSON PANTHER — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0158.gif",
        "title": "GLADYSON PANTHER — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0159.gif",
        "title": "GLADYSON PANTHER — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "title": "GLADYSON PANTHER — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "title": "GLADYSON PANTHER — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "title": "GLADYSON PANTHER — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "title": "GLADYSON PANTHER — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "title": "GLADYSON PANTHER — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "title": "GLADYSON PANTHER — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "title": "GLADYSON PANTHER — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "title": "GLADYSON PANTHER — 14",
        "tag": "Proyectos Integrales"
      }
    ]
  },
  {
    "id": 6,
    "slug": "lira-bikes",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "LIRA BIKES",
    "description": "Producci├│n audiovisual para Lira Bikes en colaboraci├│n con Agustin Men├®ndez, enfocada en destacar los detalles de la bicicleta con un montaje din├ímico, uso de rampas de velocidad y movimientos de gimbal.",
    "mainImage": "img/proyectos/guido_0160.jpg",
    "alt": "LIRA BIKES — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/TGdSI_dCRcE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0161.gif",
        "title": "LIRA BIKES — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0162.gif",
        "title": "LIRA BIKES — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0163.gif",
        "title": "LIRA BIKES — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0164.gif",
        "title": "LIRA BIKES — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "LIRA BIKES — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "LIRA BIKES — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "LIRA BIKES — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "LIRA BIKES — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "LIRA BIKES — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "LIRA BIKES — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "LIRA BIKES — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "LIRA BIKES — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "LIRA BIKES — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "LIRA BIKES — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "LIRA BIKES — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "LIRA BIKES — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "LIRA BIKES — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "LIRA BIKES — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "LIRA BIKES — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "LIRA BIKES — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "LIRA BIKES — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "LIRA BIKES — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "LIRA BIKES — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "LIRA BIKES — 24",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 7,
    "slug": "cms-arquitectas",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2023",
    "title": "CMS ARQUITECTAS",
    "description": "INFORMES AVANCE DE OBRA\n\nINFORMES AVANCE DE OBRA",
    "mainImage": "img/proyectos/guido_0184.jpg",
    "alt": "CMS ARQUITECTAS — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/LyeMgIyDjDg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/9An6wjeopn4/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/GJ_93ZhWG7e/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/MWv4H3MM6vB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Bu6DSQnwWBE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0184.jpg",
        "title": "CMS ARQUITECTAS — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0185.jpg",
        "title": "CMS ARQUITECTAS — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0186.jpg",
        "title": "CMS ARQUITECTAS — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0187.jpg",
        "title": "CMS ARQUITECTAS — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0188.jpg",
        "title": "CMS ARQUITECTAS — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0189.jpg",
        "title": "CMS ARQUITECTAS — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0190.jpg",
        "title": "CMS ARQUITECTAS — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0191.jpg",
        "title": "CMS ARQUITECTAS — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0192.jpg",
        "title": "CMS ARQUITECTAS — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0193.jpg",
        "title": "CMS ARQUITECTAS — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0194.jpg",
        "title": "CMS ARQUITECTAS — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0195.jpg",
        "title": "CMS ARQUITECTAS — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0196.jpg",
        "title": "CMS ARQUITECTAS — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0197.jpg",
        "title": "CMS ARQUITECTAS — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0198.jpg",
        "title": "CMS ARQUITECTAS — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0199.jpg",
        "title": "CMS ARQUITECTAS — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0200.jpg",
        "title": "CMS ARQUITECTAS — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0201.jpg",
        "title": "CMS ARQUITECTAS — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0202.jpg",
        "title": "CMS ARQUITECTAS — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0203.jpg",
        "title": "CMS ARQUITECTAS — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0204.jpg",
        "title": "CMS ARQUITECTAS — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0205.jpg",
        "title": "CMS ARQUITECTAS — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0206.jpg",
        "title": "CMS ARQUITECTAS — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0207.jpg",
        "title": "CMS ARQUITECTAS — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0208.jpg",
        "title": "CMS ARQUITECTAS — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0209.jpg",
        "title": "CMS ARQUITECTAS — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0210.jpg",
        "title": "CMS ARQUITECTAS — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0211.jpg",
        "title": "CMS ARQUITECTAS — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0212.jpg",
        "title": "CMS ARQUITECTAS — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0213.jpg",
        "title": "CMS ARQUITECTAS — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0214.jpg",
        "title": "CMS ARQUITECTAS — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "CMS ARQUITECTAS — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "CMS ARQUITECTAS — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "CMS ARQUITECTAS — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "CMS ARQUITECTAS — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "CMS ARQUITECTAS — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "CMS ARQUITECTAS — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "CMS ARQUITECTAS — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "CMS ARQUITECTAS — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "CMS ARQUITECTAS — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "CMS ARQUITECTAS — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "CMS ARQUITECTAS — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "CMS ARQUITECTAS — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "CMS ARQUITECTAS — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "CMS ARQUITECTAS — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "CMS ARQUITECTAS — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "CMS ARQUITECTAS — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "CMS ARQUITECTAS — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "CMS ARQUITECTAS — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "CMS ARQUITECTAS — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "CMS ARQUITECTAS — 51",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 8,
    "slug": "dege-muebles",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "DEGË MUEBLES",
    "description": "FOTOGRAFÍA E-COMMERCE\n\nCONTENIDO AUDIOVISUAL PARA REDES",
    "mainImage": "img/proyectos/guido_0219.jpg",
    "alt": "DEGË MUEBLES — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0219.jpg",
        "title": "DEGË MUEBLES — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0220.jpg",
        "title": "DEGË MUEBLES — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0221.jpg",
        "title": "DEGË MUEBLES — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0222.jpg",
        "title": "DEGË MUEBLES — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0223.jpg",
        "title": "DEGË MUEBLES — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0224.jpg",
        "title": "DEGË MUEBLES — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0225.jpg",
        "title": "DEGË MUEBLES — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0226.jpg",
        "title": "DEGË MUEBLES — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0227.jpg",
        "title": "DEGË MUEBLES — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0228.jpg",
        "title": "DEGË MUEBLES — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0229.jpg",
        "title": "DEGË MUEBLES — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0230.jpg",
        "title": "DEGË MUEBLES — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0231.jpg",
        "title": "DEGË MUEBLES — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0232.jpg",
        "title": "DEGË MUEBLES — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0233.jpg",
        "title": "DEGË MUEBLES — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0234.jpg",
        "title": "DEGË MUEBLES — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0235.jpg",
        "title": "DEGË MUEBLES — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0236.jpg",
        "title": "DEGË MUEBLES — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0237.jpg",
        "title": "DEGË MUEBLES — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0238.jpg",
        "title": "DEGË MUEBLES — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0239.jpg",
        "title": "DEGË MUEBLES — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0240.jpg",
        "title": "DEGË MUEBLES — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0241.jpg",
        "title": "DEGË MUEBLES — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0242.jpg",
        "title": "DEGË MUEBLES — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "DEGË MUEBLES — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "DEGË MUEBLES — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "DEGË MUEBLES — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "DEGË MUEBLES — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "DEGË MUEBLES — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "DEGË MUEBLES — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "DEGË MUEBLES — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "DEGË MUEBLES — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "DEGË MUEBLES — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "DEGË MUEBLES — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "DEGË MUEBLES — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "DEGË MUEBLES — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "DEGË MUEBLES — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "DEGË MUEBLES — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "DEGË MUEBLES — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "DEGË MUEBLES — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "DEGË MUEBLES — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "DEGË MUEBLES — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "DEGË MUEBLES — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "DEGË MUEBLES — 44",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 9,
    "slug": "karma-negro-pelicula",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "KARMA NEGRO PELÍCULA",
    "description": "COBERTURA FOTOGRÁFICA\n\nCOBERTURA AUDIOVISUAL",
    "mainImage": "img/proyectos/guido_0243.jpg",
    "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/RY-QzeQ44gD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0243.jpg",
        "title": "KARMA NEGRO PELÍCULA — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0244.jpg",
        "title": "KARMA NEGRO PELÍCULA — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0245.jpg",
        "title": "KARMA NEGRO PELÍCULA — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0246.jpg",
        "title": "KARMA NEGRO PELÍCULA — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0247.jpg",
        "title": "KARMA NEGRO PELÍCULA — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0248.jpg",
        "title": "KARMA NEGRO PELÍCULA — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0249.gif",
        "title": "KARMA NEGRO PELÍCULA — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0250.gif",
        "title": "KARMA NEGRO PELÍCULA — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0251.gif",
        "title": "KARMA NEGRO PELÍCULA — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0252.gif",
        "title": "KARMA NEGRO PELÍCULA — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0253.gif",
        "title": "KARMA NEGRO PELÍCULA — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "KARMA NEGRO PELÍCULA — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "KARMA NEGRO PELÍCULA — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "KARMA NEGRO PELÍCULA — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "KARMA NEGRO PELÍCULA — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "KARMA NEGRO PELÍCULA — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "KARMA NEGRO PELÍCULA — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "KARMA NEGRO PELÍCULA — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "KARMA NEGRO PELÍCULA — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "KARMA NEGRO PELÍCULA — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "KARMA NEGRO PELÍCULA — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "KARMA NEGRO PELÍCULA — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "KARMA NEGRO PELÍCULA — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "KARMA NEGRO PELÍCULA — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "KARMA NEGRO PELÍCULA — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "KARMA NEGRO PELÍCULA — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "KARMA NEGRO PELÍCULA — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "KARMA NEGRO PELÍCULA — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "KARMA NEGRO PELÍCULA — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "KARMA NEGRO PELÍCULA — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "KARMA NEGRO PELÍCULA — 31",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 10,
    "slug": "au-exclusive",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2022",
    "title": "AU EXCLUSIVE",
    "description": "Proyecto fotogr├ífico para marca de ropa urbana con ra├¡ces en el hip hop y la vida callejera. La sesi├│n, protagonizada por un graffitero de Rosario, recrea la tensi├│n y el sigilo de la acci├│n en la calle.",
    "mainImage": "img/proyectos/guido_0254.jpg",
    "alt": "AU EXCLUSIVE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0254.jpg",
        "title": "AU EXCLUSIVE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0255.jpg",
        "title": "AU EXCLUSIVE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0256.jpg",
        "title": "AU EXCLUSIVE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0257.jpg",
        "title": "AU EXCLUSIVE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0258.jpg",
        "title": "AU EXCLUSIVE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0259.jpg",
        "title": "AU EXCLUSIVE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0260.jpg",
        "title": "AU EXCLUSIVE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "AU EXCLUSIVE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "AU EXCLUSIVE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "AU EXCLUSIVE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "AU EXCLUSIVE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "AU EXCLUSIVE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "AU EXCLUSIVE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "AU EXCLUSIVE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "AU EXCLUSIVE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "AU EXCLUSIVE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "AU EXCLUSIVE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "AU EXCLUSIVE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "AU EXCLUSIVE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "AU EXCLUSIVE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "AU EXCLUSIVE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "AU EXCLUSIVE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "AU EXCLUSIVE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "AU EXCLUSIVE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "AU EXCLUSIVE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "AU EXCLUSIVE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "AU EXCLUSIVE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0261.jpg",
        "title": "AU EXCLUSIVE — 28",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 11,
    "slug": "mirenka",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "MIRENKA",
    "description": "Sesi├│n fotogr├ífica en estudio para emprendimiento de accesorios de aluminio moldeados a mano, con una propuesta visual que transmite naturalidad, calidez y frialdad a trav├®s del juego de luces y sombras.",
    "mainImage": "img/proyectos/guido_0262.jpg",
    "alt": "MIRENKA — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0262.jpg",
        "title": "MIRENKA — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0263.jpg",
        "title": "MIRENKA — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0264.jpg",
        "title": "MIRENKA — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0265.jpg",
        "title": "MIRENKA — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0266.jpg",
        "title": "MIRENKA — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0267.jpg",
        "title": "MIRENKA — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0268.jpg",
        "title": "MIRENKA — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0269.jpg",
        "title": "MIRENKA — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0270.jpg",
        "title": "MIRENKA — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0271.jpg",
        "title": "MIRENKA — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "MIRENKA — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "MIRENKA — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "MIRENKA — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "MIRENKA — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "MIRENKA — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "MIRENKA — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "MIRENKA — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "MIRENKA — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "MIRENKA — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "MIRENKA — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "MIRENKA — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "MIRENKA — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "MIRENKA — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "MIRENKA — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "MIRENKA — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "MIRENKA — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "MIRENKA — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "MIRENKA — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "MIRENKA — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "MIRENKA — 30",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 12,
    "slug": "anti-pop",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "ANTIPOP",
    "description": "Producci├│n de fotograf├¡a y video en Chapadmalal para marca de ropa rosarina. El contenido se realiz├│ en la playa, aprovechando un viaje personal, para acompa├▒ar el lanzamiento de su colecci├│n de verano.",
    "mainImage": "img/proyectos/guido_0272.jpg",
    "alt": "ANTIPOP — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5E_JJkFG2pW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0272.jpg",
        "title": "ANTIPOP — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0273.jpg",
        "title": "ANTIPOP — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0274.jpg",
        "title": "ANTIPOP — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0275.jpg",
        "title": "ANTIPOP — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0276.jpg",
        "title": "ANTIPOP — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0277.jpg",
        "title": "ANTIPOP — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0278.gif",
        "title": "ANTIPOP — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0279.gif",
        "title": "ANTIPOP — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0280.gif",
        "title": "ANTIPOP — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0281.gif",
        "title": "ANTIPOP — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0282.gif",
        "title": "ANTIPOP — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0283.gif",
        "title": "ANTIPOP — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "ANTIPOP — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "ANTIPOP — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "ANTIPOP — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "ANTIPOP — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "ANTIPOP — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "ANTIPOP — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "ANTIPOP — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "ANTIPOP — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "ANTIPOP — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "ANTIPOP — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "ANTIPOP — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "ANTIPOP — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "ANTIPOP — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "ANTIPOP — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "ANTIPOP — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "ANTIPOP — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "ANTIPOP — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "ANTIPOP — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "ANTIPOP — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "ANTIPOP — 32",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 13,
    "slug": "on-tentacion-turismo",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "BRASIL┃ON TENTACIÓN TURISMO",
    "description": "CONTENIDO HORIZONTAL PARA VENTA\n\nCÁPSULAS PARA REDES SOCIALES",
    "mainImage": "img/proyectos/guido_0160.jpg",
    "alt": "BRASIL┃ON TENTACIÓN TURISMO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/BybEdPwNZKY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/PT56ACs7iPj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/NGSgHb_oHpr/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0284.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0285.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0286.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0287.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0288.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0289.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0290.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0291.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0292.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0293.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0294.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0295.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0296.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0297.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0298.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0299.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0300.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0301.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0302.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0303.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0304.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0305.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0306.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0307.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0308.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0309.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0310.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0311.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0312.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0313.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0314.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0315.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0316.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0317.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0318.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0319.gif",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 52",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 53",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 54",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 55",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 56",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 14,
    "slug": "sonder",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "SONDER",
    "description": "FOTOGRAFÍA EN ESTUDIO",
    "mainImage": "img/proyectos/guido_0320.jpg",
    "alt": "SONDER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CDGGU8bNCqj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Uc-fjoTtSAE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0320.jpg",
        "title": "SONDER — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0321.jpg",
        "title": "SONDER — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0322.jpg",
        "title": "SONDER — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0323.jpg",
        "title": "SONDER — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0324.jpg",
        "title": "SONDER — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0325.jpg",
        "title": "SONDER — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0326.jpg",
        "title": "SONDER — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0327.jpg",
        "title": "SONDER — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0328.jpg",
        "title": "SONDER — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0329.jpg",
        "title": "SONDER — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0330.gif",
        "title": "SONDER — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0331.gif",
        "title": "SONDER — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0332.gif",
        "title": "SONDER — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0333.gif",
        "title": "SONDER — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0334.gif",
        "title": "SONDER — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0335.gif",
        "title": "SONDER — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0336.gif",
        "title": "SONDER — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0337.gif",
        "title": "SONDER — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0338.gif",
        "title": "SONDER — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0339.gif",
        "title": "SONDER — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0340.gif",
        "title": "SONDER — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0341.gif",
        "title": "SONDER — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "SONDER — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "SONDER — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "SONDER — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "SONDER — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "SONDER — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "SONDER — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "SONDER — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "SONDER — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "SONDER — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "SONDER — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "SONDER — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "SONDER — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "SONDER — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "SONDER — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "SONDER — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "SONDER — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "SONDER — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "SONDER — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "SONDER — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "SONDER — 42",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 15,
    "slug": "panes-y-peces-restaurante-uruguay",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "URUGUAY┃PANES Y PECES RESTAURANTE",
    "description": "Proyecto URUGUAY┃PANES Y PECES RESTAURANTE desarrollado por Guido Castellotti en Rosario, Argentina.",
    "mainImage": "img/proyectos/guido_0342.jpg",
    "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5fL7w7D3cpP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0342.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0343.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0344.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0345.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0346.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0347.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0348.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0349.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0350.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0351.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0352.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0353.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0354.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0355.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0356.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0357.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0358.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0359.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0360.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0361.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0362.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0363.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0364.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0365.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0366.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0367.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0368.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0369.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0370.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0371.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0372.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0373.gif",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 52",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 16,
    "slug": "fapyd-unr",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "title": "FAPYD (UNR)",
    "description": "Réplica Colectiva Gráfica\n\nOptativa Entretejiendo lo tangible y lo intangible",
    "mainImage": "img/proyectos/guido_0374.jpg",
    "alt": "FAPYD (UNR) — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0374.jpg",
        "title": "FAPYD (UNR) — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0375.jpg",
        "title": "FAPYD (UNR) — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0376.jpg",
        "title": "FAPYD (UNR) — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0377.jpg",
        "title": "FAPYD (UNR) — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0378.jpg",
        "title": "FAPYD (UNR) — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0379.jpg",
        "title": "FAPYD (UNR) — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0380.jpg",
        "title": "FAPYD (UNR) — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0381.jpg",
        "title": "FAPYD (UNR) — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0382.jpg",
        "title": "FAPYD (UNR) — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0383.jpg",
        "title": "FAPYD (UNR) — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0384.jpg",
        "title": "FAPYD (UNR) — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0385.jpg",
        "title": "FAPYD (UNR) — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0386.gif",
        "title": "FAPYD (UNR) — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0387.gif",
        "title": "FAPYD (UNR) — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0388.gif",
        "title": "FAPYD (UNR) — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0389.jpg",
        "title": "FAPYD (UNR) — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0390.jpg",
        "title": "FAPYD (UNR) — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0391.jpg",
        "title": "FAPYD (UNR) — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0392.jpg",
        "title": "FAPYD (UNR) — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0393.jpg",
        "title": "FAPYD (UNR) — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0394.jpg",
        "title": "FAPYD (UNR) — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0395.jpg",
        "title": "FAPYD (UNR) — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0396.jpg",
        "title": "FAPYD (UNR) — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0397.jpg",
        "title": "FAPYD (UNR) — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0398.jpg",
        "title": "FAPYD (UNR) — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0399.gif",
        "title": "FAPYD (UNR) — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0400.gif",
        "title": "FAPYD (UNR) — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0401.gif",
        "title": "FAPYD (UNR) — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0402.gif",
        "title": "FAPYD (UNR) — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0403.gif",
        "title": "FAPYD (UNR) — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0404.gif",
        "title": "FAPYD (UNR) — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0405.jpg",
        "title": "FAPYD (UNR) — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0406.jpg",
        "title": "FAPYD (UNR) — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0407.jpg",
        "title": "FAPYD (UNR) — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0408.jpg",
        "title": "FAPYD (UNR) — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0409.jpg",
        "title": "FAPYD (UNR) — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0410.jpg",
        "title": "FAPYD (UNR) — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0411.jpg",
        "title": "FAPYD (UNR) — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0412.jpg",
        "title": "FAPYD (UNR) — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0413.jpg",
        "title": "FAPYD (UNR) — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0414.jpg",
        "title": "FAPYD (UNR) — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0415.jpg",
        "title": "FAPYD (UNR) — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0416.jpg",
        "title": "FAPYD (UNR) — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "FAPYD (UNR) — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "FAPYD (UNR) — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "FAPYD (UNR) — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "FAPYD (UNR) — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "FAPYD (UNR) — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "FAPYD (UNR) — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "FAPYD (UNR) — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "FAPYD (UNR) — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "FAPYD (UNR) — 52",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "FAPYD (UNR) — 53",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "FAPYD (UNR) — 54",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "FAPYD (UNR) — 55",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "title": "FAPYD (UNR) — 56",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "title": "FAPYD (UNR) — 57",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "FAPYD (UNR) — 58",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "FAPYD (UNR) — 59",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "FAPYD (UNR) — 60",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "FAPYD (UNR) — 61",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "FAPYD (UNR) — 62",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "FAPYD (UNR) — 63",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 17,
    "slug": "lila-grace",
    "category": "Fotografía y Video",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2018",
    "title": "LILA GRACE",
    "description": "Fotograf├¡a en exterior para el lanzamiento de la colecci├│n de verano.",
    "mainImage": "img/proyectos/guido_0417.jpg",
    "alt": "LILA GRACE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0417.jpg",
        "title": "LILA GRACE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0418.jpg",
        "title": "LILA GRACE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0419.jpg",
        "title": "LILA GRACE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0420.jpg",
        "title": "LILA GRACE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0421.jpg",
        "title": "LILA GRACE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0422.jpg",
        "title": "LILA GRACE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0423.jpg",
        "title": "LILA GRACE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0424.jpg",
        "title": "LILA GRACE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0425.jpg",
        "title": "LILA GRACE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0426.jpg",
        "title": "LILA GRACE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0427.jpg",
        "title": "LILA GRACE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0428.jpg",
        "title": "LILA GRACE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0429.jpg",
        "title": "LILA GRACE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0430.jpg",
        "title": "LILA GRACE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0217.jpg",
        "title": "LILA GRACE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "title": "LILA GRACE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "title": "LILA GRACE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "title": "LILA GRACE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "title": "LILA GRACE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "title": "LILA GRACE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "title": "LILA GRACE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "title": "LILA GRACE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "title": "LILA GRACE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "title": "LILA GRACE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "title": "LILA GRACE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "title": "LILA GRACE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "title": "LILA GRACE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "title": "LILA GRACE — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "title": "LILA GRACE — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "title": "LILA GRACE — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "title": "LILA GRACE — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "title": "LILA GRACE — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "title": "LILA GRACE — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "title": "LILA GRACE — 34",
        "tag": "Fotografía y Video"
      }
    ]
  },
  {
    "id": 18,
    "slug": "ballet-para-las-masas",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2026",
    "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS",
    "description": "Link Visualizer completo",
    "mainImage": "img/proyectos/guido_0431.jpg",
    "alt": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0431.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0432.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0433.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0434.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0435.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0436.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0437.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0438.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0439.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0440.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0441.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0442.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0443.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0444.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 14",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0445.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 15",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0446.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 16",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0447.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 17",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0448.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 18",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0449.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 19",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0450.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 20",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0451.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 21",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0452.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 22",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0453.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 23",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0454.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 24",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0455.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 25",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0456.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 26",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0457.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 27",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0458.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 28",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0459.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 29",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0460.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 30",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0461.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 31",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0462.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 32",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0463.gif",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 33",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0464.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 34",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0465.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 35",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0466.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 36",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 37",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 38",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 39",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 40",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0471.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 41",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 42",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 43",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 44",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 45",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 46",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0477.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 47",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0478.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 48",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0479.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 49",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0480.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 50",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0481.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 51",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0482.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 52",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0483.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 53",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0484.jpg",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 54",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 19,
    "slug": "rosario-es-un-eclipse",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2026",
    "title": "ROSARIO ES UN ECLIPSE",
    "description": "Desarrollo de sistema editorial completo: tapa, contratapa, interiores, ├¡ndice, portadas de cap├¡tulo y colof├│n. \r\nRosario es un eclipse es un libro sobre una ciudad atravesada por la violencia sist├®mica y el capitalismo tard├¡o. En ese contexto, la banda rosarina Bubis Vayins aparece como s├¡ntoma y respuesta: ruido, incomodidad y potencia colectiva frente al individualismo dominante. \r\nA partir de conceptos presentes en el libro como ÔÇ£criaturas insurrectasÔÇØ y ÔÇ£b├│lidos cat├írticosÔÇØ, la portada se resolvi├│ como una entidad h├¡brida, radioactiva y sin g├®nero definido: una criatura construida a partir de fragmentos de los cuerpos de cada integrante de la banda, fusionados en una silueta ├║nica.",
    "mainImage": "img/proyectos/guido_0485.jpg",
    "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0485.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0486.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0487.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0488.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0489.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0490.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0491.png",
        "title": "ROSARIO ES UN ECLIPSE — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0492.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0493.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0494.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0471.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 14",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 15",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 16",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 17",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0496.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 18",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 19",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 20",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0497.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 21",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0498.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 22",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0499.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 23",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0500.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 24",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0501.png",
        "title": "ROSARIO ES UN ECLIPSE — 25",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0502.jpg",
        "title": "ROSARIO ES UN ECLIPSE — 26",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 20,
    "slug": "diseno-editorial-de-revista",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2025",
    "title": "DISEÑO EDITORIAL",
    "description": "Proyecto DISEÑO EDITORIAL desarrollado por Guido Castellotti en Rosario, Argentina.",
    "mainImage": "img/proyectos/guido_0503.jpg",
    "alt": "DISEÑO EDITORIAL — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0503.jpg",
        "title": "DISEÑO EDITORIAL — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0504.jpg",
        "title": "DISEÑO EDITORIAL — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0505.jpg",
        "title": "DISEÑO EDITORIAL — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0506.jpg",
        "title": "DISEÑO EDITORIAL — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0507.jpg",
        "title": "DISEÑO EDITORIAL — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0508.jpg",
        "title": "DISEÑO EDITORIAL — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0509.jpg",
        "title": "DISEÑO EDITORIAL — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0510.jpg",
        "title": "DISEÑO EDITORIAL — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0511.jpg",
        "title": "DISEÑO EDITORIAL — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0512.jpg",
        "title": "DISEÑO EDITORIAL — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0513.jpg",
        "title": "DISEÑO EDITORIAL — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "title": "DISEÑO EDITORIAL — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "title": "DISEÑO EDITORIAL — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "title": "DISEÑO EDITORIAL — 14",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "title": "DISEÑO EDITORIAL — 15",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "title": "DISEÑO EDITORIAL — 16",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0496.jpg",
        "title": "DISEÑO EDITORIAL — 17",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0471.jpg",
        "title": "DISEÑO EDITORIAL — 18",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "title": "DISEÑO EDITORIAL — 19",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "title": "DISEÑO EDITORIAL — 20",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "title": "DISEÑO EDITORIAL — 21",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0514.jpg",
        "title": "DISEÑO EDITORIAL — 22",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0515.jpg",
        "title": "DISEÑO EDITORIAL — 23",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0516.jpg",
        "title": "DISEÑO EDITORIAL — 24",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0517.jpg",
        "title": "DISEÑO EDITORIAL — 25",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0518.jpg",
        "title": "DISEÑO EDITORIAL — 26",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0519.jpg",
        "title": "DISEÑO EDITORIAL — 27",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0520.jpg",
        "title": "DISEÑO EDITORIAL — 28",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0521.jpg",
        "title": "DISEÑO EDITORIAL — 29",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0522.jpg",
        "title": "DISEÑO EDITORIAL — 30",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0523.jpg",
        "title": "DISEÑO EDITORIAL — 31",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0524.jpg",
        "title": "DISEÑO EDITORIAL — 32",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 21,
    "slug": "gyor",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2021",
    "title": "GYOR",
    "description": "Dise├▒o de cat├ílogo haciendo foco en la jerarquizaci├│n, organizaci├│n de la informaci├│n y definici├│n de una estructura visual ordenada y funcional.",
    "mainImage": "img/proyectos/guido_0525.jpg",
    "alt": "GYOR — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0525.jpg",
        "title": "GYOR — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0526.jpg",
        "title": "GYOR — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0527.jpg",
        "title": "GYOR — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0528.jpg",
        "title": "GYOR — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0529.jpg",
        "title": "GYOR — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0530.jpg",
        "title": "GYOR — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0531.jpg",
        "title": "GYOR — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0532.jpg",
        "title": "GYOR — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0533.jpg",
        "title": "GYOR — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0534.jpg",
        "title": "GYOR — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0535.jpg",
        "title": "GYOR — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0536.jpg",
        "title": "GYOR — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "title": "GYOR — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "title": "GYOR — 14",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "title": "GYOR — 15",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "title": "GYOR — 16",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "title": "GYOR — 17",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0496.jpg",
        "title": "GYOR — 18",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "title": "GYOR — 19",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "title": "GYOR — 20",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "title": "GYOR — 21",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "title": "GYOR — 22",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 22,
    "slug": "kid-kerchak",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2021",
    "title": "KERCHAK",
    "description": "Dise├▒o de tapa para single el artista de trap KERCHAK . El proyecto parti├│ de una fotograf├¡a propia intervenida con grafitis de Yo Melao. Mi aporte se centr├│ en la organizaci├│n visual, la jerarqu├¡a de los elementos y la creaci├│n gr├ífica de un cartel con el nombre del artista en la fachada.",
    "mainImage": "img/proyectos/guido_0537.jpg",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0537.jpg",
        "title": "KERCHAK — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0538.jpg",
        "title": "KERCHAK — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0539.jpg",
        "title": "KERCHAK — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "title": "KERCHAK — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0496.jpg",
        "title": "KERCHAK — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "title": "KERCHAK — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "title": "KERCHAK — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "title": "KERCHAK — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "title": "KERCHAK — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "title": "KERCHAK — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "title": "KERCHAK — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0471.jpg",
        "title": "KERCHAK — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "title": "KERCHAK — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0540.jpg",
        "title": "KERCHAK — 14",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 23,
    "slug": "no-paro-ni-a-palo",
    "category": "Diseño",
    "categories": [
      "Diseño"
    ],
    "date": "2024",
    "title": "FESTIVAL NO PARO NI A PALO'",
    "description": "PROYECTO DE DISE├æO PARA FESTIVAL DE TRAP. \r\nCreaci├│n de piezas gr├íficas para redes sociales e impresi├│n, adem├ís de animaciones de el logo del festival y de los artistas que participaron.",
    "mainImage": "img/proyectos/guido_0541.jpg",
    "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0541.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 01",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0542.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 02",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0543.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 03",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0544.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 04",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0545.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 05",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0546.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 06",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0547.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 07",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0548.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 08",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0549.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 09",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0550.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 10",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0551.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 11",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0552.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 12",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0553.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 13",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0554.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 14",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0555.gif",
        "title": "FESTIVAL NO PARO NI A PALO' — 15",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0471.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 16",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 17",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 18",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 19",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 20",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 21",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 22",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 23",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 24",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0496.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 25",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0556.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 26",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0557.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 27",
        "tag": "Diseño"
      },
      {
        "src": "img/proyectos/guido_0558.jpg",
        "title": "FESTIVAL NO PARO NI A PALO' — 28",
        "tag": "Diseño"
      }
    ]
  },
  {
    "id": 24,
    "slug": "print",
    "category": "Obra Impresa",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "title": "FOTOGRAFÍA IMPRESA",
    "description": "Risograf├¡as A3 en papel obra 120g a una y dos tintas┬á",
    "mainImage": "img/proyectos/guido_0559.jpg",
    "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0559.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0560.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0561.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0562.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0563.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0564.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0565.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0566.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0567.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0568.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0569.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0570.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 12",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0571.jpg",
        "title": "FOTOGRAFÍA IMPRESA — 13",
        "tag": "Obra Impresa"
      }
    ]
  },
  {
    "id": 25,
    "slug": "rosario-es-un-eclipse-print",
    "category": "Obra Impresa",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "title": "PRINT ROSARIO ES UN ECLIPSE",
    "description": "Prints en formato A3 impresos en risograf├¡a y calcos del al libro ÔÇ£Rosario es un eclipseÔÇØ, obra de la revista cultural Rapto, que aborda una ciudad atravesada por la violencia sist├®mica y el capitalismo tard├¡o, donde la banda rosarina Bubis Vayins sublima una respuesta colectiva frente al individualismo dominante.",
    "mainImage": "img/proyectos/guido_0572.jpg",
    "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0572.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0573.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0574.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0575.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0576.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0577.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0570.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0571.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0566.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0567.jpg",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 10",
        "tag": "Obra Impresa"
      }
    ]
  },
  {
    "id": 26,
    "slug": "fanzine",
    "category": "Obra Impresa",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "title": "ZINE INFIERNOS",
    "description": "ÔÇ£Muchos infiernos, diversos, vi y sin embargo yo aqu├¡ paseoÔÇØ Una selecci├│n de fotograf├¡as realizadas entre 2017 y 2026 en distintas ciudades de Argentina y Uruguay, que combina registros anal├│gicos y digitales.\r\nEl proyecto surge de a├▒os de caminar, observar y fotografiar sin un destino preciso. Las im├ígenes recorren espacios urbanos donde conviven el abandono y la celebraci├│n, la exclusi├│n y el encuentro, la violencia cotidiana y los peque├▒os gestos de ternura que persisten a pesar de todo.",
    "mainImage": "img/proyectos/guido_0578.jpg",
    "alt": "ZINE INFIERNOS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0578.jpg",
        "title": "ZINE INFIERNOS — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0579.jpg",
        "title": "ZINE INFIERNOS — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0580.jpg",
        "title": "ZINE INFIERNOS — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0581.jpg",
        "title": "ZINE INFIERNOS — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0582.jpg",
        "title": "ZINE INFIERNOS — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0583.jpg",
        "title": "ZINE INFIERNOS — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0584.jpg",
        "title": "ZINE INFIERNOS — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0585.gif",
        "title": "ZINE INFIERNOS — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0576.jpg",
        "title": "ZINE INFIERNOS — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0577.jpg",
        "title": "ZINE INFIERNOS — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0568.jpg",
        "title": "ZINE INFIERNOS — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0569.jpg",
        "title": "ZINE INFIERNOS — 12",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0570.jpg",
        "title": "ZINE INFIERNOS — 13",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0571.jpg",
        "title": "ZINE INFIERNOS — 14",
        "tag": "Obra Impresa"
      }
    ]
  },
  {
    "id": 27,
    "slug": "fanzine-bpm",
    "category": "Obra Impresa",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "title": "ZINE BALLET PARA LAS MASAS",
    "description": "Una publicaci├│n en colaboraci├│n con los m├║sicos Fasciolo y Nasir Catriel asociada al disco hom├│nimo: una obra que recorre ├¡dolos populares, tragedias heredadas, luchas y glorias colectivas desde una mirada cr├¡tica y profundamente argentina.",
    "mainImage": "img/proyectos/guido_0586.jpg",
    "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "img/proyectos/guido_0586.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0587.gif",
        "title": "ZINE BALLET PARA LAS MASAS — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0588.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0589.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0590.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0591.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0568.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0569.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0566.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0567.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0576.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "img/proyectos/guido_0577.jpg",
        "title": "ZINE BALLET PARA LAS MASAS — 12",
        "tag": "Obra Impresa"
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  renderProjectDetail();
});

function renderProjectDetail() {
  const params = new URLSearchParams(window.location.search);
  const idQuery = params.get('id');
  
  let currentProject = null;

  if (idQuery) {
    const numericId = parseInt(idQuery, 10);
    if (!isNaN(numericId)) {
      currentProject = PROJECTS_DATA.find(p => p.id === numericId);
    }
    if (!currentProject) {
      currentProject = PROJECTS_DATA.find(p => p.slug === idQuery.toLowerCase().trim());
    }
  }

  if (!currentProject) {
    currentProject = PROJECTS_DATA[0];
  }

  const currentIdx = PROJECTS_DATA.indexOf(currentProject);

  // Actualizar Título de pestaña
  document.title = currentProject.title + ' — Guido Castellotti';

  // Elementos DOM
  const catDateEl = document.getElementById('projectCategoryDate');
  const titleEl = document.getElementById('projectTitle');
  const descEl = document.getElementById('projectDescription');
  const featuredImgEl = document.getElementById('projectFeaturedImg');
  const videoSectionEl = document.getElementById('projectVideoSection');
  const videoContainerEl = document.getElementById('projectVideoContainer');
  const gridEl = document.getElementById('projectMosaicGrid');
  const countLabel = document.getElementById('galleryCountLabel');
  const gallerySection = document.querySelector('.project-archive-gallery-section');

  if (catDateEl) {
    const cats = currentProject.categories ? currentProject.categories.join(' / ') : currentProject.category;
    catDateEl.textContent = cats + ' · ' + currentProject.date;
  }
  if (titleEl) titleEl.textContent = currentProject.title;
  if (descEl) {
    // Preserve line breaks
    descEl.innerHTML = currentProject.description.replace(/\n/g, '<br>');
  }
  if (featuredImgEl) {
    featuredImgEl.src = currentProject.mainImage;
    featuredImgEl.alt = currentProject.alt;
    featuredImgEl.style.cursor = 'pointer';
    featuredImgEl.title = 'Hacer clic para ampliar';
    featuredImgEl.addEventListener('click', () => {
      if (currentProject.gallery && currentProject.gallery.length > 0) {
        openLightbox(0);
      }
    });
  }

  // Renderizar Videos (si existen)
  if (currentProject.videos && currentProject.videos.length > 0) {
    if (videoSectionEl) videoSectionEl.style.display = 'block';
    if (videoContainerEl) {
      videoContainerEl.innerHTML = '';
      currentProject.videos.forEach(vUrl => {
        const wrap = document.createElement('div');
        wrap.className = 'project-video-wrapper';
        if (vUrl.endsWith('.mp4') || vUrl.endsWith('.webm')) {
          wrap.innerHTML = `<video src="${vUrl}" controls playsinline preload="metadata" class="project-html5-video"></video>`;
        } else {
          wrap.innerHTML = `<iframe src="${vUrl}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
        }
        videoContainerEl.appendChild(wrap);
      });
    }
  } else if (videoSectionEl) {
    videoSectionEl.style.display = 'none';
    if (videoContainerEl) videoContainerEl.innerHTML = '';
  }

  // Paginación anterior / siguiente
  const prevIdx = (currentIdx - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
  const nextIdx = (currentIdx + 1) % PROJECTS_DATA.length;

  const prevProject = PROJECTS_DATA[prevIdx];
  const nextProject = PROJECTS_DATA[nextIdx];

  const prevLink = document.getElementById('prevProjectLink');
  const prevTitle = document.getElementById('prevProjectTitle');
  const nextLink = document.getElementById('nextProjectLink');
  const nextTitle = document.getElementById('nextProjectTitle');

  if (prevLink && prevProject) {
    prevLink.href = 'proyecto.html?id=' + prevProject.slug;
    if (prevTitle) prevTitle.textContent = prevProject.title;
  }

  if (nextLink && nextProject) {
    nextLink.href = 'proyecto.html?id=' + nextProject.slug;
    if (nextTitle) nextTitle.textContent = nextProject.title;
  }

  // Renderizar Grilla de Fotos
  if (currentProject.gallery && currentProject.gallery.length > 0) {
    if (gallerySection) gallerySection.style.display = '';
    if (countLabel) {
      countLabel.textContent = currentProject.gallery.length + ' Imágenes de la serie (1:1)';
    }

    if (gridEl) {
      gridEl.innerHTML = '';
      currentProject.gallery.forEach(function(item, index) {
        const card = document.createElement('article');
        card.className = 'gallery-mosaic-card';
        card.setAttribute('data-index', index);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Ver ' + item.title + ' en tamaño completo');
        
        const box = document.createElement('div');
        box.className = 'mosaic-img-box';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.className = 'mosaic-img';
        img.loading = 'lazy';

        const zoomPill = document.createElement('span');
        zoomPill.className = 'mosaic-zoom-pill';
        zoomPill.textContent = 'Ampliar ↗';

        const overlay = document.createElement('div');
        overlay.className = 'mosaic-overlay';

        const tag = document.createElement('span');
        tag.className = 'mosaic-tag';
        tag.textContent = item.tag;

        const heading = document.createElement('h4');
        heading.className = 'mosaic-title';
        heading.textContent = item.title;

        overlay.appendChild(tag);
        overlay.appendChild(heading);

        box.appendChild(img);
        box.appendChild(zoomPill);
        box.appendChild(overlay);

        card.appendChild(box);

        card.addEventListener('click', function() {
          openLightbox(index);
        });

        card.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(index);
          }
        });

        gridEl.appendChild(card);
      });
    }

    initLightbox(currentProject.gallery);

  } else {
    if (gallerySection) gallerySection.style.display = 'none';
    if (gridEl) gridEl.innerHTML = '';
  }
}

/* =========================================================================
   Controlador del Visualizador Lightbox Modal 1:1
   ========================================================================= */
let currentLightboxIndex = 0;
let activeGallery = [];
let isLightboxInitialized = false;

function initLightbox(gallery) {
  activeGallery = gallery;
  if (isLightboxInitialized) return;
  isLightboxInitialized = true;

  const lightbox = document.getElementById('galleryLightbox');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const backdrop = document.getElementById('lightboxBackdrop');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (!e.target.closest('.lightbox-content-box') && !e.target.closest('.lightbox-nav-btn')) {
        closeLightbox();
      }
    });

    let touchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50 && activeGallery.length > 0) {
        showLightboxImage((currentLightboxIndex + 1) % activeGallery.length);
      } else if (touchEndX - touchStartX > 50 && activeGallery.length > 0) {
        showLightboxImage((currentLightboxIndex - 1 + activeGallery.length) % activeGallery.length);
      }
    }, { passive: true });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage((currentLightboxIndex - 1 + activeGallery.length) % activeGallery.length);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage((currentLightboxIndex + 1) % activeGallery.length);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || (!lightbox.classList.contains('active') && !lightbox.classList.contains('is-open'))) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && activeGallery.length > 0) {
      showLightboxImage((currentLightboxIndex - 1 + activeGallery.length) % activeGallery.length);
    }
    if (e.key === 'ArrowRight' && activeGallery.length > 0) {
      showLightboxImage((currentLightboxIndex + 1) % activeGallery.length);
    }
  });
}

function openLightbox(index) {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) { console.error('[Lightbox] No se encontró #galleryLightbox'); return; }
  console.log('[Lightbox] Abriendo índice', index);
  lightbox.style.display = 'flex';
  lightbox.style.opacity = '1';
  lightbox.style.visibility = 'visible';
  lightbox.style.pointerEvents = 'auto';
  lightbox.classList.add('is-open', 'active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  showLightboxImage(index);
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;
  lightbox.style.display = '';
  lightbox.style.opacity = '';
  lightbox.style.visibility = '';
  lightbox.style.pointerEvents = '';
  lightbox.classList.remove('is-open', 'active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showLightboxImage(index) {
  if (!activeGallery || activeGallery.length === 0) return;
  currentLightboxIndex = index;
  const item = activeGallery[index];

  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const counterEl = document.getElementById('lightboxCounter');

  if (imgEl) {
    imgEl.src = item.src;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (counterEl) {
    counterEl.textContent = (index + 1).toString().padStart(2, '0') + ' / ' + activeGallery.length.toString().padStart(2, '0');
  }
}
