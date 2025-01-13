<template>
<v-dialog v-model="localDialog" max-width="400" persistent style="z-index: 1000">
    <v-card>
        <v-card-title class="text-h6">
            <v-icon icon="mdi-check-circle" color="success" class="mr-2"></v-icon>
            Receta Agregada
        </v-card-title>
        <v-card-text>
            La receta fue agregada al listado. Si presenta algún problema y no puede visualizarla, favor contactarse a soporte técnico.
        </v-card-text>
        <v-card-actions>
            <v-btn color="primary" block @click="cerrarDialog">Aceptar</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: 'AlertDialog',
    props: {
        dialog: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            localDialog: false
        }
    },
    watch: {
        dialog(newValue) {
            this.localDialog = newValue;
        }
    },
    methods: {
        cerrarDialog() {
            this.$emit('cerrar-dialog');
        }
    }
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
