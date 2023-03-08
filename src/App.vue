<template>
    <div>
        <h1>App</h1>
        <!-- <p>wn logeado: {{ userStore.userData.email }}</p> -->
        <nav v-if="!userStore.loadingUser">
            <router-link to="/" v-if="userStore.userData">Home</router-link> |
            <router-link to="/login" v-if="!userStore.userData"
                >Login</router-link
            >
            |
            <router-link to="/register" v-if="!userStore.userData"
                >Register</router-link
            >
            |
            <button v-if="userStore.userData" @click="userStore.logoutUser">
                Logout
            </button>
        </nav>
        <div v-else>Loading...</div>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
    import { useUserStore } from "./stores/user";
    const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
