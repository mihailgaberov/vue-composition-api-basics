<template>
  <div class="home">
    <h2> {{ appTitle }}</h2>
    <h3>{{ counterData.counterTitle }}</h3>
    <div>
      <button @click="decrement(2)" class="btn">--</button>
      <button @click="decrement(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increment(1)" class="btn">+</button>
      <button @click="increment(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}.</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.counterTitle" type="text">
    </div>
  </div>
</template>


<script setup>
import { computed, reactive } from 'vue';

const appTitle = 'My Amazing Counter App'
const counterData = reactive({ count: 0, counterTitle: 'My Counter' });
const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd');

const increment = (amount) => counterData.count += amount
const decrement = (amount) => counterData.count -= amount
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