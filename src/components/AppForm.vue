<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'AppForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            sending: false
        }
    },
    methods: {
        sendForm() {

            this.success = false;
            this.sending = true;
            axios.post(`${this.store.baseURL}/api/contacts`,
                {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }
            ).then(response => {
                console.log(response);
                if (response.data.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                    this.success = true;
                }
                this.sending = false;
            }).catch(error => {
                this.sending = false;

            })
        }
    }
}
</script>

<template>
    <div v-if="success" class="alert alert-success" role="alert">
        Messaggio inviato con successo!
    </div>
    <form @submit.prevent="sendForm()" class="col">
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

        <button :disabled="sending" type="submit" class="btn btn-primary">
            {{ sending ? 'Invio in corso...' : 'Invia Contatto' }}
        </button>
    </form>
</template>

<style scoped lang="scss"></style>
