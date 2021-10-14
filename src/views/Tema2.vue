<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Análisis funcional
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center
          .col-lg-8
            p El <b><span class='txt-1'>concepto de funcionalidad</span></b> en cuanto al vestuario, ha cambiado a través de la historia de la humanidad. En un comienzo la función del vestuario fue proteger de las condiciones climáticas, animales o factores externos. 
            p Luego, se le fueron adicionando <b><span class='txt-1'>funciones extras</span></b> que permitieron la comunicación por medio de los códigos de vestir.
             p Posteriormente, tras el <b><span class='txt-1'>estudio de las relaciones físicas</span></b> del ser humano con su entorno, a partir de la ergonomía, se establecen conceptos de <b><span class='txt-1'>modelación y comodidad </span></b>del vestuario, dando como resultado prendas de vestir adecuadas a la <b><span class='txt-1'>forma y capacidades</span></b> del cuerpo humano.
            p En la actualidad, al implementar las nuevas tecnologías, se han logrado materiales con funciones adicionales y procesos de producción tecnológicos que dan paso a <b><span class='txt-1'>prendas con protección </span></b>(antibalas, ignifugas, a los rayos UV, antibacterianas, antimicrobianas), <b><span class='txt-1'>usos comunicativos</span></b> (luces led, cambios de color), que adicionan dispositivos de la sensórica que permiten <b><span class='txt-1'>monitorear signos vitales </span></b>(temperatura, ritmo cardiaco, presión arterial), entre otros nuevos usos de la ropa.

          .col-lg-4.mb-5          
            figure.py-3
              img.img-350.img-c(src='@/assets/tema2/img-1.svg') 

    separador
    #t_2_1.titulo-segundo
      h2 2.1 Conceptos y definiciones de la función del vestuario con relación al cuerpo 
    .row.justify-content-around.align-items-center.mb-5 
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center      
          figure.py-3
            img.img-c(src='@/assets/tema2/img-2.svg') 
          figcaption Nota. (Adaptado de Cora, V., (2011); Fernández-Dilva & Velásquez., (2013); C Fernández (2013); González G., (2008); Jones (2002).
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="<b><span class='txt-1'>Vídeo 1. </span></b> <br>¿Por qué nos vestimos?")
        .row
          .col-lg
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/prrhTLfMKNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .py-4.py-md-5(titulo="<b><span class='txt-1'>Vídeo 2. </span></b> <br>Why Do We Wear Clothes? ")
        .row
          .col-lg
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/E4HGfagANiQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.justify-content-around.align-items-center.fnd-4.mb-5

      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_8_Diseno_para_no_disenadores_color.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p El vestuario como identidad, del gesto personal al colectivo.  
            
    separador
    #t_2_2.titulo-segundo
      h2 2.2 El vestuario y la funcionalidad
    p.mb-5 Actualmente, las metodologías de diseño proyectual se centran en las personas y sus requerimientos, desde sus tres ejes: comunicación, función y producción. La funcionalidad de las prendas de vestir, se refiere a que estén hechas para la facilidad, utilidad y comodidad al momento de ser usadas. Es decir, según el uso que se le dará y quién la usará se tendrá que configurar o planear de una u otra forma.

    .row.justify-content-around.align-items-center.mb-5 
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center   
          figure.py-4
            img.img-c(src='@/assets/tema2/img-4-.svg')
          figcaption Nota. Adaptado de Veneziani (2011), Dinngo (s.f.); Munari (2016a, 2016b)

    TabsA.color-secundario.mb-5
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 1. Estética y función en el diseño.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/VwcEM7yH_BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 2. Función y forma.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/gDdecWi3Cqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 3. La Police Gear. Atlas tactical pant with STS.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/9c804j6JkcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 4. Ropa técnica y minimalista para viajar cómodo.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/C--IDz6VPgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 5. Ropa términca para futbolistas.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/TW_EP9gr8ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 6. Ropa infantil funcional y ecológica.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/CWAKQ9BOJP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 7. H&M for brick lane bikes: coming together.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/mzxS3vl0418" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .tarjeta.color-primario--borde.p-4(titulo="Vídeo 8. H&M for brick lane bikes: men's fashion.")
        .row
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/SevMbAEKV34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                                                                                    
            
    separador
    #t_2_3.titulo-segundo
      h2 2.3 Funcionalidad y estética del vestuario
    .row.justify-content-around.align-items-center.mb-5 
      .col-lg-10.align-self-center
        .row.justify-content-around.align-items-center   
          figure.py-4
            img.img-c(src='@/assets/tema2/img-3.svg')
          figcaption Nota. Adaptado de Veneziani, M. (2011); Fernández, G. (2016); González, G. (2008); Neumivakin. (s.f).; Pacheco. (2019).


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_tAyf9tOkW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      
    .row.justify-content-around.align-items-center
      .col-lg-6
        a.anexo.mb-4(:href="('https://www.protocolo.org/social/vestuario/la-indumentaria-que-decimos-con-nuestra-forma-de-vestir.html')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p El vestuario como identidad, del gesto personal al colectivo.  

    separador
    #t_2_4.titulo-segundo
      h2 2.4 Funcionalidad y comodidad: ergonomía del vestuario

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        figure.py-4
          img.img-450.img-c(src='@/assets/tema2/img-5.svg')
      .col-md-6.col-lg.mb-5.mb-lg-0
        figure.py-4
          img.img-450.img-c(src='@/assets/tema2/img-6.svg')
      .col-md-6.col-lg.mb-5.mb-lg-0
        figure.py-4
          img.img-450.img-c(src='@/assets/tema2/img-7.svg')
  
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        a.anexo.mb-4(:href="('https://www.tvu.cl/comunidades/modas/2017/08/02/ejemplos-de-ergonomia-en-el-vestuario-y-la-moda.html')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Ergonomía en el vestuario y la moda
      .col-md-6.col-lg.mb-5.mb-lg-0
        a.anexo.mb-4(:href="('https://psicologiaymente.com/miscelanea/ergonomia')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Qué es y cuáles son sus 4 tipos y funciones 
      .col-md-6.col-lg.mb-5.mb-lg-0
        a.anexo.mb-4(:href="('https://id.pinterest.com/krisnapramadita/ergonomic-fashion/')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Ergonomic Fashion 
      .col-md-6.col-lg.mb-5.mb-lg-0
        a.anexo.mb-4(:href="('http://antropometria.herokuapp.com/')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p AntropometriaApp 
      .col-md-6.col-lg.mb-5.mb-lg-0
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_R _ Informe_resultados_TECMOD')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p TECMOD 
    separador
    #t_2_5.titulo-segundo
      h2 2.5 Funcionalidad y modelación del cuerpo    
    .row.justify-content-around.align-items-center
      .col-lg-6.align-self-center
        figure.py-4
            img.img-c(src='@/assets/tema2/img-8.svg')
      .col-lg-6.align-self-center
        p El concepto de <b><span class='txt-1'> funcionalidad </span></b>que se conoce hoy en día nace en la NASA, con la implementación de funciones adicionales al vestuario. Es allí en donde funciones tales como modelación, movimiento, ajuste y escalado se hacen <b><span class='txt-1'> necesarias</span></b> cobrando fuerza la importancia de utilizar la indumentaria adecuada para la realización de una tarea específica.
        p Con respecto a las propiedades adicionadas a las funciones básicas del vestuario (protección, comodidad y bienestar) se encuentran las de control, prendas de vestir que moldean, estilizan, dan soporte y ayudan a corregir la postura. En los últimos años se han convertido en productos cada vez más buscados por los consumidores, como ayuda a lucir un cuerpo acorde con los cánones de belleza, con confianza y discreción. Reconfigurando el cuerpo, adicionando y disminuyendo volúmenes donde se desea, efecto obtenido con el uso de materiales elásticos y firmes. Estas prendas deben ofrecer comodidad, la cual se puede lograr con textiles respirables y de tecnología de control antihumedad.
        
    figcaption.mb-5  Adaptado de Baena & Baquero (2006, 2007), Barraza (2010), Fernández (2013), Fernández & Echeverri (2013); López (2010), Suny. (2018)       

                   

    separador
    #t_2_6.titulo-segundo
      h2 2.6 Funcionalidad y producción técnica de la prenda
    .row.fnd-8.mb-5
      SlyderA
        .row
          figure.py-4
            img.img-600.img-c(src='@/assets/tema2/img-9.svg') 
          p Con la llegada de las nuevas tecnologías aparecen nuevos conceptos de vestuario, es el caso de las <b><span class='txt-1'>tecnologías vestibles </span></b> o en inglés wearables, las cuales a partir de la incorporación de materiales de última generación y dispositivos de sensórica,  cumplen diversos usos como el monitoreo de signos vitales, control de funciones del organismo, señalización, control de dispositivos móviles o, desde campos estéticos, el cambio de textura gráfica (luces led) lo que hace infinita la variación de prendas en una sola.
        

        div
          figure.py-4
                img.img-600.img-c(src='@/assets/tema2/img-10.png') 
          p Otro campo de acción en el cual interviene la ropa es la seguridad personal, prendas cotidianas confeccionadas con telas que protegen de las balas (argentubetv, 2014) o que reaccionan a la luz para advertir la presencia de un deportista o un peatón a los conductores (Bitanga, 2019).  
        .row
          figure.py-4
                img.img-600.img-c(src='@/assets/tema2/img-11.png') 
          p También se aporta por medio de la responsabilidad social del diseño y desde la funcionalidad a la solución de necesidades específicas como la falta de movilidad o dificultades motrices, al igual que desde la función estética del vestido a la comunicación de las expresiones personales en niños con parálisis cerebral (Durán, 2015) en cuanto a temas de tecnología y vestuario, éste se emplea desde múltiples campos como terapia en personas con necesidades cognitivas especiales, aportando confianza a los procesos de aprendizaje (Sevilla & Echeverri, 2018). Son múltiples los ejemplos de cómo la tecnología multiplica el abanico de funciones de la ropa.
          
    .row.justify-content-around.align-items-center
      .col-lg-10.align-self-center.fnd-1-.p-3 
        .row.justify-content-around.align-items-center
          .col-lg-8.mb-3
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/-HjTNGLh35s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Vídeo  Ropa blindada: un hombre recibió dos disparos 
          .col-lg-8.mb-3               
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/v=uqQwKOYZn9w" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Vídeo Códigos de vestimenta del futuro 
          .col-lg-8.mb-3               
            a.anexo.mb-4.mb-lg-0(href="https://www.di-conexiones.com/la-moda-diseno-industrial-objetos-para-usar-tecnologias-diversas/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Página  Moda + Diseño Industrial: objetos para usar, tecnologías diversas 
          .col-lg-8.mb-3               
            a.anexo.mb-4.mb-lg-0(href="https://www.hindawi.com/journals/wcmc/2017/5203053/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Página  Interactive Smart Fashion Using User-Oriented Visible Light Communication: The Case of Modular Strapped Cuffs and Zipper Slider Types 
          .col-lg-8.mb-3               
            a.anexo.mb-4.mb-lg-0(href="https://hiconsumption.com/vollebak-black-squid-jacket/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Vollebak Black Squid Jacket | HiConsumption  
          .col-lg-8.mb-3               
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/embed/1s8DXEXFDY8" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Vídeo La revolución de la ropa inteligente 





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
