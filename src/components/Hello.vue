<template>
  <el-col :span="22">
    <el-row>
      <el-button @click="queNewBtn()" type="primary" size="large">新建问题</el-button>
    </el-row>
    <!-- 表格起点 -->
    <el-row>
      <el-table
      :data="tableData"
      align="left"
      style="width: 100%">
        <el-table-column
          type=expand>
          <template scope="scope">
            <h3>选项:</h3>
            <div v-for="(q,index) in scope.row.options">
              <span>{{++index}}--{{q.title}}</span>
              <span size="small">跳转ID{{q.next}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="quesId"
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
          label="选项个数"
          width="180">
        </el-table-column>
        <el-table-column
          prop="next"
          label="跳转ID">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="200">
          <template scope="scope">
            <el-button @click="editBtn(scope.row.id)" type="info" size="small">编辑</el-button>
            <el-button @click="queDeleteBtn()" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 表格终点 -->
    <!-- 编辑表单起点 -->
    <el-row>
      <el-dialog :visible.sync="dialogFormVisible" top="15%" algin="left">
        <el-form ref="form" :model="gridData" label-width="50px" align="left">
          <el-form-item label="类型">
            <el-radio-group v-model="gridData.type">
              <el-radio label="单选"></el-radio>
              <el-radio label="多选"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="ID">
            <el-input v-model="gridData.id"></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="gridData.title"></el-input>
          </el-form-item>
          <el-form-item label="选项个数">
            <el-input-number v-model="gridData.options_num" @change="numChangeBtn" :min="1" :max="10"></el-input-number>
          </el-form-item>
          <el-form-item label="选项">
            <template v-for="(item,index) in gridData.options_num">
              <el-row>
                <el-col :span="2">
                  {{index+1}}
                </el-col>
                <el-col :span="22">
                  <el-input v-model="gridData.options[index].title"></el-input>
                </el-col>
              </el-row>
              <!-- 跳转ID<el-input v-model="gridData.options[item].next" width="50px"></el-input> -->
            </template>
          </el-form-item>
          <el-form-item label="正确答案">
            <el-radio-group v-if="gridData.type === '单选'" v-model="gridData.answer" v-for="(item, index) in gridData.options_num">
              <el-radio :label="index + 1"></el-radio>
            </el-radio-group>
            <!-- <el-checkbox-group v-model="gridData.answers" v-for="(item, index) in gridData.options_num">
              <el-checkbox :label="3">{{index}}</el-checkbox>
            </el-checkbox-group> -->
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click.native="">取 消</el-button>
            <el-button type="primary"  @click.native="editConfirmBtn">确定</el-button>
            <el-button type="primary"  @click.native="newConfirmBtn">新建</el-button>
        </span>
      </el-dialog>
    </el-row>
    <!-- 编辑表单终点 -->
    <!-- quetion delete dialog start-->
    <el-row>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny">
        <span>确定删除</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-row>
    <!-- quetion delete dialog end -->

  </el-col>

</template>
<script>
const Parse = require('parse')
export default {
  name: 'hello',
  data () {
    return {
      /* 问题列表数据 */
      tableData: [
        {
          type: 'dfsdf',
          name: 'fdsfsdafsdfdsf',
          options_num: 1,
          options: [{}],
          address: ''
        }
      ],
      /* 弹窗数据 */
      gridData: {
        id: null,
        title: '',
        next: null,
        type: 'single',
        options_num: 2,
        options: [{}, {}],
        answer: '',
        answers: ''
      },
      dialogTableVisible: false,
      dialogVisible: false,
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
  },
  created () {
    Parse.Cloud.run('all').then((qusList) => {
      let result = qusList.map((item) => {
        let data = item.attributes
        // data.quesId = item.objectId
        return data
      })
      this.tableData = result
    })
  },
  methods: {
    editBtn (id) {
      this.dialogFormVisible = true
      let results = this.tableData.filter(item => {
        return item.id === id
      })
      let resObj = results[0]
      resObj.options_num = resObj.options.length
      resObj.type = resObj.type === 'single' ? '单选' : '多选'
      this.gridData = resObj
    },
    numChangeBtn (currentNum) {
      if (currentNum > this.gridData.options_num) {
        this.gridData.options.push({
          title: ''
        })
      } else {
        this.gridData.options.pop()
      }
    },
    queDeleteBtn () {
      this.dialogVisible = true
    },
    editConfirmBtn () {
      Parse.Cloud.run('updateQuestionsDetails', {
        options: this.gridData.options
      }).then()
    },
    queNewBtn () {
      this.dialogFormVisible = true
    },
    newConfirmBtn () {
      let ques = {
        'quesId': this.gridData.id,
        'title': this.gridData.title,
        'next': 14,
        'type': this.gridData.type,
        'options': this.gridData.options,
        'answer': this.gridData.answer
      }
      Parse.Cloud.run('newQuestion', ques).then()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
