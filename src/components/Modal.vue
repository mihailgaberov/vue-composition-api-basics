<template>
    <Teleport to=".modals-container">
        <div class="modal">
            <h1>
                <slot name="title" />
            </h1>
            <slot />

            <button>Hide modal</button>
        </div>
    </Teleport>
</template>

<script setup>



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