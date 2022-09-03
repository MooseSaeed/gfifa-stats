<template>
  <tr
    class="group hover:bg-neutral-800 transition-colors whitespace-nowrap font-bold"
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
