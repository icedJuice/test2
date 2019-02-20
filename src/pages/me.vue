<template>
</template>

<script>
export default {
}

// // minix.js
// export default {
//     data () {
//         return {
//             name: 'minix',
//             minixName: 'minixObj',
//             flag: false
//         }
//     },
//     mounted() {
//         console.log('minixMounted');
//     },
//     methods: {
//         speak() {
//             console.log('this is minix');
//         },
//         getData() {
//             return '100';
//         }
//     }
// }

// // todo.vue
// import myMinix from './minix';

// export default {
//     data () {
//         return {
//             name: 'todo',
//             lists: [1, 2, 3, 4]
//         }
//     },
    
//     mounted() {
//         console.log('todoMounted');
//     },
//     minixs: [myMinix], // todo.vue 中声明minix 进行混合
//     methods: {
//         speak () {
//             console.log('this is todo');
//         },
//         submit() {
//             console.log('submit');
//         },
//     }
// }
// //==========

// // 最终得到的结果

// //==========

// export default {
//     data () {
//         return {
//             name: 'todo', // 共同有的data， 最后保留自己的data
//             lists: [1, 2, 3, 4], // 自己独有的，保留
//             minixName: 'minixObj', // todo没有的，会被添加进来
//             flag: false // todo没有的，会被添加进来
//         }
//     },
    
//     mounted() {
//         // 在钩子函数中的， 会被合并到todo.vue 的钩子函数中， minix中的代码在前，自己的在后
//         console.log('minixMounted');
//         console.log('todoMounted');
//     },
//     methods: {
//         // 同时有的方法， 会被封装为一个数组， 先执行minix中的，后执行todo自己的
//         speak () {
//             [
//                 function() {
//                     console.log('this is minix');
//                 },
//                 function() {
//                     console.log('this is todo');
//                 }
//             ].forEach(item => {
//                 item();
//             })
//         },
//         // 自己独有的，保留
//         submit() {
//             console.log('submit');
//         },
//         // 自己没有的方法会被添加进来
//         getData() {
//             return '100';
//         }
//     }
// }
</script>
