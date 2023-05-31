import { reactive } from 'vue'
export const store = reactive({
    baseURL: 'http://127.0.0.1:8000',
    links: [
        {
            routeName: 'home',
            label: 'Home'
        },
        {
            routeName: 'projects',
            label: 'Progetti'
        }

    ]
});
