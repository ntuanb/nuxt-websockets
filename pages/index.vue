<template>
  <div>
    {{ tick }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'main'
    })
    this.socket.on("tick", (tickId) => {
      this.tick = tickId
    });
    this.socket.on("message", (message) => {
      console.log(message)
    });
  }
}
</script>
