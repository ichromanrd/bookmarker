<template>
  <div class="tab-list">
      <tab-item 
        v-for="(tab, i) in tabs" :key="i" 
        :active="activeTabId === tab.id"
        :title="tab.title"
        :id="tab.id" 
      />
  </div>
</template>

<script>
import TabItem from './TabItem';
export default {
  name: 'TabList',
  components: { TabItem },
  data() {
      return {
          activeTabId: ''
      }
  },
  computed: {
      tabs() {
          return [
              { id: '#tab-main', title: 'Main Tab' }
          ]
      }
  },
  methods: {
      changeTab() { }
  }
}
</script>
<style scoped>
.tab-list {
    overflow: auto;
}
</style>