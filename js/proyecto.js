/**
 * GUIDO CASTELLOTTI — PROYECTOS & DETALLE
 * Realizador Audiovisual & Diseñador Gráfico · Rosario, Argentina
 * Controlador dinámico para renderizar proyectos con estructura modular idéntica a Adobe Portfolio
 */

const PROJECTS_DATA = [
  {
    "id": 1,
    "slug": "copia-de-bastilla",
    "title": "CALIOPE FAMILY",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "description": "",
    "heroImage": "img/proyectos/guido_0024.jpg",
    "mainImage": "img/proyectos/guido_0024.jpg",
    "alt": "CALIOPE FAMILY — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA EN EXTERIOR",
        "html": "<div class=\"title\"><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">FOTOGRAFÍA EN EXTERIOR </span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0001.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0002.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0003.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0004.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">DISEÑO DE PIEZAS PARA REDES SOCIALES</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0005.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0006.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0007.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0008.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          }
        ]
      },
      {
        "type": "text",
        "text": "BACKSTAGE CALIOPE FAMILY X KERCHAK",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">BACKSTAGE CALIOPE FAMILY X KERCHAK</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0009.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0010.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0011.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0012.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0013.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0014.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 51,
        "isVertical": true
      },
      {
        "type": "text",
        "text": "COBERTURA DE EVENTOS",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">COBERTURA DE EVENTOS</span></span></span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0015.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0016.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0017.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0018.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 70,
        "images": [
          {
            "src": "img/proyectos/guido_0019.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0020.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 100,
        "isVertical": false
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0001.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0002.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0003.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0004.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0005.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0006.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0007.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0008.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0009.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0010.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0011.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0012.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0013.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0014.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0015.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0016.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0017.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0018.jpg",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0019.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0020.gif",
        "alt": "copia-de-bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 2,
    "slug": "bastilla",
    "title": "BASTILLA",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "description": "",
    "heroImage": "img/proyectos/guido_0027.jpg",
    "mainImage": "img/proyectos/guido_0027.jpg",
    "alt": "BASTILLA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/JRtQ9krSbZv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/F3BLd3gBYuY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/LjpeqoHWFEy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0029.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0030.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "ANIMACIÓN DE LOGO",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">ANIMACIÓN DE LOGO</span></span></span><br>"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/JRtQ9krSbZv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 71,
        "isVertical": false
      },
      {
        "type": "text",
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">DISEÑO DE PIEZAS PARA REDES SOCIALES</span></span></span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 5,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0031.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0032.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0033.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0034.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0035.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0036.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0037.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0038.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0039.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0040.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0041.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0042.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0043.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0044.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0045.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 4,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0046.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0047.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0048.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0049.jpg",
            "width": 1078,
            "height": 1350,
            "aspectRatio": 0.7985
          },
          {
            "src": "img/proyectos/guido_0050.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0051.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0052.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0053.jpg",
            "width": 1078,
            "height": 1350,
            "aspectRatio": 0.7985
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0054.jpg",
            "width": 3840,
            "height": 6826,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0055.jpg",
            "width": 3840,
            "height": 6826,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0056.jpg",
            "width": 3840,
            "height": 6826,
            "aspectRatio": 0.5626
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0057.jpg",
            "width": 1920,
            "height": 3413,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0058.jpg",
            "width": 1920,
            "height": 3413,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0059.jpg",
            "width": 1920,
            "height": 3413,
            "aspectRatio": 0.5626
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0060.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0061.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0062.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0063.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0064.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0065.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0066.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0067.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/F3BLd3gBYuY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 71,
        "isVertical": true
      },
      {
        "type": "text",
        "text": "FOTOGRAFÍA EN ESTUDIO",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">FOTOGRAFÍA EN ESTUDIO</span></span></span><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><br></span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0068.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0069.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0070.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0071.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0072.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0073.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/LjpeqoHWFEy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 71,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0029.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0030.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0031.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0032.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0033.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0034.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0035.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0036.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0037.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0038.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0039.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0040.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0041.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0042.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0043.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0044.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0045.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0046.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0047.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0048.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0049.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.7985
      },
      {
        "src": "img/proyectos/guido_0050.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0051.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0052.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0053.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.7985
      },
      {
        "src": "img/proyectos/guido_0054.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0055.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0056.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0057.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0058.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0059.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0060.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0061.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0062.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0063.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0064.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0065.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0066.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0067.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0068.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0069.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0070.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0071.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0072.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0073.jpg",
        "alt": "bastilla — Guido Castellotti",
        "aspectRatio": 0.6667
      }
    ]
  },
  {
    "id": 3,
    "slug": "suave-lomito",
    "title": "SUAVE LOMITO",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "description": "",
    "heroImage": "img/proyectos/guido_0100.jpg",
    "mainImage": "img/proyectos/guido_0100.jpg",
    "alt": "SUAVE LOMITO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CNkUdowkUKH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0076.png",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0077.png",
            "width": 1402,
            "height": 1122,
            "aspectRatio": 1.2496
          }
        ]
      },
      {
        "type": "text",
        "text": "DESARROLLO DE IDENTIDAD",
        "html": "<div class=\"title\"><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">DESARROLLO DE IDENTIDAD</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 98,
        "images": [
          {
            "src": "img/proyectos/guido_0078.jpg",
            "width": 1920,
            "height": 1250,
            "aspectRatio": 1.536
          },
          {
            "src": "img/proyectos/guido_0079.jpg",
            "width": 1920,
            "height": 1287,
            "aspectRatio": 1.4918
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0080.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0081.jpg",
            "width": 1920,
            "height": 1357,
            "aspectRatio": 1.4149
          },
          {
            "src": "img/proyectos/guido_0082.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0083.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0084.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0085.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0086.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0087.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0088.png",
            "width": 1920,
            "height": 2098,
            "aspectRatio": 0.9152
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 5,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0089.png",
            "width": 517,
            "height": 773,
            "aspectRatio": 0.6688
          },
          {
            "src": "img/proyectos/guido_0090.png",
            "width": 644,
            "height": 690,
            "aspectRatio": 0.9333
          },
          {
            "src": "img/proyectos/guido_0091.png",
            "width": 636,
            "height": 691,
            "aspectRatio": 0.9204
          },
          {
            "src": "img/proyectos/guido_0092.png",
            "width": 1521,
            "height": 922,
            "aspectRatio": 1.6497
          },
          {
            "src": "img/proyectos/guido_0093.png",
            "width": 1101,
            "height": 1214,
            "aspectRatio": 0.9069
          }
        ]
      },
      {
        "type": "text",
        "text": "ARTE DE TAPA",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">ARTE DE TAPA</span></span></span>"
      },
      {
        "type": "image",
        "widthPercent": 38,
        "image": {
          "src": "img/proyectos/guido_0132.png",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0095.png",
            "width": 3840,
            "height": 3840,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0096.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 34,
        "image": {
          "src": "img/proyectos/guido_0133.png",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0098.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0099.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA SHOWS",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">COBERTURA SHOWS</span></span></span>"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/CNkUdowkUKH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 71,
        "isVertical": true
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0100.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0101.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0102.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0103.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0104.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0105.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0106.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0107.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0108.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0109.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "FLYERS",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">FLYERS</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0110.jpg",
            "width": 1753,
            "height": 2480,
            "aspectRatio": 0.7069
          },
          {
            "src": "img/proyectos/guido_0111.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0112.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0113.jpeg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          }
        ]
      },
      {
        "type": "text",
        "text": "VISUALIZERS SORTIJA",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">VISUALIZERS SORTIJA</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 70,
        "images": [
          {
            "src": "img/proyectos/guido_0114.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0115.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0116.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0117.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0118.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0119.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0120.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0121.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0122.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0123.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0124.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0125.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "text",
        "text": "DISEÑO DE REMERAS",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">DISEÑO DE REMERAS</span></span></span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0126.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0127.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0128.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0129.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0130.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0131.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0076.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0077.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.2496
      },
      {
        "src": "img/proyectos/guido_0078.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.536
      },
      {
        "src": "img/proyectos/guido_0079.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.4918
      },
      {
        "src": "img/proyectos/guido_0080.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0081.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.4149
      },
      {
        "src": "img/proyectos/guido_0082.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0083.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0084.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0085.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0086.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0087.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0088.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.9152
      },
      {
        "src": "img/proyectos/guido_0089.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6688
      },
      {
        "src": "img/proyectos/guido_0090.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.9333
      },
      {
        "src": "img/proyectos/guido_0091.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.9204
      },
      {
        "src": "img/proyectos/guido_0092.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.6497
      },
      {
        "src": "img/proyectos/guido_0093.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.9069
      },
      {
        "src": "img/proyectos/guido_0132.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0095.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0096.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0133.png",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0098.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0099.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0100.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0101.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0102.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0103.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0104.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0105.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0106.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0107.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0108.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0109.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0110.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.7069
      },
      {
        "src": "img/proyectos/guido_0111.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0112.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0113.jpeg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0114.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0115.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0116.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0117.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0118.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0119.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0120.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0121.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0122.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0123.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0124.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0125.gif",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0126.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0127.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0128.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0129.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0130.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0131.jpg",
        "alt": "suave-lomito — Guido Castellotti",
        "aspectRatio": 1.5
      }
    ]
  },
  {
    "id": 4,
    "slug": "kerchak",
    "title": "KERCHAK",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2021",
    "description": "Proyecto integral para Kerchak, marca de ropa street especializada en prendas intervenidas. Incluyó fotografía para el lanzamiento de colección, cobertura audiovisual de eventos y diseño de piezas para redes sociales.",
    "heroImage": "img/proyectos/guido_0184.jpg",
    "mainImage": "img/proyectos/guido_0184.jpg",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA EN EXTERIOR",
        "html": "<div class=\"title\"><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">FOTOGRAFÍA EN EXTERIOR </span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0134.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0135.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0136.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0137.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">DISEÑO DE PIEZAS PARA REDES SOCIALES</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0138.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0139.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0140.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0141.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          }
        ]
      },
      {
        "type": "text",
        "text": "BACKSTAGE CALIOPE FAMILY X KERCHAK",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">BACKSTAGE CALIOPE FAMILY X KERCHAK</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0142.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0143.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0144.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0145.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0146.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0147.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 51,
        "isVertical": true
      },
      {
        "type": "text",
        "text": "COBERTURA DE EVENTOS",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">COBERTURA DE EVENTOS</span></span></span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0148.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0149.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0150.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0151.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 70,
        "images": [
          {
            "src": "img/proyectos/guido_0152.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0153.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 100,
        "isVertical": false
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0134.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0135.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0136.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0137.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0138.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0139.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0140.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0141.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0142.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0143.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0144.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0145.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0146.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0147.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0148.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0149.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0150.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0151.jpg",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0152.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0153.gif",
        "alt": "kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 5,
    "slug": "gladyson-panther",
    "title": "GLADYSON PANTHER",
    "categories": [
      "Proyectos Integrales"
    ],
    "date": "2024",
    "description": "Visuales para el tema Rosario 2018, realizadas en stop motion. Inspirado en el ritmo funky-psicodélico de la canción, que evoca recorrer la ciudad en bicicleta un domingo, me subí a la bicicleta y pedaleé por distintos lugares de Rosario con la cámara colgando para capturar las fotos. Luego incorporé las manos del artista sujetando el manubrio y edité las imágenes de forma que reforzaran el concepto psicodélico y de enamoramiento, agregando distintas situaciones de clima a medida que avanzaba el mood del tema y la letra.",
    "heroImage": "img/proyectos/guido_0023.jpg",
    "mainImage": "img/proyectos/guido_0023.jpg",
    "alt": "GLADYSON PANTHER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/NUTmDvpDqdo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "ROSARIO 2018 - GLADYSON PANTHER",
        "html": "<div><span style=\"color:#000000;\" class=\"texteditor-inline-color\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\">ROSARIO 2018 - GLADYSON PANTHER</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0154.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0155.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0156.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0157.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0158.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0159.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/NUTmDvpDqdo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 100,
        "isVertical": false
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0154.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0155.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0156.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0157.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0158.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0159.gif",
        "alt": "gladyson-panther — Guido Castellotti",
        "aspectRatio": 1.7778
      }
    ]
  },
  {
    "id": 6,
    "slug": "lira-bikes",
    "title": "LIRA BIKES",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Producción audiovisual para Lira Bikes en colaboración con Agustin Menéndez, enfocada en destacar los detalles de la bicicleta con un montaje dinámico, uso de rampas de velocidad y movimientos de gimbal.",
    "heroImage": "img/proyectos/guido_0160.jpg",
    "mainImage": "img/proyectos/guido_0160.jpg",
    "alt": "LIRA BIKES — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/TGdSI_dCRcE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "VIDEO",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">VIDEO</span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 65,
        "images": [
          {
            "src": "img/proyectos/guido_0161.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0162.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0163.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0164.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/TGdSI_dCRcE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0161.gif",
        "alt": "lira-bikes — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0162.gif",
        "alt": "lira-bikes — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0163.gif",
        "alt": "lira-bikes — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0164.gif",
        "alt": "lira-bikes — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 7,
    "slug": "cms-arquitectas",
    "title": "CMS ARQUITECTAS",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2023",
    "description": "Producción integral de contenidos para CMS Arquitectas: fotografía y video de proyectos en distintas etapas y diseño de informes de avance de obra.",
    "heroImage": "img/proyectos/guido_0226.jpg",
    "mainImage": "img/proyectos/guido_0226.jpg",
    "alt": "CMS ARQUITECTAS — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/LyeMgIyDjDg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/9An6wjeopn4/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/GJ_93ZhWG7e/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/MWv4H3MM6vB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Bu6DSQnwWBE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "SF 2235",
        "html": "<div style=\"line-height:45px;\" class=\"texteditor-inline-lineheight\"><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">SF 2235</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0184.jpg",
            "width": 1558,
            "height": 2769,
            "aspectRatio": 0.5627
          },
          {
            "src": "img/proyectos/guido_0185.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0186.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0187.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0188.jpg",
            "width": 1920,
            "height": 3418,
            "aspectRatio": 0.5617
          },
          {
            "src": "img/proyectos/guido_0189.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0190.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0191.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0192.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0193.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0194.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0195.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0196.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0197.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0198.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/LyeMgIyDjDg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 100,
        "isVertical": false
      },
      {
        "type": "text",
        "text": "INFORMES AVANCE DE OBRA",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">INFORMES AVANCE DE OBRA</span></span></span><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\"><br></span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0199.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0200.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0201.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          }
        ]
      },
      {
        "type": "text",
        "text": "RZ 1428",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">RZ 1428</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0202.jpg",
            "width": 1640,
            "height": 2460,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0203.jpg",
            "width": 1640,
            "height": 2460,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0204.jpg",
            "width": 1640,
            "height": 2494,
            "aspectRatio": 0.6576
          },
          {
            "src": "img/proyectos/guido_0205.jpg",
            "width": 1640,
            "height": 2460,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0206.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0207.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "EVENTO INAUGURACIÓN",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">EVENTO INAUGURACIÓN</span></span></span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0208.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0209.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0210.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0211.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "tree",
        "children": []
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/9An6wjeopn4/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 80,
        "isVertical": true
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/GJ_93ZhWG7e/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 80,
        "isVertical": true
      },
      {
        "type": "text",
        "text": "INFORMES AVANCE DE OBRA",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">INFORMES AVANCE DE OBRA</span></span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0212.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0213.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0214.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          }
        ]
      },
      {
        "type": "text",
        "text": "TRAMA COLÓN",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">TRAMA COLÓN</span></span></span><br>"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/MWv4H3MM6vB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 70,
        "isVertical": true
      },
      {
        "type": "text",
        "text": "EDIFICIO CAFFE",
        "html": "<div><span style=\"font-size:30px;\" class=\"texteditor-inline-fontsize\"><span style=\"font-family:sfjq; font-weight:700;\"><span style=\"color:#1f1f1f;\" class=\"texteditor-inline-color\">EDIFICIO CAFFE</span></span></span><br>"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/Bu6DSQnwWBE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 70,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0184.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.5627
      },
      {
        "src": "img/proyectos/guido_0185.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0186.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0187.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0188.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.5617
      },
      {
        "src": "img/proyectos/guido_0189.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0190.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0191.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0192.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0193.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0194.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0195.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0196.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0197.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0198.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0199.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0200.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0201.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0202.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0203.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0204.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6576
      },
      {
        "src": "img/proyectos/guido_0205.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0206.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0207.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0208.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0209.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0210.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0211.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0212.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0213.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0214.jpg",
        "alt": "cms-arquitectas — Guido Castellotti",
        "aspectRatio": 1.3813
      }
    ]
  },
  {
    "id": 8,
    "slug": "dege-muebles",
    "title": "DEGË MUEBLES",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Fotografía y video de muebles de metal y madera, capturando cada pieza tanto de manera individual como en ambientes que resaltan su diseño y materiales. En todo el proceso se buscó reflejar fielmente la geometría de los muebles, transmitiendo con precisión sus proporciones y terminaciones. Además, se desarrolló contenido audiovisual para redes sociales, mostrando los muebles en uso y en distintos contextos, para comunicar su estilo, funcionalidad y personalidad.",
    "heroImage": "img/proyectos/guido_0176.jpg",
    "mainImage": "img/proyectos/guido_0176.jpg",
    "alt": "DEGË MUEBLES — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA E-COMMERCE",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:600;\"><span style=\"font-size:29px;\">FOTOGRAFÍA E-COMMERCE</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0219.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0220.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0221.jpg",
            "width": 1920,
            "height": 2879,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0222.jpg",
            "width": 1920,
            "height": 2879,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0223.jpg",
            "width": 1920,
            "height": 2559,
            "aspectRatio": 0.7503
          },
          {
            "src": "img/proyectos/guido_0224.jpg",
            "width": 1920,
            "height": 2559,
            "aspectRatio": 0.7503
          },
          {
            "src": "img/proyectos/guido_0225.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0226.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0227.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0228.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0229.jpg",
            "width": 1758,
            "height": 2461,
            "aspectRatio": 0.7143
          },
          {
            "src": "img/proyectos/guido_0230.jpg",
            "width": 1758,
            "height": 2461,
            "aspectRatio": 0.7143
          },
          {
            "src": "img/proyectos/guido_0231.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0232.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0233.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0234.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0235.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0236.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0237.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0238.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "CONTENIDO AUDIOVISUAL PARA REDES",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:600;\"><span style=\"font-size:29px;\" class=\"texteditor-inline-fontsize\">CONTENIDO AUDIOVISUAL PARA REDES</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0239.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0240.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0241.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0242.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0219.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0220.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0221.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0222.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0223.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.7503
      },
      {
        "src": "img/proyectos/guido_0224.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.7503
      },
      {
        "src": "img/proyectos/guido_0225.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0226.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0227.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0228.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0229.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.7143
      },
      {
        "src": "img/proyectos/guido_0230.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.7143
      },
      {
        "src": "img/proyectos/guido_0231.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0232.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0233.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0234.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0235.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0236.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0237.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0238.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0239.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0240.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0241.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0242.jpg",
        "alt": "dege-muebles — Guido Castellotti",
        "aspectRatio": 1.5
      }
    ]
  },
  {
    "id": 9,
    "slug": "karma-negro-pelicula",
    "title": "KARMA NEGRO PELÍCULA",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Cobertura fotográfica y audiovisual del estreno de Karma Negro en el Cine El Cairo, en el marco del 30° Festival de Cine Latinoamericano. Además de registrar los momentos destacados del evento, el proyecto tuvo como eje central la edición de video, donde se trabajó especialmente con efectos de audio para potenciar la narrativa y transmitir la energía del estreno.",
    "heroImage": "img/proyectos/guido_0173.jpg",
    "mainImage": "img/proyectos/guido_0173.jpg",
    "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/RY-QzeQ44gD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "COBERTURA FOTOGRÁFICA",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:600;\"><span style=\"font-size:29px;\">COBERTURA FOTOGRÁFICA</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0243.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0244.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0245.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0246.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0247.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0248.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA AUDIOVISUAL",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:500;\"><span style=\"font-size:29px;\" class=\"texteditor-inline-fontsize\">COBERTURA AUDIOVISUAL</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0249.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0250.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0251.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0252.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0253.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/RY-QzeQ44gD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0243.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0244.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0245.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0246.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0247.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0248.jpg",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0249.gif",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0250.gif",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0251.gif",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0252.gif",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0253.gif",
        "alt": "karma-negro-pelicula — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 10,
    "slug": "au-exclusive",
    "title": "AU EXCLUSIVE",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2022",
    "description": "Proyecto fotográfico para marca de ropa urbana con raíces en el hip hop y la vida callejera. La sesión, protagonizada por un graffitero de Rosario, recrea la tensión y el sigilo de la acción en la calle.",
    "heroImage": "img/proyectos/guido_0272.jpg",
    "mainImage": "img/proyectos/guido_0272.jpg",
    "alt": "AU EXCLUSIVE — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0261.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0255.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0256.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0257.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0258.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0259.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0260.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0261.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0255.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0256.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0257.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0258.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0259.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0260.jpg",
        "alt": "au-exclusive — Guido Castellotti",
        "aspectRatio": 0.6667
      }
    ]
  },
  {
    "id": 11,
    "slug": "mirenka",
    "title": "MIRENKA",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Sesión fotográfica en estudio para emprendimiento de accesorios de aluminio moldeados a mano, con una propuesta visual que transmite naturalidad, calidez y frialdad a través del juego de luces y sombras.",
    "heroImage": "img/proyectos/guido_0180.jpg",
    "mainImage": "img/proyectos/guido_0180.jpg",
    "alt": "MIRENKA — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0262.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0263.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0264.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0265.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0266.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0267.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0268.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0269.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0270.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0271.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0262.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0263.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0264.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0265.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0266.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0267.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0268.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0269.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0270.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0271.jpg",
        "alt": "mirenka — Guido Castellotti",
        "aspectRatio": 0.6667
      }
    ]
  },
  {
    "id": 12,
    "slug": "anti-pop",
    "title": "ANTIPOP",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Producción de fotografía y video en Chapadmalal para marca de ropa rosarina. El contenido se realizó en la playa, aprovechando un viaje personal, para acompañar el lanzamiento de su colección de verano.",
    "heroImage": "img/proyectos/guido_0217.jpg",
    "mainImage": "img/proyectos/guido_0217.jpg",
    "alt": "ANTIPOP — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5E_JJkFG2pW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:600;\"><span style=\"font-size:29px;\"><span class=\"texteditor-inline-color\" style=\"color:#1b1919;\">FOTOGRAFÍA</span> </span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0272.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0273.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0274.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0275.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0276.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0277.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "VIDEO",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">VIDEO</span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0278.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0279.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0280.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0281.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0282.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0283.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/5E_JJkFG2pW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0272.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0273.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0274.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0275.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0276.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0277.jpg",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0278.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0279.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0280.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0281.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0282.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0283.gif",
        "alt": "anti-pop — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 13,
    "slug": "on-tentacion-turismo",
    "title": "BRASIL┃ON TENTACIÓN TURISMO",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "",
    "heroImage": "img/proyectos/guido_0160.jpg",
    "mainImage": "img/proyectos/guido_0160.jpg",
    "alt": "BRASIL┃ON TENTACIÓN TURISMO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/BybEdPwNZKY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/PT56ACs7iPj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/NGSgHb_oHpr/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "CONTENIDO HORIZONTAL PARA VENTA",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">CONTENIDO HORIZONTAL PARA VENTA</span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0284.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0285.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0286.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0287.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0288.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0289.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0290.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0291.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0292.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0293.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0294.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0295.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0296.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0297.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0298.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0299.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0300.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0301.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0302.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0303.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0304.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0305.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0306.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0307.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "text",
        "text": "CÁPSULAS PARA REDES SOCIALES",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">CÁPSULAS PARA REDES SOCIALES</span><br>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0308.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0309.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0310.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0311.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0312.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0313.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0314.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0315.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0316.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0317.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0318.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0319.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/BybEdPwNZKY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/PT56ACs7iPj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/NGSgHb_oHpr/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0284.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0285.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0286.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0287.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0288.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0289.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0290.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0291.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0292.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0293.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0294.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0295.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0296.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0297.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0298.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0299.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0300.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0301.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0302.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0303.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0304.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0305.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0306.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0307.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0308.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0309.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0310.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0311.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0312.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0313.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0314.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0315.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0316.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0317.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0318.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0319.gif",
        "alt": "on-tentacion-turismo — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 14,
    "slug": "sonder",
    "title": "SONDER",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "Producciones para el Club Sonder de Rosario, combinando fotografía en estudio para material gráfico y cobertura audiovisual de partidos profesionales.",
    "heroImage": "img/proyectos/guido_0411.jpg",
    "mainImage": "img/proyectos/guido_0411.jpg",
    "alt": "SONDER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CDGGU8bNCqj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Uc-fjoTtSAE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA EN ESTUDIO",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:500;\"><span style=\"font-size:29px;\">FOTOGRAFÍA EN ESTUDIO</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0320.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0321.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0322.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0323.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0324.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0325.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA PARTIDOS",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq; font-weight:500;\"><span style=\"font-size:29px;\">COBERTURA PARTIDOS</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0326.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0327.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0328.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0329.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0330.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0331.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0332.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0333.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0334.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0335.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/CDGGU8bNCqj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 100,
        "isVertical": false
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0336.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0337.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0338.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0339.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0340.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0341.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/Uc-fjoTtSAE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0320.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0321.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0322.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0323.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0324.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0325.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0326.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0327.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0328.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0329.jpg",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0330.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0331.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0332.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0333.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0334.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0335.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0336.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0337.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0338.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0339.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0340.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0341.gif",
        "alt": "sonder — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 15,
    "slug": "panes-y-peces-restaurante-uruguay",
    "title": "URUGUAY┃PANES Y PECES RESTAURANTE",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "",
    "heroImage": "img/proyectos/guido_0176.jpg",
    "mainImage": "img/proyectos/guido_0176.jpg",
    "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5fL7w7D3cpP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "modules": [
      {
        "type": "text",
        "text": "FOTOGRAFÍA",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:600;\"><span style=\"font-size:29px;\"><span class=\"texteditor-inline-color\" style=\"color:#1b1919;\">FOTOGRAFÍA</span> </span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0342.jpg",
            "width": 1920,
            "height": 1289,
            "aspectRatio": 1.4895
          },
          {
            "src": "img/proyectos/guido_0343.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0344.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0345.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0346.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0347.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0348.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0349.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0350.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0351.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0352.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0353.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0354.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0355.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0356.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0357.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0358.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0359.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0360.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0361.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "VIDEO",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">VIDEO</span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0362.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0363.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0364.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0365.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0366.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0367.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0368.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0369.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0370.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0371.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0372.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0373.gif",
            "width": 720,
            "height": 1280,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/5fL7w7D3cpP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
        "widthPercent": 60,
        "isVertical": true
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0342.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.4895
      },
      {
        "src": "img/proyectos/guido_0343.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0344.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0345.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0346.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0347.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0348.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0349.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0350.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0351.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0352.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0353.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0354.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0355.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0356.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0357.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0358.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0359.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0360.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0361.jpg",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0362.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0363.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0364.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0365.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0366.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0367.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0368.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0369.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0370.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0371.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0372.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0373.gif",
        "alt": "panes-y-peces-restaurante-uruguay — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 16,
    "slug": "fapyd-unr",
    "title": "FAPYD (UNR)",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2025",
    "description": "",
    "heroImage": "img/proyectos/guido_0480.jpg",
    "mainImage": "img/proyectos/guido_0480.jpg",
    "alt": "FAPYD (UNR) — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "text",
        "text": "Réplica Colectiva Gráfica",
        "html": "<div class=\"title\"><span style=\"font-size:29px;\">Réplica Colectiva Gráfica</span>"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0374.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0375.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0376.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0377.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0378.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0379.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0380.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0381.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0382.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0383.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0384.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0385.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0386.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0387.gif",
            "width": 253,
            "height": 450,
            "aspectRatio": 0.5622
          },
          {
            "src": "img/proyectos/guido_0388.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "text",
        "text": "Optativa Entretejiendo lo tangible y lo intangible",
        "html": "<div class=\"sub-title\"><span style=\"font-family:sfjq; font-weight:600;\"><span style=\"font-size:29px;\"><span style=\"color:#1b1919;\" class=\"texteditor-inline-color\"></span></span></span>Optativa Entretejiendo lo tangible y lo intangible"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0389.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0390.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0391.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0392.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0393.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0394.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0395.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0396.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0397.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0398.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0399.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0400.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0401.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0402.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0403.gif",
            "width": 270,
            "height": 480,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0404.gif",
            "width": 253,
            "height": 450,
            "aspectRatio": 0.5622
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0405.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0406.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0407.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0408.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0409.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0410.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0411.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0412.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0413.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0414.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0415.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0416.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0374.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0375.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0376.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0377.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0378.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0379.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0380.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0381.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0382.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0383.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0384.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0385.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0386.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0387.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5622
      },
      {
        "src": "img/proyectos/guido_0388.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0389.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0390.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0391.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0392.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0393.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0394.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0395.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0396.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0397.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0398.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0399.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0400.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0401.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0402.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0403.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0404.gif",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.5622
      },
      {
        "src": "img/proyectos/guido_0405.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0406.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0407.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0408.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0409.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0410.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0411.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0412.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0413.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0414.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0415.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0416.jpg",
        "alt": "fapyd-unr — Guido Castellotti",
        "aspectRatio": 1.5
      }
    ]
  },
  {
    "id": 17,
    "slug": "lila-grace",
    "title": "LILA GRACE",
    "categories": [
      "Fotografía y Video"
    ],
    "date": "2018",
    "description": "Fotografía en exterior para el lanzamiento de la colección de verano.",
    "heroImage": "img/proyectos/guido_0530.jpg",
    "mainImage": "img/proyectos/guido_0530.jpg",
    "alt": "LILA GRACE — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0417.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0418.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0419.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0420.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0421.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0422.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0423.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0424.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0425.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0426.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0427.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0428.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0429.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0430.jpg",
            "width": 1300,
            "height": 867,
            "aspectRatio": 1.4994
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0417.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0418.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0419.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0420.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0421.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0422.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0423.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0424.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0425.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0426.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0427.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0428.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0429.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0430.jpg",
        "alt": "lila-grace — Guido Castellotti",
        "aspectRatio": 1.4994
      }
    ]
  },
  {
    "id": 18,
    "slug": "ballet-para-las-masas",
    "title": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
    "categories": [
      "Diseño"
    ],
    "date": "2026",
    "description": "Diseño tipográfico y sistema audiovisual para visualizers de YouTube\nDesarrollo de sistema tipográfico y visualizers animados del álbum, a partir de casi tres semanas de investigación junto a los artistas, Definicion de palabras clave según los conceptos y emociones que atravesaban las canciones.\nEl disco, 100% argentino, recorre ídolos populares, tragedias heredadas, luchas y glorias colectivas: una tragicomedia hecha país. Esa dimensión identitaria estructuró la narrativa visual y dio origen a un universo coherente para los 13 tracks.\nEl sistema partió de la simulación de una revista llevada a pantalla, donde cada tema funcionaba como una doble página editorial. La letra —eje central del rap— se convirtió en protagonista, escribiéndose en sincronía con el avance del track. Al testearlo en digital ajustamos jerarquías y escala tipográfica, lo que derivó en un recurso narrativo de pasaje de página a lo largo de cada canción.\nEl diseño fue pensado como un sistema adaptable, capaz de funcionar tanto en formato digital como en fanzine impreso.\nEl proyecto comenzó de manera individual y luego se amplió como experiencia colectiva junto a colegas de la Cátedra Parma (Tipografía III, FAPyD UNR): Sasha en animación, y Maxo y Cata en el desarrollo gráfico final.",
    "heroImage": "img/proyectos/guido_0474.jpg",
    "mainImage": "img/proyectos/guido_0474.jpg",
    "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0477.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0432.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0433.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0478.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0435.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0436.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0437.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0438.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0479.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0440.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0441.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0442.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0443.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0480.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0445.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0446.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0447.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0448.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0481.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0450.jpg",
            "width": 3840,
            "height": 1825,
            "aspectRatio": 2.1041
          },
          {
            "src": "img/proyectos/guido_0451.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0452.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0453.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0482.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0455.jpg",
            "width": 3840,
            "height": 1826,
            "aspectRatio": 2.103
          },
          {
            "src": "img/proyectos/guido_0456.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0457.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0458.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0483.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0460.jpg",
            "width": 3840,
            "height": 1825,
            "aspectRatio": 2.1041
          },
          {
            "src": "img/proyectos/guido_0461.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0462.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          },
          {
            "src": "img/proyectos/guido_0463.gif",
            "width": 800,
            "height": 450,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0484.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0465.jpg",
            "width": 3840,
            "height": 1826,
            "aspectRatio": 2.103
          },
          {
            "src": "img/proyectos/guido_0466.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "text",
        "text": "Link Visualizer completo",
        "html": "<div class=\"title\"><span style=\"font-family:ftnk;font-weight:800;\">Link Visualizer completo</span>"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0477.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0432.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0433.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0478.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0435.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0436.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0437.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0438.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0479.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0440.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0441.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0442.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0443.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0480.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0445.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0446.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0447.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0448.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0481.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0450.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.1041
      },
      {
        "src": "img/proyectos/guido_0451.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0452.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0453.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0482.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0455.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.103
      },
      {
        "src": "img/proyectos/guido_0456.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0457.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0458.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0483.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0460.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.1041
      },
      {
        "src": "img/proyectos/guido_0461.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0462.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0463.gif",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0484.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0465.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 2.103
      },
      {
        "src": "img/proyectos/guido_0466.jpg",
        "alt": "ballet-para-las-masas — Guido Castellotti",
        "aspectRatio": 1.3953
      }
    ]
  },
  {
    "id": 19,
    "slug": "rosario-es-un-eclipse",
    "title": "ROSARIO ES UN ECLIPSE",
    "categories": [
      "Diseño"
    ],
    "date": "2026",
    "description": "Desarrollo de sistema editorial completo: tapa, contratapa, interiores, índice, portadas de capítulo y colofón. \nRosario es un eclipse es un libro sobre una ciudad atravesada por la violencia sistémica y el capitalismo tardío. En ese contexto, la banda rosarina Bubis Vayins aparece como síntoma y respuesta: ruido, incomodidad y potencia colectiva frente al individualismo dominante. \nA partir de conceptos presentes en el libro como “criaturas insurrectas” y “bólidos catárticos”, la portada se resolvió como una entidad híbrida, radioactiva y sin género definido: una criatura construida a partir de fragmentos de los cuerpos de cada integrante de la banda, fusionados en una silueta única.",
    "heroImage": "img/proyectos/guido_0578.jpg",
    "mainImage": "img/proyectos/guido_0578.jpg",
    "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0497.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0498.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0487.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0488.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0499.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0500.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0501.png",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0492.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0493.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0502.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0497.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0498.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0487.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0488.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0499.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0500.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0501.png",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0492.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0493.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0502.jpg",
        "alt": "rosario-es-un-eclipse — Guido Castellotti",
        "aspectRatio": 1
      }
    ]
  },
  {
    "id": 20,
    "slug": "diseno-editorial-de-revista",
    "title": "DISEÑO EDITORIAL",
    "categories": [
      "Diseño"
    ],
    "date": "2025",
    "description": "",
    "heroImage": "img/proyectos/guido_0503.jpg",
    "mainImage": "img/proyectos/guido_0503.jpg",
    "alt": "DISEÑO EDITORIAL — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0514.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0634.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0635.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0636.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0637.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0638.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0639.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0640.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0641.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0642.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0643.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0514.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0634.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0635.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0636.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0637.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0638.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0639.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0640.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0641.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0642.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0643.jpg",
        "alt": "diseno-editorial-de-revista — Guido Castellotti",
        "aspectRatio": 1
      }
    ]
  },
  {
    "id": 21,
    "slug": "gyor",
    "title": "GYOR",
    "categories": [
      "Diseño"
    ],
    "date": "2021",
    "description": "Diseño de catálogo haciendo foco en la jerarquización, organización de la información y definición de una estructura visual ordenada y funcional.",
    "heroImage": "img/proyectos/guido_0617.jpg",
    "mainImage": "img/proyectos/guido_0617.jpg",
    "alt": "GYOR — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0525.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0526.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0527.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0528.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0529.jpg",
            "width": 1920,
            "height": 2715,
            "aspectRatio": 0.7072
          },
          {
            "src": "img/proyectos/guido_0530.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0531.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0532.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0533.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0534.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0535.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0536.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0525.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0526.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0527.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0528.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0529.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.7072
      },
      {
        "src": "img/proyectos/guido_0530.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0531.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0532.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0533.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0534.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0535.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0536.jpg",
        "alt": "gyor — Guido Castellotti",
        "aspectRatio": 0.707
      }
    ]
  },
  {
    "id": 22,
    "slug": "kid-kerchak",
    "title": "KERCHAK",
    "categories": [
      "Diseño"
    ],
    "date": "2021",
    "description": "Diseño de tapa para single el artista de trap KERCHAK . El proyecto partió de una fotografía propia intervenida con grafitis de Yo Melao. Mi aporte se centró en la organización visual, la jerarquía de los elementos y la creación gráfica de un cartel con el nombre del artista en la fachada.",
    "heroImage": "img/proyectos/guido_0628.jpg",
    "mainImage": "img/proyectos/guido_0628.jpg",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0646.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0538.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0539.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0646.jpg",
        "alt": "kid-kerchak — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0538.jpg",
        "alt": "kid-kerchak — Guido Castellotti",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0539.jpg",
        "alt": "kid-kerchak — Guido Castellotti",
        "aspectRatio": 0.5625
      }
    ]
  },
  {
    "id": 23,
    "slug": "no-paro-ni-a-palo",
    "title": "FESTIVAL NO PARO NI A PALO'",
    "categories": [
      "Diseño"
    ],
    "date": "2024",
    "description": "PROYECTO DE DISEÑO PARA FESTIVAL DE TRAP. \nCreación de piezas gráficas para redes sociales e impresión, además de animaciones de el logo del festival y de los artistas que participaron.",
    "heroImage": "img/proyectos/guido_0630.jpg",
    "mainImage": "img/proyectos/guido_0630.jpg",
    "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "text",
        "text": "FLYERS",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:500;\"><span style=\"font-size:29px;\">FLYERS</span></span>"
      },
      {
        "type": "image",
        "widthPercent": 71,
        "image": {
          "src": "img/proyectos/guido_0647.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0542.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0648.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 80,
        "images": [
          {
            "src": "img/proyectos/guido_0544.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0545.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0546.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "image",
        "widthPercent": 100,
        "image": {
          "src": "img/proyectos/guido_0649.jpg",
          "width": null,
          "height": null,
          "aspectRatio": 1
        }
      },
      {
        "type": "text",
        "text": "ANIMACIÓN DE LOGOS",
        "html": "<div class=\"title\"><span style=\"font-family:sfjq;font-weight:500;\"><span style=\"font-size:29px;\">ANIMACIÓN DE LOGOS</span></span>"
      },
      {
        "type": "media_collection",
        "maxImages": 4,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0650.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0651.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0652.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0653.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 4,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0654.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0655.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0656.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0657.gif",
            "width": 480,
            "height": 270,
            "aspectRatio": 1.7778
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0647.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0542.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0648.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0544.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0545.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0546.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0649.jpg",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0650.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0651.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0652.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0653.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0654.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0655.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0656.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0657.gif",
        "alt": "no-paro-ni-a-palo — Guido Castellotti",
        "aspectRatio": 1.7778
      }
    ]
  },
  {
    "id": 24,
    "slug": "print",
    "title": "FOTOGRAFÍA IMPRESA",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "description": "Risografías A3 en papel obra 120g a una y dos tintas",
    "heroImage": "img/proyectos/guido_0593.jpg",
    "mainImage": "img/proyectos/guido_0593.jpg",
    "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0559.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0560.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0561.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0562.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0563.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0564.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0565.jpg",
            "width": 1500,
            "height": 2249,
            "aspectRatio": 0.667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0559.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0560.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0561.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0562.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0563.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0564.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0565.jpg",
        "alt": "print — Guido Castellotti",
        "aspectRatio": 0.667
      }
    ]
  },
  {
    "id": 25,
    "slug": "rosario-es-un-eclipse-print",
    "title": "PRINT ROSARIO ES UN ECLIPSE",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "description": "Prints en formato A3 impresos en risografía y calcos del al libro “Rosario es un eclipse”, obra de la revista cultural Rapto, que aborda una ciudad atravesada por la violencia sistémica y el capitalismo tardío, donde la banda rosarina Bubis Vayins sublima una respuesta colectiva frente al individualismo dominante.",
    "heroImage": "img/proyectos/guido_0600.jpg",
    "mainImage": "img/proyectos/guido_0600.jpg",
    "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0572.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0573.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0574.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0575.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0572.jpg",
        "alt": "rosario-es-un-eclipse-print — Guido Castellotti",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0573.jpg",
        "alt": "rosario-es-un-eclipse-print — Guido Castellotti",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0574.jpg",
        "alt": "rosario-es-un-eclipse-print — Guido Castellotti",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0575.jpg",
        "alt": "rosario-es-un-eclipse-print — Guido Castellotti",
        "aspectRatio": 0.7541
      }
    ]
  },
  {
    "id": 26,
    "slug": "fanzine",
    "title": "ZINE INFIERNOS",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "description": "“Muchos infiernos, diversos, vi y sin embargo yo aquí paseo” Una selección de fotografías realizadas entre 2017 y 2026 en distintas ciudades de Argentina y Uruguay, que combina registros analógicos y digitales.\nEl proyecto surge de años de caminar, observar y fotografiar sin un destino preciso. Las imágenes recorren espacios urbanos donde conviven el abandono y la celebración, la exclusión y el encuentro, la violencia cotidiana y los pequeños gestos de ternura que persisten a pesar de todo.",
    "heroImage": "img/proyectos/guido_0604.jpg",
    "mainImage": "img/proyectos/guido_0604.jpg",
    "alt": "ZINE INFIERNOS — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0578.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          },
          {
            "src": "img/proyectos/guido_0579.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0580.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0581.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0582.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0583.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0584.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0645.gif",
            "width": 356,
            "height": 480,
            "aspectRatio": 0.7417
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0578.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0579.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0580.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0581.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0582.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0583.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0584.jpg",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0645.gif",
        "alt": "fanzine — Guido Castellotti",
        "aspectRatio": 0.7417
      }
    ]
  },
  {
    "id": 27,
    "slug": "fanzine-bpm",
    "title": "ZINE BALLET PARA LAS MASAS",
    "categories": [
      "Obra Impresa"
    ],
    "date": "2026",
    "description": "Una publicación en colaboración con los músicos Fasciolo y Nasir Catriel asociada al disco homónimo: una obra que recorre ídolos populares, tragedias heredadas, luchas y glorias colectivas desde una mirada crítica y profundamente argentina.",
    "heroImage": "img/proyectos/guido_0611.jpg",
    "mainImage": "img/proyectos/guido_0611.jpg",
    "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "modules": [
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0586.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0644.gif",
            "width": 356,
            "height": 480,
            "aspectRatio": 0.7417
          },
          {
            "src": "img/proyectos/guido_0588.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0589.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0590.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0591.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0586.jpg",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0644.gif",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.7417
      },
      {
        "src": "img/proyectos/guido_0588.jpg",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0589.jpg",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0590.jpg",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0591.jpg",
        "alt": "fanzine-bpm — Guido Castellotti",
        "aspectRatio": 0.8
      }
    ]
  }
];
// Dimensiones exactas para videos de Adobe CCV
const VIDEO_METADATA = {
  "6cp3HyEHdEg": { width: 1080, height: 1920, isVertical: true },
  "4Jc6ZfQjh4q": { width: 1920, height: 1080, isVertical: false },
  "JRtQ9krSbZv": { width: 720, height: 1114, isVertical: true },
  "F3BLd3gBYuY": { width: 1080, height: 1920, isVertical: true },
  "LjpeqoHWFEy": { width: 1080, height: 1920, isVertical: true },
  "CNkUdowkUKH": { width: 1080, height: 1920, isVertical: true },
  "NUTmDvpDqdo": { width: 1920, height: 1080, isVertical: false },
  "TGdSI_dCRcE": { width: 1080, height: 1920, isVertical: true },
  "LyeMgIyDjDg": { width: 1920, height: 1080, isVertical: false },
  "9An6wjeopn4": { width: 1080, height: 1920, isVertical: true },
  "GJ_93ZhWG7e": { width: 1080, height: 1920, isVertical: true },
  "MWv4H3MM6vB": { width: 1080, height: 1920, isVertical: true },
  "Bu6DSQnwWBE": { width: 1080, height: 1920, isVertical: true },
  "RY-QzeQ44gD": { width: 1080, height: 1920, isVertical: true },
  "5E_JJkFG2pW": { width: 1080, height: 1920, isVertical: true },
  "BybEdPwNZKY": { width: 1080, height: 1920, isVertical: true },
  "PT56ACs7iPj": { width: 1080, height: 1920, isVertical: true },
  "NGSgHb_oHpr": { width: 1080, height: 1920, isVertical: true },
  "CDGGU8bNCqj": { width: 1920, height: 1080, isVertical: false },
  "Uc-fjoTtSAE": { width: 1080, height: 1920, isVertical: true },
  "5fL7w7D3cpP": { width: 1080, height: 1920, isVertical: true }
};

