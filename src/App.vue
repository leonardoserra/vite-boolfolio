<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://127.0.0.1:8000',
      projects: null
    }
  },
  components: {
    ProjectCard
  },
  methods: {
    getProjects(dataToFill) {
      axios.get(`${this.baseURL}/api/projects`)
        .then(function (response) {
          console.log(response.data.results);
          dataToFill = response.data.results;
          console.log(dataToFill);

        }
        )

    }
  },
  mounted() {
    this.getProjects(this.projects);
  },
}
</script>

<template>
  <ProjectCard></ProjectCard>
</template>

<style scoped lang="scss">
@import './styles/general.scss'
</style>
