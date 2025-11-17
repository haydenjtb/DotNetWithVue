import './style.css'
import App from './App.vue';
import { createApp } from 'vue'

const home = createApp(App, {
    data: function() {
        return {
            name: document.querySelector("#app")?.getAttribute("v-data-name"),
            page: document.querySelector("#app")?.getAttribute("v-data-page"),
            model: document.querySelector("#app")?.getAttribute("v-data-model"),
        }
    },
})

home.mount("#app")
