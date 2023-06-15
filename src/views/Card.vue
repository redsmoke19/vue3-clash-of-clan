<script>
import items from "@/mocks/items.json";
import CardStats from "@/modules/card/CardStats.vue";
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

  async created() {
    const alias = this.$route.params.itemAlias;
    const item = alias && items.find((el) => el.alias === alias);

    if (!item) {
      return await this.$router.push({ name: "404" });
    }

    this.item = JSON.parse(JSON.stringify(item));
  },

  computed: {
    cardImage() {
      return `${require(`@/assets/img/${this.item.img}`)}`;
    },
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
