<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
    <p>
      Jeremy's Resume Website
    </p>
    <pdf src="http://sunny.freeservers.com/flowers.pdf">PDF</pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import 'pdfjs-dist/build/pdf'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    pdf: pdf
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
