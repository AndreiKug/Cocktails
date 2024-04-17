import { defineStore } from "pinia";
import axios from "axios";
import { INGREDIENTS_URL, COCKTAIL_BY_INGR_URL } from "../constants/api";

export const useRootStore = defineStore("root", {
    state: () => ({
        ingredients: [],
        ingredient: null,
        cocktails: [],
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get(INGREDIENTS_URL);
            this.ingredients = data?.data.drinks;
        },
        async getCocktails(ingredient) {
            const data = await axios.get(
                `${COCKTAIL_BY_INGR_URL}${ingredient}`
            );
            this.cocktails = data?.data.drinks;
        },
        setIngredient(ingredient) {
            this.ingredient = ingredient;
        },
    },
});