document.addEventListener('DOMContentLoaded', () => {
  renderProjectDetail();
});

function createVideoWrapper(vUrl, isVerticalHint = false) {
  const wrap = document.createElement('div');
  wrap.className = 'project-video-wrapper';

  const match = vUrl.match(/\/ccv\/([^/?#]+)/);
  let isVertical = isVerticalHint;
  let aspectStyle = isVertical ? '9 / 16' : '16 / 9';

  if (match && VIDEO_METADATA[match[1]]) {
    const meta = VIDEO_METADATA[match[1]];
    isVertical = meta.isVertical;
    aspectStyle = `${meta.width} / ${meta.height}`;
  }

  wrap.classList.add(isVertical ? 'is-vertical' : 'is-horizontal');
  wrap.style.aspectRatio = aspectStyle;

  if (vUrl.endsWith('.mp4') || vUrl.endsWith('.webm')) {
    wrap.innerHTML = `<video src="${vUrl}" controls playsinline preload="metadata" class="project-html5-video"></video>`;
  } else {
    wrap.innerHTML = `<iframe src="${vUrl}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  }

  return wrap;
}

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

  // 1. Barra superior de navegación y metadata
  const catDateEl = document.getElementById('projectCategoryDate');
  if (catDateEl) {
    const cats = currentProject.categories ? currentProject.categories.join(' · ') : (currentProject.category || 'Proyecto');
    catDateEl.textContent = cats + ' · ' + (currentProject.date || '2025');
  }

  // 2. Hero Widescreen 1920x1080 (con título en blanco superpuesto)
  const heroImgEl = document.getElementById('projectHeroImg');
  const heroKickerEl = document.getElementById('projectHeroKicker');
  const heroTitleEl = document.getElementById('projectTitle');
  const heroFrameEl = document.getElementById('projectHeroFrame');

  if (heroImgEl) {
    heroImgEl.src = currentProject.heroImage || currentProject.mainImage;
    heroImgEl.alt = currentProject.title;
  }
  if (heroKickerEl) {
    const cats = currentProject.categories ? currentProject.categories.join(' · ') : (currentProject.category || 'Obra');
    heroKickerEl.textContent = cats + ' · ' + (currentProject.date || '2025');
  }
  if (heroTitleEl) {
    heroTitleEl.textContent = currentProject.title;
  }
  if (heroFrameEl) {
    heroFrameEl.addEventListener('click', () => {
      if (currentProject.gallery && currentProject.gallery.length > 0) {
        openLightbox(0);
      }
    });
  }

  // 3. Texto curatorial del proyecto (si tiene)
  const curatorialSection = document.getElementById('projectCuratorialSection');
  const descEl = document.getElementById('projectDescription');
  if (currentProject.description && currentProject.description.trim()) {
    if (curatorialSection) curatorialSection.style.display = 'block';
    if (descEl) {
      descEl.innerHTML = currentProject.description.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    }
  } else {
    if (curatorialSection) curatorialSection.style.display = 'none';
  }

  // 4. Renderizado del Álbum Modular (Estructura EXACTA 1:1 original de Adobe Portfolio)
  const albumContainer = document.getElementById('projectAlbumContainer');
  if (albumContainer) {
    albumContainer.innerHTML = '';
    let globalGalleryIndex = 0;

    const modules = (currentProject.modules && currentProject.modules.length > 0) ? currentProject.modules : [];

    if (modules.length > 0) {
      let i = 0;
      while (i < modules.length) {
        const mod = modules[i];

        if (mod.type === 'text') {
          const subWrap = document.createElement('div');
          subWrap.className = 'project-module-subtitle';
          if (mod.text && mod.text.toLowerCase().includes('visualizer completo')) {
            subWrap.innerHTML = `<h3><a href="https://www.youtube.com/watch?v=4t4Bgquov6c" target="_blank" rel="noopener noreferrer" class="project-external-link">Link Visualizer completo ↗</a></h3>`;
          } else {
            subWrap.innerHTML = `<h3>${mod.text}</h3>`;
          }
          albumContainer.appendChild(subWrap);
          i++;
        } else if (mod.type === 'video') {
          const vidContainer = document.createElement('div');
          vidContainer.className = 'project-video-container';
          if (mod.widthPercent && mod.widthPercent < 100) {
            vidContainer.style.maxWidth = `${mod.widthPercent}%`;
            vidContainer.style.margin = '0 auto';
          }
          while (i < modules.length && modules[i].type === 'video') {
            vidContainer.appendChild(createVideoWrapper(modules[i].src, modules[i].isVertical));
            i++;
          }
          albumContainer.appendChild(vidContainer);
        } else if (mod.type === 'image') {
          const singleRow = document.createElement('div');
          singleRow.className = 'project-album-row cols-1';
          if (mod.widthPercent && mod.widthPercent < 100) {
            singleRow.style.maxWidth = `${mod.widthPercent}%`;
            singleRow.style.marginLeft = 'auto';
            singleRow.style.marginRight = 'auto';
          }
          const thisIdx = globalGalleryIndex++;
          const frame = document.createElement('div');
          frame.className = 'album-item-frame';
          frame.title = 'Hacer clic para ampliar en tamaño real';

          const img = document.createElement('img');
          img.src = mod.image.src;
          img.alt = `${currentProject.title} — Guido Castellotti`;
          img.className = 'album-item-img';
          img.loading = 'lazy';
          img.draggable = false;

          frame.appendChild(img);
          frame.addEventListener('click', () => openLightbox(thisIdx));
          singleRow.appendChild(frame);
          albumContainer.appendChild(singleRow);
          i++;
        } else if (mod.type === 'media_collection') {
          const row = document.createElement('div');
          const maxCols = Math.min(Math.max(mod.maxImages || 3, 1), 5);
          row.className = `project-album-row cols-${maxCols}`;
          if (mod.widthPercent && mod.widthPercent < 100) {
            row.style.maxWidth = `${mod.widthPercent}%`;
            row.style.marginLeft = 'auto';
            row.style.marginRight = 'auto';
          }

          mod.images.forEach(imgData => {
            const thisIdx = globalGalleryIndex++;
            const frame = document.createElement('div');
            frame.className = 'album-item-frame';
            frame.title = 'Hacer clic para ampliar en tamaño real';

            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = `${currentProject.title} — Guido Castellotti`;
            img.className = 'album-item-img';
            img.loading = 'lazy';
            img.draggable = false;

            frame.appendChild(img);
            frame.addEventListener('click', () => openLightbox(thisIdx));
            row.appendChild(frame);
          });

          albumContainer.appendChild(row);
          i++;
        } else if (mod.type === 'tree') {
          const treeContainer = document.createElement('div');
          treeContainer.className = 'project-tree-container';
          if (mod.children) {
            mod.children.forEach(child => {
              const childWrap = document.createElement('div');
              childWrap.className = 'project-tree-child';
              if (child.type === 'video') {
                childWrap.appendChild(createVideoWrapper(child.src, true));
              } else if (child.type === 'image') {
                const thisIdx = globalGalleryIndex++;
                const frame = document.createElement('div');
                frame.className = 'album-item-frame';
                const img = document.createElement('img');
                img.src = child.image.src;
                img.alt = `${currentProject.title} — Guido Castellotti`;
                img.className = 'album-item-img';
                img.loading = 'lazy';
                frame.appendChild(img);
                frame.addEventListener('click', () => openLightbox(thisIdx));
                childWrap.appendChild(frame);
              }
              treeContainer.appendChild(childWrap);
            });
          }
          albumContainer.appendChild(treeContainer);
          i++;
        } else {
          i++;
        }
      }
    } else if (currentProject.gallery && currentProject.gallery.length > 0) {
      const row = document.createElement('div');
      row.className = 'project-album-row cols-3';
      currentProject.gallery.forEach(item => {
        const thisIdx = globalGalleryIndex++;
        const frame = document.createElement('div');
        frame.className = 'album-item-frame';
        frame.title = 'Hacer clic para ampliar';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || currentProject.title;
        img.className = 'album-item-img';
        img.loading = 'lazy';

        frame.appendChild(img);
        frame.addEventListener('click', () => openLightbox(thisIdx));
        row.appendChild(frame);
      });
      albumContainer.appendChild(row);
    }
  }

  // 5. Inicializar Lightbox modal con la galería exacta completa
  if (currentProject.gallery && currentProject.gallery.length > 0) {
    initLightbox(currentProject.gallery);
  }

  // 6. Paginación anterior / siguiente
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

  // 7. Renderizar sección "Otros proyectos" con afinidad temática inteligente
  renderMoreProjects(currentProject);
}

/* =========================================================================
   Renderizado de la Sección "Otros Proyectos" (Recomendaciones Afines)
   ========================================================================= */
function renderMoreProjects(currentProject) {
  const container = document.getElementById('moreProjectsGrid');
  if (!container) return;
  container.innerHTML = '';

  const currentCat = (currentProject.categories && currentProject.categories.length > 0)
    ? currentProject.categories[0]
    : currentProject.category;

  const allInCat = PROJECTS_DATA.filter(p => {
    const pCat = (p.categories && p.categories.length > 0) ? p.categories[0] : p.category;
    return pCat === currentCat;
  });

  const currIdxInCat = allInCat.findIndex(p => p.slug === currentProject.slug);
  const selected = [];

  // Tomar los proyectos siguientes en la misma categoría (rotación fluida)
  for (let i = 1; i < allInCat.length && selected.length < 3; i++) {
    const idx = (currIdxInCat + i) % allInCat.length;
    selected.push(allInCat[idx]);
  }

  // Si la categoría tiene menos de 3 proyectos, completar con proyectos destacados de otras áreas
  if (selected.length < 3) {
    const others = PROJECTS_DATA.filter(p => p.slug !== currentProject.slug && !selected.some(s => s.slug === p.slug));
    let o = 0;
    while (selected.length < 3 && o < others.length) {
      selected.push(others[o++]);
    }
  }

  // Generar las tarjetas editoriales
  selected.forEach(proj => {
    const card = document.createElement('a');
    card.className = 'more-project-card';
    card.href = 'proyecto.html?id=' + proj.slug;

    const thumbBox = document.createElement('div');
    thumbBox.className = 'more-project-thumb-box';

    const img = document.createElement('img');
    img.src = proj.heroImage || proj.mainImage;
    img.alt = proj.title + ' — Guido Castellotti';
    img.className = 'more-project-thumb-img';
    img.loading = 'lazy';
    thumbBox.appendChild(img);

    const body = document.createElement('div');
    body.className = 'more-project-body';

    const meta = document.createElement('div');
    meta.className = 'more-project-meta';

    const catSpan = document.createElement('span');
    catSpan.className = 'more-project-category';
    catSpan.textContent = (proj.categories && proj.categories.length > 0) ? proj.categories.join(' · ') : (proj.category || 'Proyecto');

    const dateSpan = document.createElement('span');
    dateSpan.className = 'more-project-date';
    dateSpan.textContent = proj.date || '2025';

    meta.appendChild(catSpan);
    meta.appendChild(dateSpan);

    const titleEl = document.createElement('h3');
    titleEl.className = 'more-project-name';
    titleEl.textContent = proj.title;

    const cta = document.createElement('div');
    cta.className = 'more-project-cta';
    cta.innerHTML = '<span>Ver proyecto</span><span class="arrow">→</span>';

    body.appendChild(meta);
    body.appendChild(titleEl);
    body.appendChild(cta);

    card.appendChild(thumbBox);
    card.appendChild(body);

    container.appendChild(card);
  });
}


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
  if (!lightbox) return;
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
    imgEl.alt = item.alt || item.caption || item.title || 'Fotografía de archivo';
  }
  if (titleEl) {
    titleEl.textContent = item.caption || item.alt || item.title || '';
  }
  if (counterEl) {
    counterEl.textContent = (index + 1).toString().padStart(2, '0') + ' / ' + activeGallery.length.toString().padStart(2, '0');
  }
}
