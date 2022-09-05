<template>
<div>    
  <div class="main mainOne">
      <div class='mainTwo'>
      <img src='img/logo.svg'>
      <!--
      <video autoplay muted loop id="myVideo">
      -->
  <source src="img/video.mp4" type="video/mp4">
</video>
      </div>
      <div class='mainTwo'>
      <h1>Tribo Alma Forte</h1>
      </div>
      <div class='mainTwo'>
        <p>
          #acupuntura 
        </p>
        <p>
          #personal 
        </p>
        <p>
          #funcional 
        </p>
        <p>
          #krav-maga 
        </p>
      </div>
      <div class='mainTwo'>
        <p>
          #yoga 
        </p>
        <p>
          #filosofia 
        </p>
        <p>
          #psicologia 
        </p>
        <p>
          #nutrição
        </p>
      </div>
      <div class='mainTree'>
        <p>
        <nuxt-link to="/">triboalmaforte.com</nuxt-link>
          
        </p>
        <p>
        <!-- <a href="https://www.instagram.com/explore/tags/triboalmaforte/">#triboalmaforte</a>-->
        #triboalmaforte
          
        </p>
        
      </div>
    
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