<template>
  <div class="user-data">
    {{ userData?.name }} @{{ userData?.username }} |
    Network Status: <span :style="{ color: online ? 'green' : 'red' }">{{ online ? 'Online' : 'Offline' }}</span>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { reactive, provide } from 'vue'
import { useOnline } from '@vueuse/core'

const userData = reactive({
  name: 'John Doe',
  username: 'johndoe',
})

provide('userData', userData)


const online = useOnline()

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.user-data {
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  background: beige;
  color: #333;
  padding: 0.5rem 1rem;
}
</style>
