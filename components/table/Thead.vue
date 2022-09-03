<template>
  <th
    class="py-3 px-6 font-normal text-center whitespace-nowrap"
    :class="{ 'flex border-t-2 border-b-2 border-white w-max': !showIcon }"
  >
    <p>{{ tHead }} <iconsSortIcon v-if="showIcon" /></p>
    <p v-if="!showIcon" class="pl-14">{{ rating }}</p>
  </th>
</template>

<script>
export default {
  props: ["tHead", "showIcon", "rating"],
  name: "Thead",
};
</script>
