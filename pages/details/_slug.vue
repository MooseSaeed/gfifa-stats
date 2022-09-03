<template>
  <div class="mx-auto" v-if="$fetchState.pending">
    <iconsSpinnerIcon />
  </div>
  <div v-else="!$fetchState.pending">
    <section
      class="flex flex-col lg:flex-row justify-center items-center py-10 rounded-xl bg-gradient-to-tr from-black via-neutral-900 to-black"
    >
      <div class="w-48">
        <img
          :src="$urlFor(playerInfo[0].cardImage.asset._ref).url()"
          :alt="playerInfo[0].name + ' Fifa Card'"
        />
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 flex-1 max-w-5xl w-full px-5 mt-10 lg:mt-0"
      >
        <div v-for="(stats, index) in playerInfo[0].statistics" :key="index">
          <tableTlayout>
            <template v-slot:tableHeads>
              <!-- Extract first three letters from the array Key and make it uppercase -->
              <tableThead
                :tHead="index.substring(0, 3).toUpperCase()"
                :showBorders="true"
                :rating="stats.average"
              />
            </template>
            <template v-slot:tableRows>
              <tableTrow v-for="(stat, statIndex) in stats" :key="statIndex">
                <td class="flex justify-between py-2">
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
        {{ playerInfo[0].name }}
        <span
          class="text-sm text-gray-500 border-b-2 border-dotted border-gray-500"
          >View all cards</span
        >
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 w-full py-10"
      >
        <PlayerDetails name="Club" :data="playerInfo[0].club" />
        <PlayerDetails name="League" :data="playerInfo[0].league" />
        <PlayerDetails name="Nation" :data="playerInfo[0].nation" />
        <PlayerDetails name="Strong Foot" :data="playerInfo[0].strongFoot" />
        <PlayerDetails name="Age" :data="playerInfo[0].age" />
        <PlayerDetails name="Height" :data="playerInfo[0].height" />
        <PlayerDetails
          class="border-r-0"
          name="Workrates"
          :data="
            playerInfo[0].workRatesAttacking +
            ' / ' +
            playerInfo[0].workRatesDefensive
          "
        />
      </div>
    </section>
  </div>
</template>

<script>
import { client } from "../../plugins/sanity.js";
export default {
  name: "slug",
  head() {
    return {
      // this will show as '{Player name} | G-Fifa Stats'
      // Meta tags will be updated with name as soon as fetch brings the name in
      title: this.playerInfo[0]?.name,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Fifa 22 card for ${this.playerInfo[0]?.name}. Check out all the player statistics.`,
        },
      ],
    };
  },
  data() {
    return {
      playerInfo: {},
    };
  },
  // Use the slug in the param to query Sanity and fetch the desired player
  // Assign player data to PlayerInfo
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
