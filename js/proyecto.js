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
        "text": "FOTOGRAFÍA EN EXTERIOR"
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
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES"
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
        "text": "BACKSTAGE CALIOPE FAMILY X KERCHAK"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "COBERTURA DE EVENTOS"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0023.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0024.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0025.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0026.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0001.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0002.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0003.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0004.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0005.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0006.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0007.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0008.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "alt": "CALIOPE FAMILY — Guido Castellotti",
        "caption": "CALIOPE FAMILY",
        "aspectRatio": 1.5
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
        "maxImages": 3,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0037.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0038.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "ANIMACIÓN DE LOGO"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/JRtQ9krSbZv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES"
      },
      {
        "type": "media_collection",
        "maxImages": 5,
        "widthPercent": 100,
        "images": [
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
          },
          {
            "src": "img/proyectos/guido_0046.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0047.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0048.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0049.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0050.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0051.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0052.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0053.jpg",
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
            "src": "img/proyectos/guido_0054.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0055.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0056.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0057.jpg",
            "width": 1078,
            "height": 1350,
            "aspectRatio": 0.7985
          },
          {
            "src": "img/proyectos/guido_0058.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0059.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0060.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0061.jpg",
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
            "src": "img/proyectos/guido_0062.jpg",
            "width": 3840,
            "height": 6826,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0063.jpg",
            "width": 3840,
            "height": 6826,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0064.jpg",
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
            "src": "img/proyectos/guido_0065.jpg",
            "width": 1920,
            "height": 3413,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0066.jpg",
            "width": 1920,
            "height": 3413,
            "aspectRatio": 0.5626
          },
          {
            "src": "img/proyectos/guido_0067.jpg",
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
            "src": "img/proyectos/guido_0068.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0069.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0070.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0071.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0072.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0073.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0027.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0028.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/F3BLd3gBYuY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "FOTOGRAFÍA EN ESTUDIO"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 71,
        "images": [
          {
            "src": "img/proyectos/guido_0023.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0024.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0025.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0026.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0074.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0075.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/LjpeqoHWFEy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0037.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0038.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0039.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0040.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0041.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0042.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0043.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0044.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0045.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0046.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0047.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0048.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0049.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0050.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0051.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0052.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0053.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0054.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0055.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0056.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0057.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.7985
      },
      {
        "src": "img/proyectos/guido_0058.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0059.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0060.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0061.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.7985
      },
      {
        "src": "img/proyectos/guido_0062.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0063.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0064.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0065.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0066.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0067.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5626
      },
      {
        "src": "img/proyectos/guido_0068.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0069.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0070.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0071.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0072.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0073.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "alt": "BASTILLA — Guido Castellotti",
        "caption": "BASTILLA",
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
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0087.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0096.jpg",
            "width": 1402,
            "height": 1122,
            "aspectRatio": 1.2496
          }
        ]
      },
      {
        "type": "text",
        "text": "DESARROLLO DE IDENTIDAD"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 98,
        "images": [
          {
            "src": "img/proyectos/guido_0098.jpg",
            "width": 1920,
            "height": 1250,
            "aspectRatio": 1.536
          },
          {
            "src": "img/proyectos/guido_0099.jpg",
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
            "src": "img/proyectos/guido_0100.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0101.jpg",
            "width": 1920,
            "height": 1357,
            "aspectRatio": 1.4149
          },
          {
            "src": "img/proyectos/guido_0102.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0103.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0104.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0105.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0106.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0107.jpg",
            "width": 3840,
            "height": 2160,
            "aspectRatio": 1.7778
          },
          {
            "src": "img/proyectos/guido_0108.jpg",
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
            "src": "img/proyectos/guido_0109.jpg",
            "width": 517,
            "height": 773,
            "aspectRatio": 0.6688
          },
          {
            "src": "img/proyectos/guido_0110.jpg",
            "width": 644,
            "height": 690,
            "aspectRatio": 0.9333
          },
          {
            "src": "img/proyectos/guido_0111.jpg",
            "width": 636,
            "height": 691,
            "aspectRatio": 0.9204
          },
          {
            "src": "img/proyectos/guido_0112.jpg",
            "width": 1521,
            "height": 922,
            "aspectRatio": 1.6497
          },
          {
            "src": "img/proyectos/guido_0126.jpg",
            "width": 1101,
            "height": 1214,
            "aspectRatio": 0.9069
          }
        ]
      },
      {
        "type": "text",
        "text": "ARTE DE TAPA"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0128.jpg",
            "width": 3840,
            "height": 3840,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0129.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0131.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0023.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA SHOWS"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/CNkUdowkUKH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0024.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0025.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0026.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0074.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0075.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0021.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0022.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0134.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0134.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0135.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "FLYERS"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0136.jpg",
            "width": 1753,
            "height": 2480,
            "aspectRatio": 0.7069
          },
          {
            "src": "img/proyectos/guido_0137.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          },
          {
            "src": "img/proyectos/guido_0138.jpg",
            "width": 1080,
            "height": 1350,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0139.jpg",
            "width": 1920,
            "height": 2399,
            "aspectRatio": 0.8003
          }
        ]
      },
      {
        "type": "text",
        "text": "VISUALIZERS SORTIJA"
      },
      {
        "type": "text",
        "text": "DISEÑO DE REMERAS"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0021.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0022.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0023.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0027.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0028.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0074.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0087.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0096.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.2496
      },
      {
        "src": "img/proyectos/guido_0098.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.536
      },
      {
        "src": "img/proyectos/guido_0099.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.4918
      },
      {
        "src": "img/proyectos/guido_0100.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0101.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.4149
      },
      {
        "src": "img/proyectos/guido_0102.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0103.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0104.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0105.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0106.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0107.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.7778
      },
      {
        "src": "img/proyectos/guido_0108.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.9152
      },
      {
        "src": "img/proyectos/guido_0109.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6688
      },
      {
        "src": "img/proyectos/guido_0110.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.9333
      },
      {
        "src": "img/proyectos/guido_0111.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.9204
      },
      {
        "src": "img/proyectos/guido_0112.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.6497
      },
      {
        "src": "img/proyectos/guido_0126.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.9069
      },
      {
        "src": "img/proyectos/guido_0128.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0129.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0131.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0024.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0025.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0026.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0075.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0134.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0134.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0135.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0136.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.7069
      },
      {
        "src": "img/proyectos/guido_0137.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0138.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0139.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.8003
      },
      {
        "src": "img/proyectos/guido_0021.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0022.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0023.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0027.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0028.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0074.jpg",
        "alt": "SUAVE LOMITO — Guido Castellotti",
        "caption": "SUAVE LOMITO",
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
        "text": "FOTOGRAFÍA EN EXTERIOR"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0169.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0170.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0171.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0172.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "DISEÑO DE PIEZAS PARA REDES SOCIALES"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0173.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0174.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0175.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          },
          {
            "src": "img/proyectos/guido_0176.jpg",
            "width": 1920,
            "height": 1920,
            "aspectRatio": 1
          }
        ]
      },
      {
        "type": "text",
        "text": "BACKSTAGE CALIOPE FAMILY X KERCHAK"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "COBERTURA DE EVENTOS"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0183.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0184.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0184.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0185.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0169.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0176.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0184.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0184.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0185.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1.5
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
        "text": "ROSARIO 2018 - GLADYSON PANTHER"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/NUTmDvpDqdo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
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
        "text": "VIDEO"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/TGdSI_dCRcE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
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
        "text": "SF 2235"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0220.jpg",
            "width": 1558,
            "height": 2769,
            "aspectRatio": 0.5627
          },
          {
            "src": "img/proyectos/guido_0221.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0222.jpg",
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
            "src": "img/proyectos/guido_0223.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0224.jpg",
            "width": 1920,
            "height": 3418,
            "aspectRatio": 0.5617
          },
          {
            "src": "img/proyectos/guido_0225.jpg",
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
            "src": "img/proyectos/guido_0226.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0227.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0228.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0229.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0230.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0231.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0232.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0233.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0234.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/LyeMgIyDjDg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "INFORMES AVANCE DE OBRA"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0235.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0236.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0237.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          }
        ]
      },
      {
        "type": "text",
        "text": "RZ 1428"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0238.jpg",
            "width": 1640,
            "height": 2460,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0239.jpg",
            "width": 1640,
            "height": 2460,
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
            "src": "img/proyectos/guido_0240.jpg",
            "width": 1640,
            "height": 2494,
            "aspectRatio": 0.6576
          },
          {
            "src": "img/proyectos/guido_0241.jpg",
            "width": 1640,
            "height": 2460,
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
            "src": "img/proyectos/guido_0242.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0178.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "EVENTO INAUGURACIÓN"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0179.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0180.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0181.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0172.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/9An6wjeopn4/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/GJ_93ZhWG7e/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "INFORMES AVANCE DE OBRA"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0173.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0160.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          },
          {
            "src": "img/proyectos/guido_0167.jpg",
            "width": 1920,
            "height": 1390,
            "aspectRatio": 1.3813
          }
        ]
      },
      {
        "type": "text",
        "text": "TRAMA COLÓN"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/MWv4H3MM6vB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "text",
        "text": "EDIFICIO CAFFE"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/Bu6DSQnwWBE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0220.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.5627
      },
      {
        "src": "img/proyectos/guido_0221.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0222.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0223.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0224.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.5617
      },
      {
        "src": "img/proyectos/guido_0225.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0226.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0227.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0228.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0229.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0230.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0231.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0232.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0233.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0234.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0235.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0236.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0237.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0238.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0239.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0240.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6576
      },
      {
        "src": "img/proyectos/guido_0241.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0242.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
        "aspectRatio": 1.3813
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "alt": "CMS ARQUITECTAS — Guido Castellotti",
        "caption": "CMS ARQUITECTAS",
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
        "text": "FOTOGRAFÍA E-COMMERCE"
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0176.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0177.jpg",
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
            "src": "img/proyectos/guido_0160.jpg",
            "width": 1920,
            "height": 2879,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0167.jpg",
            "width": 1920,
            "height": 2879,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0178.jpg",
            "width": 1920,
            "height": 2559,
            "aspectRatio": 0.7503
          },
          {
            "src": "img/proyectos/guido_0179.jpg",
            "width": 1920,
            "height": 2559,
            "aspectRatio": 0.7503
          },
          {
            "src": "img/proyectos/guido_0165.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0166.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0182.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0183.jpg",
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
            "src": "img/proyectos/guido_0215.jpg",
            "width": 1758,
            "height": 2461,
            "aspectRatio": 0.7143
          },
          {
            "src": "img/proyectos/guido_0216.jpg",
            "width": 1758,
            "height": 2461,
            "aspectRatio": 0.7143
          },
          {
            "src": "img/proyectos/guido_0170.jpg",
            "width": 1920,
            "height": 2400,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0171.jpg",
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
            "src": "img/proyectos/guido_0174.jpg",
            "width": 3840,
            "height": 2560,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0175.jpg",
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
            "src": "img/proyectos/guido_0172.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0173.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0254.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0254.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "CONTENIDO AUDIOVISUAL PARA REDES"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0255.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0256.jpg",
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
            "src": "img/proyectos/guido_0257.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0258.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0176.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.7503
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.7503
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.7143
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.7143
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0172.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0173.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0254.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0254.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0255.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0256.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0257.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0258.jpg",
        "alt": "DEGË MUEBLES — Guido Castellotti",
        "caption": "DEGË MUEBLES",
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
        "text": "COBERTURA FOTOGRÁFICA"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0173.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0261.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0262.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0262.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0263.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0264.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA AUDIOVISUAL"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/RY-QzeQ44gD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0173.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0261.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0262.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0262.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0263.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0264.jpg",
        "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
        "caption": "KARMA NEGRO PELÍCULA",
        "aspectRatio": 1.5
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
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0272.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0272.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0273.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0274.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0275.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0276.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0272.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0272.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0273.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0274.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0275.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0276.jpg",
        "alt": "AU EXCLUSIVE — Guido Castellotti",
        "caption": "AU EXCLUSIVE",
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
            "src": "img/proyectos/guido_0180.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0181.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0160.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0167.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0178.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0179.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0174.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0175.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0215.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0216.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0180.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0178.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0179.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "alt": "MIRENKA — Guido Castellotti",
        "caption": "MIRENKA",
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
        "text": "FOTOGRAFÍA"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0217.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0218.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0180.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0181.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0215.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0216.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "VIDEO"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/5E_JJkFG2pW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0217.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0218.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "alt": "ANTIPOP — Guido Castellotti",
        "caption": "ANTIPOP",
        "aspectRatio": 0.6667
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
        "text": "CONTENIDO HORIZONTAL PARA VENTA"
      },
      {
        "type": "text",
        "text": "CÁPSULAS PARA REDES SOCIALES"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/BybEdPwNZKY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/PT56ACs7iPj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/NGSgHb_oHpr/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
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
        "text": "FOTOGRAFÍA EN ESTUDIO"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0411.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0412.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0413.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0414.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0415.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0416.jpg",
            "width": 3840,
            "height": 5760,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "text",
        "text": "COBERTURA PARTIDOS"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0174.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0175.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0170.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0171.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          }
        ]
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/CDGGU8bNCqj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/Uc-fjoTtSAE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0411.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0412.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0413.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0414.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0415.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0416.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "alt": "SONDER — Guido Castellotti",
        "caption": "SONDER",
        "aspectRatio": 0.6667
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
        "text": "FOTOGRAFÍA"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0176.jpg",
            "width": 1920,
            "height": 1289,
            "aspectRatio": 1.4895
          },
          {
            "src": "img/proyectos/guido_0177.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0215.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0216.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0180.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0181.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0165.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0166.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0168.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0169.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0174.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0175.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0160.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0167.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0182.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0183.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0170.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0171.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0431.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0431.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "VIDEO"
      },
      {
        "type": "video",
        "src": "https://www-ccv.adobe.io/v1/player/ccv/5fL7w7D3cpP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0176.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.4895
      },
      {
        "src": "img/proyectos/guido_0177.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0215.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0216.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0180.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0181.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0165.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0166.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0168.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0169.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0174.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0175.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0160.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0167.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0182.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0183.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0170.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0171.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0431.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0431.jpg",
        "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
        "caption": "URUGUAY┃PANES Y PECES RESTAURANTE",
        "aspectRatio": 1.5
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
        "text": "Réplica Colectiva Gráfica"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0472.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0473.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0474.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0475.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0476.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0477.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0478.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0479.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0480.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0481.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0482.jpg",
            "width": 1920,
            "height": 2880,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0483.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "text",
        "text": "Optativa Entretejiendo lo tangible y lo intangible"
      },
      {
        "type": "media_collection",
        "maxImages": 2,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0486.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0487.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0488.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0489.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0490.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0492.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0493.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0494.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0473.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0474.jpg",
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
            "src": "img/proyectos/guido_0467.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0468.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0497.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0498.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0499.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0500.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0502.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0503.jpg",
            "width": 1200,
            "height": 1800,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0503.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0504.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0505.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          },
          {
            "src": "img/proyectos/guido_0506.jpg",
            "width": 1800,
            "height": 1200,
            "aspectRatio": 1.5
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0472.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0477.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0478.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0479.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0480.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0481.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0482.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0483.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0486.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0487.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0488.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0489.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0490.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0492.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0493.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0494.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0467.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0468.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0497.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0498.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0499.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0500.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0502.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0503.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0503.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0504.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0505.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0506.jpg",
        "alt": "FAPYD (UNR) — Guido Castellotti",
        "caption": "FAPYD (UNR)",
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
            "src": "img/proyectos/guido_0518.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0519.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0520.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0521.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0522.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0523.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0524.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0525.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0525.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0526.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0527.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0528.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0529.jpg",
            "width": 867,
            "height": 1300,
            "aspectRatio": 0.6669
          },
          {
            "src": "img/proyectos/guido_0530.jpg",
            "width": 1300,
            "height": 867,
            "aspectRatio": 1.4994
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0518.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0519.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0520.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0521.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0522.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0523.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0524.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0525.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0525.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0526.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0527.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0528.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0529.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
        "aspectRatio": 0.6669
      },
      {
        "src": "img/proyectos/guido_0530.jpg",
        "alt": "LILA GRACE — Guido Castellotti",
        "caption": "LILA GRACE",
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
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0469.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0474.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0475.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0476.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0540.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0541.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0541.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0544.jpg",
            "width": 3840,
            "height": 1823,
            "aspectRatio": 2.1064
          },
          {
            "src": "img/proyectos/guido_0545.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0546.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0472.jpg",
            "width": 3840,
            "height": 1825,
            "aspectRatio": 2.1041
          },
          {
            "src": "img/proyectos/guido_0469.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0470.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0473.jpg",
            "width": 3840,
            "height": 1826,
            "aspectRatio": 2.103
          },
          {
            "src": "img/proyectos/guido_0474.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0495.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0557.jpg",
            "width": 3840,
            "height": 1825,
            "aspectRatio": 2.1041
          },
          {
            "src": "img/proyectos/guido_0558.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0559.jpg",
            "width": 1754,
            "height": 1240,
            "aspectRatio": 1.4145
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 1,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0561.jpg",
            "width": 3840,
            "height": 1826,
            "aspectRatio": 2.103
          },
          {
            "src": "img/proyectos/guido_0562.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          }
        ]
      },
      {
        "type": "text",
        "text": "Link Visualizer completo"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0469.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0475.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0476.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0540.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0541.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0541.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0544.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.1064
      },
      {
        "src": "img/proyectos/guido_0545.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0546.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0472.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.1041
      },
      {
        "src": "img/proyectos/guido_0469.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0470.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0473.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.103
      },
      {
        "src": "img/proyectos/guido_0474.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0495.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0557.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.1041
      },
      {
        "src": "img/proyectos/guido_0558.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0559.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 1.4145
      },
      {
        "src": "img/proyectos/guido_0561.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
        "aspectRatio": 2.103
      },
      {
        "src": "img/proyectos/guido_0562.jpg",
        "alt": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "NASIR CATRIEL Y FASCIOLO BALLET PARA LAS MASAS",
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
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0578.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0579.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0583.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0584.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0578.jpg",
        "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "ROSARIO ES UN ECLIPSE",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0579.jpg",
        "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "ROSARIO ES UN ECLIPSE",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0583.jpg",
        "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "ROSARIO ES UN ECLIPSE",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0584.jpg",
        "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "ROSARIO ES UN ECLIPSE",
        "aspectRatio": 1.3333
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
    "modules": [],
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
            "src": "img/proyectos/guido_0616.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0617.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0618.jpg",
            "width": 3840,
            "height": 2880,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0619.jpg",
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
            "src": "img/proyectos/guido_0620.jpg",
            "width": 1920,
            "height": 2715,
            "aspectRatio": 0.7072
          },
          {
            "src": "img/proyectos/guido_0621.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0622.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0623.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0624.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0625.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0626.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          },
          {
            "src": "img/proyectos/guido_0627.jpg",
            "width": 1240,
            "height": 1754,
            "aspectRatio": 0.707
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0616.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0617.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0618.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0619.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0620.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.7072
      },
      {
        "src": "img/proyectos/guido_0621.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0622.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0623.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0624.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0625.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0626.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
        "aspectRatio": 0.707
      },
      {
        "src": "img/proyectos/guido_0627.jpg",
        "alt": "GYOR — Guido Castellotti",
        "caption": "GYOR",
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
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0628.jpg",
            "width": 1920,
            "height": 1440,
            "aspectRatio": 1.3333
          },
          {
            "src": "img/proyectos/guido_0629.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0628.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
        "aspectRatio": 1.3333
      },
      {
        "src": "img/proyectos/guido_0629.jpg",
        "alt": "KERCHAK — Guido Castellotti",
        "caption": "KERCHAK",
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
        "text": "FLYERS"
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 100,
        "images": [
          {
            "src": "img/proyectos/guido_0630.jpg",
            "width": 1920,
            "height": 1280,
            "aspectRatio": 1.5
          }
        ]
      },
      {
        "type": "media_collection",
        "maxImages": 3,
        "widthPercent": 80,
        "images": [
          {
            "src": "img/proyectos/guido_0631.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0632.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          },
          {
            "src": "img/proyectos/guido_0633.jpg",
            "width": 1080,
            "height": 1920,
            "aspectRatio": 0.5625
          }
        ]
      },
      {
        "type": "text",
        "text": "ANIMACIÓN DE LOGOS"
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0630.jpg",
        "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
        "caption": "FESTIVAL NO PARO NI A PALO'",
        "aspectRatio": 1.5
      },
      {
        "src": "img/proyectos/guido_0631.jpg",
        "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
        "caption": "FESTIVAL NO PARO NI A PALO'",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0632.jpg",
        "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
        "caption": "FESTIVAL NO PARO NI A PALO'",
        "aspectRatio": 0.5625
      },
      {
        "src": "img/proyectos/guido_0633.jpg",
        "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
        "caption": "FESTIVAL NO PARO NI A PALO'",
        "aspectRatio": 0.5625
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
            "src": "img/proyectos/guido_0593.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0594.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0595.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0596.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0597.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0598.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0599.jpg",
            "width": 1500,
            "height": 2249,
            "aspectRatio": 0.667
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0593.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0594.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0595.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0596.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0597.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0598.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0599.jpg",
        "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
        "caption": "FOTOGRAFÍA IMPRESA",
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
            "src": "img/proyectos/guido_0600.jpg",
            "width": 1500,
            "height": 2250,
            "aspectRatio": 0.6667
          },
          {
            "src": "img/proyectos/guido_0601.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0602.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          },
          {
            "src": "img/proyectos/guido_0603.jpg",
            "width": 1500,
            "height": 1989,
            "aspectRatio": 0.7541
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0600.jpg",
        "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "PRINT ROSARIO ES UN ECLIPSE",
        "aspectRatio": 0.6667
      },
      {
        "src": "img/proyectos/guido_0601.jpg",
        "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "PRINT ROSARIO ES UN ECLIPSE",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0602.jpg",
        "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "PRINT ROSARIO ES UN ECLIPSE",
        "aspectRatio": 0.7541
      },
      {
        "src": "img/proyectos/guido_0603.jpg",
        "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
        "caption": "PRINT ROSARIO ES UN ECLIPSE",
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
            "src": "img/proyectos/guido_0604.jpg",
            "width": 1920,
            "height": 1376,
            "aspectRatio": 1.3953
          },
          {
            "src": "img/proyectos/guido_0605.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0606.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0607.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0608.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0609.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          },
          {
            "src": "img/proyectos/guido_0610.jpg",
            "width": 1920,
            "height": 1427,
            "aspectRatio": 1.3455
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0604.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3953
      },
      {
        "src": "img/proyectos/guido_0605.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0606.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0607.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0608.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0609.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
      },
      {
        "src": "img/proyectos/guido_0610.jpg",
        "alt": "ZINE INFIERNOS — Guido Castellotti",
        "caption": "ZINE INFIERNOS",
        "aspectRatio": 1.3455
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
            "src": "img/proyectos/guido_0611.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0612.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0613.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0614.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          },
          {
            "src": "img/proyectos/guido_0615.jpg",
            "width": 1500,
            "height": 1875,
            "aspectRatio": 0.8
          }
        ]
      }
    ],
    "gallery": [
      {
        "src": "img/proyectos/guido_0611.jpg",
        "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "ZINE BALLET PARA LAS MASAS",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0612.jpg",
        "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "ZINE BALLET PARA LAS MASAS",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0613.jpg",
        "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "ZINE BALLET PARA LAS MASAS",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0614.jpg",
        "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "ZINE BALLET PARA LAS MASAS",
        "aspectRatio": 0.8
      },
      {
        "src": "img/proyectos/guido_0615.jpg",
        "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
        "caption": "ZINE BALLET PARA LAS MASAS",
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

function createVideoWrapper(vUrl) {
  const wrap = document.createElement('div');
  wrap.className = 'project-video-wrapper';

  const match = vUrl.match(/\/ccv\/([^/?#]+)/);
  let isVertical = false;
  let aspectStyle = '16 / 9';

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

  // 4. Renderizado del Álbum Modular (Estructura original de Adobe Portfolio)
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
          subWrap.innerHTML = `<h3>${mod.text}</h3>`;
          albumContainer.appendChild(subWrap);
          i++;
        } else if (mod.type === 'video') {
          // Si hay videos consecutivos, agruparlos en un project-video-container flexible
          const vidContainer = document.createElement('div');
          vidContainer.className = 'project-video-container';
          while (i < modules.length && modules[i].type === 'video') {
            vidContainer.appendChild(createVideoWrapper(modules[i].src));
            i++;
          }
          albumContainer.appendChild(vidContainer);
        } else if (mod.type === 'media_collection') {
          const row = document.createElement('div');
          const maxCols = Math.min(Math.max(mod.maxImages || 3, 1), 5);
          row.className = `project-album-row cols-${maxCols}`;
          if (mod.widthPercent && mod.widthPercent < 100) {
            row.style.maxWidth = `${mod.widthPercent}%`;
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
            frame.addEventListener('click', () => {
              openLightbox(thisIdx);
            });

            row.appendChild(frame);
          });

          albumContainer.appendChild(row);
          i++;
        } else {
          i++;
        }
      }
    } else if (currentProject.gallery && currentProject.gallery.length > 0) {
      // Fallback para proyectos con galería plana sin módulos
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

  // 5. Inicializar Lightbox modal
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
}

/* =========================================================================
   Controlador del Visualizador Lightbox Modal a Pantalla Completa
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
