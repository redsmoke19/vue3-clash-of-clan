<script>
import items from "@/mocks/items.js";
import UnitCard from "@/modules/card/UnitCard.vue";
import CardStats from "@/common/components/CardStats.vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "HomePage",
  components: {
    CardStats,
    UnitCard,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      items,
      settings: {
        itemsToShow: 1,
        wrapAround: true,
        snapAlign: "center",
        transition: "500",
      },
      breakpoints: {
        1024: {
          itemsToShow: 3,
        },
      },
    };
  },
};
</script>

<template lang="pug">
  .mb-body
    carousel(v-bind="settings", :breakpoints="breakpoints")
      slide.card__wrapper(v-for="card in items", :key="card.id")
        unit-card(
          :name="`${card.lvl} lvl`",
          :title="card.title"
          :img-url="card.img"
          :link="`/${card.alias}`"
        )
          template(#body)
            p {{ card.desc }}
          template(#footer)
            card-stats(:stats="card.info")
      template(#addons)
        navigation
</template>

<style scoped>
@import "@/assets/scss/vendor/carousel.css";
</style>
