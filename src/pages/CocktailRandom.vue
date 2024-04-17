<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

import AppLayout from "../components/AppLayout.vue";
import { COCKTAIL_RANDOM } from "@/constants";

const route = useRoute();
const router = useRouter();

const cocktailId = computed(() => {
    return route.path.split("/").pop();
})

const cocktail = ref(null)

async function getCocktail() {
    const data = await axios.get(COCKTAIL_RANDOM);
    cocktail.value = data?.data?.drinks[0];
}

function goBack() {
    router.go(-1)
}

getCocktail();
</script>

<template>
    <div v-if="cocktail" class="wrap">
        <AppLayout :imgUrl="cocktail.strDrinkThumb" :backFunc="goBack">
        <div class="wrapper">
            <div class="info">
                <div class="title">{{ cocktail.strDrink }}</div>
                <div class="line"></div>
                <div class="instructions">
                    {{ cocktail.strInstructions }}
                </div>
            </div>
        </div>
    </AppLayout>
    </div>
</template>

<style scoped>

</style>