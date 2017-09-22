<template>
    <div id="app">
        {{msg}}
        <router-link to="/home">Home</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style>

</style>
