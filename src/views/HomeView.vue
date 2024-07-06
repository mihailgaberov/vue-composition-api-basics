<template>
  <div class="home">
    <h2 ref="appTitleRef"> {{ appTitle }}</h2>
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
      <input v-model="counterData.counterTitle" v-auto-focus type="text">
    </div>
  </div>
</template>


<script setup>
import {
  computed,
  reactive,
  watch,
  ref,
  onMounted,
  nextTick
} from 'vue';
import { vAutoFocus } from '@/directives/vAutoFocus';

const appTitle = 'My Amazing Counter App'
const appTitleRef = ref(null);

onMounted(() => {
  console.log(`AppTitle width: ${appTitleRef.value.offsetWidth}px`);

});

const counterData = reactive({ count: 0, counterTitle: 'My Counter' });

watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount === 20) {
    alert('Counter is now 20!');
  }
});

const oddOrEven = computed(() => counterData.count % 2 === 0 ? 'even' : 'odd');

const increment = async (amount) => {
  counterData.count += amount;
  await nextTick();
  console.log('Counter updated!');
}
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