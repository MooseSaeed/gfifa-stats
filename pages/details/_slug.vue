<template>
  <div>
    <section
      v-if="!$fetchState.pending"
      class="container flex flex-col lg:flex-row justify-center items-center py-10 rounded-xl bg-gradient-to-tr from-black via-neutral-900 to-black"
    >
      <div class="w-48">
        <img :src="$urlFor(playerInfo[0].cardImage.asset._ref).url()" />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 flex-1 max-w-5xl mt-10 lg:mt-0"
      >
        <div v-for="(stats, index) in playerInfo[0].statistics" :key="index">
          <tableTlayout>
            <template v-slot:tableHeads>
              <!-- Extract first three letters from the array Key and make it uppercase -->
              <tableThead
                :tHead="index.substring(0, 3).toUpperCase()"
                :rating="stats.average"
              />
            </template>
            <template v-slot:tableRows>
              <tableTrow v-for="(stat, statIndex) in stats" :key="statIndex">
                <td class="flex justify-between font-semibold py-2">
                  <p class="rounded-md">
                    <!-- Transform first letter to uppercase -->
                    {{ statIndex.replace(/^./, (str) => str.toUpperCase()) }}
                  </p>
                  <p class="rounded-md">{{ stat }}</p>
                </td>
              </tableTrow>
            </template>
          </tableTlayout>
        </div>
      </div>
    </section>
    <section class="p-5">
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
import { client } from "../../plugins/sanity.js";
export default {
  name: "slug",
  data() {
    return {
      playerInfo: {},
    };
  },
  // 1b67522e-7a7e-4dd0-baaf-6706bbe0e3bf
  async fetch() {
    const selectedPlayer = this.$route.params.slug;

    try {
      const query = `*[slug.current == '${selectedPlayer}']`;
      await client.fetch(query).then((allInfo) => {
        this.playerInfo = allInfo;
      });
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
