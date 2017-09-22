<template>
    <div>
        <div class="content">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
        
        <ul class="footer">
            <router-link :to="{name:'Home'}" tag="li" exact>Home</router-link>
            <router-link :to="{name:'Explorer'}" tag="li">Explorer</router-link>
            <router-link :to="{name:'Cart'}" tag="li">Cart</router-link>
            <router-link :to="{name:'Me'}" tag="li">Me</router-link>
        </ul>
        
    </div>
</template>

<script>
    

</script>

<style scoped>
    .content{
        position: absolute;
        top: 0;
        bottom: 50px;
        right: 0;
        left: 0;
        overflow:auto
    }
    .footer{
        position: absolute;
        bottom: 0;
        height: 50px;
        width:100%;
        line-height:50px;
        border-top: 1px solid #dddddd;
    }
    .footer li{
        float: left;
        width: 25%;
        text-align: center;
        list-style-type: none;
        border-right: 1px solid #dddddd;
        box-sizing: border-box;
    }
    .slide-fade-enter-active{
        transition: all .3s ease;
    }
    .slide-fade-leave-active{
        transition: all 0s ease
    }
    .slide-fade-enter,.slide-fade-leave-active{
        transform: translateY(-430px);
        opacity: 0;
    }
</style>

