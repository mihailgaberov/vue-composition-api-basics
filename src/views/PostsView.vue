<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <textarea v-auto-focus></textarea>
    <button @click="counter.increment(1)" class="counter-button" :class="{ 'yellow': counter.oddOrEven === 'odd' }">
      {{ counter.count }}</button>
  </div>
</template>


<script setup>
import { vAutoFocus } from '@/directives/vAutoFocus';
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue';


const posts = ref([
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
]);

const counter = useCounterStore();

</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 39px;
}

.counter-button {
  background-color: pink;
  width: 100%;
  font-size: 60px;
  cursor: pointer;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>