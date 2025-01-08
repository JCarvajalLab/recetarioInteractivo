<template>
<ItemNavbar />
<div>
    <RecipeList />
</div>

<ItemFooter />
</template>

<script>
import ItemNavbar from '../components/ItemNavbar.vue'
import ItemFooter from '../components/ItemFooter.vue'
import RecipeList from '../components/RecipeList.vue'

export default {
    name: 'HomeView',
    components: {
        ItemNavbar,
        ItemFooter,
        RecipeList
    }
}
</script>

<style scoped>

</style>
