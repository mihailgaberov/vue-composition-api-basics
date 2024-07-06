<template>
    <Teleport to=".modals-container">
        <div class="modal" v-if="modelValue">
            <h1>
                {{ title }}
            </h1>
            <slot />

            <button @click="$emit('update:modelValue', false)">Hide modal</button>
        </div>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'Modal title'
    }
})

const emit = defineEmits([
    'update:modelValue'
])

/* const handleButtonClick = () => {
    emit('update:modelValue', false)
} */
</script>

<style :scope>
.modal {
    background: beige;
    color: black;
    padding: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>