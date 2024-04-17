<script setup>
import { computed } from "vue";
import {useRoute, useRouter} from "vue-router";
import {Back} from '@element-plus/icons-vue';

import { ROUTES_PATHS } from "@/constants";

const props = defineProps({
    imgUrl: {
        type: String,
        required: true,
    },
    backFunc: {
        type: Function,
        required: true,
    },
    isBackButtonVisible: {
        type: Boolean,
        default: true,
    }
})

const route = useRoute();
const router = useRouter();

const routeName = computed(() => {
    return route.name
})

function goForRandomCocktail() {
    router.push({name: ROUTES_PATHS.RANDOM})

    if (routeName.value === ROUTES_PATHS.RANDOM) {
        router.go()
    }
}
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>
        <div class="main">
            <div class="btns">
                <el-button type="primary" :icon="Back" circle class="back" @click="backFunc" v-if="isBackButtonVisible"/>
                <el-button class="btn" @click="goForRandomCocktail">Get random cocktail</el-button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.root {
    display: flex;
    min-height: 100vh;
    background-color: var(--background);
}

.img {
    width: 50%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}

.main {
    position: relative;
    width: 50%;
    padding: 32px 40px;
}

.btn {
    position: absolute;
    top: 32px;
    right: 40px;
    font-size: 16px;
    font-family: 'Raleway', 'Arial', sans-serif;
    background-color: var(--accent);
    border-color: var(--accent);
    color: var(--text);
}

.btn:hover, .btn:active {
    filter: brightness(85%);
}

.btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back {
    background-color: transparent;
    border-color: #fff;
}
.back:hover {
    border-color: var(--accent);
    background-color: transparent;
    color: var(--accent);
}
</style>