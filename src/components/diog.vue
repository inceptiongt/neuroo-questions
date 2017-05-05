<template>
  <el-col :span="22">
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="添加活动标签"  v-model="dialogFormVisible" top="35%">
        <el-form :model="gridData">
          <el-form-item>
            <el-input v-model="gridData.name" auto-complete="off" ></el-input>
          </el-form-item>
        </el-form>
          <span slot="footer" class="dialog-footer">
              <el-button @click.native="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary"  @click.native="handleAdd(gridData.name,gridData,ruleForm.tags)">添加</el-button>
          </span>
      </el-dialog>
  </el-col>
</template>
<script>
  export default {
    data () {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      }
    }
  }
</script>
