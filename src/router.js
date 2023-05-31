import { createRouter, createWebHistory } from 'vue-router';

import ProjecstList from './pages/ProjectsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/projects',
            name: 'projects',
            components: ProjectsList
        }
    ]
});

export { router };