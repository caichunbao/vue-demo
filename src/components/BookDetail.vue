<template>
    <div>
        <button @click="back">返回</button>
        <h1>BookDetail</h1>
        <p>第{{id}}篇文章</p>
        
    </div>
</template>

<script>
    export default{
        data(){
            return {
                id:""
            }
        },
        methods:{
            back(){
                window.history.back()
            }
        },
        created:function(){
            this.id = this.$route.params.id;
        }
    }
</script>
