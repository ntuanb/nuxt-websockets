<template>
  <div>
Test
  </div>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'main'
    })
    this.socket.on("tick", (tickId) => {
      console.log(tickId)
    });
  }
}
</script>
