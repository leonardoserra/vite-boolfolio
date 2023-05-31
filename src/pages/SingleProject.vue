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

        axios.get(`${this.store.baseURL}/api/projects/${slug}`)
            .then(response => {
                this.singleProject = response.data.results;
            });

    }
}

</script>

<template></template>

<style lang="scss" >
@import '../styles/general.scss';
</style>
