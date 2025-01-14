<template>
<ItemNavbar />
<div class="container">
    <div class="image-container">
        <img :src="receta.imagen" :alt="receta.nombre" />
    </div>
    <div class="title">
        {{ receta.nombre }}: {{ receta.detalle }}
    </div>
    <div class="updated-date">
        <i class="far fa-clock"></i>
        Actualizado: 14/01/2025
    </div>
    <div class="rating">
        <span>EVALÚA ESTA RECETA:</span>
        <div class="text-center">
            <v-rating v-model="rating" hover color="yellow"></v-rating>
        </div>
    </div>
    <div class="section-title">
        ¿Cómo hacer {{ receta.nombre }}?
    </div>
    <div class="ingredients">
        <div class="section-title">INGREDIENTES</div>
        <ul>
            <li>• 1 taza harina</li>
            <li>• 1 taza leche líquida</li>
            <li>• 2 huevos</li>
            <li>• 1 cdts aceite</li>
            <li>• Manjar o mermelada</li>
        </ul>
    </div>
    <div class="preparation">
        <div class="section-title">PREPARACIÓN</div>
        <ol>
            <li>Debemos poner la leche junto a los dos huevos y batir con batidora. (se echa el huevo entero)</li>
            <li>Debemos vaciar la mezcla de los huevos y la leche en un bol y añadir la taza de harina mezclar bien.</li>
            <li>En una sartén buena echamos un poquito de aceite y lo esparcimos alrededor de la sartén con una servilleta para que no se peguen (debe ser un poquito de aceite)</li>
            <li>Luego poner nuestra mezcla en la sartén no toda deben tener una medida exacta cubrir toda la sartén con nuestra mezcla dorar por ambos lados.</li>
            <li>Cuando vean que está dorado poner en un plato y dejar enfriar (hacer lo mismo con el resto de la mezcla)</li>
            <li>Ahora que ya está lista la masita echar el manjar y cubrir toda la masa manjar o mermelada a gusto.</li>
        </ol>
    </div>
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
            receta: {}, // Aquí almacenaremos los detalles de la receta
            rating: 0
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
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #adbd52;
}

.image-container {
    text-align: center;
    margin-bottom: 20px;
}

.image-container img {
    width: 100%;
    max-width: 600px;
    height: auto;
}

.title {
    font-size: 2em;
    font-weight: 700;
    margin-bottom: 10px;
}

.updated-date {
    font-size: 0.9em;
    color: #cccccc;
    margin-bottom: 20px;
}

.rating {
    margin-bottom: 20px;
}

.rating span {
    display: block;
    text-align: left;
}

.section-title {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 10px;
}

.ingredients,
.preparation {
    background-color: #9c9a73;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.ingredients ul,
.preparation ol {
    margin: 0;
    padding: 0;
    list-style: none;
}

.ingredients ul li,
.preparation ol li {
    margin-bottom: 10px;
}

.ingredients ul li::before {
    content: "•";
    color: #ffcc00;
    margin-right: 10px;
}

.preparation ol {
    counter-reset: step;
    /* Inicializa el contador "step" */
}
 
.preparation ol li {
    counter-increment: step;
    /* Incrementa el contador en cada <li> */
}

.preparation ol li::before {
    content: counter(step) ". ";
    /* Muestra el número del contador */
    color: #ffcc00;
    margin-right: 10px;
}
</style>
