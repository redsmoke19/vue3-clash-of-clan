<script>
export default {
  name: "CardStats",

  props: {
    stats: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
};
</script>

<template lang="pug">
  .card-stats
    .one-third(
      v-for="(stat, idx) in stats"
      :key="idx"
    )
      p.stat-value {{ stat.value }}
      p.stat {{ stat.title }}
</template>

<style scoped lang="scss"></style>
