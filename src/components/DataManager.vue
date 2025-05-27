<template>
  <div>
    <h3>Manajemen Data</h3>
    <input v-model="newItem" placeholder="Tambah item" />
    <button @click="addItem">Tambah</button>

    <ul>
      <li v-for="(item, index) in dataItems" :key="index">
        {{ item }} <button @click="removeItem(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { newItem: '' };
  },
  computed: {
    dataItems() {
      return this.$store.state.dataItems;
    }
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.$store.commit('addData', this.newItem);
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.$store.commit('deleteData', index);
    }
  }
};
</script>
