<template>
  <div>
    <div :key="item.kid" v-for="item in li">
      <h2>{{item.path}}</h2>
    </div>
    <button @click="btn">测试拦截</button>
    <button @click="btn1">测试没有拦截</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { test, test1 } from '@/api/login'
export default {
  name: 'home',
  data () {
    return {
      li: []
    }
  },
  methods: {
    btn () {
      test().then((res) => {
        console.log(res)
      })
    },
    btn1 () {
      test1().then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    setTimeout(() => {
      this.li = this.addRouters
    }, 100)
  },
  computed: {
    ...mapGetters([
      'addRouters'
    ])
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
