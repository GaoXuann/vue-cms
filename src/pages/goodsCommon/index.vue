<template>
    <common :id="id"></common>
</template>


<script>
import common from '../../components/common.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        common
    }
}
</script>


<style>

</style>
