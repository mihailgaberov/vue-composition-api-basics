import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const title = ref('My Counter Title')

  function increment(amount) {
    count.value += amount
  }

  function decrement(amount) {
    count.value -= amount
  }

  return { count, increment, decrement, title }
})
