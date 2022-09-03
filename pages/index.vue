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
          <tableTrow v-for="(player, index) in cardsInfo" :key="index">
            <td class="py-5 px-6 text-center">
              <p class="rounded-md inline font-normal">{{ player.name }}</p>
            </td>
            <td class="py-5 px-6 text-center text-black">
              <p class="bg-white rounded-md inline px-4 py-2">
                {{ getOVR(player.description) }}
              </p>
            </td>
            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">
                {{ player.position }}
              </p>
            </td>
            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">
                {{ player.position }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.pace.average }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.shooting.average }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.passing.average }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.dribbling.average }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.defense.average }}
              </p>
            </td>
            <td class="py-5 px-1 text-center text-white">
              <p
                class="bg-black border-2 border-white rounded-md inline px-5 py-2"
              >
                {{ player.statistics.physical.average }}
              </p>
            </td>

            <td class="py-5 px-2 text-center text-white">
              <p class="bg-black rounded-md inline px-4 py-2">
                {{
                  getWR(player.workRatesAttacking, player.workRatesDefensive)
                }}
              </p>
            </td>
          </tableTrow>
        </template>
      </tableTlayout>
    </div>
  </div>
</template>

<script>
import { client } from "../plugins/sanity.js";
export default {
  name: "IndexPage",
  data() {
    return {
      cardsInfo: [],
    };
  },
  async fetch() {
    try {
      /* Get me everything about those fifa cards */
      const query = '*[_type == "fifaCard"]';
      await client.fetch(query).then((allCards) => {
        this.cardsInfo = allCards;
      });
      console.log(this.cardsInfo);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // OCR is only included in the details so I had to extract it somehow
    getOVR(fullDescription) {
      // Get only numbers and remove 22 (text has fifa 22 so it should be removed)
      return fullDescription.match(/\d/g).join("").replace(/[2]/g, "");
    },
    // WorkRates are devided to attacking and defense
    getWR(attack, defense) {
      return attack.charAt(0) + "/" + defense.charAt(0);
    },
  },
};
</script>
