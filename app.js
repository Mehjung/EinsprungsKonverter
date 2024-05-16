import {
  calculateWeeksBetweenDates,
  calculateWeeksModulo,
  calculateResult,
} from "./dateFunctions.js";

const { createApp } = Vue;

createApp({
  data() {
    return {
      zyklusbeginn: "",
      variantenbeginn: "",
      anzahlWochen: null,
      einsprungswoche: null,
      kalendertage: 0,
      wochen: 0,
      ergebnisEinsprungswoche: 0,
    };
  },
  methods: {
    calculate() {
      const weeksBetween = calculateWeeksBetweenDates(
        this.zyklusbeginn,
        this.variantenbeginn
      );

      const modWeeks = calculateWeeksModulo(weeksBetween, this.anzahlWochen);
      const result = calculateResult(
        this.anzahlWochen,
        this.einsprungswoche,
        modWeeks
      );

      this.wochen = weeksBetween;
      this.ergebnisEinsprungswoche = result;
    },
  },
}).mount("#app");
