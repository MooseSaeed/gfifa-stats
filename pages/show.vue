<template>
  <div>
    <section
      class="flex py-10 rounded-xl bg-gradient-to-tr from-black via-neutral-900 to-black"
    >
      <div class="bg-red-300 w-80 h-80 mx-10"></div>
      <div class="grid grid-cols-3 lg:grid-cols-6">
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
      </div>
    </section>
    <section class="px-5">
      <h2 class="font-bold text-3xl">
        Lionel Messi
        <span
          class="text-sm text-gray-500 border-b-2 border-dotted border-gray-500"
          >View all cards</span
        >
      </h2>

      <div class="my-10 pr-5 border-r-2 border-white w-max">
        <h3 class="font-semibold text-gray-500 text-lg">Club</h3>
        <p class="mt-4">FC Barcelona</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
