<script setup lang="ts">

</script>

<template>
  <header class="relative">
    <nav class="h-[50px] border-b-2 border-black bg-white">
      Top Header
    </nav>
    <nav class="absolute h-[calc(100dvh-50px)] top-[50px] left-[0px] border-r-2 border-black w-[75px] bg-white">
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
  <main class="absolute w-[calc(100dvw-75px)] h-[calc(100dvh-50px)] top-[50px] left-[75px] p-2 bg-blue-100">
    <section class="bg-white w-full h-full p-2 rounded-lg shadow">
      <slot></slot>
    </section>
  </main>
</template>

<style scoped>

</style>