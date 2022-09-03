<template>
  <tr
    class="group hover:bg-gray-100 hover:text-black transition-colors border-t-4 border-black whitespace-nowrap font-bold"
    :class="{ 'bg-neutral-900': includeBg }"
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: "Trow",
  props: ["includeBg"],
};
</script>
