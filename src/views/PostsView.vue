<template>
  <div class="posts">
    <h1>Posts</h1>

    <ul>
      <li>
        <RouterLink to="/postDetail/1">Post 1</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/3">Post 3</RouterLink>
      </li>
    </ul>

    <textarea v-auto-focus></textarea>
  </div>
</template>


<script setup>
import { vAutoFocus } from '@/directives/vAutoFocus';
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 39px;
}
</style>