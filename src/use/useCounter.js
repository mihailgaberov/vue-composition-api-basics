
import {
    computed,
    reactive,
    watch,
    nextTick
} from 'vue';
const counterData = reactive({ count: 0, counterTitle: 'My Counter' });

export function useCounter() {
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

    return {
        counterData,
        oddOrEven,
        increment,
        decrement
    }
}