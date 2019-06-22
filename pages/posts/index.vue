<template>
  <div class="container">
    <div class="block">
      <ul v-for="(post, index) in posts[0]" :key="index">
      <nuxt-link tag="li" :to="'posts/' + post.title"><a>{{ post.title}}</a></nuxt-link> 
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
    head() {
      return {
        title: 'All posts',
        meta: [
          {
            hid: 'description',
            name: 'Funny posts',
            content: 'Best application for funny posts'
          }
        ]
      }
    },
    data() {
      return {
        posts: []
      }
    },
    async mounted(){
      this.posts = this.$store.getters.Posts
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.container{
  /* width: 100%; */
  padding: 20px 40px;
}
.block{
  background: #f3f3f3;
  width: 100%;
}
ul{
  padding: 10px 20px;
}
ul li{
  border: 2px solid white;
  list-style: none;
  border-radius: 10px;
}
ul li a{
  text-decoration: none;
  font-size: 24px;
  width: 100%;
  padding: 10px;
}
</style>
