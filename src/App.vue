<script setup>
</script>

<template>
    <div :class="$style.main"></div>
</template>

<style module lang="scss">
    @use './scss/settings/spacing';
    @use './scss/settings/border';
    .main {
        width: spacing.$spacing-25;
        height: spacing.$spacing-25;
        border-radius: border.$radius_full;
        border-style: solid;
        border-width: border.$border_04;
        border-color: #333 #ddd #333 #333;
        animation: rotate 1.3s infinite ease-in-out;
    }
    @keyframes rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>