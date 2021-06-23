<template>
  <!-- <v-container>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="GET_PAYMENTS_LIST"
          :items-per-page="5"
          class="elevation-1"
          loading
          loading-text="Loading... Please wait"
        />
      </v-col>
    </v-row>
  </v-container> -->
  <div>
    <div class="list">
      <p>#</p>
      <p>Date</p>
      <p>Category</p>
      <p>Value</p>
    </div>
    <div
      class="list__item"
      v-for="({ date, category, value }, idx) in currentElements"
      :key="idx"
    >
      <div>
        {{ idx + 1 }}
      </div>
      <div>
        {{ date }}
      </div>
      <div>
        {{ category }}
      </div>
      <div>{{ value }}</div>
    </div>
    <Pagination
      :length="GET_PAYMENTS_LIST.length"
      :n="n"
      :cur="page"
      @paginate="onPgaginate"
    />
  </div>
</template>

<script>
import Pagination from "./Pagination";
import { mapGetters } from "vuex";

export default {
  name: "PaymentsDisplay",
  components: {
    Pagination,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      page: 0,
      n: 10,
    };
  },
  computed: {
    ...mapGetters(["GET_PAYMENTS_LIST"]),
    currentElements() {
      const { n, page, GET_PAYMENTS_LIST } = this;

      GET_PAYMENTS_LIST.forEach((item, idx) => {
        item.number = idx + 1;
      });
      return GET_PAYMENTS_LIST.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  created() {
    this.page = this.$route.params.page || 1;
  },
  methods: {
    onPgaginate(p) {
      this.page = p;
    },
    mounted() {
      this.SET_PAYMENTS_LIST_DATA();
    },
  },
};
</script>

<style lang="scss">
.list {
  display: grid;
  grid-template-columns: 100px 1fr 1fr 100px;
  font-weight: bold;
  margin: 10px 0;

  &__item {
    display: grid;
    grid-template-columns: 100px 1fr 1fr 100px;
    border-top: 1px solid #ccc;
    padding: 5px 0;
  }
}
</style>
