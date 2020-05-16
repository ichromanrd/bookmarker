<template>
  <div>
    <marker-item 
        v-for="(marker, i) in markerItems" 
        :key="i" 
        :marker-id="marker.id" 
        :marker-type="marker.type"
        :label="marker.label" 
    />
  </div>
</template>

<script>
//import markerType from '../enums/marker-type';
import MarkerItem from './MarkerItem';
export default {
  name: 'MarkerList',
  components: { MarkerItem },
  computed: {
    markerItems() {
        return [
            { id: '#site-1', type: 'site', label: 'Google.com' },
            { id: '#site-2', type: 'site', label: 'Facebook.com' },
            { id: '#folder-1', type: 'folder', label: '' }
        ]
    }
  }
}
</script>