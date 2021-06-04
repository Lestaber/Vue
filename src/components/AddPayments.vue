<template>
  <div class="add">
    <input placeholder="date" v-model.trim="date" />
    <!-- <input placeholder="category" v-model.trim="category" /> -->
    <SelectList :dictionary-list="getCategorylist" />
    <input placeholder="0" v-model.number="value" />
    <div class="btns">
      <button @click="onSaveData">ADD +</button>
      <button @click="onCancel">Cancel</button>
    </div>
  </div>
</template>

<script>
import SelectList from "./SelectList";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddPayments",
  components: {
    SelectList,
  },
  emits: ["cancelEmit", "addNewPayment"],
  data() {
    return {
      date: "",
      category: "",
      value: "",
    };
  },
  computed: {
    ...mapGetters(["getCategorylist"]),
    getCurrentDate() {
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth() + 1;
      const y = date.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  actions: {
    ...mapActions(["loadCategories"]),
  },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  methods: {
    onSaveData() {
      const { date, category, value, getCurrentDate } = this;
      if (!category || !value) return;

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
};
</script>

<style module lang="scss">
input {
  width: 300px;
  height: 30px;
}

.add {
  width: 300px;
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
