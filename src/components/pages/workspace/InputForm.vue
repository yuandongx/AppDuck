<template>
  <el-dialog :model-value="inputVisible" @closed="$emit('change:visible')">
    <el-form v-model="formData">
      <el-form-item label="业务部门">
        <el-select
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Choose tags for your article"
          v-model="formData.BusinessDepartment"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref, defineEmits } from "vue";
import { FinaNote } from "./types";
interface Props {
  inputVisible: boolean;
}
interface Option {
  value: string;
  label: string;
}
const showInput = defineEmits(["change:visible"]);
const options = ref<Array<Option>>([{ value: "1", label: "外包派遣事业部" }]);
const formData = reactive<FinaNote>({
  Id: 0,
  BusinessDepartment: "",
  CompanyName: "",
  InvoiceType: "",
  InvoiceDate: "",
  InvoiceAmount: 0,
  DiffBetweenAmount: 0,
  ServiceChange: 0,
  PaymentDate: "",
  PaymentAmount: 0,
  PaymentDateOfLabor: "",
  PaymentDateOfAmount: 0,
});
const func = () => {
  console.log("---func->");
};
const props = defineProps<Props>();
</script>
