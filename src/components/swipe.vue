<template>
     <!-- 轮播图 -->
        <div class="banner">
            <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(value ,i) in bannerList" :key='i'>
                <a :href="value.url">
                    <img :class="{full:isfull}" :src="value.img" alt="">
                </a>
            </mt-swipe-item>
            </mt-swipe>
        </div>
</template>

<script>
export default {
    props:['bannerList','isfull']
}
</script>


<style lang="less">
     .banner{
            height: 220px;
            text-align: center;
            img .full{
                width: 100%;
               margin-top: 0;
            }  
        }       
</style>
