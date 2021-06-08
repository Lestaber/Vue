<template>
  <div>
    <main>
      <AddPayment
        v-if="addBtnIsShown"
        @cancelEmit="actionEmit"
        @addNewPayment="addPayment"
      />
      <button v-if="!addBtnIsShown" @click="addBtnIsShown = !addBtnIsShown">
        ADD NEW COAST +
      </button>
      <PaymentsDisplay :items="GET_PAYMENTS_LIST" />
    </main>
    <div>Total value: {{ GET_FULL_PAYMENTS_VALUE }}$</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddPayment from "../components/AddPayment.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    AddPayment,
  },
  data() {
    return {
      addBtnIsShown: false,
      page: "",
    };
  },
  computed: {
    ...mapGetters(["GET_PAYMENTS_LIST", "GET_FULL_PAYMENTS_VALUE"]),
  },
  methods: {
    ...mapMutations(["SET_PAYMENTS_LIST_DATA"]),
    actionEmit() {
      this.addBtnIsShown = false;
    },
    addPayment(data) {
      this.$store.commit("ADD_DATA_TO_PAYMENTS_LIST", data);
      console.log(data);
    },
    goTopage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },
  },
};
</script>
