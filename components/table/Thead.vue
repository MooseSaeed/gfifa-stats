<template>
  <th
    class="font-normal text-center whitespace-nowrap"
    :class="{ 'px-6 py-3': showIcon }"
  >
    <div
      :class="{
        'flex justify-between border-t-2 border-b-2 border-white py-2 text-base font-semibold':
          showBorders,
      }"
    >
      <p>{{ tHead }} <iconsSortIcon v-if="showIcon" /></p>
      <p v-if="!showIcon">{{ rating }}</p>
    </div>
  </th>
</template>

<script>
export default {
  props: ["tHead", "showIcon", "rating", "showBorders"],
  name: "Thead",
};
</script>
