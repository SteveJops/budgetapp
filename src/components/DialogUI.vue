<template>
  <ElDialog
    title="Tips"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span>Would you like to delete this item?</span>
    <span slot="footer" class="dialog-footer">
      <ElButton @click="onHandleCancel">Cancel</ElButton>
      <ElButton type="primary" @click="onHandleConfirm">Confirm</ElButton>
    </span>
  </ElDialog>
</template>


<script>
export default {
  name: "DialogUI",
  props: ["dialogVisible"],
  methods: {
    handleClose(done) {
      this.$confirm("Are you sure to close this window?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    onHandleCancel() {
      this.$emit("cancel");
    },
    onHandleConfirm() {
      this.$emit("confirm");
    },
  },
};
</script>


<style scoped>
</style>