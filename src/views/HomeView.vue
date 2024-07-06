<template>
  <div class="home">
    <h2> {{ appTitle }}</h2>
    <h3>{{ counterData.counterTitle }}</h3>
    <div>
      <button @click="decrement" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increment" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.counterTitle" type="text">
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue';

const appTitle = 'My Amazing Counter App'
// const count = ref(0), counterTitle = ref('My Counter:');
const counterData = reactive({ count: 0, counterTitle: 'My Counter"' });

const increment = () => counterData.count++
const decrement = () => counterData.count--
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