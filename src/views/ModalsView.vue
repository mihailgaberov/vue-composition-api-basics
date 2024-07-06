<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show modal</button>
        <Modal v-if="showModal" @close="showModal = false">
            <template #title>
                Modal title
            </template>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quos molestiae et repudiandae enim
                officia eligendi illo minus tempore quibusdam quaerat corporis ipsa error dolor nesciunt voluptas
                possimus similique quidem?</p>
        </Modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)

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