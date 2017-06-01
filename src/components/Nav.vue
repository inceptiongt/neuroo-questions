<template>
  <el-col :span="2">
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="项目">
        <el-menu-item index="1"><i class="el-icon-message"></i>毕业大礼包</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'sideNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
