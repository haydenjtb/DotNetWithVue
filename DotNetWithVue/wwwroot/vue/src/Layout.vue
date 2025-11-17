<script setup lang="ts">
import {ref} from "vue";

const mode = ref("light");

const switchMode = () => {
  if (mode.value === "light") {
    mode.value = "dark";
  } else {
    mode.value = "light";
  }
}
</script>

<template>
  <div :data-theme="mode">
    <header class="relative">
      <nav class="h-[50px] border-b-2 bg-white dark:bg-slate-800 text-black dark:text-gray-200 border-black dark:border-gray-400">
        Top Header
        <button class="rounded-xl border-1 border-black dark:border-gray-600 text-black dark:text-gray-400 px-4 py-2" @click="switchMode">Switch Mode</button>
      </nav>
      <nav class="absolute h-[calc(100dvh-50px)] w-[75px] top-[50px] left-[0px] border-r-2 border-black dark:border-gray-400 bg-white dark:bg-slate-800 text-black dark:text-gray-200">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="absolute w-[calc(100dvw-75px)] h-[calc(100dvh-50px)] top-[50px] left-[75px] p-2 bg-blue-100 dark:bg-gray-950 text-black dark:text-gray-200">
      <section class="w-full h-full p-2 rounded-lg shadow bg-white dark:bg-slate-800">
        <slot></slot>
      </section>
    </main>
  </div>
</template>

<style scoped>

</style>