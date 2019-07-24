<template>
    <el-form ref="form">

    </el-form>
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            default: () => {}
        },
        data:{
            type: Object,
            default: () => {}
        }
    },
    computed:{
        form
    }
}
</script>

<style lang="scss" scoped>
</style>