import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const title = ref('My Counter Title')

  function increment() {
    count.value++
  }

  return { count, increment, title }
})
