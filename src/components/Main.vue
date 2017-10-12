<template>
    <div>
        <div class="content">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
        
        <ul class="footer">
            <router-link :to="{name:'Home'}" tag="li" exact>
                <i class="iconfont">&#xe60c;</i>
                <p>首页</p>
            </router-link>
            <router-link :to="{name:'Explorer'}" tag="li">
                <i class="iconfont">&#xe6a1;</i>
                <p>发现</p>
            </router-link>
            <router-link :to="{name:'Cart'}" tag="li">
                <i class="iconfont">&#xe6e0;</i>
                <p>科技</p>
            </router-link>
            <router-link :to="{name:'Me'}" tag="li">
                <i class="iconfont">&#xe61e;</i>
                <p>我的</p>
            </router-link>
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
        border-top: 1px solid #eeeeee;
        overflow:hidden;
    }
    .footer li{
        float: left;
        width: 25%;
        text-align: center;
        list-style-type: none;
        box-sizing: border-box;
        padding:5px 0;
        color: #666;
    }
    .footer li i{
        font-size: 20px;
    }
    .footer li p{
        font-size: 12px;
        padding-top: 2px;
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


    /* 底部导航 */
    @font-face {
        font-family: 'iconfont';
        src: url('../assets/fonts/iconfont.eot');
        src: url('../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../assets/fonts/iconfont.woff') format('woff'),
        url('../assets/fonts/iconfont.ttf') format('truetype'),
        url('../assets/fonts/iconfont.svg#iconfont') format('svg');
    }
    .iconfont{
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>

