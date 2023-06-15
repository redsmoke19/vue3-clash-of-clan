<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UnitCard",
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },

  computed: {
    cardImage() {
      return {
        card: `${require(`@/assets/img/${this.imgUrl}`)}`,
      };
    },
  },
});
</script>

<template lang="pug">
  .card
    .card-img__wrapper(v-if="imgUrl")
      img.card-img(
        :src="cardImage.card",
        :alt="title"
      )
    span.card-name {{ name }}
    span.card-title {{ title }}
    .card-body
      slot(name="body")
      router-link.link(v-if="link" :to="link") Show more
    slot(name="footer")
</template>

<style scoped lang="scss">
.card-body {
  display: flex;
  flex-direction: column;

  a {
    margin: auto auto 0;
    display: inline-flex;
  }
}
</style>
