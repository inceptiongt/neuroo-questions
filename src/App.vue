<template>
  <div id="app">
    <el-row>
      <side-nav></side-nav>
      <!-- <el-button @click.native="startHacking">Let's do it</el-button> -->
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>
  import sideNav from './components/Nav.vue'
  const Parse = require('parse')
  Parse.initialize('testId')
  Parse.serverURL = 'http://192.168.181.128:1337/parse'
  let Qus = Parse.Object.extend('questions')
  let qus = new Qus()
  
  export default {
    name: 'app',
    props: {
    },
    computed: {
    },
    methods: {
      startHacking () {
        qus.save({
          id: 12,
          title: '平时谁来带孩子？（单选）',
          next: 14,
          type: 'single',
          options: [
            {id: 41, title: '妈妈', score: 6},
            {id: 42, title: '爸爸', score: 6},
            {id: 43, title: '父母一起', score: 9},
            {id: 44, title: '爷爷奶奶', score: 3},
            {id: 45, title: '保姆', score: 2},
            {id: 56, title: '其他', score: 2}
          ]}, {
            success: function (gameScore) {
            // The object was saved successfully.
              console.log(1)
            },
            error: function (gameScore, error) {
            // The save failed.
            // error is a Parse.Error with an error code and message.
            }
          })
      }
    },
    // mounted(){
    //   return {
    //     parse.cloud.run('allQuestions').then(function(qusList){
    //       this.
    //     })
    //   }
    // }
    components: { sideNav }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
