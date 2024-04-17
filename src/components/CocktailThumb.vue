<script setup>
const props = defineProps({
    cocktail: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="root">
        <RouterLink :to="`/coctail/${cocktail.idDrink}`">
        <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
        </RouterLink>
        <div class="name">
            <span>{{ cocktail.strDrink }}</span>
        </div>
    </div>
</template>

<style scoped>
.root {
    width: calc((100% - 76px) / 3);
    margin-right: 38px;
    padding-bottom: 20px;
}

.root:nth-child(3n + 3) {
    margin-right: 0;
}

.pic {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100%;
}

.name {
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 15px;
    letter-spacing: 0.1em;
    text-align: center;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>