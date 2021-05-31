<template>
  <div class="add__wrapper">
    <input placeholder="date" v-model.trim="date" />
    <input placeholder="category" v-model.trim="category" />
    <input placeholder="0" v-model.number="value" />
    <button @click="onSaveData">Save</button>
    <button @click="onCancel">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "AddPayment",
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  methods: {
    onSaveData() {
      const { date, category, value, getCurrentDate } = this;
      const data = {
        date: date || getCurrentDate,
        category,
        value,
      };
      this.$emit("addNewPayment", data);
    },
    onCancel() {
      this.$emit("cancelEmit");
    },
  },
  computed: {
    getCurrentDate() {
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth() + 1;
      const y = date.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
};
</script>

<style lang="scss">
</style>