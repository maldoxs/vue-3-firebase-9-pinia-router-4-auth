<template>
    <h1>Home</h1>
    <p>prueba</p>
    <p>{{ userStore.userData?.email }}</p>
    <!-- se pone un ? en caso de que no exista o no este inicializado -->
</template>

<script setup>
    import { useUserStore } from "../stores/user";
    const userStore = useUserStore();
    // console.log("prueba" + userStore.userData);
</script>
