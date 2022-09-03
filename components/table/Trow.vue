<template>
  <tr
    class="group hover:bg-gray-100 hover:text-black transition-colors whitespace-nowrap font-bold"
    :class="{ 'bg-neutral-900 border-t-4 border-black ': includeBg }"
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
