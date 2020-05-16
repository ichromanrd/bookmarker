<template>
  <div :class="['tab-item', active ? 'active' : '']" @click="clickTab">
      <h3>{{ title }}</h3>
  </div>
</template>

<script>

export default {
  name: 'TabItem',
  props: {
      id: { type: String, required: true },
      title: { type: String, required: true },
      active: { type: Boolean, default: false }
  },
  methods: {
    clickTab() { 
        console.log('click tab item: ' + this.id)
        this.$emit('click', this.id) 
    }
  }
}
</script>
<style scoped>
.tab-item {
    padding: 10px;
    font-weight: bold;
    display: inline-block;
    margin-right: 5px;
}
.active {
    border-bottom: 1px solid maroon;
}
</style>