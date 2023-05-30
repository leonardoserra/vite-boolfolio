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
        .then(response => {
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
  <div class="card-container">

    <div v-for="(project, index) in projects" :key="index" class="card">
      <ProjectCard :title="project.title" :imageSrc="project.image_src" :description="project.description"
        :technologies="project.technologies" :type="project.type?.type_name"></ProjectCard>
    </div>


  </div>
</template>

<style scoped lang="scss">
@import './styles/general.scss';

.card-container {
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;


  .card {
    margin: 10px;
    width: calc(33.3333333333% - 54px);
    border: 2px solid rgb(253, 66, 66);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 3px 3px rgb(253, 66, 66);
  }

}
</style>
