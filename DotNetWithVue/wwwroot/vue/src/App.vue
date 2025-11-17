<script setup lang="ts">
import {ref, useAttrs, type SetupContext} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import AppRouter from "./components/AppRouter.vue";
import Layout from "./Layout.vue";

const attributes: SetupContext["attrs"] = useAttrs();
const data: {page: string, name: string, model: string} = typeof attributes.data === "function" && attributes.data();

const name = ref(data.name);
const page = ref(data.page);
const model = ref(JSON.parse(data.model));

const updateName = (newName: string) => {
  name.value = newName;
}
</script>

<template>
  <div>
    <Layout>
      <HelloWorld v-if="name !== null" :name @updateName="updateName"/>
      <AppRouter :page :model />
    </Layout>
  </div>
</template>

<style scoped>

</style>