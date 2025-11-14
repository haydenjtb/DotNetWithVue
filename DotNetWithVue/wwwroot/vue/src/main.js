import './style.css'
import HomeView from "./components/HomeView.vue";
import { createApp } from 'vue'

const home = createApp(HomeView, {
    data: function() {
        return {
            name: document.querySelector("#home").getAttribute("v-data-name")
        }
    },
})

home.mount("#home")