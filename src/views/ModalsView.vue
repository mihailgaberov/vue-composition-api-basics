<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="showModal = true">Show modal</button>
        <div class="modal" v-if="showModal">
            <h1>This is modal</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quos molestiae et repudiandae enim
                officia eligendi illo minus tempore quibusdam quaerat corporis ipsa error dolor nesciunt voluptas
                possimus similique quidem?</p>
            <button @click="showModal = false">Hide modal</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)

</script>

<style :scope>
.modal {
    background-color: beige;
    color: black;
    padding: 1rem;
}
</style>