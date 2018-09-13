<template>
  <div id = "crafts">
<h3>{{title}}</h3>
<br>

<ul>
    <li v-for="craft in crafts" v-on:click="craft.show = !craft.show">
        <h2>{{craft.name}}</h2>
        <p v-show="craft.show">{{craft.desc}}</p>
    </li>
</ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Technologies i use',
      crafts: [
          {name: 'JavaScript', desc:'It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.', show:false},
          {name: 'PHP', desc:'PHP: Hypertext Preprocessor is a server-side scripting language designed for Web development, but also used as a general-purpose programming language.', show:false},
          {name: 'Laravel', desc:'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.', show:false},
          {name: 'Vuejs', desc:'Vue.js is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable.', show:false},
          {name: 'Git', desc:'Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people. It is primarily used for source code management in software development, but it can be used to keep track of changes in any set of files.', show:false},
          {name: 'Firebase', desc:'Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014.', show:false}
          
      ]
    }
  }
}
</script>

<style scoped>
#crafts {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
}

li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
