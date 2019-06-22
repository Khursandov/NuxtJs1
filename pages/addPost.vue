<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="onSubmit">
            <input type="text" v-model="title" placeholder="title">
            <input type="text" v-model="body" placeholder="body">
            <input type="submit"  id="btn">
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            body: '',
        }
    },
    methods: {
        onSubmit(){
            const post = {
                title: this.title,
                body: this.body
            }
            this.$store.dispatch('createPost', post)
            console.log(post)
            this.title = '',
            this.body = '',
            this.$router.push('posts')
        }
    }
}
</script>
<style scoped>
h1{
    text-align: center;
}
form{
    padding-top:  20px;
    width: 30%;
    margin: auto;
}
form input{
    margin: 5px;
    padding: 10px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #f4f4f4;
}
#btn{
    margin-top: 30px;
    width: 50%;
    text-align: center;
    border-radius: 10px;
}
</style>

