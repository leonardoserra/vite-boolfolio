import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactsPage from './pages/ContactsPage.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/contattaci',
            name: 'contacts',
            component: ContactsPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }

    ]
});

export { router };