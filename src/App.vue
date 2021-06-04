<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <h1 class="title">
          My personal coasts
        </h1>
      </header>
      <main>
        <AddPayments
          v-if="addBtnIsShown"
          @cancelEmit="actionEmit"
          @addNewPayment="addPayment"
        />
        <button v-if="!addBtnIsShown" @click="addBtnIsShown = !addBtnIsShown">
          ADD NEW COAST +
        </button>
        <PaymentsDisplay :items="getPaymentsList" />
        <div>Total value: {{ getFullPaymentValue }}$</div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPayments from "./components/AddPayments";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPayments,
  },
  data() {
    return {
      addBtnIsShown: false,
    };
  },
  actions: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters(["getPaymentsList", "getFullPaymentValue"]),
  },
  // created() {},
  mounted() {
    this.$store.dispatch("fetchData");
  },
  methods: {
    ...mapMutations(["setPaymentsListData", "addDataToPaymentsList"]),
    actionEmit() {
      this.addBtnIsShown = false;
    },
    addPayment(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 50px;
  padding: 0 100px;
}

button {
  padding: 8px 20px;
  background: #06a79b;
  color: aliceblue;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  cursor: pointer;
}
</style>
