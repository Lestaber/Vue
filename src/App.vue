<template>
  <div id="app">
    <div class="calc">
      <div class="calc__title">Calculator</div>
      <div class="calc__error" v-if="error">
        Ошибка!
        <br />
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
      <div class="show__btns">
        <label>
          <span v-if="showKeyboard">Скрыть клавиатуру</span>
          <span v-else>Открыть клавиатуру</span>
          <input type="checkbox" @click="showKeyboard = !showKeyboard" />
        </label>
      </div>
      <div class="select">
        <label>
          Поле 1
          <input
            type="radio"
            @click="opSelect()"
            value="первое"
            v-model.number="picked"
          />
        </label>
        <label>
          Поле 2
          <input
            type="radio"
            @click="opSelect()"
            value="второе"
            v-model.number="picked"
          />
        </label>
      </div>
      <div class="choose">
        Выбрано <span>&nbsp;{{ picked }}&nbsp;</span> поле
      </div>
      <div class="keyboard" v-if="showKeyboard">
        <!-- Цифры -->
        <div class="btn" :key="num" v-for="num in numbers" @click="setMod(num)">
          {{ num }}
        </div>
        <!-- Знаки -->
        <div
          v-for="btn in buttons"
          :key="btn"
          :disabled="op1 === '' || op2 === ''"
          @click="calc(btn)"
          class="btn"
        >
          {{ btn }}
        </div>
        <div @click="reset()" class="btn">C</div>
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
      buttons: ["+", "-", "x", "÷", "x*", "1/x"],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      showKeyboard: false,
      picked: "",
    };
  },
  methods: {
    opSelect(e) {
      switch (e) {
        case 1:
          this.inputOne = true;
          this.inputTwo = false;
          break;
        case 2:
          this.inputOne = false;
          this.inputTwo = true;
          break;
        default:
          break;
      }
    },
    setMod(num) {
      if (this.picked === "первое") {
        this.op1 += num;
      }
      if (this.picked === "второе") {
        this.op2 += num;
      }
    },
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
    calc(btn) {
      const { op1, op2 } = this;
      switch (btn) {
        case "+":
          this.error = "";
          this.result = op1 + op2;
          break;
        case "-":
          this.error = "";
          this.result = op1 - op2;
          break;
        case "x":
          this.error = "";
          this.result = op1 * op2;
          break;
        case "÷":
          this.divide();
          break;
        case "x*": // Возведение в степень, где op1-число, op2-степень.
          this.error = "";
          this.result = Math.pow(op1, op2);
          break;
        case "1/x": // Деление с остатком.
          this.divWithRem();
          break;
        default:
          break;
      }
    },
    reset() {
      this.result = 0;
      if (this.picked === "первое") {
        this.op1 = this.op1.slice(0, -1);
      }
      if (this.picked === "второе") {
        this.op2 = this.op2.slice(0, -1);
      }
    },
  },
};
</script>

<style lang="scss">
body {
  background: #3d3d3d;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  text-align: center;
  color: #fff;
}

input[type="radio" i]:checked {
  color: #e21111;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  font-size: 20px;
  background-color: #8d8787;
}

.calc {
  min-width: 320px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 20px;

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
    background-color: #e21111;
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
      color: #8d8787;
      border: none;
    }
  }

  .show__btns {
    margin: 20px 0;
    color: #332d2d;

    & span,
    & input {
      cursor: pointer;
    }
  }

  .select label,
  .select input {
    cursor: pointer;
  }

  .choose {
    margin: 20px 0;

    & span {
      color: #332d2d;
      font-size: 24px;
    }
  }

  .keyboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 320px;

    & .btn {
      flex: 0 0 93px;
      height: 63px;
      border: 1px solid transparent;
      line-height: 61px;
      transition: all 0.8s;
      border-radius: 3px;
      color: #fff;
    }

    & .btn:hover {
      background-color: rgba(255, 255, 255, 0.5);
      border-color: rgba(255, 255, 255, 0.2);
      color: #fff;
      cursor: pointer;
      transition: all 0.25s;
    }
  }
}
</style>