<template>
  <div>
    <section
      class="flex py-10 rounded-xl bg-gradient-to-tr from-black via-neutral-900 to-black"
    >
      <div class="bg-red-300 w-80 h-80 mx-10"></div>
      <div>
        <tableTlayout>
          <template v-slot:tableHeads>
            <tableThead tHead="PAC" :rating="90" />
          </template>

          <template v-slot:tableRows>
            <tableTrow>
              <td class="flex justify-between font-semibold py-2">
                <p class="rounded-md">Acceleration</p>
                <p class="rounded-md">89</p>
              </td>
            </tableTrow>
            <tableTrow>
              <td class="flex justify-between font-semibold py-2">
                <p class="rounded-md">Acceleration</p>
                <p class="rounded-md">89</p>
              </td>
            </tableTrow>
          </template>
        </tableTlayout>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
