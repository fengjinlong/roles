<template>
  <div class="hello">
    <!-- <div>login</div> -->
    <input type="text" placeholder="a or b" v-model="name">
    <button @click="submit">btn</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: this.name
    }
  },
  methods: {
    submit () {
      axios.get('/api/login?name=' + this.name).then((res) => {
        this.fun(res.data)
      })
    },
    fun (token) {
      this.setToken(token)
      console.log('aaaaaaa: ' + sessionStorage.token)
      axios.get('/api/getrole?token=' + sessionStorage.token).then((res) => {
        sessionStorage.token = token
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
