<template>
  <div>
    <div
      class="list-item"
      v-for="(item, prop) in budgetList"
      :key="prop"
      v-show="item.type === 'Outcome' ? outComeVisible : incomeVisible"
    >
      <span class="budget-comment">{{ item.comment }}</span>
      <span
        :style="`color: ${item.type === 'INCOME' ? 'green' : 'red'}`"
        class="budget-value"
        :class="item.type"
        >{{ item.value }}
        <i
          :class="item.type === 'INCOME' ? 'el-icon-top' : 'el-icon-bottom'"
        ></i
      ></span>
      <ElButton
        class="icon"
        plain
        icon="el-icon-error"
        type="danger"
        size="mini"
        @click="deleteOneItem(item.id)"
        >Delete</ElButton
      >
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "BudgetListItem",
  props: ["outComeVisible", "inComeVisible"],
  data: () => ({}),

  computed: {
    ...mapGetters("budgetList", ["budgetList"]),
  },

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

.icon {
  font-size: 1.3rem;
  color: red;
  border: none;
}
</style>