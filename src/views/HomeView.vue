<template>
  <div class="home">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counterStore.title }}</h3>
    <div>
      <button @click="counterStore.decrement(2)" class="btn">--</button>
      <button @click="counterStore.decrement(1)" class="btn">-</button>
      <span class="counter">{{ counterStore.count }}</span>
      <button @click="counterStore.increment(1)" class="btn">+</button>
      <button @click="counterStore.increment(2)" class="btn">++</button>
    </div>

    <p>This counter is odd.</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterStore.title" v-auto-focus type="text">
    </div>
  </div>
</template>


<script setup>
import { vAutoFocus } from '@/directives/vAutoFocus';
import { onMounted, ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const appTitle = 'My Amazing Counter App'
const appTitleRef = ref(null);
const counterStore = useCounterStore();

onMounted(() => {
  console.log(`AppTitle width: ${appTitleRef.value.offsetWidth}px`);
});
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