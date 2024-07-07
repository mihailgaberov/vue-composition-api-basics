<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="checkbox">Show dark modals?
                <input type="checkbox" v-model="showDarkModals" />
            </label>
        </div>
        <button @click="showModal = true">Show modal</button>

        <component :is="showDarkModals ? ModalDark : Modal" v-model="showModal" title="My Modal title (via props)">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, quos molestiae et repudiandae enim
                officia eligendi illo minus tempore quibusdam quaerat corporis ipsa error dolor nesciunt voluptas
                possimus similique quidem?</p>
        </component>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

const showDarkModals = ref(false)
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