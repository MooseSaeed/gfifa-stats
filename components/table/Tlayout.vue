<template>
  <table class="table-auto w-full">
    <thead>
      <tr class="text-white text-sm leading-normal">
        <slot name="tableHeads" />
      </tr>
    </thead>

    <tbody class="text-sm font-light">
      <slot name="tableRows" />
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Tlayout",
};
</script>
