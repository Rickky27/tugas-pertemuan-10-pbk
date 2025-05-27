<template>
  <nav>
    <ul>
      <li @click="$router.push('/dashboard')">Dashboard</li>
      <li @click="showSubMenu = !showSubMenu">Manajemen Data</li>
      <ul v-if="showSubMenu">
        <li @click="activeSub = 'tambah'">Tambah Data</li>
        <li @click="activeSub = 'lihat'">Lihat Data</li>
      </ul>
    </ul>
    <component :is="activeSubComponent" />
  </nav>
</template>

<script>
import DataManager from './DataManager.vue';

export default {
  data() {
    return {
      showSubMenu: false,
      activeSub: null,
    };
  },
  computed: {
    activeSubComponent() {
      if (this.activeSub === 'tambah' || this.activeSub === 'lihat') return DataManager;
      return null;
    }
  }
};
</script>
