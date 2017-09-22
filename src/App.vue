<template>
    <div id="app">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
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

<style scoped>
    .slide-fade-enter-active{
        transition: all .3s ease;
    }
    .slide-fade-leave-active{
        transition: all 0s ease
    }
    .slide-fade-enter,.slide-fade-leave-active{
        transform: translateX(-430px);
        opacity: 0;
    }
</style>
