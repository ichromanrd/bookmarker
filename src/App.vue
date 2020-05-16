<template>
  <wrapper>
    <tab-list/>
    <marker-search-section />
    <marker-section />
  </wrapper>
</template>

<script>
import MarkerSection from './components/MarkerSection';
import MarkerSearchSection from './components/MarkerSearchSection';
import TabList from './components/TabList';
import Wrapper from './components/Wrapper';
export default {
  name: 'App',
  components: { MarkerSection, MarkerSearchSection, TabList, Wrapper }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
