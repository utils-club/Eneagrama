<template>
    <div class="CajaResultados">
        <div class="CabeceraResultados">{{ info.user.nombre }}, tus resultados son:</div>
        <div class="TipoPersonalidad" v-for="tipo in info.user.podio">
            <div class="titulo">{{ tipo.nombre }}</div>
            <div class="puntaje">({{ tipo.puntaje }} puntos)</div>
        </div>
        <button @click="ir_inicio">Volver al inicio</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/users';

const router = useRouter()
const info = useUserStore()
function ir_inicio() {
    router.push({name: 'landing'})
}
</script>

<style scoped>
.CabeceraResultados {
    margin: 15px auto;
    margin-bottom: 20px;
}
.TipoPersonalidad {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: end;
    padding: 10px;
    border: 1px solid gray;
    margin: 5px 0px;

}
.titulo {
    font-size: x-large;
    margin-right: 10px;
}
.puntaje {
    font-size: medium;
    vertical-align: bottom;
}
button {
    width: 100%;
}
</style>