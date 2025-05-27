<template>
  <div>
    <h2>Login</h2>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return { username: '', password: '' };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'admin') {
        this.$store.commit('login', { username: this.username });
        this.$router.push('/dashboard');
      } else {
        alert('Login gagal!');
      }
    }
  }
};
</script>
