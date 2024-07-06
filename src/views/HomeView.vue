<template>
  <div class="home">
    <h3>{{ counterTitle }}</h3>
    <div>
      <button @click="decrement" class="btn">-</button>
      <span class="counter">{{ count }}</span>
      <button @click="increment" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterTitle" type="text">
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const count = ref(0), counterTitle = ref('My Counter:');
const increment = () => count.value++
const decrement = () => count.value--
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.btn,
.counter {
  font-size: 2rem;
  padding: 0.5rem 1rem;
}

.edit {
  margin-top: 60px;
}
</style>