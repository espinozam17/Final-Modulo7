<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button id="btn1" @click="increment">Incrementar</button>
    <button id="btn2" @click="decrement">Decrementar</button>
  </div>
</template>

<script>

export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>