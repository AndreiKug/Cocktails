import { createRouter, createWebHistory } from "vue-router";
import { ROUTES_PATHS } from "../constants/router";
import Home from "../pages/Home.vue";
import Cocktail from "../pages/Cocktail.vue";
import CocktailRandom from "../pages/CocktailRandom.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: ROUTES_PATHS.HOME,
            name: ROUTES_PATHS.HOME,
            component: Home,
        },
        {
            path: ROUTES_PATHS.COCKTAIL,
            name: ROUTES_PATHS.COCKTAIL,
            component: Cocktail,
        },
        {
            path: ROUTES_PATHS.RANDOM,
            name: ROUTES_PATHS.RANDOM,
            component: CocktailRandom,
        },
    ],
});

export default router;
