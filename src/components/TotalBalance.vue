<template>
  <div class="total-value" :style="totalColor">BALANCE: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    totalColor() {
      return {
        color: this.total === 0 ? "black" : this.total > 0 ? "green" : "red",
      };
    },
  },
};
</script>


<style scoped>
.total-value {
  font-size: 26;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>