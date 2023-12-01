<template>
  <el-dialog :close-on-click-modal="false" :model-value="inputVisible" @closed="$emit('change:visible')" title="录入/编辑账单">
    <el-form v-model="formData" label-position="right" label-width="80px">
      <el-divider content-position="left">基本信息</el-divider>
      <!-- 业务部门 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="业务部门">
            <el-select multiple filterable allow-create default-first-option :reserve-keyword="false" placeholder="请选择部门"
              v-model="formData.BusinessDepartment">
              <el-option v-for="item in businessOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="企业名称">
            <el-input v-model="formData.CompanyName" palceholder="请填写企业名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      
      <el-divider content-position="left">开票信息</el-divider>

      <el-row>
        <el-col :span="12">
          <!-- 发票种类 -->
          <el-form-item label="种类">
            <el-select v-model="formData.InvoiceType" placeholder="选择发票种类"></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <!-- 开票日期 -->
          <el-form-item label="日期">
            <el-date-picker v-model="formData.InvoiceDate" type="date" placeholder="选择开票日期" size="small" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <!-- 开票金额 -->
          <el-form-item label="金额">
            <el-input-number v-model="formData.InvoiceAmount" :min="0.0" controls-position="right"
              size="small"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <!-- 差额 -->
          <el-form-item label="差额">
            <el-input-number v-model="formData.DiffBetweenAmount" :min="0.0" controls-position="right"
              size="small"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="手续费">
            <el-input-number
             v-model="formData.ServiceChange"
              :min="0.0" controls-position="right"
              size="small"></el-input-number></el-form-item>
          <!-- 手续费 -->
        </el-col>
      </el-row>

      <el-divider content-position="left">收入成本</el-divider>
      <el-row>
        <el-col :span="12">
          <el-form-item label="不含税收">
            <el-input-number
             :min="0.0"
             size="small"
             controls-position="right" />
          </el-form-item></el-col>
        <el-col :span="12">
          <el-form-item label="成本">
            <el-input-number
            :min="0.0"
             size="small"
             controls-position="right"></el-input-number>
          </el-form-item></el-col>
      </el-row>
      
      <el-divider content-position="left">回款情况</el-divider>
      <el-row>
        <el-col :span="12">
          <el-form-item label="付款日期">
            <!-- 对方付款日期	 -->
            <el-date-picker v-model="formData.PaymentDate" :min="0.0" controls-position="right"
              size="small"></el-date-picker></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款金额">
            <el-input-number v-model="formData.ServiceChange" :min="0.0" controls-position="right"
              size="small"></el-input-number></el-form-item>
        </el-col>
      </el-row>
      
      <el-divider content-position="left">劳务费支付信息</el-divider>
      <el-row>
        <el-col :span="12">
          <el-form-item label="支付日期">
            <el-date-picker
             v-model="formData.PaymentDate"
              :min="0.0"
               controls-position="right"
              size="small"></el-date-picker></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支付金额">
            <el-input-number
            v-model="formData.PaymentDateOfAmount"
            :min="0.0"
            controls-position="right"
            size="small"></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 备注 重要 -->
      <el-divider content-position="left">其他</el-divider>
      <el-row>
        <el-col :span="12">
          <el-form-item label="备注">
        <el-input
        v-model="formData.Comment"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="Please input"
      />
      </el-form-item>
        </el-col>
        <el-col></el-col>
      </el-row>
    </el-form>
    <el-row justify ="end">
      <el-col :span="12">
      <el-button >取消</el-button>
      <el-button >提交</el-button>
      </el-col>
    </el-row>
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
  Comment: "",
});

const props = defineProps<Props>();
</script>
<style scoped>
div.ep-divider--horizontal {
  padding: auto;
}
</style>