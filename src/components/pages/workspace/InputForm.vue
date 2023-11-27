<template>
  <el-dialog
    :close-on-click-modal="false"
    :model-value="inputVisible"
    @closed="$emit('change:visible')"
    title="录入/编辑账单"
  >
    <el-form v-model="formData">
      <!-- 业务部门 -->
      <el-row>
        <el-col>
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
                v-for="item in businessOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <!-- 发票种类 -->
          <el-form-item label="发票种类">
            <el-select v-model="formData.InvoiceType"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <!-- 开票日期 -->
          <el-form-item label="开票日期">
            <el-date-picker
              v-model="formData.InvoiceDate"
              type="date"
              placeholder="Pick a day"
              size="small"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 开票金额 -->

      <el-form-item></el-form-item>
      <!-- 差额 -->

      <el-form-item></el-form-item>
      <!-- 手续费 -->

      <el-form-item></el-form-item>
      <!-- 对方付款日期	 -->

      <el-form-item></el-form-item>
      <el-form-item></el-form-item>
      <!-- 支付劳务费日期 -->
      <el-form-item></el-form-item>
      <el-form-item></el-form-item>
      <!-- 备注 重要 -->
      <el-form-item></el-form-item>
    </el-form>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FinaNote } from "./types";
interface Props {
  inputVisible: boolean;
}
interface Option {
  value: string;
  label: string;
}
const showInput = defineEmits(["change:visible"]);
const businessOptions = ref<Array<Option>>([
  { value: "1", label: "外包派遣事业部" },
]);
const Options = ref<Array<Option>>([{ value: "1", label: "外包派遣事业部" }]);

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

const props = defineProps<Props>();
</script>
