<template>
    <div class="modals">
        <h1>Modals</h1>

        <button @click="showModal = true">Show modal</button>
        <Teleport to=".modals-container">
            <div class="modal" v-if="showModal">
                <h1>This is modal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quos molestiae et repudiandae enim
                    officia eligendi illo minus tempore quibusdam quaerat corporis ipsa error dolor nesciunt voluptas
                    possimus similique quidem?</p>
                <button @click="showModal = false">Hide modal</button>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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