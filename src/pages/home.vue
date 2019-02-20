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
            <div>
                改动5
            </div>
             <div>
                改动6
            </div>
        </v-scroll>
    </div>
</template>

<script>
/* eslint-disable */
import vHeader from '@/components/header';
import vscroll from '@/components/scroll';
import add from '@/utils/add.js';

export default {
    components:{
        'v-header': vHeader,
        'v-scroll': vscroll
    },
    mounted () {
        this.run(1,3,4,5,6);
    },
    methods: {
        queryData_1() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('queryData_1')
                }, 2000)
            })
        },
        queryData_2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('queryData_2')
                }, 2000)
            })
        },
        queryData_3() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('queryData_3')
                }, 2000)
            })
        },
        async run () {
            console.log(...arguments);
            // const data_1 = await this.queryData_1();
            // console.log(data_1) // 2秒后打印 data_1
            // const data_2 = await this.queryData_2();
            // console.log(data_2) // 4秒后打印 data_2
            // const data_3 = await this.queryData_3();
            // console.log(data_3) // 6秒后打印 data_3
        }
    }
}

async function getData_1 () {
    return '100'
}

// function getData_2 () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('200')
//         }, 2000)
//     })
// }

// async  function run () {

//     const data_1 = await getData_1();
//     console.log(data_1);

//     const data_2 = await getData_2();
//     console.log(data_2);
// }

// run ();


</script>

