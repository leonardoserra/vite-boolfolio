<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            messaggioProva: 'ciao carissimi'
        }
    },
    props: {
        title: String,
        imageSrc: String,
        description: String,
        technologies: Array,
        type: String
    },
    mounted() {
        console.log(this.title);
    }
}
</script>

<template>
    <div class="card m-4">
        <img :src="imageSrc" class="card-img-top img-thumbnail" :alt="title">
        <div class="card-body">
            <h5 class="card-title">Titolo: {{ title }}</h5>
            <p class="card-text">Descrizione: {{ description }}</p>
            <div class="row">
                <div class="col">
                    Tecnologie: <ul v-if="technologies.length >= 1" class="card-text list-group-flush">
                        <li v-for="technology in technologies" class="list-group-item">
                            {{ technology.name }}
                        </li>
                    </ul>
                    <span class="card-text" v-else>Nessuna Tecnologia usata</span>
                </div>
            </div>
            <div class="card-text" v-if="type">
                Tipologia: {{ type }}
            </div>
            <div class="card-text" v-else>Tipologia: Nessuna tipologia assegnata</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';

.card {
    min-height: 650px;


    img {
        max-height: 400px;
    }
}
</style>
