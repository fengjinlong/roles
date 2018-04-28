<template>
  <div class="">
    <h2>{{li}}</h2>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      li: []
    }
  },
  methods: {
  },
  mounted () {
    console.log(6)
    this.li = this.addRouters
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
