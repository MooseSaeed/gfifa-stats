<template>
  <div>
    <div v-if="$fetchState.pending">
      <iconsSpinnerIcon />
    </div>
    <section
      v-if="!$fetchState.pending"
      class="overflow-x-auto mx-auto max-w-6xl"
    >
      <tableTlayout>
        <template v-slot:tableHeads>
          <!-- Each thead is a sorting button -->
          <!-- tHead attribute is for thead name -->
          <!-- Show icon attribute is for sorting icon -->
          <tableThead
            tHead="Name"
            :showIcon="true"
            v-on:click.native="sortBy('name')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="OVR"
            :showIcon="true"
            v-on:click.native="sortBy('rating desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="POS"
            :showIcon="true"
            v-on:click.native="sortBy('position')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="Type"
            :showIcon="true"
            v-on:click.native="sortBy('position')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="PAC"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.pace.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="SHO"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.shooting.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="PAS"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.passing.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="DRI"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.dribbling.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="DEF"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.defense.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="PHY"
            :showIcon="true"
            v-on:click.native="sortBy('statistics.physical.average desc')"
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
          <tableThead
            tHead="WR"
            :showIcon="true"
            v-on:click.native="
              sortBy('workRatesAttacking, player.workRatesDefensive')
            "
            class="cursor-pointer hover:border-white hover:bg-neutral-800 border-transparent border-t-2"
          />
        </template>
        <template v-slot:tableRows>
          <!-- Loop over players and display results -->
          <tableTrow
            :includeBg="true"
            v-for="(player, index) in cardsInfo"
            :key="index"
          >
            <td class="py-5 px-6 text-center">
              <!-- Dynamic link to player details page -->
              <NuxtLink :to="'details/' + `${player.slug.current}`">
                <p
                  class="rounded-md inline font-normal hover:text-green-400 hover:font-semibold hover:underline"
                >
                  {{ player.name }}
                </p>
              </NuxtLink>
            </td>
            <td class="py-5 px-6 text-center text-black">
              <p class="bg-white rounded-md inline px-4 py-2">
                {{ player.rating }}
              </p>
            </td>
            <td class="text-center text-white">
              <div class="bg-black rounded-md py-3 w-14 mx-auto">
                <p>{{ player.position }}</p>
              </div>
            </td>
            <td class="text-center text-white">
              <div class="bg-black rounded-md py-3 w-14 mx-auto">
                <p>{{ player.position }}</p>
              </div>
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
            <td class="text-center text-white">
              <div class="bg-black rounded-md py-3 w-14 mx-auto">
                <!-- Workrates are devided to two data properties, compine their first letters -->
                <p>
                  {{
                    getWR(player.workRatesAttacking, player.workRatesDefensive)
                  }}
                </p>
              </div>
            </td>
          </tableTrow>
        </template>
      </tableTlayout>
    </section>
  </div>
</template>

<script>
import { client } from "../plugins/sanity.js";
export default {
  name: "IndexPage",
  head() {
    return {
      // this will show as 'Home | G-Fifa Stats'
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Checkout all fifa 22 player's statistics and use this to win every game",
        },
      ],
    };
  },
  data() {
    return {
      cardsInfo: [],
      sanityError: "",
    };
  },
  async fetch() {
    try {
      // Get me everything about those fifa cards
      // Sort the results highest rating players first and then sort them alphabetical by name
      const query =
        "*[_type == 'fifaCard'] | order(rating desc, name) {name, rating, position, statistics, workRatesAttacking, workRatesDefensive, slug}";
      await client.fetch(query).then((allCards) => {
        this.cardsInfo = allCards;
      });
    } catch (error) {
      this.sanityError = error;
    }
  },
  methods: {
    // WorkRates are devided to attacking and defense
    getWR(attack, defense) {
      return attack.charAt(0) + "/" + defense.charAt(0);
    },
    // Sort results according to user prefrences
    async sortBy(sortType) {
      // Passing sortType as string to complete Sanity query in one function
      try {
        const query = `*[_type == 'fifaCard'] | order(${sortType}) {name, rating, position, statistics, workRatesAttacking, workRatesDefensive, slug}`;

        await client.fetch(query).then((allCards) => {
          this.cardsInfo = allCards;
        });
      } catch (error) {
        this.sanityError = error;
      }
    },
  },
};
</script>
