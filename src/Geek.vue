<template>
  <div>
<h1>{{title}}</h1>
<br>

<ul>
    <li v-for="craft in crafts">{{craft}}</li>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'My Crafts',
      crafts: ['Javascript', 'PHP', 'Laravel', 'Vuejs', 'Firebase', 'Google Cloud']
    }
  }
}
</script>

<style scoped>
h1{
    color:green;
}

</style>
