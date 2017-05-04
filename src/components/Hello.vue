<template>
  <el-col :span="20">
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="80">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        align="left"
        width="580">
      </el-table-column>
      <el-table-column
        prop="potions"
        label="选项"
        width="180">
      </el-table-column>
      <el-table-column
        prop="next"
        label="跳转ID">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template scope="scope">
        <el-button @click="handleClick" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </el-col>  
</template>

<script>
const Parse = require('parse')
export default {
  name: 'hello',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    Parse.Cloud.run('all').then((qusList) => {
      this.tableData = qusList
      console.log(qusList)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
