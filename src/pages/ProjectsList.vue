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
                    console.log(this.projects);

                }
                )

        },
        mounted() {
            this.getProjects();

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <ProjectCard :projects="projects"></ProjectCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>