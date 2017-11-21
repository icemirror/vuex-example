import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './moduleA'
import ModuleB from './moduleB'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'root',
    status: false,
    loading: false,
    count: 0,
    todos: [{
      id: 11,
      text: 'store todo',
      done: true
    },
    {
      id: 12,
      text: 'store todo',
      done: false
    }]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    changeStatus (state) {
      state.status = !state.status
    },
    plusCount (state) {
      state.count ++
    },
    reduceCount (state) {
      state.count --
    }
  },
  actions: {
    asyncChangeStatus ({commit, state}, payload) {
      state.loading = true
      setTimeout(() => {
        // 触发mutations
        commit('changeStatus')
        state.loading = false
      }, payload.interval)
    }
  },
  // 分模块
  modules: {
    ModuleA,
    ModuleB
  }
})
export default store
