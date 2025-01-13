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

    <!-- Componente AlertDialog -->
    <AlertDialog :dialog="dialog" @cerrar-dialog="cerrarDialog" />
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue';
import ItemFooter from '../components/ItemFooter.vue';
import AlertDialog from '../components/AlertDialog.vue'; // Importar el componente AlertDialog
import {
    mapActions
} from 'vuex';

export default {
    name: 'AddRecipeView',
    components: {
        ItemNavbar,
        ItemFooter,
        AlertDialog // Registrar el componente AlertDialog
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
            dialog: false // Controla la visibilidad del dialog
        }
    },
    methods: {
        ...mapActions(['agregarRecetaAction']),
        async agregarReceta() {
            // Validar que todos los campos estén completos
            if (!this.validarCampos()) {
                alert("Por favor, complete todos los campos requeridos.");
                return; // Detener la ejecución si falta algún campo
            }

            try {
                // Asignar un ID único a la receta
                this.nuevaReceta.id = Math.max(...this.$store.state.recetas.map(receta => receta.id)) + 1;

                // Agregar la receta usando Vuex
                await this.agregarRecetaAction(this.nuevaReceta);

                // Mostrar el dialog de éxito
                this.dialog = true;
            } catch (error) {
                console.error("Error al agregar la receta:", error);
                // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
            }
        },
        validarCampos() {
            // Verificar que todos los campos tengan un valor
            return (
                this.nuevaReceta.nombre.trim() !== "" &&
                this.nuevaReceta.dificultad.trim() !== "" &&
                this.nuevaReceta.imagen.trim() !== "" &&
                this.nuevaReceta.tipo.trim() !== "" &&
                this.nuevaReceta.detalle.trim() !== ""
            );
        },
        cerrarDialog() {
            // Cerrar el dialog
            this.dialog = false;

            // Redirigir al home después de cerrar el dialog
            this.redirigirAHome();
        },
        redirigirAHome() {
            // Redirigir al home
            this.$router.push({
                name: 'home'
            });
        }
    }
}
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
