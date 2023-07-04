<script setup>
console.log('En ruta')
const id = $route.params.id
</script>

<template>
    <h2 class="pt-56">{{ id }}</h2>
    <p class="pt-40">Hola</p>
</template>

<style>
</style>