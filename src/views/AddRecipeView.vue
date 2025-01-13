<template>
<ItemNavbar />
<div>
    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg" style="margin-top:5%">
        <div class="text-subtitle-1 text-medium-emphasis">Agregar Receta</div>

        <v-text-field density="compact" label="Nombre" prepend-inner-icon="mdi-format-title" variant="outlined" v-model="nuevaReceta.nombre" required></v-text-field>

        <v-select density="compact" label="Dificultad" prepend-inner-icon="mdi-format-list-bulleted" variant="outlined" v-model="nuevaReceta.dificultad" required :items="dificultades"></v-select>

        <v-text-field density="compact" label="Imagen" prepend-inner-icon="mdi-image" variant="outlined" v-model="nuevaReceta.imagen" required></v-text-field>

        <v-select density="compact" label="Tipo" prepend-inner-icon="mdi-format-list-bulleted" variant="outlined" v-model="nuevaReceta.tipo" required :items="tipos"></v-select>

        <v-textarea density="compact" label="Detalle" prepend-inner-icon="mdi-format-text" variant="outlined" v-model="nuevaReceta.detalle" required></v-textarea>

        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="agregarReceta">
            Agregar Receta
        </v-btn>
    </v-card>

    <!-- Alerta de éxito -->
    <v-alert v-if="mostrarAlerta" type="success" title="Receta Agregada" text="La receta fue agregada al listado. Si presenta algún problema y no puede visualizarla, favor contactarse a soporte técnico." class="mx-auto mt-6" max-width="448" closable @click:close="redirigirAHome"></v-alert>
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'
import {
    mapActions
} from 'vuex'

export default {
    name: 'AddRecipeView',
    components: {
        ItemNavbar,
        ItemFooter
    },
    data() {
        return {
            nuevaReceta: {
                id: null,
                nombre: '',
                dificultad: '',
                imagen: '',
                tipo: '',
                detalle: ''
            },
            dificultades: ['Fácil', 'Media', 'Difícil'],
            tipos: ['Desayuno', 'Almuerzo', 'Cena', 'Postres'],
            mostrarAlerta: false // Controla la visibilidad de la alerta
        }
    },
    methods: {
        ...mapActions(['agregarRecetaAction']),
        agregarReceta() {
            // Agregar la receta
            this.nuevaReceta.id = Math.max(...this.$store.state.recetas.map(receta => receta.id)) + 1
            this.agregarRecetaAction(this.nuevaReceta)

            // Mostrar la alerta
            this.mostrarAlerta = true

            // Redirigir al home después de 5 segundos
            setTimeout(() => {
                this.redirigirAHome()
            }, 5000)
        },
        redirigirAHome() {
            // Redirigir al home
            this.$router.push({
                name: 'home'
            })
        }
    }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
