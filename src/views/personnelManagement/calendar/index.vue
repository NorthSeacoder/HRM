<template>
    <el-calendar v-model="value" :range="['2019-02-04', '2019-03-24']">
</el-calendar>
</template>

<script>
    export default {
        data() {
      return {
        value: new Date()
      }
    }
    }
</script>

<style lang="scss" scoped>

</style>