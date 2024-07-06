<template>
    <Teleport to=".modals-container">
        <div class="modal">
            <h1>
                {{ title }}
            </h1>
            <slot />

            <button @click="$emit('hideModal')">Hide modal</button>
        </div>
    </Teleport>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Modal title'
    }
})

const emit = defineEmits([
    'hideModal'
])
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