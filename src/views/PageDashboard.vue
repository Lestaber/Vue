<template>
  <div>
    <div>
      <button @click="showModal = true">ADD NEW COAST +</button>
      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
      <transition name="slide" appear>
        <AddPayment
          class="modal"
          v-if="showModal"
          @cancelEmit="actionEmit"
          @addNewPayment="addPayment"
          @click="showModal = false"
        />
      </transition>
      <PaymentsDisplay :items="GET_PAYMENTS_LIST" />
    </div>
    <div>Total value: {{ GET_FULL_PAYMENTS_VALUE }}</div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddPayment from "../components/AddPayment";
import PaymentsDisplay from "../components/PaymentsDisplay";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    AddPayment,
  },
  data() {
    return {
      settings: {},
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["GET_PAYMENTS_LIST", "GET_FULL_PAYMENTS_VALUE"]),
  },
  methods: {
    ...mapMutations(["SET_PAYMENTS_LIST_DATA"]),
    actionEmit() {
      this.showModal = false;
    },
    addPayment(data) {
      this.$store.commit("ADD_DATA_TO_PAYMENTS_LIST", data);
    },
    goTopage(pageName) {
      this.$router.push({
        name: pageName,
      });
    },
    openAuth() {
      this.showModal = true;
      this.settings = {
        name: "auth",
        headerName: "Auth User",
      };
    },
    openModal() {
      this.$modal.show("AddPayment", "add Payment");
    },
  },
};
</script>

<style lang="scss">
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 168px;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;
  padding: 25px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
