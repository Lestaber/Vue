<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <h1 class="title">My personal coasts</h1>
      </header>
      <main>
        <AddPayment
          v-if="addBtnIsShown"
          @cancelEmit="actionEmit"
          @addNewPayment="addPayment"
        />
        <button @click="addBtnIsShown = !addBtnIsShown" v-if="!addBtnIsShown">
          Add new coast +
        </button>
        <PaymentsDisplay :items="paymentsList" />
      </main>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddPayment from "./components/AddPayment";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPayment,
  },
  data() {
    return {
      paymentsList: [],
      addBtnIsShown: false,
    };
  },
  created() {
    this.paymentsList = this.fetchData();
  },
  methods: {
    actionEmit() {
      this.addBtnIsShown = false;
    },
    addPayment(data) {
      this.paymentsList.push(data);
    },
    fetchData() {
      return [
        {
          date: "23.12.2020",
          category: "Food",
          value: "123",
        },
        {
          date: "12.09.2018",
          category: "Housing",
          value: "12",
        },
        {
          date: "23.12.2020",
          category: "Food",
          value: "13",
        },
        {
          date: "03.04.2020",
          category: "Food",
          value: "1",
        },
        {
          date: "23.12.2020",
          category: "Clothing",
          value: "43",
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 50px;
  padding: 0 100px;
}
</style>