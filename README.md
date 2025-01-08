# Proyecto: Recetario Interactivo

## Objetivo:
Crear una aplicación que permita a los usuarios buscar, visualizar y agregar recetas de cocina. Incluir un sistema de filtrado y detalles dinámicos para cada receta. <br>

## Funcionalidades:

Vista principal: Lista de recetas disponibles.<br>
Búsqueda y Filtros: Permitir buscar recetas por nombre o filtrar por categoría (Desayuno, Almuerzo, Cena, Postres).<br>
Detalle de receta: Mostrar una página con los ingredientes y pasos de preparación de la receta seleccionada.<br>
Agregar recetas: Un formulario para que los usuarios puedan añadir recetas.<br>
Almacenamiento local: Guardar las recetas en localStorage.<br>

## Componentes y Vistas:

### Vistas:
HomeView: Página principal con la lista de recetas y el sistema de búsqueda/filtrado.<br>
RecipeDetailView: Página para mostrar el detalle de una receta seleccionada.<br>
AddRecipeView: Página con un formulario para agregar recetas.<br>

### Componentes:

Navbar (Obligatorio): Barra de navegación con enlaces a "Inicio", "Agregar receta" y un campo de búsqueda.<br>
Footer (Obligatorio): Contiene créditos, enlaces a redes sociales y un botón para cambiar entre tema claro/oscuro.<br>
RecipeCard: Componente reutilizable para mostrar la información resumida de cada receta.<br>
RecipeList: Contenedor para listar los RecipeCard filtrados.<br>

### Rutas sugeridas:
/: Página principal (HomeView).<br>
/recipe/:id: Página de detalle de una receta (RecipeDetailView).<br>
/add: Página para añadir una nueva receta (AddRecipeView).<br>

## Extras (Opcionales):
Tema claro/oscuro: Usa Vuetify para implementar el cambio de tema.<br>
Validación de formularios: Asegúrate de que las recetas añadidas tengan todos los campos requeridos.<br>
Datos iniciales: Carga datos de recetas desde una API gratuita como TheMealDB API.<br>

# recetarioInteractivo
