<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input
                type="email"
                placeholder="Ingrese email"
                v-model.trim="email"
            />
            <input
                type="password"
                placeholder="Ingrese Contraseña"
                v-model.trim="password"
            />
            <button type="submit" :disabled="userStore.loadingUser">
                Acceso
            </button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useUserStore } from "../stores/user";
    //import { useRouter } from "vue-router";

    // const router = useRouter();

    const userStore = useUserStore();

    const email = ref("");
    const password = ref("");

    //handleSubmit---> activa nuestro formulario
    const handleSubmit = async () => {
        // (si no existe el email o si no existe el password)
        if (!email.value || password.value.length < 6) {
            return alert("llena los campos ctm");
        }
        //console.log("Procesando Formulario");
        await userStore.loginUser(email.value, password.value);
        //router.push("/");
    };
</script>
