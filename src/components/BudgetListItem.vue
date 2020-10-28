<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <span class="budget-value">{{ item.value }}</span>
      <ElButton type="danger" size="mini" @click="deleteOneItem(item.id)"
        >Delete</ElButton
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),

  methods: {
    deleteOneItem(id) {
      this.$emit("onDeleteOneItem", id);
    },
  },
};
</script>


<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>