<template>
  <div :class="[$style.wrp]">
    <div @click="onClick(cur - 1)">&#10094;</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{
        [$style.active]: cur === i,
      }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">&#10095;</div>
  </div>
</template>

<script>
export default {
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      const { length, n } = this;
      return Math.ceil(length / n);
    },
  },
  methods: {
    onClick(p) {
      if (p < 1 || p > this.amount) {
        return;
      }
      this.$emit("paginate", p);
    },
  },
};
</script>

<style module lang="scss">
.wrp {
  display: flex;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  & > div {
    margin: auto;
    padding: 10px;
    cursor: pointer;
    &.active {
      color: #0088f8;
    }
  }
}
</style>
