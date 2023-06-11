<script>
import { links } from "@/common/helpers/_config";

export default {
  name: "MainHeader",
  data() {
    return {
      links,
    };
  },
};
</script>

<template lang="pug">
  header.navbar
    .container
      .navbar-content
        router-link.navbar-logo(to="/") Site Logo
        ul.navbar-list
          li.navbar-item(v-for="link in links", :key="link.alias")
            router-link.navbar-link(:to="link.url") {{ link.title }}
</template>

<style scoped lang="scss"></style>
