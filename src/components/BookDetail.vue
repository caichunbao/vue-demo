<template>
    <div>
        <div>
            <button @click="back">返回</button>
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
