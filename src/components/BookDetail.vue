<template>
    <div>
        <div class="title">
            <span class="back" @click="back"><span class="jiantou"></span></span>
            
        </div>
        <div>
            <h1>{{title}}</h1>
        </div>
        <p>第{{id}}篇文章</p>
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
                id:"",
                title:""
            }
        },
        methods:{
            back(){
                window.history.back()
            }
        },
        created:function(){
            this.id = this.$route.params.id;
            this.title = this.$route.params.title;
        }
    }
</script>


<style scoped>
    .title{
        height:40px;
        line-height:40px;
        padding:0 15px;
        border-bottom: 1px solid #eeeeee;
    }
    .title .back{
        color: #666;
        border-radius: 5px;
        position: absolute;
        top: 5px;
        left: 5px;
        height: 30px;
        width: 30px;
    }
    .title .jiantou{
        position: relative;
        float: left;
        margin-top: 5px;
        margin-left: 10px;
        border-width:10px;
        border-color: transparent;
        border-style: solid;
        border-right-color: #666;
        border-left-width: 0;
        line-height: 0;
        height: 0;
    }
    .title .jiantou:after{
        content: '';
        display: inline-block;
        border-width: 8px;
        border-color: transparent;
        border-style: solid;
        border-right-color: #fff;
        border-left-width: 0;
        position: absolute;
        top: -8px;
        left: 2px;
    }
</style>

