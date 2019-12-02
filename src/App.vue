<template>
  <div id="app">
    <h1>My ToDos</h1>
    <input type="text" v-model="newTaskComment">
    <input type="button" value="追加" @click="addTask">

    <form>
      <input type="radio" value="all" v-model="radioBtnValue">全て
      <input type="radio" value="work" v-model="radioBtnValue">作業中
      <input type="radio" value="complete" v-model="radioBtnValue">完了
    </form>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>やる事</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>{{ task.comment }}</td>
          <td><button @click="changeStateBtn(tasks.indexOf(task))">{{ task.stateBtn }}</button></td>
          <td><button>{{ task.delBtn }}</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskComment: '',
      radioBtnValue: 'all',       
    }
  },
  computed: {
    //   配列tasksの内容を受け取る
    tasks: function() {
      return this.$store.state.tasks
    }
  },
  methods: {
    //   タスクのデータを配列tasksに入れる
    addTask: function() {
      if(this.newTaskComment) {
        this.$store.commit('addTask', {
            comment: this.newTaskComment,
            stateBtn: '作業中',
            delBtn: '削除'
        })
        this.newTaskComment = '';
      }
    },
    changeStateBtn: function(index) {
        if(this.tasks[index].stateBtn === '作業中') {
            this.tasks[index].stateBtn = '完了'
        }　else {
            this.tasks[index].stateBtn = '作業中'
        }
    }
  }
}
</script>