export default {
  global: {
    componenteFormativo: 'Fundamentos del vestuario II',
    descripcionCurso:
      'Es necesario conceptualizar respecto a todas las bases de conocimiento en torno a la teoría del color y la ergonomía de las prendas, dos componentes básicos a tener en cuenta en el desarrollo de la colección y la elaboración de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },

      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Teoría del Color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Fundamentación del color: concepto, características, factores que determinan el color, percepción del color, objetivos. ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Clasificación, definición y mezcla de los colores: colores primarios, secundarios, terciarios, intermedios y complementarios.',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Círculo cromático',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Escalas de color: armonías de color, contrastes, definición y obtención de volumen',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'El color y sus pigmentos: técnicas del color y sus aplicaciones',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Psicología y simbología del color: definición y características',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Significado del color en la moda: definición, características y funcionalidad en prendas de vestir',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo:
              'Carta de color: base, acentos, neutros, obtención del color de acuerdo al concepto y la tendencia',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis Funcional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Conceptos y definiciones de la función del vestuario con relación al cuerpo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El vestuario y la funcionalidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Funcionalidad y estética del vestuario',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Funcionalidad y comodidad: ergonomía del vestuario',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Funcionalidad y modelación del cuerpo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Funcionalidad y producción técnica de la prenda',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  referencias: [
    {
      referencia:
        'Aitex, Generaliitat Valenciana, Instituto Valenciano de Competitividad Empresarial, & Regional, F. E. de D. (s.f.). Informe de resultados TECMOD. Aranaga, M. (2014). Porque nos vestimos [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=prrhTLfMKNg',
    },
    {
      referencia:
        'Argentubetv. (2014). Ropa blindada: un hombre recibió dos disparos - YouTube. YouTube. ',
      link: 'https://www.youtube.com/watch?v=-HjTNGLh35s',
    },
    {
      referencia:
        'ArtGio (2014). Colección de 21 videos de Teoría del color. [canal de video] YouTube. ',
      link:
        'https://www.youtube.com/watch?v=9XlC5nxKSaw&list=PLebxDwZTxZebk_a6E1LroiN4Bj_wCpo8l',
    },
    {
      referencia:
        'Baena, M. & Baquero, M. (2006). El confort como una característica importante en el diseño de prendas. Actas de Diseño N°1.',
    },
    {
      referencia:
        'Baquero, M. & Baena, M. (2007). La prenda como producto de vestuario. Funcionalidad y comodidad. Iconofacto, 3(4), 96–99.',
    },
    {
      referencia:
        'Barraza, A. (2010). La Antropometría en la Moda. Criterios de identificación del consumidor | Catálogo Digital de Publicaciones DC. Actas de Diseño. ',
      link:
        'https://fido.palermo.edu/servicios_dyc/publicacionesdc/vista/detalle_articulo.php?id_libro=147&id_articulo=5990',
    },
    {
      referencia:
        'Beginners. (2018). Water Soluble Graphites & Charcoal Pencil [video] YouTube. ',
      link: 'https://youtu.be/1_2nfvIwuHY',
    },
    {
      referencia:
        'Bitanga, M. (2019, April 2). Vollebak Black Squid Jacket | HiConsumption. Hiconsumption. ',
      link: 'https://hiconsumption.com/vollebak-black-squid-jacket/',
    },
    {
      referencia:
        'Canal de Sociología. (2016). Función y Forma. Una mirada al diseño y la innovación en España [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=gDdecWi3Cqo',
    },
    {
      referencia:
        'Castillero, O. (s.f.). Ergonomía: qué es y cuáles son sus 4 tipos y funciones. Psicología y Mente. Retrieved July 13, 2020, from ',
      link: 'https://psicologiaymente.com/miscelanea/ergonomia',
    },
    {
      referencia:
        'CUAED, & UNAM. (2019). Estética y función en el diseño [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=VwcEM7yH_BY&t=49s',
    },
    {
      referencia:
        'Decker Kris (2017). Los fundamentos de la comprensión de la teoría del color. ',
      link:
        'https://99designs.com.co/blog/tips/the-7-step-guide-to-understanding-color-theory/',
    },
    {
      referencia: 'Definicion.de. (s.f.). Definicion.de. ',
      link: 'https://definicion.de/sastre/',
    },
    {
      referencia:
        'Dinngo. (s.f.). Design Thinking en Español. Designthinking. ',
      link: 'http://designthinking.es/inicio/index.php',
    },
    {
      referencia:
        'Durán, V. A. (2015). Prendas funcionales Indumentaria para niños con parálisis cerebral con cuadriplejia. Universidad de Palermo.',
    },
    {
      referencia:
        'El país. (2018). La revolución de la ropa inteligente | Tecnología [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=1s8DXEXFDY8&feature=youtu.be',
    },
    {
      referencia:
        'Fájate® Colombia. (2020a). Delié es mayor confort [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=Zq-fE5zyx1I',
    },
    {
      referencia: 'Fájate® Colombia. (2020b). Fájate for men [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=PDAc7BXifAM',
    },
    {
      referencia:
        'Farlex. (s.f.). The free dictionary. The Free Dictionary by Farlex. Retrieved July 6, 2020, from ',
      link: 'https://es.thefreedictionary.com/cosmética',
    },
    {
      referencia:
        'Fernández, C. & Velázquez, M. (2013). Experiencias y prácticas creativas alrededor del vestuario – [PROYECTOMEDUSSA] Claudia Fernández-Silva. Proyecto Medussa. ',
      link:
        'https://proyectomedussa.com/experiencias-y-practicas-creativas-alrededor-del-vestuario/',
    },
    {
      referencia:
        'Fernández, C. (2013). El vestuario como identidad, del gesto personal al colectivo – [PROYECTOMEDUSSA]. Proyecto Medussa. ',
      link:
        'https://proyectomedussa.com/el-vestuario-como-identidad-del-gesto-personal-al-colectivo/',
    },
    {
      referencia:
        'Fernández, C. (2013). El vestido como proyecto social del cuerpo. Congreso Internacional de Ciencias Sociales Universidad Pontificia Bolivariana - Memorias, 448–463.',
    },
    {
      referencia:
        'Fernández, C. & Echeverri, A. (2013). El vestido como vehículo de la transformación del cuerpo – [PROYECTOMEDUSSA] Claudia Fernández-Silva. Proyecto Medussa. ',
      link:
        'https://proyectomedussa.com/el-vestido-como-vehiculo-de-la-transformacion-del-cuerpo/',
    },
    {
      referencia:
        'Fernández, G. (2016). Comportamientos de la moda y la imagen en tiempos contemporáneos. Universidad Nacional Autónoma de México.',
    },
    {
      referencia:
        'Fernández, J. (s.f.). La ropa inteligente disponible en el deporte. Tecnología Del Futuro. ',
      link:
        'https://tecnologiadelfuturo.es/tecnologia-deporte/ropa-inteligente-disponible-en-el-deporte/',
    },
    {
      referencia:
        'Fútbol Emotion. (2014). Ropa térmica para el futbolista SP [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=TW_EP9gr8ro',
    },
    {
      referencia:
        'Geringer, de Nieves, and Soto (2001). La moda: color, estilo y diseño (3a. ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Gonzalez Gonzalez, A. M. (2008). Distinción social y moda. EUNSA. ',
      link: 'https://elibro.net/es/lc/senavirtual/titulos/47429',
    },
    {
      referencia:
        'H&M. (2013a). H&M for Brick Lane Bikes: Coming together [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=mzxS3vl0418',
    },
    {
      referencia:
        'H&M. (2013b). H&M for Brick Lane Bikes: Men’s Fashion - Look Book  [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=SevMbAEKV34',
    },
    {
      referencia:
        'Healthia. (s.f.). Ropa Inteligente l Healthia.es. Healthia. ',
    },
    {
      referencia:
        'Hincapié, Luis Alfonso. (2014). Teoría del Color. SENA, Itagüí, Antioquia',
    },
    {
      referencia:
        'Jones, S. J. (2002). Diseño de moda (J. Santamaría  tr (Ed.)). Hong Kong: Blume.',
    },
    {
      referencia:
        'La indumentaria ¿Qué “decimos” con nuestra forma de vestir? (s.f.). ',
      link:
        'https://www.protocolo.org/social/vestuario/la-indumentaria-que-decimos-con-nuestra-forma-de-vestir.html',
    },
    {
      referencia:
        'La Nación. (2011). Ropa infantil funcional y ecológica, con libros incluidos [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=CWAKQ9BOJP0 ',
    },
    {
      referencia:
        'LAPoliceGear. (2017). LA Police Gear - Atlas Tactical Pant with STS [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=9c804j6JkcM',
    },
    {
      referencia:
        'Leonisa Channel. (2019). This Is The Shapewear You MUST Have! [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=efH0S6geVwk',
    },
    {
      referencia:
        'Leonisa Channel. (2020a). LEONISA | Leggings de control [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=wrtQVm14h1Q',
    },
    {
      referencia:
        'Leonisa Channel. (2020b). Vestido de baño con control de abdomen [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=zpat2C2yQbgm',
    },
    {
      referencia:
        'López, J. (2010). Perversa segunda piel: Ética, estética y política en el vestido según Jean-Jacques Rousseau. Cuadernos Dieciochistas, 11(11), 235–270.',
    },
    {
      referencia:
        'Matus, N. (2017). Ejemplos de ergonomía en el vestuario y la moda. Televisión Universidad de Concepción. ',
      link:
        'https://www.tvu.cl/comunidades/modas/2017/08/02/ejemplos-de-ergonomia-en-el-vestuario-y-la-moda.html',
    },
    {
      referencia: 'MIM (2016). Teoría del color II. El círculo cromático. ',
      link:
        'https://www.mlmonferrer.es/teoria-del-color-ii-circulo-cromatico/#:~:text=El%20c%C3%ADrculo%20crom%C3%A1tico%20es%20tradicional,primer%20c%C3%ADrculo%20a%20todo%20color',
    },
    {
      referencia:
        'Munari, B. (2016a). ¿Cómo nacen los objetos?: apuntes para una metodología proyectual. Editorial Gustavo Gili. ',
      link: 'https://elibro.net/es/lc/senavirtual/titulos/45611',
    },
    {
      referencia:
        'Munari, B. (2016b). Diseño y comunicación visual (2a. ed.). Editorial Gustavo Gili. ',
      link: 'https://elibro.net/es/lc/senavirtual/titulos/45559',
    },
    {
      referencia:
        'Neumivakin, V. (s.f.). La Moda: ¿Qué es? Origen, Sistema de signos y Comunicación no verbal. Imagen de Mujer. ',
      link: 'https://imagendemujer.com/la-moda-como-lenguaje/',
    },
    {
      referencia:
        'Pacheco, D. (2019). Exploración de la carga simbólica en prendas de vestir que otorgaron poder a la mujer en el proceso de liberación femenina. Universidad Pontificia Bolivariana.',
    },
    {
      referencia:
        'Parra, C. (2013). ¿Qué es el círculo cromático y cuál es su importancia en el diseño? ',
      link: 'https://rockcontent.com/es/blog/circulo-cromatico/',
    },
    {
      referencia:
        'Parramón Paidoribo, E. (2012). Guía para principiantes. Color y creatividad. Parramón Paidotribo S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/123856?page=13',
    },
    {
      referencia:
        'Parramón Paidoribo, E. (2017). Todo sobre la técnica del color. Parramón Paidotribo S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/123958',
    },
    {
      referencia: 'Pce-ibérica. (s.f.). Sensórica. Pce-Iberica.Es. ',
      link:
        'https://www.pce-iberica.es/instrumentos-de-medida/sistemas/sensorica.htm',
    },
    {
      referencia: 'Pramadita, K. (s.f.). Ergonomic Fashion. Pinterest. ',
      link: 'https://id.pinterest.com/krisnapramadita/ergonomic-fashion/',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia: 'Rodríguez, D. (2015). Diseño para no diseñadores: color. ',
      link:
        'https://www.linkedin.com/learning/diseno-para-no-disenadores-color/como-percibimos-el-color?autoplay=true&resume=false&u=84303994',
    },
    {
      referencia:
        'SENA, Gaviria, F., Fernández, K., Henao, J., Cock, J., Vega, L., Osorio, M., & Botero, L. (2018). AntropometriaApp. Grupo de Investigación INAMOD. ',
      link: 'http://antropometria.herokuapp.com/',
    },
    {
      referencia:
        'Sevilla, G., & Echeverri, Á. M. (2018). El diseño inclusivo en el producto vestimentario. Proyecto funciona- lidades diversas. Seminario internacional de investigación en diseño, 222–229. https://doi.org/ISSN: 2256-4276 WEB-ONLINE ISSN: 2256-4268 CD-ROM',
    },
    {
      referencia:
        'Stanford Graduate School of Business. (2017).  Dress to Communicate [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=_tAyf9tOkW4',
    },
    {
      referencia:
        'Suny, T. (2018). EL CUERPO VESTIDO EN LA SOCIEDAD OCCIDENTAL. Temas de Psicoanálisis.',
    },
    {
      referencia:
        'Tapia, E. (2018). Ergonomía en la vestimenta | Tendencias compartidas. Moda en el diseño. Modaeneldiseno.Blogspot.Com. ',
      link: 'http://modaeneldiseno.blogspot.com/2018/11/articulo_62.html',
    },
    {
      referencia:
        'Universidad de Palermo (2010). La comunicación y el simbolismo del color. ',
      link:
        'https://fido.palermo.edu/servicios_dyc/publicacionesdc/vista/detalle_articulo.php?id_libro=147&id_articulo=6002',
    },
    {
      referencia: 'Universidad Eafit (2016). ¿Cómo se hacen los colores? ',
      link:
        'http://www.eafit.edu.co/ninos/reddelaspreguntas/fisica/Paginas/como-se-hacen-los-colores.aspx',
    },
    {
      referencia:
        'Urbina, I. (2011). Moda + Diseño Industrial: objetos para usar, tecnologías diversas - di-conexiones. DI-CONEXIONES. ',
      link:
        'https://www.di-conexiones.com/la-moda-diseno-industrial-objetos-para-usar-tecnologias-diversas/ ',
    },
    {
      referencia:
        'Vendrell, J. (2016).  Ropa técnica y minimalista para viajar cómodo [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=C--IDz6VPgc',
    },
    {
      referencia:
        'Veneziani, M. (2011). La imagen de la moda. Editorial Nobuko. ',
      link: 'https://elibro.net/es/lc/senavirtual/titulos/77684',
    },
    {
      referencia:
        'Verde, M. (2017). Códigos de vestimenta del futuro | Miguel Verde | TEDxUNAMAcatlán [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=uqQwKOYZn9w',
    },
    {
      referencia:
        'Victoriano. (2011). Antropometría y ergonomía aplicada al diseño de indumentaria. Universo de La Moda. ',
      link: 'http://universodelamoda-dv.blogspot.com/2011/07/ergonomia.html',
    },
    {
      referencia: 'Vsauce. (2013). Why Do We Wear Clothes? [video] YouTube. ',
      link: 'https://www.youtube.com/watch?v=E4HGfagANiQ',
    },
    {
      referencia:
        'What Dreams May Come. (1998). Película de Vicent Ward [video] YouTube. ',
      link: 'https://youtu.be/IXOGgu0MuCs',
    },
  ],
  complementario: [
    {
      texto:
        'aitex, Generaliitat Valenciana, Instituto Valenciano de Competitividad Empresarial, & Regional, F. E. de D. (s.f.). Informe de resultados TECMOD.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_R _ Informe_resultados_TECMOD.pdf',
    },
    {
      texto:
        'Baena & Baquero, (2006). El confort como una característica importante en el diseño de prendas.',
      tipo: 'PDF',
      descarga:
        '/downloads/ElConfortComoUnaCaracteristicaImportanteEnElDiseno-5204321.pdf',
    },
    {
      texto:
        'Baquero Álvarez & Baena Restrepo. (2007). La prenda como producto de vestuario. Funcionalidad y comodidad.',
      tipo: 'PDF',
      descarga:
        '/downloads/LaPrendaComoProductoDeVestuarioFuncionalidadYComod-5204378.pdf',
    },
    {
      texto: 'Desconocido (s.f.) Design',
      tipo: 'GIF',
      descarga: '/downloads/design.gif',
    },
    {
      texto:
        'Durán, V. (2015). Prendas funcionales Indumentaria para niños con parálisis cerebral con cuadriplejia.',
      tipo: 'PDF',
      descarga:
        '/downloads/Prendas_funcionales_indumentaria_para_ninos_con_paralisis_cerebral_con_cuadriplejia.pdf',
    },
    {
      texto:
        'Grupo de investigación en diseño; Universidad Pedagógica y Tecnológica de Colombia, (2018). Seminario de investigación en diseño-Taller 11.',
      tipo: 'PDF',
      descarga: '/downloads/sid9.pdf',
    },
    {
      texto:
        'López, Ll., (2011). Perversa segunda piel. Ética, estética y política en el vestuario según Jean-Jacques Rousseau.',
      tipo: 'PDF',
      descarga: '/downloads/perversa_segunda_piel.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste',
      significado:
        '1. m. Acción y efecto de ajustar o ajustarse. 2. m. Encaje o medida proporcionada que tienen las partes de que se compone algo (Real Academia Española, s.f.). <br>“acción y efecto de acomodar”. Es fruto de la suma de dos componentes claramente reconocibles: -El prefijo “ad-”, que es equivalente a “hacia”. -El adjetivo “iustus”, que es sinónimo de “justo” (Definicion.de, s.f.)',
    },
    {
      termino: 'Anatómico',
      significado:
        '1. adj. Perteneciente o relativo a la anatomía; 2. adj. Dicho de un objeto: construido para que se adapte o ajuste perfectamente al cuerpo humano o a alguna de sus partes. Asientos anatómicos. Prendas anatómicas (Real Academia Española, s.f.).',
    },
    {
      termino: 'Antibacteriano',
      significado:
        'Dicho de un medicamento, de una sustancia, de un procedimiento, etc.: Que se utiliza para combatir las bacterias (Real Academia Española, s.f.).',
    },
    {
      termino: 'Antimicrobiano',
      significado: 'Que combate los microorganismos o evita su aparición.',
    },
    {
      termino: 'Armonía',
      significado:
        'Equilibrio, proporción y correspondencia adecuada entre las diferentes cosas de un conjunto.',
    },
    {
      termino: 'Comodidad',
      significado:
        '1. f. Cualidad de cómodo. 2. f. Cosa necesaria para vivir a gusto y con descanso (Real Academia Española, s.f.). <br> Condición de cómodo: sencillo, conveniente, provechoso. El término, que proviene del vocablo latino commodĭtas, suele hacer referencia a aquello que se necesita para estar a gusto (Definicion.de, s.f.).',
    },
    {
      termino: 'Complemento',
      significado:
        'Accesorio de la indumentaria femenina o masculina (Real Academia Española, s.f.). <br> Del latín complementum, complemento es aquello que se añade a algo para mejorarlo o hacerlo íntegro. El término tiene diversos usos según el contexto (Definicion.de, s.f.).',
    },
    {
      termino: 'Color',
      significado:
        'Impresión que producen en la retina los rayos de luz reflejados y absorbidos por un cuerpo, según la longitud de onda de estos rayos.',
    },
    {
      termino: 'Confort',
      significado:
        'Bienestar o comodidad material (Real Academia Española, s.f.). <br>Confort es un término francés aceptado por el diccionario de la Real Academia Española (RAE) que procede del inglés confort. Se trata de aquello que brinda comodidades y genera bienestar al usuario. El confort puede estar dado por algún objeto físico (un sillón, un colchón, un coche) o por alguna circunstancia ambiental o abstracta (Definicion.de, s.f.).',
    },
    {
      termino: 'Fisiológico',
      significado:
        'Perteneciente o relativo a la fisiología (Real Academia Española, s.f.) <br>Fisiología: ciencia que tiene por objeto el estudio de las funciones de los seres orgánicos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Función',
      significado:
        '1. f. Capacidad de actuar propia de los seres vivos y de sus órganos, y de las máquinas o instrumentos. 2. f. Tarea que corresponde realizar a una institución o entidad, o a sus órganos o personas (Real Academia Española, s.f.).<br>1. s. f. Adecuación de la forma externa y de la estética de una cosa, en especial de muebles, edificios, automóviles y cualquier otra cosa de la que se sirve el hombre, a la función que debe desempeñar (Farlex, s.f.).',
    },
    {
      termino: 'Funcionalidad',
      significado:
        '1. f. Cualidad de funcional (Real Academia Española, s.f.). ',
    },
    {
      termino: 'Ignífugo',
      significado:
        'Que no se inflama ni propaga la llama o el fuego (Real Academia Española, s.f.).',
    },
    {
      termino: 'Luminosidad',
      significado:
        'Es una propiedad de los colores. Ella da una indicación sobre el aspecto luminoso del color estudiado.',
    },
    {
      termino: 'Matiz',
      significado:
        'Variación leve de tono, grado de luminosidad que puede presentar un mismo color.',
    },
    {
      termino: 'Modelación',
      significado:
        'Sustantivo femenino. Es un vocabulario se refiere como la acción y resultado de modelar o modelarse alguna cosa o elemento, en dar la forma de barro, cera o cualquier material o cosa blanda una figura, forma y adorno o presentar de manera exacta el relieve de las figuras (Definicion.de, s.f.).',
    },
    {
      termino: 'Moodboard',
      significado:
        'Es la herramienta que utiliza el diseñador de la moda para hacerse una idea de lo que va a crear, este incluye todas las ideas a involucrar en una colección. Normalmente es una composición que incluye una serie de fotografías y muestras de todos los elementos y detalles que hagan posible la inspiración.',
    },
    {
      termino: 'Pigmento',
      significado:
        'Sustancia química pulverizable, insoluble en agua y en aceite, generalmente coloreada, que se usa en la fabricación de pinturas.',
    },
    {
      termino: 'Ropa inteligente',
      significado:
        'Es el resultado de la búsqueda de la industria textil de adaptar las piezas de vestir a las exigencias de este siglo mediante el uso de sensores incorporados en las telas (Healthia, s.f.).',
    },
    {
      termino: 'Saturación',
      significado:
        'Colorido o pureza, es la intensidad de un matiz específico. Se basa en la pureza del color; un color muy saturado tiene un color vivo e intenso, mientras que un color menos saturado parece más descolorido y gris. Sin saturación, un color se convierte en un tono de gris.',
    },
    {
      termino: 'Sensórica',
      significado:
        'Sensórica es un concepto genérico que hace referencia a diferentes tipos de sensórica para múltiples aplicaciones en la industria e investigación de sensores. Bajo esta palabra de sensórica se entiende tanto las unidades que emite una señal analógica, como las unidades que emite una señal binaria (encendido o apagado). En todos aquellos lugares donde no sea posible detectar magnitudes eléctricas se requiere la sensórica. Convierte una magnitud física en una magnitud eléctrica. Encontrará en nuestra gama de productos sensórica para diferentes magnitudes físicas. En las siguientes categorías encontrará sensores para diferentes aplicaciones. Los sensores de temperatura son tal vez los más conocidos y usados. Los Pt100 o termoelementos es sensórica que tienen un campo amplio de aplicaciones en la industria y la investigación. Como consecuencia, existe también una amplia variedad. Además, para aplicaciones especiales se puede fabricar sensores específicos. Otro campo importante de la sensórica son los medidores de presión. También aquí la oferta de sensores de presión es muy grande debido a la gran variedad de ámbitos de uso. En de caso que no encuentre el sensor adecuado, llámenos. La gama de productos se completa con indicadores de nivel y sensores de fuerza, así como electrodos pH y Redox. Para que pueda incluir los sensores en su proceso, la mayoría de los sensores disponen de componentes adicionales para la adaptación (Pce-ibérica, s.f.).',
    },
    {
      termino: 'Simbiótica',
      significado:
        'Perteneciente o relativo a la simbiosis (Real Academia Española, s.f.). <br> Asociación de individuos animales o vegetales de diferentes especies, sobre todo si los simbiontes sacan provecho de la vida en común (Real Academia Española, s.f.).',
    },
    {
      termino: 'Talla',
      significado:
        'Medida convencional usada en la fabricación y venta de prendas de vestir (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tonos',
      significado:
        'Los colores descienden del oscuro al color definido (por ejemplo, del negro al azul). Usualmente, colores con el mismo tono son diferenciados con adjetivos que se refieren a su luminosidad y/o saturación: azul claro, azul pastel, azul vivo.',
    },
    {
      termino: 'Valor',
      significado:
        'Cualidad o conjunto de cualidades por las que una  cosa es apreciada o bien considerada.',
    },
    {
      termino: 'Volumen',
      significado:
        'Es básicamente la propiedad que tiene el color, es la capacidad de representar gráficamente la tridimensionalidad utilizando el tono, el tinte, el color, para asegurar que se visualice el contenido de la forma que se quiere graficar.',
    },
  ],

  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Fabio Andrés Gaviria',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Idian Fernando López Agudelo',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Julieth Paola Vital',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Luis Alfonso Hincapié Echeverri',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'Ruth Elena Morales Ríos',
        cargo: 'Instructora ',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      // {
      //   nombre: 'Adriana Marcela Suárez Eljure',
      //   cargo: 'Producción audiovisual',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      // {
      //   nombre: 'Gilberto Junior Rodriguez Rodriguez',
      //   cargo: 'Producción audiovisual',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      // {
      //   nombre: 'Lady Adriana Ariza Luque',
      //   cargo: 'Producción audiovisual',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      // {
      //   nombre: 'Nelson Iván Vera Briceño',
      //   cargo: 'Producción audiovisual',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      // {
      //   nombre: 'Wilson Andrés Arenales Caceres',
      //   cargo: 'Producción audiovisual',
      //   centro:
      //     'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      // },
      // {
      //   nombre: 'Zuleidy Maria Ruiz Torres',
      //   cargo: 'Producción audiovisual',
      //   centro: 'Centro de Comercio y Servicios - Regional Tolima',
      // },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
