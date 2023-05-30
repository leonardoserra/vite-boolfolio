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
        console.log(this.projects);
    }
}
</script>

<template>
    <ul>
        <li>{{ title }}</li>
        <li>{{ imageSrc }}</li>
        <li>{{ description }}</li>
        <li v-for="technology in technologies">
            <div>{{ technology.name }}</div>
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


//     .card {
//         margin: 10px;
//         width: calc(33.3333333333% - 54px);
//         border: 2px solid rgb(253, 66, 66);
//         border-radius: 12px;
//         padding: 15px;
//         box-shadow: 3px 3px rgb(253, 66, 66);
//     }

// }
</style>
