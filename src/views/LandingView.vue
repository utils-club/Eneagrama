<template>
    <div class="LandingTitulo">
        <h1>Eneagrama</h1>
        <h2>Descubra su tipo de personalidad</h2>
    </div>
    <div class="LandingFormulario">
        <label for="nombre">Digita tu nombre para empezar</label>
        <input type="text" name="nombre" v-model="nombre_usuario">
        <button @click="iniciar_prueba">Empezar</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/users'

const router = useRouter()
const nombre_usuario = ref('')
const userStore = useUserStore()

function iniciar_prueba() {
    userStore.guardar_nombre(nombre_usuario.value)
    router.push({name: 'eneagrama'})
}
</script>

<style scoped>

.LandingTitulo {
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
}
.LandingFormulario {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
}
button {
    margin: 20px 0px;
}
h1 {
    font-size: 3em;
    font-family: monospace;
}
h2 {
    font-size: 1.1em;
}
input {
    margin: 15px 0px;
}
</style>