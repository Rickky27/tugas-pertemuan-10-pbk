<template>
  <div class="home-container">
    <h1>Selamat Datang di Aplikasi Manajemen</h1>
    <p>Silakan login untuk mengakses dashboard dan fitur manajemen data.</p>
    <router-link to="/login">
      <button class="login-button">Login</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-container {
  text-align: center;
  margin-top: 100px;
}

.login-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: rgb(143, 7, 7);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.login-button:hover {
  background-color: #368f6e;
}
</style>
