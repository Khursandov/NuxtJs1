<template>
    <div class="containerr">
        <div>
            <nuxt-link to="/posts">
                <button class="btn">All posts</button>
            </nuxt-link>
            <nuxt-link to="addPost">
                <button class="btn">Create</button>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
}
.containerr{
    padding: 20px 40px;
    background: #4d4242;
    text-align: center;
}
.btn{
    widows: 100%;
    background: #3554df;
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 10px;
    border: 2px solid #3554df;
}
.btn:active {
    border: 2px solid white;
}
</style>



