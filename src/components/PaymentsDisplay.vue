<template>
  <div>
    <div v-for="({ date, category, value }, index) in items" :key="index">
      {{ index + 1 }} {{ date }} {{ category }} {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>