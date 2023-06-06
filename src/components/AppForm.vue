<script>
export default {
    name: 'AppForm',
    data() {
        return {
            messaggioProva: 'ciao carissimi'
        }
    }
}
</script>

<template>
    <form class="col">
        <div class="mb-3">
            <label for="email" class="form-label">Inserisci la tua e-mail</label>
            <input type="email" class="form-control" id="email">
            <div id="emailHelp" class="form-text">Usa la mail con la quale desideri essere ricontattato</div>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Inserisci in tuo nome</label>
            <input type="text" class="form-control" id="name">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<style scoped lang="scss"></style>
