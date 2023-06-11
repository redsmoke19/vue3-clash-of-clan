<script>
import items from "@/mocks/items.js";
import CardStats from "@/common/components/CardStats.vue";
export default {
  name: "CardItem",
  components: {
    CardStats,
  },

  data() {
    return {
      item: null,
    };
  },

  computed: {
    cardImage() {
      return `${require(`@/assets/img/${this.item.img}`)}`;
    },
  },

  created() {
    const alias = this.$route.params.itemAlias;
    this.item = items.find((el) => el.alias === alias);
  },
};
</script>

<template lang="pug">
  .wrapper-personal
    img(
      :src="cardImage"
      :alt="item.title"
    )
    h1.title.title--white {{ item.title }}
    p(style="max-width: 50%; margin: 0 auto;") {{ item.desc }}
    card-stats(:stats="item.info")
    router-link.btn.btnDefault(to="/") Back to Home
</template>

<style scoped lang="scss">
.card-stats {
  border-radius: 14px;
  margin: 20px auto;
  max-width: 50%;
}
</style>
