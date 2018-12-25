<template>
    <div>
        <v-header></v-header>
        home
        <v-scroll>
            <div >
                我就试
                试行不行
            </div>
            <div >
                我就试试行不行
            </div>
            <div >
                我就试试行不行
            </div>
            <div >
                我就试试行不行
            </div>
            <div >
                我就试试行不行
            </div>
            <div >
                我就试试行不行
            </div>
            <div >
                我就试试行不行
            </div>
        </v-scroll>
    </div>
</template>

<script>
/* eslint-disable */
import vHeader from '@/components/header';
import vscroll from '@/components/scroll';
import add from '@/utils/add.js';
const mulity = require('../utils/mulity.js')
export default {
    components:{
        'v-header': vHeader,
        'v-scroll': vscroll
    },
    mounted () {
        add(1, 2)
    }
}
</script>

