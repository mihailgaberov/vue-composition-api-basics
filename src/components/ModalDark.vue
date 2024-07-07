<template>
    <Teleport to=".modals-container">
        <div class="modal-dark" v-if="modelValue">
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
</script>

<style :scope>
.modal-dark {
    background: #333;
    color: white;
    padding: 1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
</style>