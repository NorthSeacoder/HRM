<template>
  <div class="app-container">
    <el-form ref="form"
             :model="form"
    >
      <el-form-item label="员工姓名">
        <el-autocomplete v-model="form.userName"
                         :fetch-suggestions="getUser"
                         @select="handleSelect"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    getUser(queryString, cb) {},
    handleSelect() {}
  }
}
</script>

<style lang="scss" scoped>
</style>
