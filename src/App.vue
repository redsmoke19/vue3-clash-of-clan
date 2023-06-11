<template lang="pug">
  .wrapper
    MainHeader
    .wrapper-content
      .container
        router-view
    MainFooter
</template>

<script>
import MainHeader from "@/layouts/DefaultHeader.vue";
import MainFooter from "@/layouts/DefaultFooter.vue";

export default {
  components: { MainHeader, MainFooter },
};
</script>

<style lang="scss"></style>
