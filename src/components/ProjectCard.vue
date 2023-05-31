<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            messaggioProva: 'ciao carissimi'
        }
    },
    props: {
        projects: Array
    },
    mounted() {
        console.log(this.projects);
    }
}
</script>

<template>
    <div class="card m-4 " v-for="(project, index) in projects" :key="index">
        <img :src="project.image_src" class="card-img-top img-thumbnail" :alt="project.title">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ project.title }}</h5>
            <p class="card-text">Descrizione: {{ project.description }}</p>
            <div class="row">
                <div class="col">
                    Tecnologie: <ul v-if="project.technologies.length >= 1" class="card-text list-group-flush">
                        <li v-for="technology in project.technologies" class="list-group-item">
                            {{ technology.name }}
                        </li>
                    </ul>
                    <span class="card-text" v-else>Nessuna Tecnologia usata</span>
                </div>
            </div>
            <div class="card-text" v-if="project.type">
                Tipologia: {{ project.type.type_name }}
            </div>
            <div class="card-text" v-else>Tipologia: Nessuna tipologia assegnata</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';

// .card {
//     min-height: 650px;


//     img {
//         max-height: 400px;
//     }
// }
</style>
