<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import Loading from "./Loading.vue";

const props = defineProps({
  page: {
    type: String,
    default: 'home'
  }
})

console.log(props.page);

const AboutView = defineAsyncComponent(() => import('../pages/AboutView.vue'))
const HomeView = defineAsyncComponent(() => import('../pages/HomeView.vue'))
</script>

<template>
  <div>
    <AboutView v-if="page === 'about'" />
    <HomeView v-else-if="page === 'home'" />
    <Loading v-else />
  </div>
</template>

<style scoped>

</style>