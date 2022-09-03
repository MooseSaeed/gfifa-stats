<template>
  <tr
    class="group hover:bg-neutral-800 transition-colors whitespace-nowrap"
    :class="{
      'bg-neutral-900 border-t-4 border-black font-semibold ': includeBg,
    }"
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
