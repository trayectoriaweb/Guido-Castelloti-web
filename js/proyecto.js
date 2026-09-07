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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/38bd894d-86cc-4628-97f1-522281cf4632_rw_1920.jpg?h=84fad8c2d1a998dc967d8293b93f459b",
    "alt": "CALIOPE FAMILY — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/38bd894d-86cc-4628-97f1-522281cf4632_rw_1920.jpg?h=84fad8c2d1a998dc967d8293b93f459b",
        "title": "CALIOPE FAMILY — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/454c3bd3-f7cc-4780-8e39-65e2b80938bf_rw_1920.jpg?h=314e33ecd9be8b9c5b7d6e059a475eb6",
        "title": "CALIOPE FAMILY — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4eab71b8-35c8-497f-93dc-91c746e52fc4_rw_1920.jpg?h=48eb6784a5910c90723d944abf13609e",
        "title": "CALIOPE FAMILY — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bcf6ad6d-eb32-40b5-bbbc-efaf225c7b38_rw_1920.jpg?h=53f57680fb66da3825e8957fa3a22e1d",
        "title": "CALIOPE FAMILY — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1063e82d-7c6f-466c-887c-e54bf8f80ea5_rw_1920.jpg?h=c1509464670f744779e215475ed79727",
        "title": "CALIOPE FAMILY — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/96f382c8-80ef-446b-83b3-4d7181794432_rw_1920.jpg?h=399c0735a28933d610f2b7cec87f18c9",
        "title": "CALIOPE FAMILY — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8af1848c-7d70-41d0-addb-1b1144948183_rw_1920.jpg?h=df12e95e45b2e6976b43e5e3c6f63f08",
        "title": "CALIOPE FAMILY — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b7c1bc29-89a4-449c-92a1-f4c0f632e773_rw_1920.jpg?h=49448192a2657b1f342779af216a2707",
        "title": "CALIOPE FAMILY — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/97d890db-5b03-4707-a3e7-bfbf3b65b035_rw_600.gif?h=484097e20b484e656997ec0017a65743",
        "title": "CALIOPE FAMILY — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7c833f13-775a-450b-98cc-00f4a2974860_rw_600.gif?h=c50289f00d2d7b3ab3a821943a064cfd",
        "title": "CALIOPE FAMILY — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e813a053-5f19-4345-920b-4424de439e51_rw_600.gif?h=4408e52447968da6e318fb3c0efd4550",
        "title": "CALIOPE FAMILY — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a4ea4e36-3dbc-4e8a-9708-6ae2f116d5b9_rw_600.gif?h=edc79b9b200195fbdae18a23adb45fa4",
        "title": "CALIOPE FAMILY — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/472033da-ddbc-4b6c-b717-df21442354e5_rw_600.gif?h=7b48202f62f96a4626a40c71483af53d",
        "title": "CALIOPE FAMILY — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/10ad2192-723b-4d29-a2ba-774e5051117f_rw_600.gif?h=f7fe2ea909345a1ff5f405d0a3320eb6",
        "title": "CALIOPE FAMILY — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2094fb1b-8408-4129-9a04-d3447eb5504e_rw_1920.jpg?h=8d448ab7c8a6a5cae3a8c158f5cc4b53",
        "title": "CALIOPE FAMILY — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/abfe6063-dd3b-4a72-9588-a299449177ba_rw_3840.jpg?h=a32c3743b91f4bc44a37573bed5adf8b",
        "title": "CALIOPE FAMILY — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e787315f-a98f-4995-872e-669c0e12c582_rw_3840.jpg?h=a0ba05adcc0b9f2f14e0c4dd65c3f1fa",
        "title": "CALIOPE FAMILY — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/94c946d0-a9ce-44c5-b16a-dffb95cd9ad1_rw_3840.jpg?h=12c21c11a02b5dbe8ab99dee973dca51",
        "title": "CALIOPE FAMILY — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1ec30e43-bfbb-4fa0-9096-a97a705bc6c7_rw_600.gif?h=103fa7d58db9787d37b272d03bfbe3b0",
        "title": "CALIOPE FAMILY — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8fb92582-0a5e-4465-b9f9-f69199408274_rw_600.gif?h=d014be13d246e3e2fa168fc08b8b8b28",
        "title": "CALIOPE FAMILY — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c818f50e-bc19-4154-a0bf-6307174fe264_rwc_0x117x1080x844x1080.jpg?h=8781c531a36f91133c47605fc49b36ac",
        "title": "CALIOPE FAMILY — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f84b7e55-a0ce-44c7-8d2b-3d8afe65be0f_rwc_0x34x1080x844x1080.jpg?h=4407103a7905f6df08a852e128e7c143",
        "title": "CALIOPE FAMILY — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/06914817-9ea3-4a44-ad8d-1a4c64246d2b_rwc_270x0x1381x1080x1381.jpg?h=17027a8ce20b66839c3fb39289f1cb87",
        "title": "CALIOPE FAMILY — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f739348f-dca5-47a9-a9b1-d14a017de4b1_rwc_270x0x1381x1080x1381.jpg?h=a7b8193479a7daa7d54312454285158d",
        "title": "CALIOPE FAMILY — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1097d12a-2a5e-4657-ba87-3cbf80fc9b45_rwc_0x1241x3455x2701x3455.jpg?h=81da7dca9ffa5577ea2864363650c9e9",
        "title": "CALIOPE FAMILY — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64efb6df-fd09-445b-99ca-1028c471f5f5_rwc_0x235x2160x1688x2160.jpg?h=87c780919b11f8d71c5e6a512fbf039d",
        "title": "CALIOPE FAMILY — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ad70fb8-b9e1-46bc-906c-2522e2b76b4e_rwc_562x0x2877x2250x2877.jpg?h=2e5f28cef1b6a4a75360f171a33492eb",
        "title": "CALIOPE FAMILY — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f6bbcb6d-5d04-469f-94e3-31db03252ee9_rwc_981x0x2877x2250x2877.jpg?h=c9b0477727ba987f50e82f576a2dfe54",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d98427f1-f044-4da9-bf17-4d58ac1ebc69_rw_3840.jpg?h=ea17f35a390ecd5ec6f7d6c89c0dc500",
    "alt": "BASTILLA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/JRtQ9krSbZv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/F3BLd3gBYuY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/LjpeqoHWFEy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d98427f1-f044-4da9-bf17-4d58ac1ebc69_rw_3840.jpg?h=ea17f35a390ecd5ec6f7d6c89c0dc500",
        "title": "BASTILLA — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbd49a89-870e-4981-98ab-c53c688ba830_rw_1920.jpg?h=3672f78ba7b1be5a78f76813a413ac5e",
        "title": "BASTILLA — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/51677643-34ec-4fd1-8ef4-5d2b1be36ee9_rw_1920.jpg?h=2fdedba2dc85c5742de273433e1e2070",
        "title": "BASTILLA — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9cafe298-8d91-4d6a-be1c-1fb85b9c8853_rw_1920.jpg?h=f1f412b6620682e38ef77f7f5f6b19f5",
        "title": "BASTILLA — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b71fee84-c2c6-43c9-aa4e-7f578abb11a5_rw_1920.jpg?h=9c4ab7299d1c2256d5e3a23caf9410d8",
        "title": "BASTILLA — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d962a099-c9ee-4bde-b2f3-7f2de98d243e_rw_1920.jpg?h=aeef1e13221b7d2916df1e99c96949d7",
        "title": "BASTILLA — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a5363d9-17ca-4c0a-ae1a-ce93cb44b8a5_rw_1920.jpg?h=d2399540f1d82244c4a87cfc5901437b",
        "title": "BASTILLA — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f64ac0b4-7871-4b8c-9511-a0f55eb10575_rw_1920.jpg?h=fbc32bd0d95ba474b42d666d61ca1b04",
        "title": "BASTILLA — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/df8fc78c-f555-47cb-972f-13551bbeb469_rw_1920.jpg?h=60f1de8221ab769b8301000a70532f92",
        "title": "BASTILLA — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7744de12-1b08-4a57-a7f4-07b6befd3b8c_rw_1920.jpg?h=116106e42522c16291176f76e44c0e90",
        "title": "BASTILLA — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/069311ff-b926-4069-a87d-2c6a81ccca5d_rw_1920.jpg?h=410963e4874f3bda9169179b0e6e4124",
        "title": "BASTILLA — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/08065d0b-78d2-40c1-ab63-848cebcce4af_rw_1920.jpg?h=3ee615944f2b7b0ed72a5b4c95439483",
        "title": "BASTILLA — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a68eef84-8e87-4b45-8c36-1ed16e292444_rw_1920.jpg?h=0f4301da9d76b15fe2743e7f16c3ae07",
        "title": "BASTILLA — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/85755d84-de1b-42a9-80c3-cf563c97dc0a_rw_1920.jpg?h=59263db11d031184a9d9373b4d0e187e",
        "title": "BASTILLA — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/61946136-162e-4629-bdc9-54fe1a036f59_rw_1920.jpg?h=e093476f23e3ca30d180329d06dac87e",
        "title": "BASTILLA — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9216615d-5dae-4a72-9eb5-bedd1e624f8e_rw_1920.jpg?h=fcf72ac892fc9de5acd7e740bda45314",
        "title": "BASTILLA — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9ca367c0-fb78-45cd-8633-f20fe8c451b9_rw_1920.jpg?h=709a55fffc726c69a4e2023ee556793c",
        "title": "BASTILLA — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c204a1e8-00ec-4609-b521-b1559cd9b64f_rw_1200.jpg?h=13944e163dc330453e8aca93e7a641d2",
        "title": "BASTILLA — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6a277724-2872-4363-a89d-256049a4b375_rw_1200.jpg?h=be4097ceb9f5c084d871c6d15fe4428f",
        "title": "BASTILLA — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/699c8e73-a26a-462a-ae57-a59114507cee_rw_1200.jpg?h=c2143a864d1710f0f427aa1db352c3ca",
        "title": "BASTILLA — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e1c5c2f0-5a53-492a-a4e1-f98df1350367_rw_1200.jpg?h=912e1ff2c2c393610436062b13c5cc2b",
        "title": "BASTILLA — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/269f3b1f-63d7-491a-8af8-4acde8e76ec2_rw_1200.jpg?h=bd4d551705006d9de711b4025cbe8ee4",
        "title": "BASTILLA — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4dc39e0b-4503-4b78-acd2-be0dfce514c3_rw_1200.jpg?h=92b2af26b9c6209f7ab798a68adf4ea4",
        "title": "BASTILLA — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d992c0ef-b317-4e00-a647-834fe4c69e06_rw_1200.jpg?h=514b2c831181b70e171e5c9a09a49938",
        "title": "BASTILLA — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fe1a9654-37e6-4c12-932e-704c1d25f827_rw_1200.jpg?h=ee3e07892bc5bea31d18afbc6b361613",
        "title": "BASTILLA — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d6bb1c29-8a00-4551-88af-723ae8a19c59_rw_3840.jpg?h=c6a2cde055cdb7cfcaacafc772bbab31",
        "title": "BASTILLA — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/33cff0aa-2690-4c33-876b-5ba36162957d_rw_3840.jpg?h=3f78e1d0430487177e92fd2d084024b7",
        "title": "BASTILLA — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e8604fa7-0d47-4884-b43c-fcba8656ed5b_rw_3840.jpg?h=f5da99e6b50db5a07951db87f8d9e787",
        "title": "BASTILLA — 28",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8fea0b91-eece-40ff-80ae-880be3beff53_rw_1920.jpg?h=97f5ebac4a3056971d14035d2e1ecd37",
        "title": "BASTILLA — 29",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bdfe11ed-2449-4782-829e-f3294b58861a_rw_1920.jpg?h=8bebf9bc6d4b0685951908ddd165c9ca",
        "title": "BASTILLA — 30",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/63b598a8-8a53-494e-9de5-a4144ba68d49_rw_1920.jpg?h=448848613378860a30927d094cb37963",
        "title": "BASTILLA — 31",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/20a90f98-d583-411b-baff-f664dd5168de_rw_1200.jpg?h=9ee5379e49d75695b000f9a2d611ab74",
        "title": "BASTILLA — 32",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bb784460-8632-4c0e-9a7c-97e5e7dc9be3_rw_1200.jpg?h=cc390164800505511f56c4f665f5e4e1",
        "title": "BASTILLA — 33",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b261e1d5-44c5-432e-996a-86452d46a2b1_rw_1200.jpg?h=468599f5066ef866052da53e376251de",
        "title": "BASTILLA — 34",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bd917f26-2b19-429f-ba3f-29ecb0a87211_rw_1200.jpg?h=80abe7f313d0b207b061a4e63f30e765",
        "title": "BASTILLA — 35",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ae872bfc-2321-4e80-9a46-42512e19b925_rw_1200.jpg?h=020998d87544e388bfe401052c9ad8e9",
        "title": "BASTILLA — 36",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/898abe29-e616-43df-bb42-45f6e1e59ba6_rw_1200.jpg?h=d2f59c90bbfb6fb0d346e2698226995b",
        "title": "BASTILLA — 37",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c82da9e8-4de9-412d-abeb-120bd01b5c7b_rw_3840.jpg?h=09099d4935b05b0069acbc900aa8ab31",
        "title": "BASTILLA — 38",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9efe54a6-8f70-411b-93da-3ec1ac770606_rw_3840.jpg?h=b032ab6892c6a071908e0432a1ad261b",
        "title": "BASTILLA — 39",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/15716389-37a3-4c90-86c0-98696a216427_rw_1920.jpg?h=be1ea264dd0f624686149abcc87738e2",
        "title": "BASTILLA — 40",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/776b5e62-ae3a-4a14-b052-40f6cb4a3a7c_rw_1920.jpg?h=d1bf18ae5e94cb130566abb4de67a0d8",
        "title": "BASTILLA — 41",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6fac171f-ab03-4306-94ee-b551a2a07cd7_rw_1920.jpg?h=f8ba80783e45f611e9348d623deaadd6",
        "title": "BASTILLA — 42",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f1796081-362f-4945-9c3d-d3f89c56a6bc_rw_1920.jpg?h=d7bc0ca5305a16468b0e30939d153698",
        "title": "BASTILLA — 43",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3cbbd3b4-3bf1-418c-ab3d-71542366b0fb_rw_1920.jpg?h=c83dfa8c5477532ad006c92aa7055960",
        "title": "BASTILLA — 44",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/be9fa2a6-5d8b-428f-b59e-90a162ff771d_rw_1920.jpg?h=4e232aa89d5f3b1a39fb4009c28b4ee2",
        "title": "BASTILLA — 45",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ad70fb8-b9e1-46bc-906c-2522e2b76b4e_rwc_562x0x2877x2250x2877.jpg?h=2e5f28cef1b6a4a75360f171a33492eb",
        "title": "BASTILLA — 46",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f6bbcb6d-5d04-469f-94e3-31db03252ee9_rwc_981x0x2877x2250x2877.jpg?h=c9b0477727ba987f50e82f576a2dfe54",
        "title": "BASTILLA — 47",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/06914817-9ea3-4a44-ad8d-1a4c64246d2b_rwc_270x0x1381x1080x1381.jpg?h=17027a8ce20b66839c3fb39289f1cb87",
        "title": "BASTILLA — 48",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f739348f-dca5-47a9-a9b1-d14a017de4b1_rwc_270x0x1381x1080x1381.jpg?h=a7b8193479a7daa7d54312454285158d",
        "title": "BASTILLA — 49",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1097d12a-2a5e-4657-ba87-3cbf80fc9b45_rwc_0x1241x3455x2701x3455.jpg?h=81da7dca9ffa5577ea2864363650c9e9",
        "title": "BASTILLA — 50",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64efb6df-fd09-445b-99ca-1028c471f5f5_rwc_0x235x2160x1688x2160.jpg?h=87c780919b11f8d71c5e6a512fbf039d",
        "title": "BASTILLA — 51",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d791b9a9-d5d2-4597-814b-a422f40dc4bb_rwc_276x0x3197x2500x3197.jpg?h=664ecf3416a05ec0efcb9b2f77e92ea7",
        "title": "BASTILLA — 52",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/313c2d53-ce15-4166-a58b-d67e22a74108_rwc_0x109x3000x2345x3000.jpg?h=cb6d1fd06ee5758bbd4602b8651e25a2",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6f12d1e9-79ca-4bfb-8bd2-bfcf76c41f6e_rw_1920.png?h=6a416eb70aad8ec2f67fbc5d048406de",
    "alt": "SUAVE LOMITO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CNkUdowkUKH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6f12d1e9-79ca-4bfb-8bd2-bfcf76c41f6e_rw_1920.png?h=6a416eb70aad8ec2f67fbc5d048406de",
        "title": "SUAVE LOMITO — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d9304436-ada5-4d92-aeae-ebdce60aa920_rw_1920.png?h=316fbec9cb6dad6637404732c6f6669e",
        "title": "SUAVE LOMITO — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1c2d752f-8f2b-4db3-9f83-3d4f1cd6794e_rw_1920.jpg?h=e57b39acedae6ca63b4d7fcbdcc0f772",
        "title": "SUAVE LOMITO — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3d203b3e-ef13-4925-b284-52ac5158a5d1_rw_1920.jpg?h=01367b1b1436de06cab42f2bb4c36eaa",
        "title": "SUAVE LOMITO — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/20857d34-ae9c-4795-a19a-aca35f9aee54_rw_3840.jpg?h=6cf8a2df6a85fa16db2a8a8ca34d78f4",
        "title": "SUAVE LOMITO — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4fe22042-88b4-4ca8-bbe9-32272e2b673e_rw_1920.jpg?h=191a398a4cf967bd97f5168cdd0ae79f",
        "title": "SUAVE LOMITO — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a70fc02d-1c87-485d-88d1-00b6ee4345c9_rw_3840.jpg?h=53f365303e3b04b75a2387a8f7f8c760",
        "title": "SUAVE LOMITO — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ab4863cd-bc88-45f1-ba86-f652c93ab781_rw_3840.jpg?h=06b5d913cfcb97c8c6a13ed9741fa9f8",
        "title": "SUAVE LOMITO — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a932d2aa-eaf2-4793-9d3d-f283774fa755_rw_3840.jpg?h=440005b7853c328941e403d1dcad9090",
        "title": "SUAVE LOMITO — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64b50869-9c5c-4602-a67d-95d55f303a50_rw_3840.jpg?h=c4ad1df11504230d15a1bda1cac10609",
        "title": "SUAVE LOMITO — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f82602a-b9cc-45de-8bfb-79da18eb8d6e_rw_3840.jpg?h=6197edbad3dc19e1d7a44edbb01ae26b",
        "title": "SUAVE LOMITO — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/68da9e6f-1c0a-4519-a551-ddd4e417dfb2_rw_3840.jpg?h=ad7b6175a80ee550c1f471cdb47ca101",
        "title": "SUAVE LOMITO — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1062f6ab-30ef-461b-8b45-ff483593be04_rw_1920.png?h=9a929570f4aee3601617b267fea579ee",
        "title": "SUAVE LOMITO — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ad8bbd35-fd24-4f8d-a742-8afd842b7506_rw_600.png?h=d6042a1d9be6474fbce0642da96cd3ca",
        "title": "SUAVE LOMITO — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/eb05cca7-31dd-4477-96f8-99c8abceec69_rw_1200.png?h=8fa7fd97136f54355e6a6d7576083fb0",
        "title": "SUAVE LOMITO — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/91a772d6-f8a5-4528-a052-8feef2e4f113_rw_1200.png?h=16dabddfe62d4c00932d004c461b266b",
        "title": "SUAVE LOMITO — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e75b52df-06de-4a13-94b8-55549375a607_rw_1920.png?h=6e6684ac75d774ca4dc84ea4beb8c153",
        "title": "SUAVE LOMITO — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d85202bf-d710-46d6-a47e-0f159782a2d2_rw_1200.png?h=0390b102d403314a956cb34fbadd94bc",
        "title": "SUAVE LOMITO — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcc2577e-cd81-462a-a1e7-cd5a75f8920c_rw_1920.png?h=5ceee67a2790c0226ecfecbc1cbdb115",
        "title": "SUAVE LOMITO — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6b0d38e8-ac66-4970-9200-4ba95faff89b_rw_3840.png?h=5e5dc1a0ebb49981a3254abb9d27dbd9",
        "title": "SUAVE LOMITO — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/41419f53-18d3-4580-8b9c-bee238a6136c_rw_1920.jpg?h=785bad6a219538b3c418a352f188f6a4",
        "title": "SUAVE LOMITO — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af3f8777-5da8-45f7-a75d-90ced91c4684_rw_1920.png?h=83c4ec21c0919ad02a5bd12ce94eed9d",
        "title": "SUAVE LOMITO — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/119c1049-8edd-47a2-8b21-f500a1d99a87_rw_1920.jpg?h=7bda588892e220723d179c299c57aedd",
        "title": "SUAVE LOMITO — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/774a1ca4-9d46-4156-9083-596bfb70468b_rw_1920.jpg?h=b2ad8f93be9ca7fe41080d91033c74d1",
        "title": "SUAVE LOMITO — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2e9e9fcd-db17-46c6-81f8-6e67b221b681_rw_1920.jpg?h=fa4bda7886aabce36dbd7ba62f0e95dc",
        "title": "SUAVE LOMITO — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5a055441-7d5c-4ea9-8667-b0f9488f26a5_rw_1920.jpg?h=8c62da89f2502204daf19475b75d6412",
        "title": "SUAVE LOMITO — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bc95922f-b49b-4cac-bc78-23c9d34f4a12_rw_1920.jpg?h=d1bab6c0e981486d5306788ee5b92f6f",
        "title": "SUAVE LOMITO — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e899e0c3-8d0d-46ba-b196-cd1ac8f523c8_rw_1920.jpg?h=df00b26c8b89e0a82785622a36177b2e",
        "title": "SUAVE LOMITO — 28",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4688cb4a-b7f8-473b-a4aa-fabee647cc8b_rw_1920.jpg?h=444d305ec36cf8ee6010bb35c1cc3c62",
        "title": "SUAVE LOMITO — 29",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/73fac61d-3f2b-409e-990d-175e05cb7b8a_rw_1920.jpg?h=d98fb91c6e14ab61a70b542fb3e7b9ec",
        "title": "SUAVE LOMITO — 30",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/486bc5a2-6ea7-4c94-93ff-535abcb1ab40_rw_1920.jpg?h=9e4358d248cbd04a3315cbe67c3cfe86",
        "title": "SUAVE LOMITO — 31",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1b969422-59f4-499b-9b3f-dbd82d3b7bcb_rw_1920.jpg?h=524a24b1ab1e1b436870f98fb9c74279",
        "title": "SUAVE LOMITO — 32",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c2fca667-986d-4904-a507-e729f2b9e1fe_rw_1920.jpg?h=ed0fa6c8938bd309451c4b38e2efca84",
        "title": "SUAVE LOMITO — 33",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b9bc633c-af3b-4619-8fd0-2f864be13461_rw_1920.jpg?h=3a88e5503713f10fb141340dc50374db",
        "title": "SUAVE LOMITO — 34",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c8a8d7e5-c66d-49cd-91a2-28a842ef63be_rw_1920.jpg?h=4dc37064cca6685bd12492aa442c8d54",
        "title": "SUAVE LOMITO — 35",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8ec0dd53-ddda-4090-aeec-13266969e23b_rw_1920.jpg?h=b9f98c04efc96c926a4190fe210e7fdd",
        "title": "SUAVE LOMITO — 36",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64adca36-1294-47f7-929c-494c830ef9c0_rw_1200.jpg?h=73acde4f6e7262037e38d619a6f58248",
        "title": "SUAVE LOMITO — 37",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3ce5556f-8c66-4836-bb1f-52c609edbe99_rw_1920.jpeg?h=84829308629fd6c79d690997667ed516",
        "title": "SUAVE LOMITO — 38",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f7d2999a-d216-4554-8c1b-633c3eef4440_rw_600.gif?h=77ac7494cc18ea1af33a3a35e39ae92e",
        "title": "SUAVE LOMITO — 39",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6d511a93-86e4-4c28-81ae-9d1b7ad9cc93_rw_600.gif?h=7c01bb613c2919d22aaeab51fd7d903f",
        "title": "SUAVE LOMITO — 40",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4c6b38a5-387d-42d0-961e-7ec3acf4d054_rw_600.gif?h=97d4f522765e612b1506b371d3f809af",
        "title": "SUAVE LOMITO — 41",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f489465c-a917-4942-8493-2080b5c31777_rw_600.gif?h=ffb6b8edfbdaabcca24d5d238761f87e",
        "title": "SUAVE LOMITO — 42",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/725ade57-ca3d-46e0-95c4-e4f8edfb4b64_rw_600.gif?h=2a64d4302453ba329c0236e9be6603bb",
        "title": "SUAVE LOMITO — 43",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/913db950-6c48-408f-96f4-de3192d8f28a_rw_600.gif?h=699590d2e2652c7f1cefa8d5506640b2",
        "title": "SUAVE LOMITO — 44",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/60e0da0b-d81a-4aa9-be46-7cda4ab69ae6_rw_600.gif?h=a9efd01957b769a47f5c0b9f611b4589",
        "title": "SUAVE LOMITO — 45",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/833f0a16-ce36-45e0-80ce-cce14c24f6e0_rw_600.gif?h=42793e0a9f8cacd0f15923eeb6ed6c8b",
        "title": "SUAVE LOMITO — 46",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9157ea47-66fe-457b-a980-3d5ab58dc1cc_rw_600.gif?h=f07d8cfa56082d3511f32fe346034952",
        "title": "SUAVE LOMITO — 47",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2cc88a42-1d48-496e-a6a4-49c1021994ea_rw_600.gif?h=9e9c6d64781ec12b99a1b6590cde4753",
        "title": "SUAVE LOMITO — 48",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50c5c1e6-633b-41b1-8db9-afaebf15fca8_rw_600.gif?h=85460f63008c455f96bdd2ad9a9ac010",
        "title": "SUAVE LOMITO — 49",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/42447901-5880-4112-9ad5-3515fcf9bad2_rw_600.gif?h=29728cce807b960c8d14bca4dd2d2376",
        "title": "SUAVE LOMITO — 50",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/481aad72-6d0c-4de8-b353-c97c6fdae49b_rw_3840.jpg?h=ac68a08a1aabb91a1766e9f16e92c547",
        "title": "SUAVE LOMITO — 51",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d4cc5961-bd3c-4248-ac0a-bfb06b176bbd_rw_3840.jpg?h=702d4751661917a8434f14f7266b5630",
        "title": "SUAVE LOMITO — 52",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b9e9ead7-c79f-440f-9781-7d514fb7a9d6_rw_1920.jpg?h=f7147a110bdb6e4ced5e89e24782de4c",
        "title": "SUAVE LOMITO — 53",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ccf4fe73-27dd-4d0c-9204-128d106d2c1d_rw_1920.jpg?h=5468f7b6fb7f6c6365356b2d28a79cc7",
        "title": "SUAVE LOMITO — 54",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1e3f26b1-b30c-470a-acc7-af6afdbf26a3_rw_1920.jpg?h=90e0ad69504586f750894b2fe86b3f58",
        "title": "SUAVE LOMITO — 55",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/701e25a3-3b09-4f04-aac2-864b88795c2e_rw_1920.jpg?h=8d6f8f1b4dcdf93fb2e027f21b633a7a",
        "title": "SUAVE LOMITO — 56",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/06914817-9ea3-4a44-ad8d-1a4c64246d2b_rwc_270x0x1381x1080x1381.jpg?h=17027a8ce20b66839c3fb39289f1cb87",
        "title": "SUAVE LOMITO — 57",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f739348f-dca5-47a9-a9b1-d14a017de4b1_rwc_270x0x1381x1080x1381.jpg?h=a7b8193479a7daa7d54312454285158d",
        "title": "SUAVE LOMITO — 58",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1097d12a-2a5e-4657-ba87-3cbf80fc9b45_rwc_0x1241x3455x2701x3455.jpg?h=81da7dca9ffa5577ea2864363650c9e9",
        "title": "SUAVE LOMITO — 59",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64efb6df-fd09-445b-99ca-1028c471f5f5_rwc_0x235x2160x1688x2160.jpg?h=87c780919b11f8d71c5e6a512fbf039d",
        "title": "SUAVE LOMITO — 60",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d791b9a9-d5d2-4597-814b-a422f40dc4bb_rwc_276x0x3197x2500x3197.jpg?h=664ecf3416a05ec0efcb9b2f77e92ea7",
        "title": "SUAVE LOMITO — 61",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/313c2d53-ce15-4166-a58b-d67e22a74108_rwc_0x109x3000x2345x3000.jpg?h=cb6d1fd06ee5758bbd4602b8651e25a2",
        "title": "SUAVE LOMITO — 62",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c818f50e-bc19-4154-a0bf-6307174fe264_rwc_0x117x1080x844x1080.jpg?h=8781c531a36f91133c47605fc49b36ac",
        "title": "SUAVE LOMITO — 63",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f84b7e55-a0ce-44c7-8d2b-3d8afe65be0f_rwc_0x34x1080x844x1080.jpg?h=4407103a7905f6df08a852e128e7c143",
        "title": "SUAVE LOMITO — 64",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcc2577e-cd81-462a-a1e7-cd5a75f8920c.png?h=49493656ba5a0e300dba111448ea2e42",
        "title": "SUAVE LOMITO — 65",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af3f8777-5da8-45f7-a75d-90ced91c4684.png?h=dc5d6df7254f0b797fd104fd109c9f94",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3a5d122c-67dd-4e2b-9e7d-1f0ea7f0cafb_rw_1920.jpg?h=64a669e39b54882893aafb4f2069c70f",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/6cp3HyEHdEg/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4Jc6ZfQjh4q/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3a5d122c-67dd-4e2b-9e7d-1f0ea7f0cafb_rw_1920.jpg?h=64a669e39b54882893aafb4f2069c70f",
        "title": "KERCHAK — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/10d21ffd-aff0-431e-8ddf-928df7b66e8e_rw_1920.jpg?h=bc37f6588aedc8b6bc5e37e81adf9186",
        "title": "KERCHAK — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e6218827-392a-42c1-80b8-448addbbadad_rw_1920.jpg?h=12f9a59335ae115688ccf90c9bdaa83b",
        "title": "KERCHAK — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b4114eca-a39c-4c6c-8f68-5c17b1dd2978_rw_1920.jpg?h=72d77824d5fe56bd3cd020e9f47abb94",
        "title": "KERCHAK — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/84816b9d-924e-4399-a7dc-d6f3e51efbc5_rw_1920.jpg?h=3076b4271ad87546acb19f87a1878548",
        "title": "KERCHAK — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/43e200cc-38cb-4c44-9cff-b9263e73b964_rw_1920.jpg?h=2bbbb53027c85db929d7568c10dda1c7",
        "title": "KERCHAK — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/11dfdd21-3b4f-4b9e-a49d-259a6a5cadb5_rw_1920.jpg?h=b06d13fc950dfa412cfc40a90d351d7d",
        "title": "KERCHAK — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/15693d31-be22-49fd-b7d8-8a467d93a671_rw_1920.jpg?h=ecfa8e4f63293eedc34792274d36599c",
        "title": "KERCHAK — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8b64be66-bc42-4261-b730-ac20c8d9be2c_rw_600.gif?h=fad336d01f1b13b49ceba416990bfbee",
        "title": "KERCHAK — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86cbd66f-abcf-45fe-9fe9-6240dc2908f2_rw_600.gif?h=1034cf60e4c7aa99de1a452ae3b83460",
        "title": "KERCHAK — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/82b1ac65-bbd9-4e76-affb-7f96d52de49c_rw_600.gif?h=301688a814248d3e0bd317568f8a8f6b",
        "title": "KERCHAK — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f844e171-b71a-4717-b1dc-4737c661dc58_rw_600.gif?h=d0bd175c538eff5af4cf7696f4ae73a6",
        "title": "KERCHAK — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/279fdefa-ff84-4400-a131-08c552eec012_rw_600.gif?h=786a157ca0b8cf5daf450b4979208132",
        "title": "KERCHAK — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/74bc9dc2-3341-4dcd-b41c-608424469af4_rw_600.gif?h=ab64fa1c4e88aa952f9978c38f7d109f",
        "title": "KERCHAK — 14",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5feb17d-f8c7-4e7a-a00d-1c305609c510_rw_1920.jpg?h=19e9845319f899d1440e9d812446924e",
        "title": "KERCHAK — 15",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b646bfc0-6b49-4193-95ec-6139db29449c_rw_3840.jpg?h=eb47e27d203a83e2d4b4728271f2a473",
        "title": "KERCHAK — 16",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/38cd7e91-5a81-42ea-9e23-09b514abef94_rw_3840.jpg?h=82d6661e162986e246ebc549ded82816",
        "title": "KERCHAK — 17",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bdfa662b-f919-4d74-a7f8-279b924ea86c_rw_3840.jpg?h=537057436e3624fc197be04d3aca1e65",
        "title": "KERCHAK — 18",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/69d80698-5e5a-4a8a-a6b3-b8eef88ec271_rw_600.gif?h=c41883e63b1a228aba05d4abd28c838d",
        "title": "KERCHAK — 19",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/60948ec3-e049-4230-a241-350fdd3f883a_rw_600.gif?h=8ff2ca4f686d5e780d4ae3936d9ddeb6",
        "title": "KERCHAK — 20",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d791b9a9-d5d2-4597-814b-a422f40dc4bb_rwc_276x0x3197x2500x3197.jpg?h=664ecf3416a05ec0efcb9b2f77e92ea7",
        "title": "KERCHAK — 21",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/313c2d53-ce15-4166-a58b-d67e22a74108_rwc_0x109x3000x2345x3000.jpg?h=cb6d1fd06ee5758bbd4602b8651e25a2",
        "title": "KERCHAK — 22",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/06914817-9ea3-4a44-ad8d-1a4c64246d2b_rwc_270x0x1381x1080x1381.jpg?h=17027a8ce20b66839c3fb39289f1cb87",
        "title": "KERCHAK — 23",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f739348f-dca5-47a9-a9b1-d14a017de4b1_rwc_270x0x1381x1080x1381.jpg?h=a7b8193479a7daa7d54312454285158d",
        "title": "KERCHAK — 24",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ad70fb8-b9e1-46bc-906c-2522e2b76b4e_rwc_562x0x2877x2250x2877.jpg?h=2e5f28cef1b6a4a75360f171a33492eb",
        "title": "KERCHAK — 25",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f6bbcb6d-5d04-469f-94e3-31db03252ee9_rwc_981x0x2877x2250x2877.jpg?h=c9b0477727ba987f50e82f576a2dfe54",
        "title": "KERCHAK — 26",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c818f50e-bc19-4154-a0bf-6307174fe264_rwc_0x117x1080x844x1080.jpg?h=8781c531a36f91133c47605fc49b36ac",
        "title": "KERCHAK — 27",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f84b7e55-a0ce-44c7-8d2b-3d8afe65be0f_rwc_0x34x1080x844x1080.jpg?h=4407103a7905f6df08a852e128e7c143",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/06914817-9ea3-4a44-ad8d-1a4c64246d2b_rwc_270x0x1381x1080x1381.jpg?h=17027a8ce20b66839c3fb39289f1cb87",
    "alt": "GLADYSON PANTHER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/NUTmDvpDqdo/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b0c0d452-223b-44a5-a90d-8ed764b88141_rw_600.gif?h=98a98187ef3286d70eb2788ab5423711",
        "title": "GLADYSON PANTHER — 01",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7e460a1e-2923-46fd-a7ba-4c4806321a1e_rw_600.gif?h=e859fc92c242b89ceca41fe10d338c6b",
        "title": "GLADYSON PANTHER — 02",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05825dfd-e45d-48a6-9e23-dd957dabf76c_rw_600.gif?h=a337c2fdbad10c9e0ada6d5716dabbca",
        "title": "GLADYSON PANTHER — 03",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d38c2718-2bb9-4894-ad00-ba087a473969_rw_600.gif?h=fb4ae29ceb37117bb53805aee02a97b8",
        "title": "GLADYSON PANTHER — 04",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7ff268de-779b-453e-be02-a94e1a40b521_rw_600.gif?h=34ed6d6ffcd1c59ef859a44f94594f38",
        "title": "GLADYSON PANTHER — 05",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/12357e29-d8b6-46e9-923e-51d9cf3eae78_rw_600.gif?h=f8eb408c379813f40ec87651b796a906",
        "title": "GLADYSON PANTHER — 06",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ad70fb8-b9e1-46bc-906c-2522e2b76b4e_rwc_562x0x2877x2250x2877.jpg?h=2e5f28cef1b6a4a75360f171a33492eb",
        "title": "GLADYSON PANTHER — 07",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f6bbcb6d-5d04-469f-94e3-31db03252ee9_rwc_981x0x2877x2250x2877.jpg?h=c9b0477727ba987f50e82f576a2dfe54",
        "title": "GLADYSON PANTHER — 08",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d791b9a9-d5d2-4597-814b-a422f40dc4bb_rwc_276x0x3197x2500x3197.jpg?h=664ecf3416a05ec0efcb9b2f77e92ea7",
        "title": "GLADYSON PANTHER — 09",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/313c2d53-ce15-4166-a58b-d67e22a74108_rwc_0x109x3000x2345x3000.jpg?h=cb6d1fd06ee5758bbd4602b8651e25a2",
        "title": "GLADYSON PANTHER — 10",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1097d12a-2a5e-4657-ba87-3cbf80fc9b45_rwc_0x1241x3455x2701x3455.jpg?h=81da7dca9ffa5577ea2864363650c9e9",
        "title": "GLADYSON PANTHER — 11",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/64efb6df-fd09-445b-99ca-1028c471f5f5_rwc_0x235x2160x1688x2160.jpg?h=87c780919b11f8d71c5e6a512fbf039d",
        "title": "GLADYSON PANTHER — 12",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c818f50e-bc19-4154-a0bf-6307174fe264_rwc_0x117x1080x844x1080.jpg?h=8781c531a36f91133c47605fc49b36ac",
        "title": "GLADYSON PANTHER — 13",
        "tag": "Proyectos Integrales"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f84b7e55-a0ce-44c7-8d2b-3d8afe65be0f_rwc_0x34x1080x844x1080.jpg?h=4407103a7905f6df08a852e128e7c143",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
    "alt": "LIRA BIKES — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/TGdSI_dCRcE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/63ccc4ab-f9da-4ace-926c-60c092ae5c5f_rw_600.gif?h=56c5b486b311be5eef04d4beda25d163",
        "title": "LIRA BIKES — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/47880da5-4249-4633-af81-2b12e0edc874_rw_600.gif?h=b155b96ee311d6627c6e497e63311f4e",
        "title": "LIRA BIKES — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/57005501-065a-4368-ac52-b237306fc8e1_rw_600.gif?h=8d44eea49800927a3496a5a10d706455",
        "title": "LIRA BIKES — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ae871a6f-cdbe-40c2-9511-cd08b5e78c62_rw_600.gif?h=73f5d4d7122a59af24f6ee0ca4b4c4c3",
        "title": "LIRA BIKES — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "LIRA BIKES — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "LIRA BIKES — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "LIRA BIKES — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "LIRA BIKES — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "LIRA BIKES — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "LIRA BIKES — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "LIRA BIKES — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "LIRA BIKES — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "LIRA BIKES — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "LIRA BIKES — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "LIRA BIKES — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "LIRA BIKES — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "LIRA BIKES — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "LIRA BIKES — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "LIRA BIKES — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "LIRA BIKES — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "LIRA BIKES — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "LIRA BIKES — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "LIRA BIKES — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/31513ba1-27fc-44e8-9489-7f42d63e4a12_rw_1920.jpg?h=d1199ca2bf501b057936387741a776f8",
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
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/31513ba1-27fc-44e8-9489-7f42d63e4a12_rw_1920.jpg?h=d1199ca2bf501b057936387741a776f8",
        "title": "CMS ARQUITECTAS — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/252624b5-1e43-46a6-b7cd-46590dc5b5c3_rw_1920.jpg?h=88d4499e340ca58e34d7e3ff67c53ea6",
        "title": "CMS ARQUITECTAS — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ecb77f38-18d4-4c6a-abc2-04a7c8bb9459_rw_3840.jpg?h=047bb68082e05f7693a5d2650a558d14",
        "title": "CMS ARQUITECTAS — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/199d531f-d052-4f5f-b777-f574d4e1be3a_rw_1200.jpg?h=5d0b5d5bacc85970d6fd6bbec0e70559",
        "title": "CMS ARQUITECTAS — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2d0ac032-4dcc-4826-b519-12a6902c23d0_rw_1920.jpg?h=a3c123862aabd9bcdcf8601ed4d96b97",
        "title": "CMS ARQUITECTAS — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/247df62c-6008-4a6d-90f6-581a1135d903_rw_1200.jpg?h=2446d5caccb95a93d5c2dbb2ff9a82ed",
        "title": "CMS ARQUITECTAS — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/985cf230-3234-4898-8eeb-c4c07e1b5a87_rw_1920.jpg?h=e086b64cf9804a29fcec9becc53ff634",
        "title": "CMS ARQUITECTAS — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/13f0bf0c-de50-4f82-8399-ce57a5baabe9_rw_1920.jpg?h=661a74638359922651bd1d1cde2e8cc3",
        "title": "CMS ARQUITECTAS — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3c5bf0c3-badc-4f03-9903-cfa307792c65_rw_1920.jpg?h=ace261c4a95b524a612525695c650e7d",
        "title": "CMS ARQUITECTAS — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9d782899-6e8a-426a-89f8-cee8058e4196_rw_1920.jpg?h=4b8d9328601ce04cda885bd66c74bf59",
        "title": "CMS ARQUITECTAS — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/48255547-d2a4-4298-9c21-d431028fe931_rw_1920.jpg?h=e3bd17eecd793787cd0e8fd1495ac793",
        "title": "CMS ARQUITECTAS — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50afe9e8-18ab-450d-9268-6377b0825b71_rw_1920.jpg?h=f1040b49f0b667a9f0fd3aa7b6322c3d",
        "title": "CMS ARQUITECTAS — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4e84421d-5b6f-491b-9349-e53454031524_rw_1920.jpg?h=a6263f84041a731450e633bfbd470bf6",
        "title": "CMS ARQUITECTAS — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/503b5cdc-7f71-45ea-9101-d1796d1df920_rw_1920.jpg?h=56ee1ba607b6c4d662ebd98d5c9a5721",
        "title": "CMS ARQUITECTAS — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c00c3c1d-2347-481a-a79d-2d4adf1a0794_rw_1920.jpg?h=bf940ee2f24f0c5b767a1cd1c47a7ec4",
        "title": "CMS ARQUITECTAS — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/89553e07-66ab-4489-b2d8-edcb8e348dac_rw_1920.jpg?h=7ee29280fea96af4fa060e153f05f26f",
        "title": "CMS ARQUITECTAS — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fd7a9248-fcc0-4bdf-86f9-f9a0be10af4a_rw_1920.jpg?h=60b1d3b89aba33a8fdfaa3058d6c2295",
        "title": "CMS ARQUITECTAS — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/67ac190c-b207-49f4-8350-26ee99d18753_rw_1920.jpg?h=0141613b12d11403393920623b165349",
        "title": "CMS ARQUITECTAS — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5ddf940b-22cb-40e1-8111-a75c0e31b480_rw_1920.jpg?h=56be6b45b50acebefce50850bd63679e",
        "title": "CMS ARQUITECTAS — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5e2610bc-59c7-4fb8-8721-5cb385822167_rw_1920.jpg?h=2392596d3b690b8c787f517a13161728",
        "title": "CMS ARQUITECTAS — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/aeda8c44-5ec2-43b3-bba9-9f0d40c2d039_rw_1920.jpg?h=d5d95228b84dc90164382b35bdbe9be6",
        "title": "CMS ARQUITECTAS — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c32beb8-f1d5-494a-8650-f0d9814c090f_rw_1920.jpg?h=432f9830c391dd1c9263c208535e79cb",
        "title": "CMS ARQUITECTAS — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7476cc95-f443-4641-955d-f273b5a63a27_rw_1920.jpg?h=569b92dff35e0196238cee65c17b88ef",
        "title": "CMS ARQUITECTAS — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/74cb19cf-8225-4217-b9bc-2f5bb37930a6_rw_1920.jpg?h=341ff54ab23f053aad41065cccab84ca",
        "title": "CMS ARQUITECTAS — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9243f686-b42d-4424-8db6-a72a5d5f70aa_rw_1920.jpg?h=c889da4406a5895ab71b2aab9ddccfb4",
        "title": "CMS ARQUITECTAS — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09e885d8-8437-48a6-bf9e-90d7886dc51b_rw_1920.jpg?h=94777db4aaed2a82741686236520cc5c",
        "title": "CMS ARQUITECTAS — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/78555869-f1d2-45d7-a720-704055c98ce5_rw_1920.jpg?h=864a633b4782af5e320e26267deeb170",
        "title": "CMS ARQUITECTAS — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a5b30979-9dce-4b31-9471-6abf900ca2ea_rw_1920.jpg?h=6a6e0c935e43608cdeba8dfabc483d83",
        "title": "CMS ARQUITECTAS — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f885f0b9-feaa-48b4-b6b1-cbdfe52de4a9_rw_1920.jpg?h=5863724390c532465bf1847a030a05c2",
        "title": "CMS ARQUITECTAS — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0a5140e0-424f-412f-a557-7579b4fdae29_rw_1920.jpg?h=417065383fc1953ee62a5ae4ba73cc8e",
        "title": "CMS ARQUITECTAS — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4037353e-47de-49f7-b80f-b2b3e7b8456e_rw_1920.jpg?h=fc28f586877c9e2256de0474e59a2f96",
        "title": "CMS ARQUITECTAS — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "CMS ARQUITECTAS — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "CMS ARQUITECTAS — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "CMS ARQUITECTAS — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "CMS ARQUITECTAS — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "CMS ARQUITECTAS — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "CMS ARQUITECTAS — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "CMS ARQUITECTAS — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "CMS ARQUITECTAS — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "CMS ARQUITECTAS — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "CMS ARQUITECTAS — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "CMS ARQUITECTAS — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "CMS ARQUITECTAS — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "CMS ARQUITECTAS — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "CMS ARQUITECTAS — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "CMS ARQUITECTAS — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "CMS ARQUITECTAS — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "CMS ARQUITECTAS — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "CMS ARQUITECTAS — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "CMS ARQUITECTAS — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a715ba91-1165-4306-9f58-151bd3dcd596_rw_3840.jpg?h=6bd794e2c99e5ba017010a7504c77004",
    "alt": "DEGË MUEBLES — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a715ba91-1165-4306-9f58-151bd3dcd596_rw_3840.jpg?h=6bd794e2c99e5ba017010a7504c77004",
        "title": "DEGË MUEBLES — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/66732158-dcef-4e01-88e0-a48a806840a2_rw_3840.jpg?h=96aa15d5f2d10caa9b24b419bbece814",
        "title": "DEGË MUEBLES — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/964c8bb9-6921-4dcb-b183-8a79ddbab335_rw_1920.jpg?h=e0a85c0de8764827ba8c27456e742701",
        "title": "DEGË MUEBLES — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8081c7c-e00f-4ccb-b531-8b81d119bb21_rw_1920.jpg?h=9a097db97e982e9e1beae73d50387dbf",
        "title": "DEGË MUEBLES — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ce9d2950-3aa9-481e-9a70-a9e4540e172d_rw_1920.jpg?h=d1cd2af1e4de11da1110862fccfa648c",
        "title": "DEGË MUEBLES — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/062c52ac-94c0-4dc0-ab3e-b72ff2270464_rw_1920.jpg?h=77f62130652cbb1a2e36b3c5c9633ac3",
        "title": "DEGË MUEBLES — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a3368030-0468-44b6-8b64-a6ab3d06624e_rw_1920.jpg?h=858f89ccd853e6c14e2d0f89fe70a8c7",
        "title": "DEGË MUEBLES — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/85f1283b-4755-410e-a678-b36f6ecbf2e4_rw_1920.jpg?h=2338c667fd22f58a4343835af4861bd2",
        "title": "DEGË MUEBLES — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e4124486-75d4-4f1f-ae15-ec15f3b80041_rw_1920.jpg?h=9c91530195a03eb56e03470ca0173f13",
        "title": "DEGË MUEBLES — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ee7c5a0-4cc8-4cde-8e71-c6d6b5f2786f_rw_1920.jpg?h=b7952093e43cac6d7eb4a3dc85f182bc",
        "title": "DEGË MUEBLES — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/661c564f-1d7d-4522-991e-208e4c1ede94_rw_1920.jpg?h=44250cf0cad8c6d319faf928548c1738",
        "title": "DEGË MUEBLES — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d0b12852-3a14-4220-841c-b15d5516f9cf_rw_1920.jpg?h=8f8d6fec980d4d8b7cff695cba486663",
        "title": "DEGË MUEBLES — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b7f1ce5c-c558-4519-888e-3bc202a20e8e_rw_1920.jpg?h=f0b9407bc87d6f09f5094cda7f983112",
        "title": "DEGË MUEBLES — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05c2e5d6-aaf2-41a1-a868-dec03ba08523_rw_1920.jpg?h=0e2b6339c6208344ea01b19d198d0985",
        "title": "DEGË MUEBLES — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86f921f3-3b56-4718-bb0f-a118adf77fd5_rw_3840.jpg?h=90d24429546f85a3ca3a52515661c4c1",
        "title": "DEGË MUEBLES — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dadeae42-0c8e-4e94-b504-33ae4f7a90ed_rw_3840.jpg?h=670dafdff8cb0db4fd7b45ceb0caac67",
        "title": "DEGË MUEBLES — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/44281343-7b44-48ff-b13a-d79d974c8694_rw_3840.jpg?h=bf7ae842d0a939762d979074048b501a",
        "title": "DEGË MUEBLES — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f994b63f-b2ee-484a-add3-2097ee69e412_rw_3840.jpg?h=0604672003c395f1d0f75fb5c120c2b3",
        "title": "DEGË MUEBLES — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e330fabb-ab12-498e-9289-873cfed81511_rw_3840.jpg?h=d7651a230ac70c1da0637600bc706d93",
        "title": "DEGË MUEBLES — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/62eaaa80-0e1a-4cd3-8e5d-6995dd1ea977_rw_3840.jpg?h=2ce5f0c445ecd20eaf91cbd081ffcb80",
        "title": "DEGË MUEBLES — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1b49bb9d-7cd0-4278-8259-950d66fa6722_rw_1920.jpg?h=f97dec94dc78bba83df513e11a5cadf4",
        "title": "DEGË MUEBLES — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39c3bd18-94f0-47b2-9ce0-43c9eff11bc3_rw_1920.jpg?h=e708f90f466de5fb4f0c05eb5679d6fb",
        "title": "DEGË MUEBLES — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/45d39e41-9afa-48b2-a95d-44728577f719_rw_1920.jpg?h=ebdead8ebfa4379249014c4842a7da63",
        "title": "DEGË MUEBLES — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b2f4844-c90f-42e7-b552-b4887eb12756_rw_1920.jpg?h=67d724d8dbee34db585316b38ad43181",
        "title": "DEGË MUEBLES — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "DEGË MUEBLES — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "DEGË MUEBLES — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "DEGË MUEBLES — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "DEGË MUEBLES — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "DEGË MUEBLES — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "DEGË MUEBLES — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "DEGË MUEBLES — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "DEGË MUEBLES — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "DEGË MUEBLES — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "DEGË MUEBLES — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "DEGË MUEBLES — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "DEGË MUEBLES — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "DEGË MUEBLES — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "DEGË MUEBLES — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "DEGË MUEBLES — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "DEGË MUEBLES — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "DEGË MUEBLES — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "DEGË MUEBLES — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "DEGË MUEBLES — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/46d98d96-0696-46af-a8af-ad235603e08d_rw_1920.jpg?h=0581b52540f58d7fe832f96be11d3217",
    "alt": "KARMA NEGRO PELÍCULA — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/RY-QzeQ44gD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/46d98d96-0696-46af-a8af-ad235603e08d_rw_1920.jpg?h=0581b52540f58d7fe832f96be11d3217",
        "title": "KARMA NEGRO PELÍCULA — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/61e0aac9-21ed-402b-8446-cfa7ec8c67f2_rw_1920.jpg?h=34bd8a4f5a2b9ddc09f4cf831d4ffbee",
        "title": "KARMA NEGRO PELÍCULA — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bb280e3d-469f-4139-a167-6a4c4f1086e1_rw_1920.jpg?h=57e508ce5b354f6c22a5bca9563c42c0",
        "title": "KARMA NEGRO PELÍCULA — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c8c15a2c-112d-427e-9bdc-953fe29df772_rw_1920.jpg?h=cd5693e5ee735ff5283ac2deea3e0872",
        "title": "KARMA NEGRO PELÍCULA — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d566d7fe-895b-4d43-b647-7db861cdfbf2_rw_1920.jpg?h=1296e8bb070a803fff6ee6ea20e1e648",
        "title": "KARMA NEGRO PELÍCULA — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/29a5f081-7654-47cf-a75c-379fb4f153f5_rw_1920.jpg?h=b95e801adeda520214c68508bf39dcbd",
        "title": "KARMA NEGRO PELÍCULA — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b00b9c46-6d36-4ca8-92f1-4968b93fa7d2_rw_600.gif?h=cc0b583945c275218eff259e4db035ad",
        "title": "KARMA NEGRO PELÍCULA — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a518c84-be97-4ae9-88b4-1229237316fe_rw_600.gif?h=1d6d98e3f211ff25888e034f7c64ec43",
        "title": "KARMA NEGRO PELÍCULA — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/eb75082f-69a0-4c12-a00f-353e99de8839_rw_600.gif?h=2e8085625064149d491b46166027262b",
        "title": "KARMA NEGRO PELÍCULA — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8139580b-dbd5-42fc-aa38-26feb764fec9_rw_600.gif?h=7463bd5c23a5c23d13195a47af9bb2c0",
        "title": "KARMA NEGRO PELÍCULA — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c86e75ad-9483-4e95-a0c9-f17526449bf4_rw_600.gif?h=4122959d6c6c7a93a26ce6012b930ac2",
        "title": "KARMA NEGRO PELÍCULA — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "KARMA NEGRO PELÍCULA — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "KARMA NEGRO PELÍCULA — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "KARMA NEGRO PELÍCULA — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "KARMA NEGRO PELÍCULA — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "KARMA NEGRO PELÍCULA — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "KARMA NEGRO PELÍCULA — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "KARMA NEGRO PELÍCULA — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "KARMA NEGRO PELÍCULA — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "KARMA NEGRO PELÍCULA — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "KARMA NEGRO PELÍCULA — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "KARMA NEGRO PELÍCULA — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "KARMA NEGRO PELÍCULA — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "KARMA NEGRO PELÍCULA — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "KARMA NEGRO PELÍCULA — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "KARMA NEGRO PELÍCULA — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "KARMA NEGRO PELÍCULA — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "KARMA NEGRO PELÍCULA — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "KARMA NEGRO PELÍCULA — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "KARMA NEGRO PELÍCULA — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/98b41761-636d-4fb5-a5ed-f43e25ab533f_rw_3840.jpg?h=48738a52242678277d87e2480620439f",
    "alt": "AU EXCLUSIVE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/98b41761-636d-4fb5-a5ed-f43e25ab533f_rw_3840.jpg?h=48738a52242678277d87e2480620439f",
        "title": "AU EXCLUSIVE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/75c4a660-500b-4e76-bd66-733b9bc3cbd9_rw_1920.jpg?h=900817b4cf9e92ba54328089595a3ce4",
        "title": "AU EXCLUSIVE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/80d75be2-cb70-401e-9f06-c14b1ad97df2_rw_1920.jpg?h=a24d06440fcaf41ba66f2afb318083fe",
        "title": "AU EXCLUSIVE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c3bbd62c-60b5-4619-b824-b49c498897f9_rw_1920.jpg?h=4249f7e66c6e232cddeebc5b3353ced8",
        "title": "AU EXCLUSIVE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/43c6d769-5ea6-4863-b9db-1f1804a17324_rw_1920.jpg?h=d1014b23bcd4095d71b29b416af24941",
        "title": "AU EXCLUSIVE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/464b99b9-a1a8-46e8-bda3-b0e2a454b933_rw_1920.jpg?h=803fafbb7e373339a958f478e940e5a3",
        "title": "AU EXCLUSIVE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9e0be6ba-16bf-494a-a638-5dc57bbfee8c_rw_1920.jpg?h=0da9beaa0272d18c78c891635ad356b8",
        "title": "AU EXCLUSIVE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "AU EXCLUSIVE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "AU EXCLUSIVE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "AU EXCLUSIVE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "AU EXCLUSIVE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "AU EXCLUSIVE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "AU EXCLUSIVE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "AU EXCLUSIVE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "AU EXCLUSIVE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "AU EXCLUSIVE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "AU EXCLUSIVE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "AU EXCLUSIVE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "AU EXCLUSIVE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "AU EXCLUSIVE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "AU EXCLUSIVE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "AU EXCLUSIVE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "AU EXCLUSIVE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "AU EXCLUSIVE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "AU EXCLUSIVE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "AU EXCLUSIVE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "AU EXCLUSIVE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/98b41761-636d-4fb5-a5ed-f43e25ab533f.jpg?h=00092af804e00734292deb997ca474dd",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f06dfa9e-bfce-4901-9366-a36d4b30546b_rw_3840.jpg?h=3af3c2759d5e9ba6670fb1d75369ba7d",
    "alt": "MIRENKA — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f06dfa9e-bfce-4901-9366-a36d4b30546b_rw_3840.jpg?h=3af3c2759d5e9ba6670fb1d75369ba7d",
        "title": "MIRENKA — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e20eb043-b045-4a4f-bb25-c81b032e9ecd_rw_3840.jpg?h=426193b8d3956859e01a9cdf8de96693",
        "title": "MIRENKA — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fba1d962-d717-48d0-bcc0-93e605357375_rw_3840.jpg?h=141dbd75e3b75f13837367325d7025da",
        "title": "MIRENKA — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/47b41cca-de3f-4512-8583-15b89e01d740_rw_3840.jpg?h=e7f19e14309ac03a1ce47a0e5bed5530",
        "title": "MIRENKA — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a46ea9c3-cf05-449d-ad5f-f1da15c76727_rw_3840.jpg?h=ebfbe1a2073844e6fd8be79d18b45323",
        "title": "MIRENKA — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2e8e620f-4047-44f8-8445-249dc13ac8c2_rw_3840.jpg?h=c0af10bd4cea7571ef9138dca930aec4",
        "title": "MIRENKA — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/58b76af9-bd39-4b82-a6f1-7d057fb09eb7_rw_3840.jpg?h=e9a5394f176b7b5319deeb0451bff324",
        "title": "MIRENKA — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6d14a604-858c-4eea-8945-6330d70de780_rw_3840.jpg?h=9939e0fc1ab2f659b918749a55ddfc80",
        "title": "MIRENKA — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/57597523-9cb9-4305-bbc1-4833a3214e2f_rw_3840.jpg?h=cae7c9aa38ba7c7bb006647bd11903ba",
        "title": "MIRENKA — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c6204197-fd74-45ef-b047-ae54cd6cb551_rw_3840.jpg?h=47fc679963023ef9d9e54ff2424fdec2",
        "title": "MIRENKA — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "MIRENKA — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "MIRENKA — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "MIRENKA — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "MIRENKA — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "MIRENKA — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "MIRENKA — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "MIRENKA — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "MIRENKA — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "MIRENKA — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "MIRENKA — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "MIRENKA — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "MIRENKA — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "MIRENKA — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "MIRENKA — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "MIRENKA — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "MIRENKA — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "MIRENKA — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "MIRENKA — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "MIRENKA — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/26582609-09f5-485d-b278-01906accd5e1_rw_1920.jpg?h=14974ca57d719b58e6950a16b5b38334",
    "alt": "ANTIPOP — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5E_JJkFG2pW/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/26582609-09f5-485d-b278-01906accd5e1_rw_1920.jpg?h=14974ca57d719b58e6950a16b5b38334",
        "title": "ANTIPOP — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9d7216ae-2444-4e1d-9284-7c1a8effe0a4_rw_1920.jpg?h=73a42874fc4c52d593187ea356e88d25",
        "title": "ANTIPOP — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cc377ee2-e4ec-461a-8030-3983e07c3c86_rw_1920.jpg?h=dea01eab472277e9193729527f850510",
        "title": "ANTIPOP — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e9cfa7de-2dbc-4fa7-9ac5-3297d45bbe11_rw_1920.jpg?h=cc127417dfbcad4e9827c53ef66906df",
        "title": "ANTIPOP — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a252273e-8ef7-4402-8488-d3f64dcc1632_rw_1920.jpg?h=3b496db2fa1beefd356b9a0bbb0ebf8b",
        "title": "ANTIPOP — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/48d856ce-be35-46aa-997d-fae247059c31_rw_1920.jpg?h=49e40c567b19c42ab33f11e81aed5553",
        "title": "ANTIPOP — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5c325b59-43d6-49c1-ad0d-a12bc6b061a5_rw_600.gif?h=3629c327dbf17694f093e8a85a61d6c3",
        "title": "ANTIPOP — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/77c52c64-49dc-4b7f-985f-bcafcf38aa46_rw_600.gif?h=e46b1d01f2ed52eab1e50fbe5a2f2954",
        "title": "ANTIPOP — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f651e26b-a164-4d7d-a37e-de1e0672170d_rw_600.gif?h=b3e6ee060db77e8fd3e36b8f550c5e59",
        "title": "ANTIPOP — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b7f66f8-c67a-49f3-8cfd-3c2f49d82891_rw_600.gif?h=33a43c719b86893028aa1031fd587604",
        "title": "ANTIPOP — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/90360ad6-12a8-4943-b588-87a272378733_rw_600.gif?h=f8514588680c445aa959a9c25ec3a92a",
        "title": "ANTIPOP — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4fe4563a-c645-463e-9388-0a2e7b3f75dc_rw_600.gif?h=e422f568ba06111e79baf0b24c5692cd",
        "title": "ANTIPOP — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "ANTIPOP — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "ANTIPOP — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "ANTIPOP — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "ANTIPOP — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "ANTIPOP — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "ANTIPOP — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "ANTIPOP — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "ANTIPOP — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "ANTIPOP — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "ANTIPOP — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "ANTIPOP — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "ANTIPOP — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "ANTIPOP — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "ANTIPOP — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "ANTIPOP — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "ANTIPOP — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "ANTIPOP — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "ANTIPOP — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "ANTIPOP — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
    "alt": "BRASIL┃ON TENTACIÓN TURISMO — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/BybEdPwNZKY/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/PT56ACs7iPj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/NGSgHb_oHpr/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ed7e878-4549-4afb-ae50-497e61e1f94e_rw_600.gif?h=29a86224354274a0b7fef60ae5b17ab0",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/70097bf1-de3c-4a13-9588-e09fb81f7cdd_rw_600.gif?h=1e7300641d663615fa1776eb71df75b2",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f184c2ec-41d2-4726-90ce-45d9b4f44e95_rw_600.gif?h=d9ed26effd1f416d0ec269a3a6c575bb",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a72b2cc6-b528-429a-bbde-ce8f9fbde0e7_rw_600.gif?h=664bc8b3f4f2e3dbddbc5cff44938739",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/332a14e9-9a2c-47bf-b628-ad35ea32a910_rw_600.gif?h=641bcceeadd50644ef00a897fe1d6d6e",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bfcf735c-d2e6-49c0-a308-5f8381404681_rw_600.gif?h=830cf493800ba2fe6986e16c9ebe01c4",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/aff3fad4-ef93-4018-b765-04d16772f604_rw_600.gif?h=671059b5bfa5080a3bcc7806de4ebb62",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9eba6ad4-b24e-4f34-b364-3c15cd273978_rw_600.gif?h=941c79a8e920bab430b3109d0f54ee06",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2b882c52-95b4-4113-9065-981236ff3a33_rw_600.gif?h=8d48cab0e7c44c4670b940d7d5301ffe",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d5c49674-c195-406d-844b-855b015765f3_rw_600.gif?h=70476b8fe3da1cd5ddb89ecc39f55a6c",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1af7a00e-d0f5-4499-9cf9-cecafa150cd6_rw_600.gif?h=2a726515d67d39d055b6357d52a7556c",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ca852543-a6bb-434c-b829-9cd54f829692_rw_600.gif?h=5200ebc819446c6b180b875b0e597c91",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/08183fdf-6db2-4149-9c4b-41ab8693f171_rw_600.gif?h=74d6c9489a94114e3f03eff63d266067",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ab0bd473-5519-4c21-9623-af16ec6fc961_rw_600.gif?h=9ca8acf52e02dc82a94b45298933e8eb",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c1fe59f5-d392-49ff-8f3e-0be6fa0db2e2_rw_600.gif?h=18a815a72880a8d3ae0c14ffac9889a3",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/176acc5b-99fc-4047-8cea-9bb91ce86d4b_rw_600.gif?h=2403bcf1651c4eea44a86264a1828dc1",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d080428a-93df-411a-b8d9-92ec53c542b8_rw_600.gif?h=c6b7d7e0d68e35c2202ab2e70646f18d",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a1d50d67-efc2-48c2-880d-a127326ebd5e_rw_600.gif?h=8f7235775e80b75a80fcb116d675511c",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3d43a33a-3628-42e3-b8c6-93c60809d385_rw_600.gif?h=3121e470c5ef7537a7d070180a6e3183",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4e002a98-78f5-413f-a075-76a2abc697c5_rw_600.gif?h=800930517385ef66ca27112b83f809f5",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/15a5f33d-81e5-4e25-a81a-1aa69fe2399e_rw_600.gif?h=b068ef0ee2840c00d5bf4c0f05a703be",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c51e05f1-ae7e-46b4-a32d-70a2b9589166_rw_600.gif?h=4ccd8734619cc40c7c2b2f68d70c6cb0",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3a3fb8bc-68a6-4758-9908-5bcf3d2ad34d_rw_600.gif?h=927bd923cbf40e5efeed2742732dce62",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39d91e85-6d1a-45d5-98a8-7ffdc73858a0_rw_600.gif?h=5c9933bf0032548d4fb3856d57d2e517",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ea97c9dd-56b3-4293-b547-f2a967f86474_rw_600.gif?h=8337aabda8d2bcf8c07c014077a8a51e",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/24e60855-9683-45c7-83f4-170db10f35d4_rw_600.gif?h=09696bfbade03f733497e5b1c1557704",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d671801a-584e-4ced-a2bd-6f8fde446b65_rw_600.gif?h=6a30d237a5e7546b2789649b35e1929f",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50da25b3-e860-4b98-98f7-e119997f5abc_rw_600.gif?h=00f189cc3cba337bbc1d764b01ae939a",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fd60e584-07d5-4ea5-993d-e97009f90e83_rw_600.gif?h=aff0ba5bd8aaefb3ce57310ff18ae01f",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86cc918e-86b2-46f1-8ad7-95ccdf6ece63_rw_600.gif?h=03b17712b78e71890c03f164c11a434b",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/42dc30c7-7460-4fe0-9477-13e889ef64b1_rw_600.gif?h=ba8cd8320870931cb495505842ce96f7",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a7981a98-7deb-46d9-bf2b-1130b7489b40_rw_600.gif?h=18dbd3ec8cab09436ddcc1ee29d673a2",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4b9ac429-4f64-456c-baf6-d196a32466f9_rw_600.gif?h=483a92c720f9946fa99647cb35f1b657",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/19ad0b67-bcea-45ec-a13a-266b72804ddd_rw_600.gif?h=fe464b858f847ccf3acfc2fb10a0c1cf",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bcab4e09-a81a-41b2-b82e-56079a69fc2e_rw_600.gif?h=57f1113fafc43497dfbdecf92fdadb51",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e6a47b5d-e1be-46f3-b7ab-75ac90a7ab69_rw_600.gif?h=98f779435b80926836c985bbef91e1b5",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 52",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 53",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 54",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "BRASIL┃ON TENTACIÓN TURISMO — 55",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0f415d72-d52c-46fb-a391-a5a033657ca9_rw_3840.jpg?h=ea573daabe7244d0575ffece900a47ff",
    "alt": "SONDER — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/CDGGU8bNCqj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Uc-fjoTtSAE/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0f415d72-d52c-46fb-a391-a5a033657ca9_rw_3840.jpg?h=ea573daabe7244d0575ffece900a47ff",
        "title": "SONDER — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d09b529a-b80d-4810-8537-7e2041b66e7c_rw_3840.jpg?h=5ba199b6a3ca34793f4843bde1625568",
        "title": "SONDER — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/014136f1-d4e1-4246-977c-35f4ea5fdc1c_rw_3840.jpg?h=577ded6af1fe89586c54f275e14b8118",
        "title": "SONDER — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f97bc4af-61bc-45d4-9eb0-7156a955ada1_rw_3840.jpg?h=e95e2f7b72687859f69ce43f839beef8",
        "title": "SONDER — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9fca3c1b-0582-4f99-b3d4-e6ae8f310ad3_rw_3840.jpg?h=5a15b692570413a8cd61e08697c2c7bb",
        "title": "SONDER — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0d74db8e-9416-41a6-be6d-6447d00c65a4_rw_3840.jpg?h=bca7614ac75e6b433bc5393065fa05de",
        "title": "SONDER — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9f9f12b4-407f-4140-b169-8a8e080720dd_rw_1920.jpg?h=4eeb08532c55e54b6f58e2502b773172",
        "title": "SONDER — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/90733498-aeab-4b17-b2d0-332bdd72205f_rw_1920.jpg?h=c613237c2653a7a5cbbe2c7b909c6afb",
        "title": "SONDER — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/516bf505-6f4d-4bf8-ae2a-b66c2e483a09_rw_1920.jpg?h=f66e1f30f0a5112bee995c8016c82863",
        "title": "SONDER — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fa8045bd-1363-4a90-8e58-0ce019409aba_rw_1920.jpg?h=e8d695fa5d2c294a587877198b899b9b",
        "title": "SONDER — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2fa92bd0-9815-4bc9-9476-b1a76f75617b_rw_600.gif?h=96bdf4484b95f6eb5f0fdd6bb55390e3",
        "title": "SONDER — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/adf23ffe-b6ba-4ad2-9bc4-6cba60b36ba8_rw_600.gif?h=d41a357daa9015500c6eda02e03b24d4",
        "title": "SONDER — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4bbeb160-d8aa-4d36-9aec-eefc3f0b676b_rw_600.gif?h=cfd76c95fab5cc08d966653be8648786",
        "title": "SONDER — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7c73e45f-976f-40fc-a7be-04ec71cb024f_rw_600.gif?h=3baac4eea1ea50a1df1ef1cde3a99521",
        "title": "SONDER — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ed8d3708-fb5c-4535-a457-eb8ffb5b9f81_rw_600.gif?h=612ed936612d4f8fa2b33b944edce601",
        "title": "SONDER — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/efd6709c-42dc-4552-8553-0cefcd70602f_rw_600.gif?h=b75422e40724cffd365a8b24ec43f199",
        "title": "SONDER — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b1f6bad1-cb01-4197-acf1-cca40d221e79_rw_600.gif?h=8972164b6f174c71ee96d7c88fb47d26",
        "title": "SONDER — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f9460a66-02a9-4f91-9701-0e3530a2d812_rw_600.gif?h=006a05a9490c2878ac19fd4ef4a4859a",
        "title": "SONDER — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/83eda69d-9510-4357-a5da-ac78332d84a9_rw_600.gif?h=32036e272df9f8e5c77c252feabf4b43",
        "title": "SONDER — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a8f6bef3-a8aa-43d8-aa00-d8333dc9110a_rw_600.gif?h=8c600307d75f1542a7eaf28b4fdb7943",
        "title": "SONDER — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/940c6393-8df1-4036-9069-8682e5f05da8_rw_600.gif?h=afef36bf6cfaf70c340e6327fee29b7f",
        "title": "SONDER — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/99bae0ea-efa5-4dc5-8c40-86edc00e7402_rw_600.gif?h=22e860a91486fc9ddfddca366b1e98dc",
        "title": "SONDER — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "SONDER — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "SONDER — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "SONDER — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "SONDER — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "SONDER — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "SONDER — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "SONDER — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "SONDER — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "SONDER — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "SONDER — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "SONDER — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "SONDER — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "SONDER — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "SONDER — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "SONDER — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "SONDER — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "SONDER — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "SONDER — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "SONDER — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/54d707d6-49b2-4ab9-820a-1d4925cd0752_rw_1920.jpg?h=cbb7d07a8df99c941f22e0f57bf0ceda",
    "alt": "URUGUAY┃PANES Y PECES RESTAURANTE — Guido Castellotti",
    "videos": [
      "https://www-ccv.adobe.io/v1/player/ccv/5fL7w7D3cpP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/54d707d6-49b2-4ab9-820a-1d4925cd0752_rw_1920.jpg?h=cbb7d07a8df99c941f22e0f57bf0ceda",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/47f23c3b-61ce-4703-a790-a1b8e453564f_rw_1920.jpg?h=204c55d73c30ce5907f17cccade3a2d5",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d33cc845-092a-4f08-a514-0f75e28c2d7a_rw_1920.jpg?h=a221dcca80cf71a5e08eef8c33ec13d1",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c7e0d7b1-36b1-49d2-be64-af93a3a68aba_rw_1920.jpg?h=2cc32f4eab919a8d7c76cf99147b3a75",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b04bc7df-7201-4ddd-b275-7ee52d6a6904_rw_1920.jpg?h=4f70a13e41f10b2327893349d9f93c5f",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6a19bb50-e358-44d0-88b2-fd05340bf505_rw_1920.jpg?h=2b84633a369114039cfc7c38c18f5b1c",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fa764277-3c43-49e3-932b-c2dacfc7febc_rw_1920.jpg?h=4d05ea2950693b9477f705862cea2ac9",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1aab8592-71ab-410c-9335-08d419944a1d_rw_1920.jpg?h=ac235be88245ce32db22c83c3709f34d",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/abe4b0a1-72d0-4748-8755-c500504c9050_rw_1920.jpg?h=079b94ee181fd7a1c20e615e025751fc",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4ce212c5-350e-4162-842e-db84d98a5af0_rw_1920.jpg?h=050ffdac232ef916a72cc70cdd293aff",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a3c3ed4f-3cd9-4cd0-a298-c0e21a1eb295_rw_1920.jpg?h=3e980980ba4b728e1f580e1d6c4f9129",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cd6cc5b9-f96d-444a-b696-8fcc24fe0c31_rw_1920.jpg?h=96ed5498a9135fe4cfed8fe347a3ce36",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a86f02c4-7656-4747-a930-f4bbce9ced13_rw_1920.jpg?h=cdcb1d982e36a88f21fde511401da87c",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b91e142e-066c-40c2-bce6-4daccc9f06b6_rw_1920.jpg?h=fa01ae59410ca15a5110ccb92d93a20a",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a472d673-c7ed-4942-9515-880a4b3ea27e_rw_1920.jpg?h=8d907ae623ddae020a5e58fc74c66c16",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cc01359e-fa19-436b-a49b-446624233c1b_rw_1920.jpg?h=fff4c800d8e87e5012fe20dd455ab2d0",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86f361c3-fa8e-4ae5-9203-c4f86ecda354_rw_1920.jpg?h=bbea35a932e26003461c67fcb0c33a13",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/20e167fc-6e42-4ac3-8e18-8b6e2f6589f0_rw_1920.jpg?h=2ea99cf5f4523df5981f3cd2ed33d185",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bbe2177f-0573-441b-994e-a65c9ff973a5_rw_1920.jpg?h=558e45e2b4b15cf0b1e2af50111e7a8a",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/acea97bf-22c7-4e99-b795-db713a03dd49_rw_1920.jpg?h=c7fb5bc2dd17acaea0f810b384b4b177",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dd3e5c17-d223-454a-8ec8-7dc586536452_rw_1200.gif?h=5a132855c16f813e3079aef9755ce897",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50a54d94-27fe-4b8d-b7d1-83c0180da59d_rw_1200.gif?h=51342a5cb4769bbd5b300a9a44cb8ffe",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e81a3a04-9991-42fc-9a23-8e2569d20ba2_rw_1200.gif?h=f02048c3db6e59c073081147d401e78e",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/84bd7a71-21b4-4db7-aeba-5cc023f5a24e_rw_1200.gif?h=44d64664d490a2e7a9ca1f734aa69606",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ab753ff8-3599-448f-b421-3644c1441aac_rw_1200.gif?h=f896981ac685dc48a465cbc886a16caa",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/744ba467-1a57-4552-87b3-a2f62e16762c_rw_1200.gif?h=446dd3e55bfd96aa16109680e9870086",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2451dddf-6149-4084-b1ab-772a4881f7c9_rw_1200.gif?h=38e9fe00dcef109043a1d17c9ad38dcd",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/67155e28-5bb2-4538-ba3a-61b15cc77799_rw_1200.gif?h=95baaeb22fcf2190fcadbc2f9523aca1",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f9623e57-58a2-4d80-9daf-65c16539be7a_rw_1200.gif?h=38a4a91802064f2abd33d0f6274d8bf1",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4f2ff7c7-0b37-4f3f-8fdc-58fe1fb376c8_rw_1200.gif?h=ef81791bd525a68119f56414e2112975",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4a006708-4cb0-426d-8168-03827cda1b82_rw_1200.gif?h=904fe41e53bbc5d2ef9b5dcdae86d43a",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d3aeb9fc-ac1f-4877-8732-8d4f7e88a41d_rw_1200.gif?h=52923a3d69449f5fe57fad00693b58c0",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/50219710-5cc8-4886-a5ba-a58449aba76e_rwc_95x0x1108x867x1108.jpg?h=42feac40585447c3cc34b5cdbb4740b9",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1f008e1b-8fb4-499c-8d88-7a8cf005b6a2_rwc_0x106x867x677x867.jpg?h=8e0b3ce0bb05a0d69e8111913c22b2cf",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "URUGUAY┃PANES Y PECES RESTAURANTE — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/83d17a53-a68c-4342-a652-2d8f2d4bd03f_rw_1920.jpg?h=6b27920c393826a56aba06d262ce94f1",
    "alt": "FAPYD (UNR) — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/83d17a53-a68c-4342-a652-2d8f2d4bd03f_rw_1920.jpg?h=6b27920c393826a56aba06d262ce94f1",
        "title": "FAPYD (UNR) — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db68fe5f-c615-47b0-aea7-5008e8a7a6d9_rw_1920.jpg?h=26ad7362698e4c3026b4f83b3937c2b1",
        "title": "FAPYD (UNR) — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/97097266-bf90-441a-aa80-ce0a1c87c9f9_rw_1920.jpg?h=04b8397d79fc7225fa25f33987ae16f8",
        "title": "FAPYD (UNR) — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c8864d48-e515-4ed7-b2b9-1979b18ef472_rw_1920.jpg?h=b7c9185f8d75ee0d3792f1cb41032eec",
        "title": "FAPYD (UNR) — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dc0d230e-9c40-4e8d-89b9-9dc57fafe5d2_rw_1920.jpg?h=d8e9eddd73f5c381c0f5a2e12e2439d0",
        "title": "FAPYD (UNR) — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/48dd852d-dabd-4a84-8dac-3a3407a2bc39_rw_1920.jpg?h=acb6fe09bdc61bdd64641d9f12f3eb88",
        "title": "FAPYD (UNR) — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/615cda87-0341-4283-965c-8519b241c8ca_rw_1920.jpg?h=83503c261fc948375d936ae321056a86",
        "title": "FAPYD (UNR) — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/370a421d-a4f3-49b5-aa67-9cfa7cf20979_rw_1920.jpg?h=099fa09878f9cfae5d7ac87a5eb593cd",
        "title": "FAPYD (UNR) — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2ae5facb-d5f0-45eb-b292-fca2c06f1228_rw_1920.jpg?h=acb2f25d74d62ef44bf35aee5a4a4b0b",
        "title": "FAPYD (UNR) — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/181e7cd5-244a-4ca0-a2a9-ebc4a3db8cd4_rw_1920.jpg?h=3a4c51cf26f700899fd6da166bbeabfa",
        "title": "FAPYD (UNR) — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b8acae8-1124-4c87-b48b-6a636b98d6db_rw_1920.jpg?h=700cb76e3c96752e7340a7e8d7881fb0",
        "title": "FAPYD (UNR) — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1e7cba36-9f6f-40f4-945d-379cad25dfb6_rw_1920.jpg?h=63977921a60c22073f455f8971d77c3f",
        "title": "FAPYD (UNR) — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/88d55521-96d2-4b39-a30f-1c87561c8955_rw_600.gif?h=06eac17c67db65bd55b9d41ad4dfe4bf",
        "title": "FAPYD (UNR) — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c17a982f-1b4a-4d0b-815b-02ef6c7056ab_rw_600.gif?h=fcbb7a8246fe27e28bd73d2d1540d049",
        "title": "FAPYD (UNR) — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6382d9bb-02b9-42a3-becf-07466c241671_rw_600.gif?h=67fa374d90a278b976ba8839d8137833",
        "title": "FAPYD (UNR) — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f9bb38a5-2f2b-47ed-9ed6-a5798bd00641_rw_1920.jpg?h=73d4dcee4292778422dad8d1a3dfb2ff",
        "title": "FAPYD (UNR) — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4f66201-31e4-4cbc-a957-b714117a3be8_rw_1920.jpg?h=f4f8cb949b3dcc175787dcd38b28ea6b",
        "title": "FAPYD (UNR) — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/395d7071-5c97-4710-b5da-f3827dae55be_rw_1920.jpg?h=a54824a3b251e69f2e3b23746736c0c5",
        "title": "FAPYD (UNR) — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a6e5d4da-179d-4eca-9b04-7e3e4cdddcfe_rw_1920.jpg?h=8f9072e44b7d30bed472cf0a6d67ab26",
        "title": "FAPYD (UNR) — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dc569ea4-7559-4194-ba0b-f11ee00d359a_rw_1200.jpg?h=d4a35260b0d674480aa7153030694e55",
        "title": "FAPYD (UNR) — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/de41d93c-e881-4b0a-b704-c5a2de13de30_rw_1200.jpg?h=a3191f79803798ad08882109cf7370b0",
        "title": "FAPYD (UNR) — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0b9abbf3-c63f-4ced-b7ad-f73ccbf7c847_rw_1200.jpg?h=349cd5b2164f685f5b21324d7217555d",
        "title": "FAPYD (UNR) — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/82ee2a6d-9db6-4ef9-9cb7-a23d0a0bef8b_rw_1920.jpg?h=2bc97a667128c9c7517f2a70961b89fb",
        "title": "FAPYD (UNR) — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c3e4016e-9b01-461a-8b42-5db05f6baed3_rw_1920.jpg?h=33982174aae070703bdd78bb27e2939c",
        "title": "FAPYD (UNR) — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05c5109c-d654-4429-9a5b-29651d1dca28_rw_1200.jpg?h=637661e41dd0c01f82d955807f2545d8",
        "title": "FAPYD (UNR) — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b2d898ed-9486-4d93-8655-4cc15e9fd9ea_rw_600.gif?h=a4c804efc7dbe98ab8f556b4fa4b957a",
        "title": "FAPYD (UNR) — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/36bfd93e-caa9-4a34-86ed-0d9d491ea6a3_rw_600.gif?h=3a70ab9c4059d15f958b9215a58d090c",
        "title": "FAPYD (UNR) — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/77e9b785-8d08-4b93-bf6e-e4bd5890c231_rw_600.gif?h=2f8b312674a8d17a7d3dc63db72a258e",
        "title": "FAPYD (UNR) — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f6647fbf-ba97-4a0c-b3d0-a3052a0fc261_rw_600.gif?h=b7dcec5269fc9e4fd164087626534295",
        "title": "FAPYD (UNR) — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/df4c506d-6d2d-4a35-868b-0346121938d8_rw_600.gif?h=39aa15543f62d3749c18bdd8c16418bc",
        "title": "FAPYD (UNR) — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/008b951b-cff4-461b-9997-42ac8a9ca773_rw_600.gif?h=267f668b72519efad86ccd698c1ddb48",
        "title": "FAPYD (UNR) — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fd8c4e10-044d-4031-9913-d624ff2b8dda_rw_1920.jpg?h=a3bdff59686b46c9e62981041e5c5249",
        "title": "FAPYD (UNR) — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/80a909d5-6352-4007-9d22-2429ae16cab3_rw_1920.jpg?h=fcfecca36f44682c8c33abb05b406226",
        "title": "FAPYD (UNR) — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7e2ef6e8-d370-44c7-9fb8-661197ec733d_rw_1920.jpg?h=53ec5e0c64df61902684fb6410823437",
        "title": "FAPYD (UNR) — 34",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b01bf7d5-278a-40cd-9cec-2b541d6d8ba0_rw_1920.jpg?h=e6ba2c000197d1b3ac3b4e868d0e4dba",
        "title": "FAPYD (UNR) — 35",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d417dda4-27d8-44d3-98c1-ccedb2838ccb_rw_1920.jpg?h=ec101fde6ddb25c3e9a69a9c292cca6f",
        "title": "FAPYD (UNR) — 36",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fc1c0cbc-b09b-439a-a63c-3ccee1a40e6f_rw_1200.jpg?h=48225a263399653df70f77d90dadee28",
        "title": "FAPYD (UNR) — 37",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/792fe149-a30e-41ed-8e78-56256294b6f7_rw_1920.jpg?h=ccb61caaebd813e7c87be7cb81f2aff0",
        "title": "FAPYD (UNR) — 38",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27167506-1eee-4630-8fa0-42eab718d663_rw_1200.jpg?h=f064b1b983bd90b44b249bf721c06553",
        "title": "FAPYD (UNR) — 39",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e4c1826e-d1b8-4b22-9d5d-c85af4e010f1_rw_1920.jpg?h=3265a9f0bd046c2269a655ae17a19e5c",
        "title": "FAPYD (UNR) — 40",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a5285cb4-15f0-40f0-b083-3f04e6ee9003_rw_1920.jpg?h=f76aa8efe9a3cc326a87538f132d3be0",
        "title": "FAPYD (UNR) — 41",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1d802b33-0ea1-4b20-93eb-0674d1ea9341_rw_1920.jpg?h=3920a2b011e5199c6097f09fcca22f04",
        "title": "FAPYD (UNR) — 42",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/52d41018-3cf9-47e4-aeea-a49951652585_rw_1920.jpg?h=de1cc00759c9b0787af15d1f38e72b7a",
        "title": "FAPYD (UNR) — 43",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "FAPYD (UNR) — 44",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "FAPYD (UNR) — 45",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "FAPYD (UNR) — 46",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
        "title": "FAPYD (UNR) — 47",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "FAPYD (UNR) — 48",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "FAPYD (UNR) — 49",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "FAPYD (UNR) — 50",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "FAPYD (UNR) — 51",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "FAPYD (UNR) — 52",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "FAPYD (UNR) — 53",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "FAPYD (UNR) — 54",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "FAPYD (UNR) — 55",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/92e35995-4f47-470b-b6e6-a85902b844c7_car_202x158.jpg?h=5da1db40e40f823295062d48f68581fd",
        "title": "FAPYD (UNR) — 56",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/09d46ff4-d497-4638-8b6a-287ac248f648_car_202x158.jpg?h=e3ebfe66f3e1352d3dbd3e6974aec037",
        "title": "FAPYD (UNR) — 57",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "FAPYD (UNR) — 58",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "FAPYD (UNR) — 59",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "FAPYD (UNR) — 60",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "FAPYD (UNR) — 61",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "FAPYD (UNR) — 62",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f5ab676c-7ce0-4f8f-9825-67b692f2d662_rw_1200.jpg?h=8509c84df08fedfd9f1c8c821d8e584d",
    "alt": "LILA GRACE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f5ab676c-7ce0-4f8f-9825-67b692f2d662_rw_1200.jpg?h=8509c84df08fedfd9f1c8c821d8e584d",
        "title": "LILA GRACE — 01",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a4404b13-dd0a-4481-a13b-8c6f2edac30e_rw_1200.jpg?h=9f22301576799fc528092ff9f2cffa76",
        "title": "LILA GRACE — 02",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fcbe1332-eecd-469d-9b16-0904387acc54_rw_1200.jpg?h=f057b1a9ae75bf3a6c1393fdff875706",
        "title": "LILA GRACE — 03",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5dff7a22-3118-4fb7-8f75-f0d74e192081_rw_1200.jpg?h=54b4ca1f87e432bd25d133036f704b0d",
        "title": "LILA GRACE — 04",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e1308e32-9c93-4c21-9240-e840e6d9a2ae_rw_1200.jpg?h=47f277ffe431fc125188f9f45e6c08a5",
        "title": "LILA GRACE — 05",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2e6e106f-e1c5-40c7-b0e6-f43bd7c609b1_rw_1200.jpg?h=ff41a2fc148d0348775274fe16d55f90",
        "title": "LILA GRACE — 06",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ea627955-e607-46a1-84d3-a1e3c552961a_rw_1200.jpg?h=bfcc8501805c80fb0901cfad175cd773",
        "title": "LILA GRACE — 07",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9aa90584-4909-4889-932a-27212e30fcaa_rw_1200.jpg?h=0c933b95a9464f80bfec70b2e6bbdbbf",
        "title": "LILA GRACE — 08",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bc7260ea-1132-4ff0-af12-d5671c9ecf77_rw_1200.jpg?h=a53540544b003e87e8bacf7c971965bf",
        "title": "LILA GRACE — 09",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/77dce459-3878-4551-a3be-7fa13c4146e3_rw_1200.jpg?h=248e74e612f2ee1cd488c47c302a70ad",
        "title": "LILA GRACE — 10",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e509ae8e-f954-4885-af30-663bc3935d0e_rw_1200.jpg?h=0d5b1c90aa2b3370b811e06a240885f9",
        "title": "LILA GRACE — 11",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ae7b927e-c469-4eb5-9493-b2dd5eac4a65_rw_1200.jpg?h=9d2d23bac70b8912b935e2607e54bd93",
        "title": "LILA GRACE — 12",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f5aef676-5cdf-4757-9a66-00f6287ba4b5_rw_1200.jpg?h=80f3df3d40ad6691c8b0ca29e43893d4",
        "title": "LILA GRACE — 13",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2b3811ab-3907-451d-afff-fd5b8729fd9b_rw_1920.jpg?h=fa29de443686df895f41b42f7492f687",
        "title": "LILA GRACE — 14",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4d3b0fa1-f77f-4bd2-b091-dd066797db95_rwc_0x834x1320x1032x1320.jpg?h=4b02a22f0584637d9cc606a5d675f93d",
        "title": "LILA GRACE — 15",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e5e5d4bd-e140-497c-ba8e-8017a3d3c7fa_rwc_0x986x3743x2926x3743.jpg?h=c7db2dbea6c27ac39844094652cb1b8d",
        "title": "LILA GRACE — 16",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/758e0159-e55c-49dd-bb12-d210fe5ee2d2_rwc_165x0x1918x1500x1918.jpg?h=265dd71509cf2c93f24f9df8cbf928e3",
        "title": "LILA GRACE — 17",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/81626a71-e6a2-4fd4-8da6-df8b04923731_rwc_156x0x1918x1500x1918.jpg?h=c8697b660798d91508a427543ae57ab4",
        "title": "LILA GRACE — 18",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c4a35125-85c3-43d8-9555-b18712b4443b_rwc_270x0x1381x1080x1381.jpg?h=ab148eb01ca1e65c8916adeaa938062c",
        "title": "LILA GRACE — 19",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8450ce6f-7926-43fc-a88d-c856ecf11b9f_rwc_0x430x1200x938x1200.jpg?h=dec47e42e1d4094fa86497cb2838f733",
        "title": "LILA GRACE — 20",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fbf9dde5-3195-4819-a0e9-dd333cd49825_rwc_381x0x4420x3456x4420.jpg?h=85b9d8a3dd25a475e8d33416fb61df93",
        "title": "LILA GRACE — 21",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71b6d137-835c-45bc-b66b-528184441a9a_rwc_0x1241x3455x2701x3455.jpg?h=6a62c665738d44986363a9f85ac48452",
        "title": "LILA GRACE — 22",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/971d2af2-d8e6-4e01-b0d3-2c5926ba348f_car_202x158.jpg?h=2db71fd744a30e257e92b7f09f179b20",
        "title": "LILA GRACE — 23",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59ec109b-0692-4442-963c-3a1608250b57_car_202x158.jpg?h=e017ff0921ab7b96349375335030d0f1",
        "title": "LILA GRACE — 24",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0c8550b9-7163-43f6-a246-a0710b9402e2_car_202x158.jpg?h=02dfcc674526a6290afec63dc02b123f",
        "title": "LILA GRACE — 25",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/04cf731a-b885-400f-b96b-fd707217a70f_rwc_0x0x1500x1172x1500.jpg?h=2cd983251fd401875789cff7b464a6f0",
        "title": "LILA GRACE — 26",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fb0c10d5-9d7d-4b73-aec7-e046fbc9611e_car_202x158.jpg?h=782a8d4a3573744b167f00efc28954b7",
        "title": "LILA GRACE — 27",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b9ade5e-f0a1-4bac-aaf0-cebd4e2df785_rwc_0x509x4000x3127x4000.jpg?h=41503c262758b6a3ce58221e8ffa0356",
        "title": "LILA GRACE — 28",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8a00c74b-41f7-4b08-9eb3-b9379e4a203e_rwc_0x430x1200x938x1200.jpg?h=8b1ad8bc40f3625b42e467c53325f0bf",
        "title": "LILA GRACE — 29",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/05717a4f-86e5-4d5a-b411-387f6d300736_rwc_181x0x2097x1640x2097.jpg?h=df2718dc329671d449e4a23dc5e9bff7",
        "title": "LILA GRACE — 30",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/71728141-0e13-4e3f-996a-689871cf0361_rwc_118x177x1301x1017x1301.jpg?h=203bdd84bcd88614a18b654b8adbea6c",
        "title": "LILA GRACE — 31",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db432631-4a2b-458a-aa9e-e9ffaf885d59_rwc_0x605x1200x938x1200.jpg?h=820f1c79b83998fa48da124b8d8cb5d4",
        "title": "LILA GRACE — 32",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/27f21677-29b5-4e31-9bc8-c6a120757feb_rwc_665x0x2762x2160x2762.jpg?h=ce481c4a7f905fffbc0c202418a698bc",
        "title": "LILA GRACE — 33",
        "tag": "Fotografía y Video"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/6653cddd-b075-4183-b482-b574f601f62c_rwc_452x0x2762x2160x2762.jpg?h=6b165bd20f7af92da273e9022ebc8171",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e653d86c-aa51-4ab3-b542-6e7b66e00ca6_rw_3840.jpg?h=58214ee4467e5bdc399d999779a4c832",
    "alt": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e653d86c-aa51-4ab3-b542-6e7b66e00ca6_rw_3840.jpg?h=58214ee4467e5bdc399d999779a4c832",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/19ea2c0a-2529-4af7-b73b-ad333fde080f_rw_1920.jpg?h=553d8579c642e970820c5bf601fccaa7",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3e7b146a-be62-441e-b436-273eee5ed88f_rw_1200.gif?h=3c092235bddc44f2ff1bad0c65b928f5",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/76792a84-539e-4a5f-9aa4-012b929db2d3_rw_3840.jpg?h=6528345423a20af018ac5ebc1876856c",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f66de76a-11c6-4540-b154-13a3b3090b72_rw_3840.jpg?h=badc3cbb0ad7f88bb9ba8b45711a1b55",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/398b7838-9d34-497d-bea1-99b0400ed1c8_rw_1920.jpg?h=195cec6ffd49264ddc0e7a09ffa4d78b",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/445e8320-13d6-438e-9278-604551e3df2d_rw_1920.jpg?h=49ed695bee7cbd8360ca418fadc40154",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bddd0b22-8fa8-4476-bb1a-7f99498c3f7d_rw_1200.gif?h=3bde867506f2d29a1c5ff2b6167a62a4",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/918b7307-2c78-4470-8817-4a03f58d335b_rw_3840.jpg?h=d27ca756c558ac46dfc98b15f5126f52",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4b340fe1-0fa9-4e33-a68e-fec1e2fe4e6a_rw_3840.jpg?h=9be084dc6d06bed7f76df96fb74feadb",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5154f0cf-200e-4979-a478-2887926140c1_rw_1920.jpg?h=d23784c195d68595a932c0bd62057855",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5a53a92d-6e26-4ca5-b22a-e821851dbe16_rw_1920.jpg?h=5db8a45e83b5ab8a32fda11ac9b64d71",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b357ac34-1b9e-4523-92e5-8c05666717ec_rw_1200.gif?h=73fee4d9ed1d613b03fd37833c01b689",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c30c75ad-b77e-4bd5-b2a7-65ea65287a1a_rw_3840.jpg?h=a91a9a97a973f0f91a266060933392d1",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 14",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7cb20251-4707-477b-b258-8d840500cae3_rw_3840.jpg?h=af958aee99d06cf694e483048991efe0",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 15",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/be232e74-9ce4-47b4-918c-cd99c17ab55c_rw_1920.jpg?h=7a11e33ce79ec03eec888cfbff18393e",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 16",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0d988972-b6d7-4a9c-82aa-90f9293ad731_rw_1920.jpg?h=832645f20c5a1a029aa14847635c8140",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 17",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b9d6824d-4a5c-4dd3-bfa9-b426e06e1c91_rw_1200.gif?h=7c3cb8c36b255b2a340cf2fc88d0f419",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 18",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/644225e9-f5c2-44c8-8f23-e24c4b63b23b_rw_3840.jpg?h=1d9d500ab98f1fd84a5db581be32da48",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 19",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e0626463-cc30-489a-bc60-ef6ed3189d08_rw_3840.jpg?h=c443b228df39385b8e7d5f3fae19c66a",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 20",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/bc146052-2cc4-495d-ae4b-04472f42b042_rw_1920.jpg?h=4456456efd1f2d40445fa523d4885e77",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 21",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/12938993-da8f-4923-9b3b-f5095124b8be_rw_1920.jpg?h=43d23072b9c8e63a1fd5e62fce7724f4",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 22",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/36666fea-2266-4e1b-bbe5-0d52d40abf37_rw_1200.gif?h=5d8f1d17fc8a2740dff3eeb1d69b736d",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 23",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b70a42c5-c859-49c6-b9ac-528b531c0d95_rw_3840.jpg?h=30fc9132daec11ec817a1a05b9d81ef2",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 24",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d72b3320-847c-43d9-8984-5357a0a0367e_rw_3840.jpg?h=ba7ef4e9e608788ee5bdee2d8d5652af",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 25",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e08ccdd8-a791-40a8-895a-4f394b5dc938_rw_1920.jpg?h=f16f2fa78fb4b978c95a5f137fb79ec8",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 26",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d44fb110-6697-4adb-a15f-c7c27c8508bd_rw_1920.jpg?h=616fca5c5a405832aa1f68b0738153e6",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 27",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4a1b8e26-6bf3-4c75-a609-ac952c70dec0_rw_1200.gif?h=5482b2d598ca483a0a968695847d5716",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 28",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b76f3b7f-f1f0-47f2-9e0f-8a6815940ae9_rw_3840.jpg?h=d1ae16e0b03a03400c57917f588b3f2d",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 29",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d055e6be-a3d7-4198-9727-acb4969c854d_rw_3840.jpg?h=6041136949a5cfaa696ffaa565d3c712",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 30",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/93ae61d3-b1cd-443f-88a0-4fe05becb87c_rw_1920.jpg?h=9a5b3a2b9d925c5888ed84d9da0235ff",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 31",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cd47e7fe-84fd-4c04-90ed-9dbd553e1151_rw_1920.jpg?h=6a673e8a3154c4844b2d5fe59845c7fa",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 32",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/462ee7b2-d524-4e86-8827-9dafa3e76b41_rw_1200.gif?h=4fa4ebee973b5ce7830ceb2d9eb6dd06",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 33",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/88ccc23c-060c-4f88-bc2c-d96526d47844_rw_3840.jpg?h=05c09b79023a9b0664ad775648a25665",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 34",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9dbdd822-9e0a-4a9a-b03b-1796b0315b93_rw_3840.jpg?h=73fe34255d016bfdc7d1abf440d06e50",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 35",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/966dc5c2-8480-4784-a26e-575ae6bba970_rw_1920.jpg?h=af24b0514044e3fbdcdb20d4bafa1d77",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 36",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8a78fbb-c7c9-4e1e-828b-fe10e570a14f_rwc_0x327x3000x2345x3000.jpg?h=a601d3e20516481bc1647c792bed73d1",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 37",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af518513-4197-4fce-983d-56dc7bd79f1a_rwc_0x327x3000x2345x3000.jpg?h=139323ff6d7606bf2234941eb5663151",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 38",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ee8bf1c0-406d-4708-a7ec-0e6ee4a5c8fc_rwc_83x0x3683x2880x3683.jpg?h=4cda7bba0453b06be8e656db339ba896",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 39",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcdefbe5-5dd2-401b-971b-5f4034f33072_rwc_83x0x3683x2880x3683.jpg?h=d4ef5e40e1684cb279079adf2831bc25",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 40",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/65cc2c30-850e-44b7-b4f5-936e72f56cb3_rwc_459x0x5320x4160x5320.jpg?h=5000fd5f328520e7c1652ab9f8dda19a",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 41",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9c340943-3c8b-460c-a81e-f7c572711be6_rwc_85x0x1046x817x1046.jpg?h=58d8ac5b42fc1fcd95a05f57aa7612d8",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 42",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5cc2f3bd-ec5f-423d-9fd0-abfdc3b6a183_car_202x158.jpg?h=2906976320b1b8429105bfbc18038633",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 43",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39cc5b4e-7a21-4238-ad72-5b851141f42d_rwc_180x0x1469x1149x1469.jpg?h=6c1bddd3060ebbbd8a16942768a8b69b",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 44",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0cb0562b-03fe-4493-83eb-278346e423ae_car_202x158.jpg?h=cc508afae0dc92f358ad6238202afcb8",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 45",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59bf09b8-2377-4cc3-9308-356d13e3cbe9_rwc_0x0x1080x844x1080.jpg?h=ca232d692f3ce07f0258ba09f5fc3448",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 46",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e653d86c-aa51-4ab3-b542-6e7b66e00ca6.jpg?h=47acdde2809f2850df90f053a5c3b04c",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 47",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/76792a84-539e-4a5f-9aa4-012b929db2d3.jpg?h=3b0ccff0b7353ef75baef122521d0890",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 48",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/918b7307-2c78-4470-8817-4a03f58d335b.jpg?h=bed9152771b09415291ff449fa1f4f36",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 49",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c30c75ad-b77e-4bd5-b2a7-65ea65287a1a.jpg?h=45a0f3d5657aef9090e589e1b9963cae",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 50",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/644225e9-f5c2-44c8-8f23-e24c4b63b23b.jpg?h=b9b243bcf4c3b6f83c2ffa4448b3f3eb",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 51",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b70a42c5-c859-49c6-b9ac-528b531c0d95.jpg?h=8aa9f3ce4c6af6bd7a17b884cc048bd5",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 52",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b76f3b7f-f1f0-47f2-9e0f-8a6815940ae9.jpg?h=bfa414db5cc85f10152f4fb5f198d332",
        "title": "NASIR CATRIEL Y FASCIOLO  BALLET PARA LAS MASAS — 53",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/88ccc23c-060c-4f88-bc2c-d96526d47844.jpg?h=3c41677ea7b719e79aa9de9c6d241395",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/24dffb9e-ad3a-4ecf-858d-d82554a49fd9_rw_3840.jpg?h=747ada7240df700ad0089e343f0fc8a7",
    "alt": "ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/24dffb9e-ad3a-4ecf-858d-d82554a49fd9_rw_3840.jpg?h=747ada7240df700ad0089e343f0fc8a7",
        "title": "ROSARIO ES UN ECLIPSE — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/89a43452-4a13-4766-b1f5-50f4e5ffdae9_rw_3840.jpg?h=e2c03aff953ed1d8800f1fc4aa6fd3e8",
        "title": "ROSARIO ES UN ECLIPSE — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/535b78d2-6ab1-448c-ae3d-e1289d9822a2_rw_3840.jpg?h=4c32375863bbeaada7e972e6e59db2ac",
        "title": "ROSARIO ES UN ECLIPSE — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a73cc4e4-f067-4393-a92e-1281d7c7da89_rw_3840.jpg?h=2aafe02409b61da49edba28357721c30",
        "title": "ROSARIO ES UN ECLIPSE — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4dce06a6-e86a-489a-b990-2c19c0a046a2_rw_3840.jpg?h=4bb9c64cbf8552dc3fe6977ee5c12343",
        "title": "ROSARIO ES UN ECLIPSE — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/56e26d73-688c-4e76-af3c-29e6e83d176e_rw_3840.jpg?h=0ad8890e3e5faf46ba1d5499352440b1",
        "title": "ROSARIO ES UN ECLIPSE — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8b50dc4b-8e3e-47b2-9202-7f5b7f8d8c5a_rw_1920.png?h=1e845301ef44f98a69b11294d35b0210",
        "title": "ROSARIO ES UN ECLIPSE — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8cdcd810-c12d-4fe1-bc0e-a9f80ad3933a_rw_3840.jpg?h=a1f0ee54a84681b7afc1b0a58ac9b6bc",
        "title": "ROSARIO ES UN ECLIPSE — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/238e9ecb-8068-4a23-b131-47c2cf109928_rw_3840.jpg?h=0f247fdb95ada3f4a2e316ff6ce790a3",
        "title": "ROSARIO ES UN ECLIPSE — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fff14f3d-6356-4b5f-a2b5-78e63c174997_rw_3840.jpg?h=bb079b7d78b23187d34a5b547a260f66",
        "title": "ROSARIO ES UN ECLIPSE — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5cc2f3bd-ec5f-423d-9fd0-abfdc3b6a183_car_202x158.jpg?h=2906976320b1b8429105bfbc18038633",
        "title": "ROSARIO ES UN ECLIPSE — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39cc5b4e-7a21-4238-ad72-5b851141f42d_rwc_180x0x1469x1149x1469.jpg?h=6c1bddd3060ebbbd8a16942768a8b69b",
        "title": "ROSARIO ES UN ECLIPSE — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/65cc2c30-850e-44b7-b4f5-936e72f56cb3_rwc_459x0x5320x4160x5320.jpg?h=5000fd5f328520e7c1652ab9f8dda19a",
        "title": "ROSARIO ES UN ECLIPSE — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9c340943-3c8b-460c-a81e-f7c572711be6_rwc_85x0x1046x817x1046.jpg?h=58d8ac5b42fc1fcd95a05f57aa7612d8",
        "title": "ROSARIO ES UN ECLIPSE — 14",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0cb0562b-03fe-4493-83eb-278346e423ae_car_202x158.jpg?h=cc508afae0dc92f358ad6238202afcb8",
        "title": "ROSARIO ES UN ECLIPSE — 15",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59bf09b8-2377-4cc3-9308-356d13e3cbe9_rwc_0x0x1080x844x1080.jpg?h=ca232d692f3ce07f0258ba09f5fc3448",
        "title": "ROSARIO ES UN ECLIPSE — 16",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/25346034-c890-4f18-90f3-b9308fef3092_rwc_1003x615x1354x1058x1354.jpg?h=7bba9701596ec6396454f77b4398ac32",
        "title": "ROSARIO ES UN ECLIPSE — 17",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86633abd-80b2-4e1b-9c5e-578c2911422c_rwc_276x0x1381x1080x1381.jpg?h=6d4701e8db06bda28306b5bb742c8ab8",
        "title": "ROSARIO ES UN ECLIPSE — 18",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8a78fbb-c7c9-4e1e-828b-fe10e570a14f_rwc_0x327x3000x2345x3000.jpg?h=a601d3e20516481bc1647c792bed73d1",
        "title": "ROSARIO ES UN ECLIPSE — 19",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af518513-4197-4fce-983d-56dc7bd79f1a_rwc_0x327x3000x2345x3000.jpg?h=139323ff6d7606bf2234941eb5663151",
        "title": "ROSARIO ES UN ECLIPSE — 20",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/24dffb9e-ad3a-4ecf-858d-d82554a49fd9.jpg?h=55efb9e5e6af7f5a8210bc666c824eb9",
        "title": "ROSARIO ES UN ECLIPSE — 21",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/89a43452-4a13-4766-b1f5-50f4e5ffdae9.jpg?h=05796345df6b8a7fc8aceaccdf172b47",
        "title": "ROSARIO ES UN ECLIPSE — 22",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4dce06a6-e86a-489a-b990-2c19c0a046a2.jpg?h=a21139ba1885032e8fe1b52faefa8fcb",
        "title": "ROSARIO ES UN ECLIPSE — 23",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/56e26d73-688c-4e76-af3c-29e6e83d176e.jpg?h=e40fb2650d85c0ffec2ef0fba2fc9a90",
        "title": "ROSARIO ES UN ECLIPSE — 24",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8b50dc4b-8e3e-47b2-9202-7f5b7f8d8c5a.png?h=869d4edb6ea3ac3918cc8babc01e21c3",
        "title": "ROSARIO ES UN ECLIPSE — 25",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/fff14f3d-6356-4b5f-a2b5-78e63c174997.jpg?h=90cb8f53c011bd5499685e175d539142",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db093853-cd77-48dd-846f-cb2e79ad1f03_rw_3840.jpg?h=878060ec85766b2bdbe679742780ad9f",
    "alt": "DISEÑO EDITORIAL — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db093853-cd77-48dd-846f-cb2e79ad1f03_rw_3840.jpg?h=878060ec85766b2bdbe679742780ad9f",
        "title": "DISEÑO EDITORIAL — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/33df886a-b112-4307-a9f5-f02b1ec4ac6a_rw_3840.jpg?h=3553131871e3c4882461d03fb7a20f01",
        "title": "DISEÑO EDITORIAL — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/865f9154-760f-42d4-97bb-2eedfe982787_rw_1920.jpg?h=16088f02fa4b00dd10793781522f4122",
        "title": "DISEÑO EDITORIAL — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b7c6f4b4-34d9-4689-a45e-98be6d93e79a_rw_1920.jpg?h=b9949a7d9d4d85973b981619a1b784a5",
        "title": "DISEÑO EDITORIAL — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b65bed81-a911-4fc2-82a4-b881c7c92190_rw_3840.jpg?h=38accba36d2c0fd06faf3801eada1993",
        "title": "DISEÑO EDITORIAL — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/89c1badc-77c9-49c8-a170-8b4b55baaf67_rw_1920.jpg?h=20d252cbfc1a601c460632de20d5ea2a",
        "title": "DISEÑO EDITORIAL — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/628bb2f9-7374-4b77-99ac-f1bc7a8ce40f_rw_1920.jpg?h=f912ea9e167ff87863397cd0316d3937",
        "title": "DISEÑO EDITORIAL — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c95fdf8f-e866-419c-82ae-2d854e44eab6_rw_3840.jpg?h=35083cd8a44bff85d25e41de810c887a",
        "title": "DISEÑO EDITORIAL — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5518e94f-f0f6-4c4f-8342-028c146758ac_rw_3840.jpg?h=75a937fcb1c0db1da4c629987d6f830b",
        "title": "DISEÑO EDITORIAL — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8219627-ae54-4b35-b601-8648a407e577_rw_3840.jpg?h=00bbc4d246b44fa32502880dc5294f0c",
        "title": "DISEÑO EDITORIAL — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59304a34-4cb9-4ba6-aeaf-3e4903f02686_rw_3840.jpg?h=869590c1fe578f9be7f8c7ec8326bd4f",
        "title": "DISEÑO EDITORIAL — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ee8bf1c0-406d-4708-a7ec-0e6ee4a5c8fc_rwc_83x0x3683x2880x3683.jpg?h=4cda7bba0453b06be8e656db339ba896",
        "title": "DISEÑO EDITORIAL — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcdefbe5-5dd2-401b-971b-5f4034f33072_rwc_83x0x3683x2880x3683.jpg?h=d4ef5e40e1684cb279079adf2831bc25",
        "title": "DISEÑO EDITORIAL — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8a78fbb-c7c9-4e1e-828b-fe10e570a14f_rwc_0x327x3000x2345x3000.jpg?h=a601d3e20516481bc1647c792bed73d1",
        "title": "DISEÑO EDITORIAL — 14",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af518513-4197-4fce-983d-56dc7bd79f1a_rwc_0x327x3000x2345x3000.jpg?h=139323ff6d7606bf2234941eb5663151",
        "title": "DISEÑO EDITORIAL — 15",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/25346034-c890-4f18-90f3-b9308fef3092_rwc_1003x615x1354x1058x1354.jpg?h=7bba9701596ec6396454f77b4398ac32",
        "title": "DISEÑO EDITORIAL — 16",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86633abd-80b2-4e1b-9c5e-578c2911422c_rwc_276x0x1381x1080x1381.jpg?h=6d4701e8db06bda28306b5bb742c8ab8",
        "title": "DISEÑO EDITORIAL — 17",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/65cc2c30-850e-44b7-b4f5-936e72f56cb3_rwc_459x0x5320x4160x5320.jpg?h=5000fd5f328520e7c1652ab9f8dda19a",
        "title": "DISEÑO EDITORIAL — 18",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9c340943-3c8b-460c-a81e-f7c572711be6_rwc_85x0x1046x817x1046.jpg?h=58d8ac5b42fc1fcd95a05f57aa7612d8",
        "title": "DISEÑO EDITORIAL — 19",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0cb0562b-03fe-4493-83eb-278346e423ae_car_202x158.jpg?h=cc508afae0dc92f358ad6238202afcb8",
        "title": "DISEÑO EDITORIAL — 20",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59bf09b8-2377-4cc3-9308-356d13e3cbe9_rwc_0x0x1080x844x1080.jpg?h=ca232d692f3ce07f0258ba09f5fc3448",
        "title": "DISEÑO EDITORIAL — 21",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/db093853-cd77-48dd-846f-cb2e79ad1f03.jpg?h=9679a34097e676a732cc42b39ca91898",
        "title": "DISEÑO EDITORIAL — 22",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/33df886a-b112-4307-a9f5-f02b1ec4ac6a.jpg?h=035f8cccf2b1a2d5088c9a42351143f2",
        "title": "DISEÑO EDITORIAL — 23",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/865f9154-760f-42d4-97bb-2eedfe982787.jpg?h=9606bb84dda397e75c12b0ad4e24d21c",
        "title": "DISEÑO EDITORIAL — 24",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b7c6f4b4-34d9-4689-a45e-98be6d93e79a.jpg?h=a412563284a1ac1a6780a3dae8015032",
        "title": "DISEÑO EDITORIAL — 25",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b65bed81-a911-4fc2-82a4-b881c7c92190.jpg?h=2e47171e7af2feca4cf7d76787474eec",
        "title": "DISEÑO EDITORIAL — 26",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/89c1badc-77c9-49c8-a170-8b4b55baaf67.jpg?h=f50c129656058a9d2d92170dce3b6384",
        "title": "DISEÑO EDITORIAL — 27",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/628bb2f9-7374-4b77-99ac-f1bc7a8ce40f.jpg?h=71becfc9e804cafd120d68a4528af763",
        "title": "DISEÑO EDITORIAL — 28",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c95fdf8f-e866-419c-82ae-2d854e44eab6.jpg?h=c2eb414289a9dab783cdde7cd0f1a355",
        "title": "DISEÑO EDITORIAL — 29",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5518e94f-f0f6-4c4f-8342-028c146758ac.jpg?h=3e0a2f39a7fe9ab838ea0fa110f4e0d1",
        "title": "DISEÑO EDITORIAL — 30",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8219627-ae54-4b35-b601-8648a407e577.jpg?h=e83b639be6ef9418d4f2c452fb3e3fc4",
        "title": "DISEÑO EDITORIAL — 31",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59304a34-4cb9-4ba6-aeaf-3e4903f02686.jpg?h=e2e1d99297e9b41d880b26b48c69e116",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c5b8cdb9-fc92-4c76-af7d-3e736b46a86b_rw_1920.jpg?h=6194f60c6bc68f55938b46b4987001c9",
    "alt": "GYOR — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c5b8cdb9-fc92-4c76-af7d-3e736b46a86b_rw_1920.jpg?h=6194f60c6bc68f55938b46b4987001c9",
        "title": "GYOR — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3d5e1235-a6ec-4023-a99f-820e33523f65_rw_3840.jpg?h=b5eec6b0d84dc236f8f4486bcd1917a7",
        "title": "GYOR — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f3c141f5-40b1-4da7-9785-109915442c83_rw_3840.jpg?h=f273f4fb86ce66c926e47b37b87fd129",
        "title": "GYOR — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ce97435a-db00-4f45-a55c-d3a1a28e43c1_rw_3840.jpg?h=e8efddec780c5ac218fc3b39b0fc3da1",
        "title": "GYOR — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/8c71ec84-b327-4748-98bb-6c73986bddb1_rw_1920.jpg?h=8ac4fc71e3246a9cf1b20232cfea0d7d",
        "title": "GYOR — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9cc65823-4452-43fa-b0b5-097d1eec5ad1_rw_1920.jpg?h=dcc8ee0856873cb360c1b627afdf650d",
        "title": "GYOR — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/77f05ed4-7d79-4621-8f43-7731a7394a2d_rw_1920.jpg?h=2037faaece7a83dae103383570bbeccd",
        "title": "GYOR — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d53c3a4e-92c1-4920-9084-480c6349fecb_rw_1920.jpg?h=56c8ccbd929a97d29eb1ed95940a71c2",
        "title": "GYOR — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5e401633-a398-4874-a157-2f128c9fc9db_rw_1920.jpg?h=359c91f931d931e23f8faab64c7c459f",
        "title": "GYOR — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/30ad6981-6d6c-4fb6-9956-88d464178e16_rw_1920.jpg?h=717d8c307cccfcf8eaec45fc68428225",
        "title": "GYOR — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/870312fe-45ea-4151-8b7f-2a3384adf67b_rw_1920.jpg?h=791425e39b4487f528c62448d3f3c1ba",
        "title": "GYOR — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a8bbe503-8926-4f39-be66-e534b6c54000_rw_1920.jpg?h=de738268b48130aebdb34b82d631c260",
        "title": "GYOR — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8a78fbb-c7c9-4e1e-828b-fe10e570a14f_rwc_0x327x3000x2345x3000.jpg?h=a601d3e20516481bc1647c792bed73d1",
        "title": "GYOR — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af518513-4197-4fce-983d-56dc7bd79f1a_rwc_0x327x3000x2345x3000.jpg?h=139323ff6d7606bf2234941eb5663151",
        "title": "GYOR — 14",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ee8bf1c0-406d-4708-a7ec-0e6ee4a5c8fc_rwc_83x0x3683x2880x3683.jpg?h=4cda7bba0453b06be8e656db339ba896",
        "title": "GYOR — 15",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcdefbe5-5dd2-401b-971b-5f4034f33072_rwc_83x0x3683x2880x3683.jpg?h=d4ef5e40e1684cb279079adf2831bc25",
        "title": "GYOR — 16",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/25346034-c890-4f18-90f3-b9308fef3092_rwc_1003x615x1354x1058x1354.jpg?h=7bba9701596ec6396454f77b4398ac32",
        "title": "GYOR — 17",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86633abd-80b2-4e1b-9c5e-578c2911422c_rwc_276x0x1381x1080x1381.jpg?h=6d4701e8db06bda28306b5bb742c8ab8",
        "title": "GYOR — 18",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0cb0562b-03fe-4493-83eb-278346e423ae_car_202x158.jpg?h=cc508afae0dc92f358ad6238202afcb8",
        "title": "GYOR — 19",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59bf09b8-2377-4cc3-9308-356d13e3cbe9_rwc_0x0x1080x844x1080.jpg?h=ca232d692f3ce07f0258ba09f5fc3448",
        "title": "GYOR — 20",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5cc2f3bd-ec5f-423d-9fd0-abfdc3b6a183_car_202x158.jpg?h=2906976320b1b8429105bfbc18038633",
        "title": "GYOR — 21",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39cc5b4e-7a21-4238-ad72-5b851141f42d_rwc_180x0x1469x1149x1469.jpg?h=6c1bddd3060ebbbd8a16942768a8b69b",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ec1f7dae-3648-4ffa-91e0-d1e9097c0574_rw_1920.jpg?h=f712f22e959a0d8a6f109b8c7c39091e",
    "alt": "KERCHAK — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ec1f7dae-3648-4ffa-91e0-d1e9097c0574_rw_1920.jpg?h=f712f22e959a0d8a6f109b8c7c39091e",
        "title": "KERCHAK — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b4ffc1cc-9618-444c-b1b8-1eb7ee92ad6a_rw_1920.jpg?h=6003ae5b10c2b9a81878334ce4c7e422",
        "title": "KERCHAK — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/e6695793-7247-40d8-a31d-165990a2dacd_rw_1200.jpg?h=0cec996516ddb8803d14d69b1543f2be",
        "title": "KERCHAK — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/25346034-c890-4f18-90f3-b9308fef3092_rwc_1003x615x1354x1058x1354.jpg?h=7bba9701596ec6396454f77b4398ac32",
        "title": "KERCHAK — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86633abd-80b2-4e1b-9c5e-578c2911422c_rwc_276x0x1381x1080x1381.jpg?h=6d4701e8db06bda28306b5bb742c8ab8",
        "title": "KERCHAK — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ee8bf1c0-406d-4708-a7ec-0e6ee4a5c8fc_rwc_83x0x3683x2880x3683.jpg?h=4cda7bba0453b06be8e656db339ba896",
        "title": "KERCHAK — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcdefbe5-5dd2-401b-971b-5f4034f33072_rwc_83x0x3683x2880x3683.jpg?h=d4ef5e40e1684cb279079adf2831bc25",
        "title": "KERCHAK — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5cc2f3bd-ec5f-423d-9fd0-abfdc3b6a183_car_202x158.jpg?h=2906976320b1b8429105bfbc18038633",
        "title": "KERCHAK — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39cc5b4e-7a21-4238-ad72-5b851141f42d_rwc_180x0x1469x1149x1469.jpg?h=6c1bddd3060ebbbd8a16942768a8b69b",
        "title": "KERCHAK — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0cb0562b-03fe-4493-83eb-278346e423ae_car_202x158.jpg?h=cc508afae0dc92f358ad6238202afcb8",
        "title": "KERCHAK — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/59bf09b8-2377-4cc3-9308-356d13e3cbe9_rwc_0x0x1080x844x1080.jpg?h=ca232d692f3ce07f0258ba09f5fc3448",
        "title": "KERCHAK — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/65cc2c30-850e-44b7-b4f5-936e72f56cb3_rwc_459x0x5320x4160x5320.jpg?h=5000fd5f328520e7c1652ab9f8dda19a",
        "title": "KERCHAK — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9c340943-3c8b-460c-a81e-f7c572711be6_rwc_85x0x1046x817x1046.jpg?h=58d8ac5b42fc1fcd95a05f57aa7612d8",
        "title": "KERCHAK — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ec1f7dae-3648-4ffa-91e0-d1e9097c0574.jpg?h=564d562c799cbe3d193b790de126bc1b",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/209fe013-a640-476c-8449-863a2713d5fb_rw_1200.jpg?h=f61e2c840ad765c222334d17e356cda7",
    "alt": "FESTIVAL NO PARO NI A PALO' — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/209fe013-a640-476c-8449-863a2713d5fb_rw_1200.jpg?h=f61e2c840ad765c222334d17e356cda7",
        "title": "FESTIVAL NO PARO NI A PALO' — 01",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/42c77e86-466a-40ea-8069-90b11675e815_rw_1920.jpg?h=62627bb5fb8699dd7422c0f526cb3e8b",
        "title": "FESTIVAL NO PARO NI A PALO' — 02",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a86cf9c6-947a-4979-8b7f-5aa3e7503d6c_rw_3840.jpg?h=6942905323261b751d08725db0c52e67",
        "title": "FESTIVAL NO PARO NI A PALO' — 03",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/648e333e-99bb-4fd6-b5e8-d968ac89a789_rw_1200.jpg?h=51269233a9c6cc347a69c6215cbe18ca",
        "title": "FESTIVAL NO PARO NI A PALO' — 04",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ab134be4-3fea-451d-9223-25194771ece0_rw_1200.jpg?h=0d1e6ab5a2000005871ba748683caccf",
        "title": "FESTIVAL NO PARO NI A PALO' — 05",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1aaa646a-bdde-4ca2-97c9-3ad017dcd29a_rw_1200.jpg?h=d6b2c6e7ad222114fdaf4b0dedf30ec6",
        "title": "FESTIVAL NO PARO NI A PALO' — 06",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c00b7b64-3e4b-43d3-aa60-57c457b563bd_rw_1920.jpg?h=6ef89e64d33dd234804b21514abf4ffc",
        "title": "FESTIVAL NO PARO NI A PALO' — 07",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/4136d719-fad3-420e-ae7a-7c57645bde40_rw_600.gif?h=b32bb51cca5e78718bb80fd2b8920bc4",
        "title": "FESTIVAL NO PARO NI A PALO' — 08",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/63c25ed9-c60e-4f2d-9f65-53aa50f89b1c_rw_600.gif?h=4aed76576ce83fd5c6fbbe428094a00b",
        "title": "FESTIVAL NO PARO NI A PALO' — 09",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/46474b9f-1af9-43b6-bdaf-dc1454bdcd02_rw_600.gif?h=4e51f14f4b1f079cf85fd79a8fb04a15",
        "title": "FESTIVAL NO PARO NI A PALO' — 10",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/aab3570f-df8d-4979-9735-580b257a59bf_rw_600.gif?h=ad223eb5ff60db5f17eeb1808225d405",
        "title": "FESTIVAL NO PARO NI A PALO' — 11",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c04f7f17-7cd4-40a0-8398-e16bac84a490_rw_600.gif?h=7e3df5f7dd668c2b35012fa19d829f30",
        "title": "FESTIVAL NO PARO NI A PALO' — 12",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/3b11f4ec-23b0-44eb-adca-63b220ff0478_rw_600.gif?h=5b39447656af3526a1b3bb2899b4df12",
        "title": "FESTIVAL NO PARO NI A PALO' — 13",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/0127e733-88c3-40ab-9ea9-cd089b8920fa_rw_600.gif?h=3277a12ffeeb9f39133891f76ee3ecb9",
        "title": "FESTIVAL NO PARO NI A PALO' — 14",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9430aeb7-ce9b-4133-abc4-e6c2057992d8_rw_600.gif?h=f93e694fa0a7aa7dae14005e53c6096e",
        "title": "FESTIVAL NO PARO NI A PALO' — 15",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/65cc2c30-850e-44b7-b4f5-936e72f56cb3_rwc_459x0x5320x4160x5320.jpg?h=5000fd5f328520e7c1652ab9f8dda19a",
        "title": "FESTIVAL NO PARO NI A PALO' — 16",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9c340943-3c8b-460c-a81e-f7c572711be6_rwc_85x0x1046x817x1046.jpg?h=58d8ac5b42fc1fcd95a05f57aa7612d8",
        "title": "FESTIVAL NO PARO NI A PALO' — 17",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ee8bf1c0-406d-4708-a7ec-0e6ee4a5c8fc_rwc_83x0x3683x2880x3683.jpg?h=4cda7bba0453b06be8e656db339ba896",
        "title": "FESTIVAL NO PARO NI A PALO' — 18",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/dcdefbe5-5dd2-401b-971b-5f4034f33072_rwc_83x0x3683x2880x3683.jpg?h=d4ef5e40e1684cb279079adf2831bc25",
        "title": "FESTIVAL NO PARO NI A PALO' — 19",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f8a78fbb-c7c9-4e1e-828b-fe10e570a14f_rwc_0x327x3000x2345x3000.jpg?h=a601d3e20516481bc1647c792bed73d1",
        "title": "FESTIVAL NO PARO NI A PALO' — 20",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/af518513-4197-4fce-983d-56dc7bd79f1a_rwc_0x327x3000x2345x3000.jpg?h=139323ff6d7606bf2234941eb5663151",
        "title": "FESTIVAL NO PARO NI A PALO' — 21",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5cc2f3bd-ec5f-423d-9fd0-abfdc3b6a183_car_202x158.jpg?h=2906976320b1b8429105bfbc18038633",
        "title": "FESTIVAL NO PARO NI A PALO' — 22",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/39cc5b4e-7a21-4238-ad72-5b851141f42d_rwc_180x0x1469x1149x1469.jpg?h=6c1bddd3060ebbbd8a16942768a8b69b",
        "title": "FESTIVAL NO PARO NI A PALO' — 23",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/25346034-c890-4f18-90f3-b9308fef3092_rwc_1003x615x1354x1058x1354.jpg?h=7bba9701596ec6396454f77b4398ac32",
        "title": "FESTIVAL NO PARO NI A PALO' — 24",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86633abd-80b2-4e1b-9c5e-578c2911422c_rwc_276x0x1381x1080x1381.jpg?h=6d4701e8db06bda28306b5bb742c8ab8",
        "title": "FESTIVAL NO PARO NI A PALO' — 25",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/209fe013-a640-476c-8449-863a2713d5fb.jpg?h=c60e4a82826bfa2bf748e0d1fd6417a8",
        "title": "FESTIVAL NO PARO NI A PALO' — 26",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a86cf9c6-947a-4979-8b7f-5aa3e7503d6c.jpg?h=e589fe3bae16f03d573764d7a0eff275",
        "title": "FESTIVAL NO PARO NI A PALO' — 27",
        "tag": "Diseño"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c00b7b64-3e4b-43d3-aa60-57c457b563bd.jpg?h=1af64cd4f6bd72944391ee7c00149809",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c6570da4-82a6-47e4-9a69-dabb0fe020c6_rw_1920.jpg?h=7c3c0fd63a8dbafc8fc8c0adc5cdb62b",
    "alt": "FOTOGRAFÍA IMPRESA — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c6570da4-82a6-47e4-9a69-dabb0fe020c6_rw_1920.jpg?h=7c3c0fd63a8dbafc8fc8c0adc5cdb62b",
        "title": "FOTOGRAFÍA IMPRESA — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/83e59436-2310-4bb3-8582-828c91274043_rw_1920.jpg?h=8b5f0507b684ef2e133e5ed463d3cb32",
        "title": "FOTOGRAFÍA IMPRESA — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cb223138-20b3-48f3-8805-f8f7899707b2_rw_1920.jpg?h=4a83cb62d2cb5a475b8062442c7c1877",
        "title": "FOTOGRAFÍA IMPRESA — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f3696c9c-047e-403d-8392-8c63557f8ac3_rw_1920.jpg?h=eb2b771dabeed6232fd0e1598470ac6e",
        "title": "FOTOGRAFÍA IMPRESA — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/87a4e220-99f8-443a-bc91-e79f21eecb22_rw_1920.jpg?h=2962fa29f04cf3f9515f7b7d09128f16",
        "title": "FOTOGRAFÍA IMPRESA — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/10af5cba-bc9d-4b77-9ef3-6e221d77cc51_rw_1920.jpg?h=aaccb67dbeafce80868ccbf78c05f528",
        "title": "FOTOGRAFÍA IMPRESA — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/20da1e56-6763-458b-b1f5-71f5de36c6bf_rw_1920.jpg?h=3585c4de8feecc0b8d097aec2255b6d0",
        "title": "FOTOGRAFÍA IMPRESA — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a8ed5ddf-fe6d-4591-8bcc-bb367890601a_rwc_52x0x1918x1500x1918.jpg?h=666a87e86229938b90cbd226291ef623",
        "title": "FOTOGRAFÍA IMPRESA — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86d9f2d2-1d90-46f2-9c44-90f4574018d6_rwc_124x0x2744x2146x2744.jpg?h=b0cd83b7934c2ba417e503a682ea593f",
        "title": "FOTOGRAFÍA IMPRESA — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/23b01832-1432-454e-a3c4-9a553b1089d8_rwc_0x409x1500x1172x1500.jpg?h=7b527e2f9d7508614f24c923b0abf1b7",
        "title": "FOTOGRAFÍA IMPRESA — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d2811cb8-7285-4e73-942f-3ccc75ba9aad_rwc_0x538x1500x1172x1500.jpg?h=6d50c547dd2c34d131253cf4eb9c489e",
        "title": "FOTOGRAFÍA IMPRESA — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a1034349-5a99-4bba-9610-c13c62bf613e_rwc_484x608x826x646x826.jpg?h=20c61e40f1ef4ef1a9e399a7bb85009b",
        "title": "FOTOGRAFÍA IMPRESA — 12",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d6b093f2-6b2b-4de9-aa03-87b210bfb232_rwc_0x347x1500x1172x1500.jpg?h=3d1f74ebeb6a431aac2d7ed4d5d070e7",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/10421a88-b68a-4707-a0bd-9d995556ab60_rw_1920.jpg?h=f0b4a84ddf0d1c27547da3041b42519b",
    "alt": "PRINT ROSARIO ES UN ECLIPSE — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/10421a88-b68a-4707-a0bd-9d995556ab60_rw_1920.jpg?h=f0b4a84ddf0d1c27547da3041b42519b",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/b6e92a56-5edd-4f07-81ca-2e4bd02202ab_rw_1920.jpg?h=04db49fa6747e07322bb656f33d00a00",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a6f9cd8c-5cba-459a-8b99-a53be5d1acd0_rw_1920.jpg?h=af992a9edbad96f36b37e151fd2438f4",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/5d0a5c6b-4a36-4bec-a59f-d72ac3faf8a9_rw_1920.jpg?h=b72434de1db88350ad7c1d37b1f11542",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7fccbe50-d25d-4a1c-8921-34c9a3fa2b04_rwc_273x437x883x690x883.jpg?h=88dde79a49fa55c020ada357ed5cae1e",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a4663cd2-4662-4e2e-bc1f-c63c302ab603_rwc_0x545x1500x1172x1500.jpg?h=14958dff3127c3f4b8c93e9f6decf75b",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a1034349-5a99-4bba-9610-c13c62bf613e_rwc_484x608x826x646x826.jpg?h=20c61e40f1ef4ef1a9e399a7bb85009b",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d6b093f2-6b2b-4de9-aa03-87b210bfb232_rwc_0x347x1500x1172x1500.jpg?h=3d1f74ebeb6a431aac2d7ed4d5d070e7",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a8ed5ddf-fe6d-4591-8bcc-bb367890601a_rwc_52x0x1918x1500x1918.jpg?h=666a87e86229938b90cbd226291ef623",
        "title": "PRINT ROSARIO ES UN ECLIPSE — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86d9f2d2-1d90-46f2-9c44-90f4574018d6_rwc_124x0x2744x2146x2744.jpg?h=b0cd83b7934c2ba417e503a682ea593f",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/51fecaf0-71a7-4490-83a6-544ed0b332dc_rw_1920.jpg?h=773c91ada0b0973cc66c6ffcda34e2ba",
    "alt": "ZINE INFIERNOS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/51fecaf0-71a7-4490-83a6-544ed0b332dc_rw_1920.jpg?h=773c91ada0b0973cc66c6ffcda34e2ba",
        "title": "ZINE INFIERNOS — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/2e16f839-3fba-4863-9ac8-7bf2e2c468a4_rw_1920.jpg?h=b9e6722091e0693a946c6034851ffa0d",
        "title": "ZINE INFIERNOS — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/17f833d6-7a88-42b4-83fc-04cd6d73522f_rw_1920.jpg?h=74702301139ca32a0b3778cc4378c973",
        "title": "ZINE INFIERNOS — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9a82966e-c0d3-4508-9df0-e55ee59d6b23_rw_1920.jpg?h=008893a4197689deab825e408822f2ce",
        "title": "ZINE INFIERNOS — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/ca5992b4-ce07-4438-a38f-fe0dc1801127_rw_1920.jpg?h=3f936aabb012bd93bd71161436b60d72",
        "title": "ZINE INFIERNOS — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/224ee991-7d72-47db-97e3-5520e47d84b2_rw_1920.jpg?h=c9150b0f56fcb3d7e0a4dd79577eed04",
        "title": "ZINE INFIERNOS — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/9b5da3f5-89b1-4376-9008-ccc2b42401e1_rw_1920.jpg?h=dfb4147b5c8f6482130c629b457c4c2d",
        "title": "ZINE INFIERNOS — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/f948cabc-a8a4-4b00-9bed-48bfe24e4615_rw_600.gif?h=25565c5e955e1bdde920558c18c8735d",
        "title": "ZINE INFIERNOS — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7fccbe50-d25d-4a1c-8921-34c9a3fa2b04_rwc_273x437x883x690x883.jpg?h=88dde79a49fa55c020ada357ed5cae1e",
        "title": "ZINE INFIERNOS — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a4663cd2-4662-4e2e-bc1f-c63c302ab603_rwc_0x545x1500x1172x1500.jpg?h=14958dff3127c3f4b8c93e9f6decf75b",
        "title": "ZINE INFIERNOS — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/23b01832-1432-454e-a3c4-9a553b1089d8_rwc_0x409x1500x1172x1500.jpg?h=7b527e2f9d7508614f24c923b0abf1b7",
        "title": "ZINE INFIERNOS — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d2811cb8-7285-4e73-942f-3ccc75ba9aad_rwc_0x538x1500x1172x1500.jpg?h=6d50c547dd2c34d131253cf4eb9c489e",
        "title": "ZINE INFIERNOS — 12",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a1034349-5a99-4bba-9610-c13c62bf613e_rwc_484x608x826x646x826.jpg?h=20c61e40f1ef4ef1a9e399a7bb85009b",
        "title": "ZINE INFIERNOS — 13",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d6b093f2-6b2b-4de9-aa03-87b210bfb232_rwc_0x347x1500x1172x1500.jpg?h=3d1f74ebeb6a431aac2d7ed4d5d070e7",
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
    "mainImage": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/061d2b4a-3226-49f2-a481-7f5d198cb7f4_rw_1920.jpg?h=1e2b4482670b67a41f77c8b3cb877b8a",
    "alt": "ZINE BALLET PARA LAS MASAS — Guido Castellotti",
    "videos": [],
    "gallery": [
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/061d2b4a-3226-49f2-a481-7f5d198cb7f4_rw_1920.jpg?h=1e2b4482670b67a41f77c8b3cb877b8a",
        "title": "ZINE BALLET PARA LAS MASAS — 01",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1c65d6f7-fcaf-4c4a-8259-aae493b60e19_rw_600.gif?h=24810395442140197fe09943ab8a6333",
        "title": "ZINE BALLET PARA LAS MASAS — 02",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/1bc52acb-51ab-4874-9f69-8d2769fe106b_rw_1920.jpg?h=22fde1df359794a339b18f40175aa489",
        "title": "ZINE BALLET PARA LAS MASAS — 03",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/369b8b19-54f4-407d-bb71-854004afd715_rw_1920.jpg?h=87f65959d4a37f0859ef6962bc289977",
        "title": "ZINE BALLET PARA LAS MASAS — 04",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/c09971ec-17fd-45f4-80dc-1e3338c479b2_rw_1920.jpg?h=a3b02a21e826eb68456a8d148923e118",
        "title": "ZINE BALLET PARA LAS MASAS — 05",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/cbd75709-5672-41dd-b835-12e07302c7f5_rw_1920.jpg?h=69f318199718a9594347c494e6034838",
        "title": "ZINE BALLET PARA LAS MASAS — 06",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/23b01832-1432-454e-a3c4-9a553b1089d8_rwc_0x409x1500x1172x1500.jpg?h=7b527e2f9d7508614f24c923b0abf1b7",
        "title": "ZINE BALLET PARA LAS MASAS — 07",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/d2811cb8-7285-4e73-942f-3ccc75ba9aad_rwc_0x538x1500x1172x1500.jpg?h=6d50c547dd2c34d131253cf4eb9c489e",
        "title": "ZINE BALLET PARA LAS MASAS — 08",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a8ed5ddf-fe6d-4591-8bcc-bb367890601a_rwc_52x0x1918x1500x1918.jpg?h=666a87e86229938b90cbd226291ef623",
        "title": "ZINE BALLET PARA LAS MASAS — 09",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/86d9f2d2-1d90-46f2-9c44-90f4574018d6_rwc_124x0x2744x2146x2744.jpg?h=b0cd83b7934c2ba417e503a682ea593f",
        "title": "ZINE BALLET PARA LAS MASAS — 10",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/7fccbe50-d25d-4a1c-8921-34c9a3fa2b04_rwc_273x437x883x690x883.jpg?h=88dde79a49fa55c020ada357ed5cae1e",
        "title": "ZINE BALLET PARA LAS MASAS — 11",
        "tag": "Obra Impresa"
      },
      {
        "src": "https://cdn.myportfolio.com/4267d3ad-5886-43bf-9f82-e73bc9998098/a4663cd2-4662-4e2e-bc1f-c63c302ab603_rwc_0x545x1500x1172x1500.jpg?h=14958dff3127c3f4b8c93e9f6decf75b",
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

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showLightboxImage((currentLightboxIndex - 1 + activeGallery.length) % activeGallery.length);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showLightboxImage((currentLightboxIndex + 1) % activeGallery.length);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
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
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  showLightboxImage(index);
}

function closeLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
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
