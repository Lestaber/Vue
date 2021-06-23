<template>
  <div>
    <div class="header">
      {{ name }}
      {{ headerName }}
    </div>
    <div class="content">
      <component :is="name" />
      <!-- <AddPayment v-if="name === 'AddPayment'" />
      <AuthForm v-if="name === 'AuthForm'" /> -->
    </div>
  </div>
</template>

<script>
import AddPayment from "./AddPayment";
import AuthForm from "./AuthForm";

export default {
  name: "ModalWindow",
  components: {
    AddPayment,
    AuthForm,
  },
  data() {
    return {};
  },
  props: {
    name: String,
    headerName: String,
  },
  methods: {
    onClose() {
      this.$modal.hide();
    },
  },
};
</script>

<style lang="scss">
</style>