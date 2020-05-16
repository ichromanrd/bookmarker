<template>
  <div class="marker-item" @click="clickItem">
    <img />
    <div class="">marker id: {{ markerId }}</div>
    <h3>{{ label }}</h3>
  </div>
</template>

<script>
//import markerType from '../enums/marker-type';
export default {
  name: 'MarkerItem',
  props: {
    markerId: { type: String, default: '' },
    markerType: { type: String, default: '' },
    label: { type: String, required: '' }
  },
  methods: {
    clickItem() {
      console.log('click marker item: ' + this.markerId)
      this.$emit('clickItem', this.markerId)
    }
  }
}
</script>
<style scoped>
.marker-item { }
</style>