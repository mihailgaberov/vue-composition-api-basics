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

  function oddOrEven() {
    return count.value % 2 === 0 ? 'even' : 'odd'
  }

  return { count, increment, decrement, oddOrEven, title }
})
