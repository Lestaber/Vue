<template>
  <div class="select">
    <select v-model="selected" @change="onSelect">
      <option disabled value="">Category</option>
      <option
        v-for="(option, idx) in dictionaryList"
        :key="idx"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectList",
  props: {
    dictionaryList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    onSelect(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<style lang="scss">
.select select {
  width: 308px;
  height: 36px;
  margin: 10px 0;
}
</style>
