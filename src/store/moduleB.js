const moduleB = {
  namespaced: true, // 启用命名空间，拥有私有内容
  state: {
    name: 'moduleB',
    status: false,
    myLoading: false,
    moduleBTodos: [{
      id: 3,
      text: 'moduleB todo',
      done: false
    },
    {
      id: 4,
      text: 'moduleB anther todo',
      done: true
    }]
  },
  getters: {
    unDoneTodos: state => {
      return state.moduleBTodos.filter(todo => !todo.done)
    }
  },
  mutations: {
    changeStatus (state) {
      state.status = !state.status
    }
  },
  actions: {
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    asyncChangeStatus ({commit, state}, payload) {
      state.myLoading = true
      setTimeout(() => {
        // 触发mutations
        commit('changeStatus')
        state.myLoading = false
      }, payload.interval)
    },
    changeCount ({ dispatch, commit, getters, rootGetters }) {
      // getters -> 私有的
      // rootGetters -> 根部的getters
      // commit('someMutation') // -> 'foo/someMutation'
      // commit('someMutation', null, { root: true }) // -> 'someMutation'
      // dispatch 同理
      commit('reduceCount', null, { root: true })
    }
  }
}
export default moduleB
