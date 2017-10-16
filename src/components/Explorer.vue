<template>
    <div>
        <div class="title">
            <p>发现</p>
        </div>
        <div class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <ul>
                <transition-group name="list">
                <template v-for="(list,index) in list">
                    <router-link tag="li" :to="list.href" :key="index">
                        <div class="list-item">
                            <div class="portrait">
                                <img src="../assets/images/portrait.jpg">
                                <span>Jack</span>
                            </div>
                            <img class="article-img" src="../assets/images/img1.jpeg" >
                            <div class="article-info">
                                <h3>{{list.title}}</h3>
                                <p>
                                    在金色的秋天里，我们策马奔腾在辽阔的草原上，我们开着越野车翻山越岭，只为遇见你。
                                </p>
                            </div>

                        </div>
                    </router-link>
                </template>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data:function(){
            return {
                msg:"hello",
                busy:false,
                list:[
                    {
                        href:{
                            name:'ArticleDetail',
                            params:{
                                id:1,
                                title:"在最好的季节遇见你1"
                            }
                        },
                        title:"在最好的季节遇见你1"
                    },
                    {
                        href:{
                            name:'ArticleDetail',
                            params:{
                                id:2,
                                title:"在最好的季节遇见你2"
                            }
                        },
                        title:"在最好的季节遇见你2"
                    },
                    {
                        href:{
                            name:'ArticleDetail',
                            params:{
                                id:3,
                                title:"在最好的季节遇见你3"
                            }
                        },
                        title:"在最好的季节遇见你3"
                    }
                ]
            }
        },
        mounted:function(){
        },
        methods:{
            loadMore: function() {
                this.busy = true;
                this.list.push({
                    href:{
                        name:'ArticleDetail',
                        params:{
                            id:4,
                            title:"在最好的季节遇见你4"
                        }
                    },
                    title:"在最好的季节遇见你4"
                });
                this.busy = false;
            }
        },
    }
</script>

<style scoped>
    .title{
        height: 50px;
        border-bottom: 1px solid #eeeeee;
        padding: 0 15px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    .title p{
        line-height: 50px;
        font-size: 22px;
        color: #f60;
    }

    .list{
        position: relative;
    }
    .list ul{
        list-style: none;
    }
    .list ul li{
        padding: 15px;
        border-bottom: 1px solid #f0f0f0;
        box-shadow: 1px 0px 5px #ccc;
    }
    .list-item .portrait{
        height:35px;
        line-height: 35px;
    }
    .list-item .portrait img{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 1px solid #dddddd;
        box-shadow: 0px 0px 8px #ccc;
        padding: 3px;
        float: left;
        margin-right: 5px;
    }
    .list-item .article-img{
        margin:10px 0;
        width: 100%;
        height: 120px;
        border-radius: 2px;
    }
    .list-item .article-info h3{
        margin-bottom: 10px;
    }
    .list-item .article-info p{
        color: #999;
        margin-bottom: 10px;
    }

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 2s;
    }
    .list-enter, .list-leave-to{
        opacity: 0;
        transform: scale(0.5);
        transform: translateY(100px);
    }
</style>


