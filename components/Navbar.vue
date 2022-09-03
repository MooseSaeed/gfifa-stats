<template>
  <nav class="flex justify-between items-center">
    <iconsMenu />

    <NuxtLink to="/">
      <img class="fill-gray-400 w-32 px-4" src="~/assets/RS-logo.png" alt="" />
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
