<script setup>
import { computed, ref } from 'vue';
import { Menu } from '../components/index.js';
import { useLayout } from './composables/layout.js';

const { toggleSidebar } = useLayout();
const model = ref([

    {
        label: 'Home',
        items: [
            {
                label: 'Home',
                icon: 'pi pi-home',
                to: '/',
            },
        ],
    },
    {
        label: 'UI Components',
        items: [
            {
                label: 'Timetable ',
                to: '/timetable',
                icon: 'pi pi-table',
            },
        ],
    },
    {
        label: 'Submenu',
        items: [
            {
                label: 'Level 1',
                icon: 'pi pi-bookmark',
                items: [
                    {
                        label: 'Level 1.1',
                        icon: 'pi pi-bookmark',
                        items: [
                            {
                                label: 'Level 1.2',
                                icon: 'pi pi-bookmark',
                                items: [
                                    {
                                        label: 'Level 1.3',
                                        icon: 'pi pi-bookmark',
                                        items: [
                                            {
                                                label: 'Level 1.4',
                                                icon: 'pi pi-bookmark',
                                                items: [
                                                    {
                                                        label: 'Level 1.5',
                                                        icon: 'pi pi-bookmark',
                                                        items: [
                                                            {
                                                                label: 'Level 1.6',
                                                                to: '/',
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Level 1.2',
                        icon: 'pi pi-bookmark',
                        items: [
                            {
                                label: 'Level 1.2.1',
                                icon: 'pi pi-bookmark',
                                items: [
                                    {
                                        label: 'Level 1.2.2',
                                        icon: 'pi pi-bookmark',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Level 2',
                icon: 'pi pi-bookmark',
                items: [
                    {
                        label: 'Level 2.1',
                        icon: 'pi pi-bookmark',
                        items: [
                            {
                                label: 'Level 2.2',
                                icon: 'pi pi-bookmark',
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

</script>

<template>

    <div class="sidebar">
        <div class="sidebar-toggle-btn" @click="toggleSidebar">
            <i class="pi pi-angle-double-left"></i>
        </div>
        <div class="sidebar-content">
            <Menu :model="model" />
        </div>
    </div>

</template>

<style></style>