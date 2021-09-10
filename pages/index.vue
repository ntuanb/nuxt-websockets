<template>
  <div>
    {{ tick }}
    <button v-if="click" @click="click">Emit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tick: 1
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'main',
      persist: true
    })
    this.socket.on("tick", (tickId) => {
      this.tick = tickId
    });
    this.socket.on("test", (msg) => {
      console.log(msg)
    });
  },
  methods: {
    click() {
      this.socket.emit('test', 'from frontend')
    }
  }
}
</script>
