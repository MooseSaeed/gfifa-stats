<template>
  <th class="py-3 px-6 font-normal text-center whitespace-nowrap">
    {{ tHead }} <iconsSortIcon />
  </th>
</template>

<script>
export default {
  props: ["tHead"],
  name: "Thead",
};
</script>
