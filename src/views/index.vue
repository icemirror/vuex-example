<template>
  <div class="content-wrap">
    <h2>vuex-examples</h2>
    <div class="common-content">
      <h3>root store</h3>
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
        <span class="result-number">{{count}}</span>
      </p>
      <p class="des-text">3. state.name =>
        <span class="result-content">{{storeName}}</span>
      </p>
      <p class="des-text">4. getter.doneTodos =>
        <span class="result-content">{{doneTodos}}</span>
      </p>
    </div>
    <div class="content-body"
         data-content-left>
      <components-a></components-a>
    </div>
    <div class="content-body"
         data-content-right>
      <components-b></components-b>
    </div>
  </div>
</template>

<script>
  import ComponentsA from '@/components/ComponentsA'
  import ComponentsB from '@/components/ComponentsB'
  export default {
    data () {
      return {

      }
    },
    components: {
      ComponentsA, ComponentsB
    },
    computed: {
      doneTodos () {
        return this.$store.getters.doneTodos
      },
      status () {
        return this.$store.state.status
      },
      storeName () {
        return this.$store.state.name
      },
      isLoading () {
        return this.$store.state.loading
      },
      count () {
        return this.$store.state.count
      }
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
      }
    },
    created () {
      this.$nextTick(() => {

      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('./common.css');
  .content-wrap {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow: auto;
  }
  .content-body {
    float: left;
    width: 50%;
    height: auto;
    margin-bottom: 40px;
    padding: 20px 30px;
  }
  [data-content-left] {
    border-right: 1px solid #ccc;
  }
  .common-content {
    padding: 40px 30px;
    text-align: left;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    clear: left;
  }
  .common-content h3 {
    text-align: center;
  }
  .result-number {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 38px;
    text-align: center;
    color: #fa5555;
    background: #fee;
    border: 1px solid #fdbbbb;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }
</style>
