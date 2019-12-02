import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [],
      },
    mutations: {
      //   配列tasksにタスクの初期値をpush
        addTask: function(state, { comment, stateBtn, delBtn }) {
          state.tasks.push({
              comment,
              stateBtn,
              delBtn,
          })
          // タスクにidを振る
          state.tasks.forEach((task, index) => {
              task.id = index + 1
          })
        },
    }
})


export default store