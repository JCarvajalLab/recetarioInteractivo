import { createStore } from 'vuex'

export default createStore({
  state: {
    recetas: [
      // Desayuno
      { id: 1, nombre: 'Tortilla de Patatas', dificultad: 'Fácil', imagen: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/07/11/fotografia-de-una-tortilla-de-patata.jpeg', tipo: 'Desayuno', detalle: 'Una deliciosa tortilla hecha con patatas y cebolla.' },
      { id: 2, nombre: 'Panqueques', dificultad: 'Fácil', imagen: 'https://media.a24.com/p/e58257dc92e13e0343bfb1fe1379f751/adjuntos/296/imagenes/009/394/0009394320/imagepng.png', tipo: 'Desayuno', detalle: 'Esponjosos panqueques perfectos para el desayuno.' },
      { id: 3, nombre: 'Huevos Revueltos', dificultad: 'Fácil', imagen: 'https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/88a4cca2cf0ec9515c317533a6452b88.png', tipo: 'Desayuno', detalle: 'Huevos revueltos suaves y cremosos.' },
      { id: 4, nombre: 'Avena con Frutas', dificultad: 'Fácil', imagen: 'https://mandolina.co/wp-content/uploads/2024/03/avena-con-fruta-1080x550-1-1200x720.jpg', tipo: 'Desayuno', detalle: 'Avena cocida con frutas frescas.' },
      { id: 5, nombre: 'Smoothie de Plátano', dificultad: 'Fácil', imagen: 'https://mandolina.co/wp-content/uploads/2020/11/desayuno-saludable-smoothie-de-banano-1200x675.jpg', tipo: 'Desayuno', detalle: 'Un batido refrescante de plátano y yogur.' },

      // Almuerzo
      { id: 6, nombre: 'Ensalada César', dificultad: 'Media', imagen: 'https://cdn5.recetasdeescandalo.com/wp-content/uploads/2016/06/Ensalada-cesar-con-pollo-y-su-salsa-casera.-Receta-e-ingredientes.jpg', tipo: 'Almuerzo', detalle: 'Ensalada fresca con lechuga, pollo y aderezo César.' },
      { id: 7, nombre: 'Pasta al Pesto', dificultad: 'Media', imagen: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/05/29/5ed11fb61d750.jpeg', tipo: 'Almuerzo', detalle: 'Pasta con salsa pesto hecha de albahaca y piñones.' },
      { id: 8, nombre: 'Tacos de Pollo', dificultad: 'Media', imagen: 'https://mandolina.co/wp-content/uploads/2024/07/Tacos-de-Pollo-con-Salsa-Valentina.jpg', tipo: 'Almuerzo', detalle: 'Tacos rellenos de pollo sazonado y vegetales.' },
      { id: 9, nombre: 'Sopa de Lentejas', dificultad: 'Media', imagen: 'https://pittsburghfoodbank.org/wp-content/uploads/2021/08/Recipe-Images-20.png', tipo: 'Almuerzo', detalle: 'Sopa nutritiva de lentejas con verduras.' },
      { id: 10, nombre: 'Arroz con Verduras', dificultad: 'Media', imagen: 'https://www.cocinacaserayfacil.net/wp-content/uploads/2019/01/Arroz-viudo-con-verduras.jpg', tipo: 'Almuerzo', detalle: 'Arroz salteado con una mezcla de verduras frescas.' },

      // Cena
      { id: 11, nombre: 'Salmón a la Plancha', dificultad: 'Difícil', imagen: 'https://www.paulinacocina.net/wp-content/uploads/2022/07/receta-de-salmon-a-la-plancha-con-salsa-agridulce-1200x900.jpg', tipo: 'Cena', detalle: 'Salmón fresco cocinado a la plancha con hierbas.' },
      { id: 12, nombre: 'Pollo al Horno', dificultad: 'Difícil', imagen: 'https://cocinemosjuntos.com.co/media/mageplaza/blog/post/t/i/tips-para-preparar-pollo-al-horno-jugoso-y-perfecto_1_.jpg', tipo: 'Cena', detalle: 'Pollo marinado y asado al horno.' },
      { id: 13, nombre: 'Ratatouille', dificultad: 'Difícil', imagen: 'https://imag.bonviveur.com/ratatouille-confit-byaldi.jpg', tipo: 'Cena', detalle: 'Un guiso de verduras provenzal.' },
      { id: 14, nombre: 'Risotto de Champiñones', dificultad: 'Difícil', imagen: 'https://mandolina.co/wp-content/uploads/2023/12/Risotto-de-champinones-selvaticos-y-trufa-blanca-1-1200x720.png', tipo: 'Cena', detalle: 'Arroz cremoso con champiñones y queso.' },
      { id: 15, nombre: 'Pizza Casera', dificultad: 'Difícil', imagen: 'https://amasable.com/wp-content/uploads/2020/01/Ingredientes-para-la-pizza-casera-napolitana.jpg', tipo: 'Cena', detalle: 'Pizza hecha en casa con tus ingredientes favoritos.' },

      // Postres
      { id: 16, nombre: 'Tarta de Queso', dificultad: 'Media', imagen: 'https://i.blogs.es/6ad7a5/tarta-de-queso-philadelphia2/1366_2000.jpg', tipo: 'Postres', detalle: 'Tarta cremosa de queso con base de galleta.' },
      { id: 17, nombre: 'Brownies', dificultad: 'Media', imagen: 'https://images.cookforyourlife.org/wp-content/uploads/2020/06/Dark-Chocolate-Brownies-shutterstock_112430981.jpg', tipo: 'Postres', detalle: 'Deliciosos brownies de chocolate.' },
      { id: 18, nombre: 'Helado de Vainilla', dificultad: 'Fácil', imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/BGL2O773X5EHXLNWURCUYKERV4.jpg', tipo: 'Postres', detalle: 'Helado cremoso de vainilla, perfecto para el verano.' },
      { id: 19, nombre: 'Galletas de Chocolate', dificultad: 'Fácil', imagen: 'https://cdn0.recetasgratis.net/es/posts/6/8/2/galletas_de_mantequilla_con_chocolate_55286_orig.jpg', tipo: 'Postres', detalle: 'Galletas suaves y masticables con trozos de chocolate.' },
      { id: 20, nombre: 'Flan', dificultad: 'Media', imagen: 'https://static01.nyt.com/images/2023/09/01/multimedia/RM-flan-bqvp/RM-flan-bqvp-superJumbo.jpg', tipo: 'Postres', detalle: 'Flan de huevo con caramelo, un clásico postre.' },
    ],
  },
  getters: {
    getRecetas: (state) => {
      return state.recetas;
    },
    getRecetasPorTipo: (state) => (tipo) => {
      return state.recetas.filter(receta => receta.tipo === tipo);
    },
  },
  mutations: {
    agregarReceta(state, nuevaReceta) {
      state.recetas.push(nuevaReceta);
    },
  },
  actions: {
  },
  modules: {
  }
})
