<script setup>
import {ref, defineProps, defineEmits} from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "World"
  }
})
const emits = defineEmits(["updateName"]);

const editableName = ref(props.name);

const onInputUpdateName = () => {
  emits('updateName', editableName.value);
}
</script>

<template>
  <hgroup>
    <h1>Hello {{ name }}</h1>
    <p>This was made with .NET 10 and Vue.js!</p>
  </hgroup>
  <label for="hello-world-name">
    Name
    <input 
        id="hello-world-name"
        v-model="editableName" 
        type="text" 
        placeholder="Enter a new name" 
        @input="emits('updateName', editableName)"
    >
  </label>
</template>

<style scoped>

</style>