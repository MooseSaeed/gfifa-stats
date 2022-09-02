<template>
  <div class="container mx-auto text-white">
    <div class="overflow-x-auto mx-auto py-10 max-w-6xl">
      <tableTlayout>
        <template v-slot:tableHeads>
          <tableThead tHead="Name" />
          <tableThead tHead="OVR" />
          <tableThead tHead="POS" />
          <tableThead tHead="Type" />
          <tableThead tHead="PAC" />
          <tableThead tHead="SHO" />
          <tableThead tHead="PAS" />
          <tableThead tHead="DRI" />
          <tableThead tHead="DEF" />
          <tableThead tHead="PHY" />
          <tableThead tHead="WR" />
        </template>

        <template v-slot:tableRows>
          <tableTrow>
            <td class="py-5 px-6 text-center text-black">
              <p class="bg-white rounded-md inline px-4 py-2">93</p>
            </td>
            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">RW</p>
            </td>
            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">RW</p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                85
              </p>
            </td>
            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">M/L</p>
            </td>
          </tableTrow>
        </template>
      </tableTlayout>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
