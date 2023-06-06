<script>
export default {
    name: 'AppForm',
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    }
}
</script>

<template>
    <form class="col">
        <div class="mb-3">
            <label for="name" class="form-label">Inserisci in tuo nome</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Inserisci la tua e-mail</label>
            <input type="email" class="form-control" id="email" v-model="email">
            <div id="emailHelp" class="form-text">Usa la mail con la quale desideri essere ricontattato</div>
        </div>
        <div class="mb-3">
            <label for="message" class="mb-2">Messaggio</label>
            <textarea class="form-control" placeholder="Inserisci il tuo messaggio (facoltativo..)" id="message"
                v-model="message"></textarea>

        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<style scoped lang="scss"></style>
