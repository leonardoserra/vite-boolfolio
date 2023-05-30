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
    getProjects() {
      axios.get(`${this.baseURL}/api/projects`)
        .then(response => {
          console.log(response.data.results);
          this.projects = response.data.results;
          console.log(this.projects);

        }
        )

    }
  },
  mounted() {
    this.getProjects();
    // console.log(this.projects);

  },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(project, index) in projects" :key="index">
        <ProjectCard :title="project.title" :imageSrc="project.image_src" :description="project.description"
          :technologies="project.technologies" :type="project.type?.type_name"></ProjectCard>
      </div>

    </div>


  </div>
</template>

<style scoped lang="scss">
@import './styles/general.scss';
</style>
