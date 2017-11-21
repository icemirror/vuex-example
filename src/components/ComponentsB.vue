<template>
  <div class="components-wrap">
    <h3>moduleB</h3>
    <p class="des-text">1. state.status =>
      <span class="result-content status-tag"
            :class="{'is-active': status}">
          <span class="loading"
                v-if="isLoading"></span>
          {{status}}</span>
      <button type="button"
              class="change-button"
              @click="changeStatus">change</button>
      <button type="button"
              class="change-button"
              @click="asyncChangeStatus">asyncChange</button>
    </p>
    <p class="des-text">2. state.count =>
      <button type="button"
              class="default-button"
              @click="changeCount">-</button>
    </p>
    <p class="des-text">3. moduleA.state.name =>
      <span class="result-content">{{moduleName}}</span>
    </p>
    <p class="des-text">4. moduleB.status =>
      <span class="result-content status-tag"
            :class="{'is-active': moduleStatus}">
          <span class="loading"
                v-if="isMyLoading"></span>
          {{moduleStatus}}</span>
      <button type="button"
              class="change-button"
              @click="changeMyStatus">change</button>
      <button type="button"
              class="change-button"
              @click="asyncChangeMyStatus">asyncChange</button>
    </p>
    <p class="des-text">5. moduleA.getter.unDoneTodos =>
      <span class="result-content">{{unDoneTodos}}</span>
    </p>

  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('ModuleB')
  export default {
    name: 'ComponentsB',
    data () {
      return {

      }
    },
    computed: {
      status () {
        return this.$store.state.status
      },
      isLoading () {
        return this.$store.state.loading
      },
      // 在 `moduleB` 中查找state
      ...mapState({
        moduleName: state => state.name,
        moduleStatus: state => state.status,
        isMyLoading: state => state.myLoading
      }),
      // 在 `moduleB` 中查找getter
      ...mapGetters({
        unDoneTodos: 'unDoneTodos'
      })
    },
    methods: {
      changeStatus () {
        this.$store.commit('changeStatus')
      },
      asyncChangeStatus () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'asyncChangeStatus',
          interval: 600 // 延迟时间
        })
      },
      // 在 `moduleB` 中查找mutations
      ...mapMutations({
        changeMyStatus: 'changeStatus'
      }),
      // 在 `moduleB` 中查找actions
      ...mapActions({
        asyncChangeMyStatus: {
          type: 'asyncChangeStatus',
          interval: 600
        },
        changeCount: 'changeCount'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('../views/common.css');
</style>
