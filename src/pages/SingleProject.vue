<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            singleProject: []

        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        console.log(slug);

        axios.get(`${this.store.baseURL}/api/project/${slug}`)
            .then(response => {
                this.singleProject = response.data.results;
                console.log(this.singleProject);
            });

    }
}

</script>

<template>
    <div class="card col-6 mt-5">
        <img :src="singleProject.image_src" class="card-img-top" :alt="singleProject.title">
        <div class="card-body">
            <h5 class="card-title">{{ singleProject.title }}</h5>
            <p class="card-text">{{ singleProject.description }}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div v-for="(technology, index) in singleProject.technologies" :key="index"> {{ technology.name }} </div>
            </li>
            <li class="list-group-item">{{ singleProject.type?.type_name }}</li>
        </ul>
        <span class="btn btn-success">

            <router-link :to="{ name: 'projects' }" class="nav-link ">Torna alla lista di
                progetti</router-link>
        </span>
    </div>
</template>

<style lang="scss" >
@import '../styles/general.scss';
</style>
