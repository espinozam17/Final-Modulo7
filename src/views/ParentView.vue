<template>
  <div>
    <!-- Se incluye el componente hijo y se escucha el evento "text-sent" emitido por el hijo -->
    <ChildComponent @text-sent="handleTextSent" />
    <!-- Se muestra el texto recibido del componente hijo -->
    <p>Texto recibido: {{ receivedText }}</p>
  </div>
</template>

<script>
import ChildComponent from '../components/ChildComponent.vue';

export default {
  components: {
    // Se importa y se registra el componente hijo para su uso en este componente
    ChildComponent
  },
  data() {
    return {
      // Se define una propiedad de datos para almacenar el texto recibido del componente hijo
      receivedText: ''
    };
  },
  methods: {
    // Método que se ejecuta cuando se recibe el evento "text-sent" desde el componente hijo
    handleTextSent(text) {
      // Se actualiza la propiedad "receivedText" con el texto recibido
      this.receivedText = text;
    }
  }
};
</script>
