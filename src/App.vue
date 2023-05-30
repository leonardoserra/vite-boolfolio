<script>
import ProjectCard from './components/ProjectCard.vue';
import axios from 'axios';
export default {
  data() {
    return {
      baseURL: 'http://127.0.0.1:8000'
    }
  },
  components: {
    ProjectCard
  },
  methods: {
    getProjects() {
      axios.get(`${this.baseURL}/api/projects`)
        .then(response =>
          console.log(response.data.results)
        )

    }
  },
  mounted() {
    this.getProjects();
  }
}
</script>

<template>
  <ProjectCard></ProjectCard>
</template>

<style scoped lang="scss">
@import './styles/general.scss'
</style>
