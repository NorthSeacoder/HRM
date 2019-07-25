<template>
  <div class="app-container">
    <el-form ref="form"
             :model="form">
      <el-form-item label="员工姓名">
        <el-autocomplete v-model="form.userName"
                         :fetch-suggestions="getUser"
                         @select="handleSelect" />
      </el-form-item>
    </el-form>
    <el-table :data="list"
              element-loading-text="Loading"
              border
              fit
              highlight-current-row>
      <el-table-column align="center"
                       label="ID"
                       width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>

      <el-table-column align="center"
                       v-for="(item, index) in tableOptions"
                       :key="index"
                       :prop="item.prop"
                       :label="item.label">

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import tableOptions from './constant/tableOptions';
export default {
  data() {
    return {
      form: {},
      tableOptions,
      list: []
    }
  },
  methods: {
    getUser(queryString, cb) { },
    handleSelect() { }
  }
}
</script>

<style lang="scss" scoped>
</style>
