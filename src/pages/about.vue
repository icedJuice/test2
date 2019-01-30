<template>
    <div>
        <v-header></v-header>
        about
    </div>
</template>

<script>
/* eslint-disable */
import vHeader from "@/components/header";
import add from '@/utils/add.js';
export default {
    components:{
        'v-header': vHeader,
    },
    name: 'about',
    mounted () {
        console.log(this.$route)
        
    }
}
</script>
