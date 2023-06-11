<script>
import { links } from "@/common/helpers/_config";

export default {
  name: "MainFooter",
  data() {
    return {
      links,
    };
  },
};
</script>

<template lang="pug">
  footer.footer
    .container
      ul.navbar-list
        li.navbar-item(v-for="(link, idx) in links", :key="idx")
          router-link.navbar-link(:to="link.url") {{ link.title }}
</template>

<style scoped lang="scss"></style>
