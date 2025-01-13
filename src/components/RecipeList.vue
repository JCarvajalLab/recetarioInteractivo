<template>
<v-card>
    <v-data-iterator :items="filteredRecetas" :items-per-page="9" :search="search">
        <template v-slot:header>
            <v-toolbar class="px-2">
                <!-- Campo de búsqueda -->
                <v-text-field v-model="search" density="comfortable" placeholder="Buscar receta" prepend-inner-icon="mdi-magnify" style="max-width: 300px;" variant="solo" clearable hide-details></v-text-field>

                <!-- Botón de filtrado por dificultad -->
                <v-btn-toggle v-model="filterDificultad" mandatory class="ml-4">
                    <v-btn value="all"> Todas </v-btn>
                    <v-btn value="fácil"> Fácil </v-btn>
                    <v-btn value="media"> Media </v-btn>
                    <v-btn value="difícil"> Difícil </v-btn>
                </v-btn-toggle>
            </v-toolbar>
        </template>

        <template v-slot:default="{ items }">
            <v-container class="pa-2" fluid>
                <v-row dense>
                    <v-col v-for="item in items" :key="item.raw.id" cols="auto" md="4">
                        <v-card class="pb-3" border flat>
                            <v-img :src="item.raw.imagen" style="width: 400px; height: 200px; margin: 5px 0 5px"></v-img>

                            <v-list-item :subtitle="item.raw.detalle" class="mb-2">
                                <template v-slot:title>
                                    <strong class="text-h6 mb-2">{{ item.raw.nombre }}</strong>
                                </template>
                            </v-list-item>

                            <div class="d-flex justify-space-between px-4">
                                <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                                    <v-icon icon="mdi-alert-circle" start></v-icon>
                                    <div class="text-truncate">{{ item.raw.dificultad }}</div>
                                </div>

                                <v-btn class="text-none" size="small" text="Detalles" border flat></v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </template>

        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
            <div class="d-flex align-center justify-center pa-4">
                <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded @click="prevPage"></v-btn>

                <div class="mx-2 text-caption">
                    Página {{ page }} de {{ pageCount }}
                </div>

                <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal" rounded @click="nextPage"></v-btn>
            </div>
        </template>
    </v-data-iterator>
</v-card>
</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    data() {
        return {
            search: '',
            filterDificultad: 'all', // Valor inicial del filtro
        };
    },
    computed: {
        ...mapState(['recetas']),
        // Filtra las recetas según la dificultad seleccionada
        filteredRecetas() {
            if (this.filterDificultad === 'all') {
                return this.recetas; // Muestra todas las recetas
            }
            return this.recetas.filter(
                (receta) => receta.dificultad.toLowerCase() === this.filterDificultad
            );
        },
    },
};
</script>
