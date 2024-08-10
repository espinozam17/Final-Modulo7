<template>
  <div>
    <input v-model="inputText" type="text" placeholder="Escribe algo">
    <button @click="sendText">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    sendText() {
      this.$emit('text-sent', this.inputText);
      this.inputText = ''; // Limpiar el campo de texto después de enviar
    }
  }
};
</script>