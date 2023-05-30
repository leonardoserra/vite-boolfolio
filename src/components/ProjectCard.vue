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
    }
}
</script>

<template>
    <!-- <div class="prova">
        {{ messaggioProva }}
    </div> -->

    <div class="card-container">

        <div class="card">
            ciao
        </div>
        <div class="card">
            ciao
        </div>
        <div class="card">
            ciao
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '../styles/general.scss';

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
