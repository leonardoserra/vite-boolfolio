<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'ProjectsList',
    data() {
        return {
            store,
            projects: [],
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.baseURL}/api/projects`)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    console.log('da axios' + ' ' + this.projects);

                }
                )

        },
        mounted() {
            this.getProjects();
            console.log('dal mounted' + ' ' + this.projects);

        }
    }
}

</script>

<template>
    <ProjectCard :projects="projects"></ProjectCard>
</template>

<style lang="scss" scoped></style>