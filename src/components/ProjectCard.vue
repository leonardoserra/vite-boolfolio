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
    {{ messaggioProva }}
    <ul class="card">
        <li>{{ title }}</li>
        <li><img :src="imageSrc" /> </li>
        <li> Descrizione:
            <p>
                {{ description }}
            </p>
        </li>
        <li> Tecnologie
            <ul class="technologies-list">
                <li v-for="technology in technologies">
                    <div>{{ technology.name }}</div>
                </li>

            </ul>
        </li>
        <li>{{ type }}</li>
    </ul>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';

// .card-container {
//     width: 1200px;
//     margin: auto;
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;


.card {
    margin: 10px;
    width: calc(33.3333333333% - 54px);
    border: 2px solid rgb(253, 66, 66);
    border-radius: 12px;
    padding: 15px;
    box-shadow: 3px 3px rgb(253, 66, 66);

    .technologies-list {
        list-style: square;
    }
}

// }
</style>
