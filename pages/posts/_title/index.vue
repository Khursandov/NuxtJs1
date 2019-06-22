<template>
    <div class="container">
        <h1>{{ post.title }}</h1>
        <hr>
        <p>{{ post.body }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            post: ''
        }
    },
    async created(){
        this.$store.dispatch('FindPost', this.$route.params.title)
        this.post = this.$store.state.post
    }
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}   
    .div{
      padding: 20 40px;  
    }
</style>



