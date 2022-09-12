<template>
<div>    
  <div class='mainSecondOne'>
  <nuxt-link to="/">
      <img src='img/logo.svg'>
      <h1>Tribo Alma Forte</h1>
      <!--
        <source src="img/video.mp4" type="video/mp4">
        </video>
      -->
  </nuxt-link>
  </div>
      <div class='mainSecondTwo'>
        <h1>Acupuntura</h1>
        <p> 
          Acupuntura é uma forma de medicina alternativa e um ramo da medicina tradicional
          chinesa no qual finas agulhas são inseridas no corpo do paciente.
         </p>
      </div>
      <div class='mainSecondTree'>
         <h3>
          Parceiros da Tribo
         </h3>
      </div>
      <div class='mainSecondFour'>
        <h4>
          Deep Acupuntura
        </h4>
        <a href='https://www.deepacupuntura.com' target='_blank'>
          deepacupuntura.com
        </a>
      </div>
    
      <div class='mainTree'>
        <p>
        <a href="https://www.instagram.com/explore/tags/triboalmaforte/" target='_blank'>
          #triboalmaforte
        </a>
          
        </p>
        <p>
        <nuxt-link to="/">
          triboalmaforte.com
        </nuxt-link>
          
        </p>
        
      </div>

</div>
</template>
<script>
export default {
data() {
        return {
            content: ``,
            contenticonone: ``,
            contenticontwo: ``,
            contentTwo: '',
            finalidades: ``,
            aplicar: '',
            aplicarTwo: '',
            aplicarTree: '',
            aplicarFour: '',
            aplicarFive: '',
            aplicarSix: ''
        }
    },
  methods: {
    personal() {
      this.content = `
      <div class="main mainOne">
      <a href="https://instagram.com/professorleandrocesar" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://professorleandrocesar.com" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
      <a href="https://youtube.com/leandrocesarcosta" class=''>
        <i class="fab fa-youtube"></i> Youtube
      </a>
    <a href="https://blog.professorleandrocesar.com">
      <i class="fas fa-blog"></i> Blog
    </a>
  </div>
      `,
      this.aplicar= true,
      this.aplicarTwo= false,
      this.contentTwo = ``,
      this.contentTree = ``
    },
    deep() {
        this.contentTwo = `
        <div class="main mainTwo">
      <a href="https://instagram.com/deepacupuntura" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://deepacupuntura.com" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
      <a href="https://www.youtube.com/channel/UCRaQUE-GsQ4GglE8hElm17w" class=''>
        <i class="fab fa-youtube"></i> Youtube
      </a>
  </div>
      `,
      this.content = ``,
      this.contentTree = ``,
      this.aplicar= false,
      this.aplicarTwo= true
    },
    espirita() {
        this.contentTree = `
        <div class="main mainTree">
      <a href="https://instagram.com/espirita.xyz" class=''>
        <i class="fab fa-instagram-square"></i> Instagram
      </a>
      <a href="https://espirita.xyz" class=''>
        <i class="fas fa-globe"></i> Site
      </a>
  </div>
      `,
      this.content = ``,
      this.contentTwo = ``,
      this.aplicar= false,
      this.aplicarTwo= true
    }
  }
}
</script>