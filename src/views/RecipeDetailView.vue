<template>
<ItemNavbar />
<div>
    <h1>Detalle de la Receta: {{ receta.nombre }}</h1>
    <img :src="receta.imagen" alt="Imagen de la receta" style="width: 100%; max-width: 400px; height: auto; margin-bottom: 20px;">
    <p><strong>Dificultad:</strong> {{ receta.dificultad }}</p>
    <p><strong>Tipo:</strong> {{ receta.tipo }}</p>
    <p><strong>Descripción:</strong> {{ receta.detalle }}</p>

    <h2>Ingredientes</h2>
    <ul>
        <li>1 taza harina</li>
        <li>1 taza leche líquida</li>
        <li>2 huevos</li>
        <li>1 cdts aceite</li>
        <li>Manjar o mermelada</li>
    </ul>

    <h2>Pasos a seguir</h2>
    <ol>
        <li>Debemos poner la leche junto a los dos huevos y batir con batidora. (se echa el huevo entero)</li>
        <li>Debemos vaciar la mezcla de los huevos y la leche en un bol y añadir la taza de harina mezclar bien.</li>
        <li>En una sartén buena echamos un poquito de aceite y lo esparcimos alrededor de la sartén con una servilleta para que no se peguen (debe ser un poquito de aceite)</li>
        <li>Luego poner nuestra mezcla en la sartén no toda deben tener una medida exacta cubrir toda la sartén con nuestra mezcla dorar por ambos lados.</li>
        <li>Cuando vean que está dorado poner en un plato y dejar enfriar (hacer lo mismo con el resto de la mezcla)</li>
        <li>Ahora que ya está lista la masita echar el manjar y cubrir toda la masa manjar o mermelada a gusto.</li>
    </ol>
</div>
<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'
import {
    mapState
} from 'vuex';

export default {
    name: 'RecipeDetailView',
    components: {
        ItemNavbar,
        ItemFooter
    },
    data() {
        return {
            receta: {} // Aquí almacenaremos los detalles de la receta
        };
    },
    created() {
        const recipeId = this.$route.params.id; // Obtener el ID de la receta desde la ruta
        this.fetchRecipeDetails(recipeId); // Buscar los detalles de la receta
    },
    methods: {
        fetchRecipeDetails(id) {
            // Aquí deber ías obtener la receta desde tu store o API
            const receta = this.recetas.find(receta => receta.id === parseInt(id)); // Asegúrate de comparar el ID como número
            if (receta) {
                this.receta = receta; // Asignar la receta encontrada a la variable receta
            }
        }
    },
    computed: {
        ...mapState(['recetas']), // Obtener las recetas del store
    }
}
</script>

<style scoped>

</style>
