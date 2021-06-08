<template>
  <div class="add">
    <input placeholder="Date" v-model.trim="date" />
    <SelectList :dictionary-list="GET_CATEGORY_LIST" />
    <input placeholder="Price" v-model.number="value" />
    <div class="btns">
      <button @click.prevent="onSaveData">
        ADD +
      </button>
      <button @click="onCancel">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import SelectList from "./SelectList";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "AddPayment",
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
    ...mapMutations(["SET_PAYMENTS_LIST_DATA"]),
    ...mapGetters(["GET_CATEGORY_LIST"]),
    getCurrentDate() {
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth() + 1;
      const y = date.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  actions: {
    ...mapActions(["LOAD_CATEGORIES"]),
  },
  mounted() {
    this.$store.dispatch("LOAD_CATEGORIES");
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
};
</script>

<style lang="scss">
input {
  width: 300px;
  height: 30px;
}

.add {
  width: 308px;
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 308px;
}

.quick__links {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}
</style>
