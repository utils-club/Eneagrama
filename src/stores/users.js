import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    nombre: '',
    puntajes: [],
    podio: []
  })
  function guardar_nombre (nombre) {
    user.nombre = nombre
  }
  function guardar_puntaje (puntaje) {
    user.puntajes = puntaje
  }
  function guardar_podio (podio) {
    user.podio = podio
  }
  return { user, guardar_nombre, guardar_puntaje, guardar_podio }
})
