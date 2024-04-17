<script setup>
import {useRootStore} from "../stores/root";
import { storeToRefs } from "pinia";

import AppLayout from "../components/AppLayout.vue";
import CocktailThumb from "../components/CocktailThumb.vue";

const rootStore = useRootStore();
rootStore.getIngredients();

const {ingredients, ingredient, cocktails} = storeToRefs(rootStore);

function getCocktails() {
    rootStore.getCocktails(rootStore.ingredient);
}

function removeIngredient() {
    rootStore.setIngredient(null);
}
</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
        <div class="wrapper">
            <div v-if="!cocktails || !ingredient" class="info">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
                <div class="select-wrapper">
                    <el-select
                        v-model="rootStore.ingredient"
                        class="select"
                        placeholder="Choose main ingredient"
                        size="large"  
                        filterable
                        allow-create      
                        @change="getCocktails"               
                        >
                        <el-option
                            v-for="item in ingredients"
                            :key="item.strIngredient1"
                            :label="item.strIngredient1"
                            :value="item.strIngredient1"
                        />
                    </el-select>
                </div>
                <div class="text">Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.</div>
                <img class="img" src="../assets/img/cocktails.png" alt="coctails">
            </div>
            <div v-else class="info">
                <div class="title">COCKTAILS WITH {{ ingredient }} </div>
                <div class="line"></div>
                <div class="cocktails">
                    <CocktailThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
.select-wrapper {
    padding-top: 50px;
}

.select {
    width: 220px;
}

.text {
    max-width: 516px;
    margin: 0 auto;
    padding-top: 50px;
    line-height: 36px;
    letter-spacing: 0.1em;
    color: var(--textMuted);
}

.img {
    margin-top: 60px;
}

.cocktails {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 500px;
    max-height: 900px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 60px;
}
</style>