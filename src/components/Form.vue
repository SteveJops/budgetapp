<template>
  <ElCard class="form-card">
    <ElForm
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      lable-position="top"
    >
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: "Form",
  data() {
    const valid = (rule, value, callback) => {
      if (value === 0) {
        return callback(
          new Error("Please input the value that biggest then '0'")
        );
      }

      callback();
      return 0;
    };

    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: "",
      },

      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [
          {
            required: true,
            message: "Please enter comment",
            trigger: "change",
          },
        ],
        value: [
          { required: true, message: "Please enter value", trigger: "change" },
          {
            type: "number",
            message: "Value must be a number",
            trigger: "change",
          },
          { validator: valid },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      // console.log(this.$refs.addItemForm);
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type !== "OUTCOME") {
            this.$emit("submitForm", { ...this.formData });
          } else {
            this.formData.value =
              this.formData.value > 0
                ? 0 - this.formData.value
                : this.formData.value;

            this.$emit("submitForm", { ...this.formData });
          }

          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>