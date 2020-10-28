<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <DialogUI
      :dialogVisible="dialogVisible"
      @confirm="deleteDialog"
      @cancel="dialogVisible = false"
    />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import DialogUI from "@/components/DialogUI";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    DialogUI,
  },

  data: () => ({
    dialogVisible: false,
  }),
  computed: {
    ...mapGetters("budgetList", [budgetList]),
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    // handleClose(done) {
    //   this.$confirm("Are you sure to close this window?")
    //     .then(() => {
    //       done();
    //     })
    //     .catch(() => {});
    // },
    deleteDialog() {
      this.onDeleteItem();
      this.dialogVisible = false;
    },

    onDeleteItem(id) {
      this.dialogVisible = true;
      this.$delete(this.list, id);
    },

    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObj.id, newObj);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
