<script setup>
import {ref, useAttrs} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import AppRouter from "./components/AppRouter.vue";
import Layout from "./Layout.vue";

const data = useAttrs().data();

const name = ref(data.name);
const page = ref(data.page);

const updateName = (newName) => {
  name.value = newName;
}
</script>

<template>
  <div>
    <Layout>
      <HelloWorld v-if="name !== null" :name @updateName="updateName"/>
      <AppRouter :page />
    </Layout>
  </div>
</template>

<style scoped>

</style>