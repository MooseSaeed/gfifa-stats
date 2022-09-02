<template>
  <div class="container mx-auto text-white">
    <div class="overflow-x-auto mx-auto py-10 max-w-6xl">
      <table class="table-auto w-full">
        <thead>
          <tr class="text-white font-light text-sm leading-normal">
            <th class="py-3 px-6 text-center">Name</th>
            <th class="py-3 px-6 text-center">OVR</th>
            <th class="py-3 px-6 text-center">POS</th>
            <th class="py-3 px-6 text-center">Type</th>
            <th class="py-3 px-6 text-center">PAC</th>
            <th class="py-3 px-6 text-center">SHO</th>
            <th class="py-3 px-6 text-center">PAS</th>
          </tr>
        </thead>

        <tbody class="text-sm font-light">
          <tr
            class="bg-neutral-800 hover:bg-gray-100 hover:text-black transition-colors"
          >
            <td class="py-3 px-6 text-center whitespace-nowrap">
              <p class="">Name</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">93</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">Stuff</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">Stuff</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">Stuff</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">Stuff</p>
            </td>
            <td class="py-3 px-6 text-center">
              <p class="">Stuff</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
