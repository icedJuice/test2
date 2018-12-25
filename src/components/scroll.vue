<template>
    <div class="scroll-container">
        <div class="scroll-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vscroll',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.scroll-container{
    max-width: 600px;
    background-color: #adf;
}
</style>

