<template>
  <div>
    <section class="flex">
      <div class="bg-red-300 w-80 h-80 mx-10"></div>
      <div class="flex-1">
        <tableTlayout>
          <template v-slot:tableHeads>
            <tableThead tHead="PAC" :rating="90" />
          </template>

          <template v-slot:tableRows> </template>
        </tableTlayout>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
