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
    <div class="card">
        <img :src="imageSrc" class="card-img-top img-thumbnail" :alt="title">
        <div class="card-body">
            <h5 class="card-title">TITOLO: {{ title }}</h5>
            <p class="card-text">DESCRIZIONE: {{ description }}</p>
            <div class="row">
                <div class="col">
                    TECNOLOGIE: <ul class="list-group-flush">
                        <li v-for="technology in technologies" class="list-group-item">{{ technology.name }}
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                TIPOLOGIA: {{ type }}
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';
</style>
