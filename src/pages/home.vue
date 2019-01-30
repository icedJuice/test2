<template>
    <div>
        <v-header></v-header>
        home
        <v-scroll>
            <div>
                改动
            </div>
            <div>
                改动3
            </div>
            <div>
                改动4
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

    },
    methods: {
        jump() {
            this.$router.push({
                name: 'about',
                params: {
                    name: 'abuot'
                }
            })
        }
    }
}
</script>

