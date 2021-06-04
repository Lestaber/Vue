<template>
  <div>
    <div class="list">
      <div>#</div>
      <div>Date</div>
      <div>Category</div>
      <div>Value</div>
    </div>
    <div
      class="list__item"
      v-for="({ date, category, value }, index) in currentElements"
      :key="index"
    >
      <div>
        {{ index + 1 }}
      </div>
      <div>
        {{ date }}
      </div>
      <div>
        {{ category }}
      </div>
      <div>{{ value }}$</div>
    </div>
    <!-- <div v-for="(item, index) in currentElements" :key="index">
      {{ item }}
    </div> -->
    <Pagination
      :length="getPaymentsList.length"
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
      page: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters(["getPaymentsList"]),
    currentElements() {
      const { n, page, items } = this;
      return items.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    onPgaginate(p) {
      this.page = p;
    },
  },
};
</script>

<style scoped lang="scss">
.list {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-top: 10px;

  &__item {
    border-top: 1px solid #ccc;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
