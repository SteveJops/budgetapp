<template>
  <div class="total-value">BALANCE: {{ total }}</div>
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