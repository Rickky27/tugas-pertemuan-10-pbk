<template>
  <router-view />

  <div>
    <components />
    <DataManager />
  </div>
</template>

<script setup>
  import components from './components/components.vue';
  import DataManager from './components/DataManager.vue';
</script>
