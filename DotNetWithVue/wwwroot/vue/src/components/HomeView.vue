<script setup>
import {ref, useAttrs} from "vue";
import HelloWorld from "./HelloWorld.vue";

const data = useAttrs().data();

const name = ref(data.name);

const updateName = (newName) => {
  name.value = newName;
}
</script>

<template>
  <div>
    <HelloWorld v-if="name !== null" :name @updateName="updateName"/>
  </div>
</template>

<style scoped>

</style>
