<template>
  <div class="wrap">
      <div class="container">
          <slot />
      </div>
  </div>
</template>

<script>

export default {
  name: 'Wrapper'
}
</script>

<style scoped>
.wrap {
    margin: 0 auto;
    width: 300px;
    min-height: 100vh;
    background-color: bisque;
}
.container {
    padding: 10px
}
</style>