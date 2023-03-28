<template>
    <h3>{{ user.user.nombre }} responde las siguientes preguntas</h3>
    <div class="CajaPregunta">
        <div class="EnunciadoPregunta">{{ pregunta_actual }}</div>
        <div class="OpcionesPregunta">
            <input type="range" min="1" max="5"  v-model="puntuacion">
            <div class="IndicadorPuntuacion">{{ puntuacion }}</div>
        </div>
        <button @click="busque_pregunta" v-show="mostrar_boton_siguiente">siguiente </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { PREGUNTAS, TIPOS_PERSONALIDAD } from '../data/preguntas';
import { useUserStore } from '../stores/users'

var tipo_persona = 0
var num_pregunta = 0
var acumulado_puntuaciones = 0
const podio_tipo_personalidad = ref([])
const pregunta_actual = ref(PREGUNTAS[tipo_persona][num_pregunta])
const puntuacion = ref(1)
const mostrar_boton_siguiente = ref(true)
const resultados = []
const user = useUserStore()
const router = useRouter()

function finalizar_prueba() {
    let data = []
    TIPOS_PERSONALIDAD.forEach((val, num) => {
        data.push(
            {
                nombre: val,
                puntaje: resultados[num]
            }
        )
    })
    data.sort((a, b) => b.puntaje - a.puntaje)
    for (let index = 0; index < 3; index++) {
        podio_tipo_personalidad.value.push(
            data[index]
        )
        
    }
    user.guardar_podio(podio_tipo_personalidad.value)
    user.guardar_puntaje(resultados)
    router.push({name: 'report'})
}

function busque_pregunta() {
    num_pregunta += 1
    acumulado_puntuaciones = acumulado_puntuaciones + parseInt(puntuacion.value)
    puntuacion.value = 1
    if (num_pregunta === 15) {
        num_pregunta = 0
        tipo_persona += 1
        resultados.push(acumulado_puntuaciones)
        acumulado_puntuaciones = 0
        console.log({resultados});
        if (tipo_persona === 9) {
            tipo_persona = 0
            num_pregunta = 0
            mostrar_boton_siguiente.value = false
            finalizar_prueba()
        }
    }
    pregunta_actual.value = PREGUNTAS[tipo_persona][num_pregunta]
}


</script>

<style scoped>
h3 {
    font-size: 2em;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 15px;
}

.OpcionesPregunta {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.CajaPregunta {
    display: flex;
    flex-direction: column;
}
button {
    margin-top: 20px;
}
.EnunciadoPregunta {
    min-height: 9.5em;
}
</style>