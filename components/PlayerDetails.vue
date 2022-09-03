<template>
  <div
    class="pr-5 border-b-2 pb-4 lg:pb-0 lg:border-r-2 lg:border-b-0 border-gray-500 px-5 whitespace-nowrap"
  >
    <h3 class="text-gray-500 text-lg font-semibold">{{ name }}</h3>
    <p class="mt-4">{{ data }}</p>
  </div>
</template>

<script>
export default {
  name: "PlayerDetails",
  props: ["name", "data"],
};
</script>
