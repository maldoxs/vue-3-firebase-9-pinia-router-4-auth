<template>
    <div>
        <h1>Register</h1>
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
                Crear Usuario
            </button>
        </form>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { useUserStore } from "../stores/user";
    // import { useRouter } from "vue-router";

    // const router = useRouter();

    const userStore = useUserStore();

    const email = ref("");
    const password = ref("");

    //handleSubmit---> activa nuestro formulario
    const handleSubmit = async () => {
        // (si no existe el email o si el password es menor a 6 digitos)
        if (!email.value || password.value.length < 6) {
            return alert("llena los campos ctm");
        }
        //console.log("Procesando Formulario");
        await userStore.registerUser(email.value, password.value);
        //router.push("/");
    };
</script>
