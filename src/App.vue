<template>
  <div id="app">
    <div class="calc">
      <div class="calc__title">Calculator</div>
      <div class="calc__error" v-if="error">
        Ошибка!<br />
        {{ error }}
      </div>
      <div class="calc__computed">
        <div class="operands">
          <input v-model.number="op1" />
          <input v-model.number="op2" />
          =
        </div>
        <span>{{ result }}</span>
      </div>
      <div class="func">
        <button
          v-for="(btn, i) in buttons"
          :key="i"
          @click="calc(btn)"
          class="func__btn"
        >
          {{ btn }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      op1: "",
      op2: "",
      result: 0,
      error: "",
      buttons: ["+", "-", "*", "/", "**", "%"],
    };
  },
  methods: {
    divide() {
      const { op1, op2 } = this;
      if (op2 === 0) {
        (this.error = "Делить на 0 нельзя!"), (this.result = "");
      } else {
        this.result = (op1 / op2).toFixed(4).replace(/\.?0+$/, "");
      }
    },
    divWithRem() {
      const { op1, op2 } = this;
      if (op2 === 0) {
        (this.error = "Делить на 0 нельзя!"), (this.result = "");
      } else {
        this.result = parseInt(op1 / op2);
      }
    },
    calc(func) {
      switch (func) {
        case "+":
          this.error = "";
          this.result = this.op1 + this.op2;
          break;
        case "-":
          this.error = "";
          this.result = this.op1 - this.op2;
          break;
        case "*":
          this.error = "";
          this.result = this.op1 * this.op2;
          break;
        case "/":
          this.divide();
          break;
        case "**": // Возведение в степень, где op1-число, op2-степень.
          this.error = "";
          this.result = Math.pow(this.op1, this.op2);
          break;
        case "%": // Деление с остатком.
          this.divWithRem();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 20px;
}

.calc {
  width: 350px;

  &__title {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  &__error {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #e21111;
    margin: 20px 0;
  }

  &__computed {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & input {
      width: 100px;
      font-size: inherit;
      margin-right: 16px;
    }
  }

  .func {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    &__btn {
      width: 40px;
      height: 40px;
      background: #77f3c4;
      border: 1px solid #8d8787;
      font-size: inherit;
    }
  }
}
</style>