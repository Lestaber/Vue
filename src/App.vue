<template>
  <div id="app">
    <v-app>
      <v-app-bar app flat>
        <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
        <v-btn plain :ripple="false" to="/about">About</v-btn>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
    <!-- <div class="wrapper">
      <header>
        <h1 class="title">
          My personal coasts
          <div class="title__links">
            <router-link to="/dashboard"> Dashboard </router-link>
            <router-link to="/about"> About </router-link>
            <router-link to="/page404"> 404 </router-link>
          </div>
        </h1>
      </header>
      <main>
        <ModalWindow
          v-if="modalWindow"
          :name="modalWindow"
          :headerName="modalHeader"
          :modalSettings="modalSettings"
          @close="onHide"
        />
        <router-view />
      </main>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    // ModalWindow: () =>
    //   import(/* webpackChunkName: "Modal"*/ "./components/ModalWindow"),
  },
  data() {
    return {
      page: "",
      modalWindow: "",
      modalHeader: "",
      modalSettings: {},
      showModal: true,
    };
  },
  created() {
    this.$router.push({ name: "/" });
  },
  mounted() {
    this.$store.dispatch("FETCH_DATA");

    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show", this.onShow);
    this.$modal.EventBus.$off("hide", this.onHide);
  },
  methods: {
    // onclick() {
    //   this.settings = {
    //     name: "payment",
    //     headerName: "Add payment",
    //   };
    // },
    ...mapMutations(["setPaymentListData"]),
    actionEmit() {
      this.showModal = false;
    },
    addPayment(data) {
      this.$store.commit("addDataToPaymentList", data);
    },
    goTopage(pageName) {
      this.$router.push({
        name: pageName,
      });
      console.log(pageName);
    },
    onShow(data) {
      this.ModalWindoW = data.name;
      this.modalHeader = data.headerName;
      this.modalSettings = data.modalSettings;
    },
    onHide() {
      this.ModalWindoW = "";
      this.modalHeader = "";
      this.modalSettings = {};
    },
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: left;
//   color: #2c3e50;
//   margin-top: 50px;
//   padding: 0 100px;
//   max-width: 1000px;
//   margin: 0 auto;
//   padding-top: 30px;
// }

// button {
//   padding: 8px 20px;
//   background: #06a79b;
//   color: aliceblue;
//   border: none;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//   border-radius: 3px;
//   cursor: pointer;
// }

// .title__links {
//   display: flex;
//   width: 300px;
//   justify-content: space-between;
//   margin-top: 20px;
// }

// a {
//   font-size: 18px;
//   text-decoration: none;
//   color: inherit;

//   &:hover {
//     color: #06a79b;
//   }
// }

// a.router-link-exact-active {
//   font-size: 18px;
//   text-decoration: none;
//   color: #06a79b;
// }
</style>
