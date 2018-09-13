<template>
  <!-- <div>
<h1>{{title}}</h1>
<crafts></crafts>
  </div> -->
<div>
<app-header></app-header>
<app-crafts></app-crafts>
<app-footer></app-footer>
</div>
</template>

<script>
// importing components locally
// import Geek from './Geek.vue'
// export default {
  // registering components locally
//   components: {
//     'crafts': Geek
//   },
//   data () {
//     return {
//       title: 'My First Vuejs + Firebase App',
//     }
//   }
// }
import Header from './components/Header.vue'
import Crafts from './components/Crafts.vue'
import Footer from './components/Footer.vue'
export default{
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-crafts': Crafts
  },
  data(){
    return {

    }
  }
}
</script>

<style>
/* h1{
  color: blueviolet;
}

li{
  color: brown;
}

body {
  margin-left: 450px;
  margin-right: 450px;
  margin-top: 100px;
} */

</style>
