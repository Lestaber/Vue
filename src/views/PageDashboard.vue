<template>
  <v-container>
    <div class="text-h4 text-sm-h3 pb-7">My personal coast</div>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog" width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="dialog = !dialog"
            >
              ADD NEW COST
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card class="pa-4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="paymentData.date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="paymentData.date"
                  label="Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="paymentData.date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu.save(paymentData.date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
            <v-select
              v-model="paymentData.category"
              label="Category"
              :items="cats"
            ></v-select>
            <v-text-field
              v-model.number="paymentData.value"
              label="Value"
              :rules="rules"
              hide-details="auto"
            ></v-text-field>
            <v-row class="py-7" justify="space-around">
              <v-btn color="primary" :loading="loading" @click="addPayment">
                Save
              </v-btn>
              <v-btn color="primary" @click="dialog = false">Close</v-btn>
            </v-row>
          </v-card>
        </v-dialog>
        <v-data-table
          :headers="headers"
          :items="GET_PAYMENTS_LIST"
          :page.sync="page"
          :items-per-page="10"
          @page-count="pageCount = $event"
          hide-default-footer
        />
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </v-col>
      <v-col>
        <!-- <PaymentsDisplay /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import PaymentsDisplay from "../components/PaymentsDisplay";

export default {
  name: "PageDashboard",
  components: {
    // PaymentsDisplay,
  },
  data() {
    return {
      settings: {},
      showModal: false,
      page: 1,
      pageCount: 0,
      dialog: false,
      menu: false,
      loading: false,
      paymentData: {
        date: "",
        category: "",
        value: "",
      },
      cats: [
        "Food",
        "Transport",
        "Clothing",
        "Navigation",
        "Edication",
        "Mobile",
        "Sport",
        "Entertainment",
      ],
      rules: [(value) => !!value || "Required."],
      headers: [
        {
          text: "Date",
          align: "start",
          sortable: true,
          value: "date",
        },
        { text: "Category", value: "category", sortable: true },
        { text: "Value", value: "value", sortable: true },
      ],
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
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 700);
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
</style>
