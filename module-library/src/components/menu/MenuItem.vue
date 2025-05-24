<script setup>
import { onBeforeMount, ref, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRoute } from 'vue-router';
const { layoutState, setActiveMenuItem } = useLayout();
const route = useRoute();
const props = defineProps({
    item: {
        type: Object
    },
    root: {
        type: Boolean,
        default: true
    },
    index: Number,
    parentItemKey: {
        type: String,
        default: null
    }
})

const itemKey = ref(null);
const isActiveMenu = ref(false)

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

    const activeItem = layoutState.activeMenuItem;

    isActiveMenu.value = activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
});
watch(
    () => layoutState.activeMenuItem,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);

const itemClick = (item) => {

    const newActiveItem = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey.value) : itemKey.value;
    setActiveMenuItem(newActiveItem);
}

function activeRoute(item) { return item.to === route.path };

</script>

<template>
    <li :class="{ 'root-menuitem': props.root, 'active-menuitem': isActiveMenu }">
        <!-- if item is root -->
        <div class="menuitem-root-text" v-if="props.root">{{ props.item.label }}</div>
        <a v-if="props.item.items && !root" @click="itemClick(item)">
            <i class="pi menuitem-icon" :class="props.item.icon"></i>
            <div class="menuitem-text">{{ props.item.label }}</div>
            <i v-if="props.item.items" class="pi pi-angle-right submenu-toggler"></i>
        </a>
        <router-link v-if="props.item.to" :to="props.item.to" :class="{ 'active-route': activeRoute(item) }">
            <i class="pi menuitem-icon" :class="props.item.icon"></i>
            <div class="menuitem-text">{{ props.item.label }}</div>
        </router-link>
        <Transition v-if="item.items" name="submenu">
            <ul class="submenu" v-show="root ? true : isActiveMenu">
                <MenuItem v-for="(submenuItem, index) in item.items" :item="submenuItem" :root="false" :key="index"
                    :index="index" :parentItemKey="itemKey" />
            </ul>
        </Transition>
    </li>
</template>
