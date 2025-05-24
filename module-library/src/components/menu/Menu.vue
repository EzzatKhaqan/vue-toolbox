<script setup>
import MenuItem from './MenuItem.vue';
const props = defineProps({
    model: {
        type: Array
    }
});
</script>
<template>
    <ul class="layout-menu">
        <MenuItem v-for="(item, index) in props.model" :item="item" :root="true" :key="index" :index="index" />
    </ul>
</template>

<style>
.layout-menu {
    padding: 0;
    margin: 0;
}
</style>