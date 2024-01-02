<template>
  <el-dialog
    :close-on-click-modal="false"
    :model-value="inputVisible"
    @closed="$emit('change:visible')"
  >
    <template #header="{ close, titleId, titleClass }"></template>
    <el-form v-model="formData" label-position="right" label-width="80px">
      <el-divider class="divider-font" content-position="left"
        >基本信息</el-divider
      >
      <!-- 业务部门 -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="业务部门">
            <el-select
              class="max-width"
              size="small"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="请选择部门"
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
        <el-col :span="12">
          <el-form-item label="企业名称">
            <el-input
              class="max-width"
              size="small"
              v-model="formData.CompanyName"
              palceholder="请填写企业名称"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider class="divider-font" content-position="left"
        >开票信息</el-divider
      >

      <el-row>
        <el-col :span="12">
          <!-- 发票种类 -->
          <el-form-item label="种类">
            <el-select
              class="max-width"
              size="small"
              v-model="formData.InvoiceType"
              placeholder="选择发票种类"
            ></el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <!-- 开票日期 -->
          <el-form-item label="日期">
            <el-date-picker
              class="max-width"
              v-model="formData.InvoiceDate"
              type="date"
              placeholder="选择开票日期"
              size="small"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <!-- 开票金额 -->
          <el-form-item label="金额">
            <el-input-number
              class="max-width"
              v-model="formData.InvoiceAmount"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <!-- 差额 -->
          <el-form-item label="差额">
            <el-input-number
              class="max-width"
              v-model="formData.DiffBetweenAmount"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="手续费">
            <el-input-number
              v-model="formData.ServiceChange"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-input-number
          ></el-form-item>
          <!-- 手续费 -->
        </el-col>
      </el-row>

      <el-divider class="divider-font" content-position="left"
        >收入成本</el-divider
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="不含税收">
            <el-input-number
              :min="0.0"
              size="small"
              controls-position="right"
            /> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="成本">
            <el-input-number
              :min="0.0"
              size="small"
              controls-position="right"
            ></el-input-number> </el-form-item
        ></el-col>
      </el-row>

      <el-divider class="divider-font" content-position="left">
        是否回款
        <el-switch
          active-text="是"
          inline-prompt
          inactive-text="否"
          v-model="hasPayBack"
        >
        </el-switch>
      </el-divider>
      <el-row v-if="hasPayBack">
        <el-col :span="12">
          <el-form-item label="付款日期">
            <!-- 对方付款日期	 -->
            <el-date-picker
              class="max-width"
              v-model="formData.PaymentDate"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-date-picker
          ></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="付款金额">
            <el-input-number
              v-model="formData.ServiceChange"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-input-number
          ></el-form-item>
        </el-col>
      </el-row>

      <el-divider class="divider-font" content-position="left"
        >劳务费支付信息</el-divider
      >
      <el-row>
        <el-col :span="12">
          <el-form-item label="支付日期">
            <el-date-picker
              v-model="formData.PaymentDate"
              :min="0.0"
              class="max-width"
              controls-position="right"
              size="small"
            ></el-date-picker
          ></el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="支付金额">
            <el-input-number
              v-model="formData.PaymentDateOfAmount"
              :min="0.0"
              controls-position="right"
              size="small"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 备注 重要 -->
      <el-divider class="divider-font" content-position="left">其他</el-divider>
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
    <el-row justify="end">
      <el-col :span="12">
        <el-button size="small" round type="info">取消</el-button>
        <el-button size="small" round type="success" @click="submit"
          >提交</el-button
        >
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FinaNote } from "./types";
import http from "~/libs/http";
import { ElMessage, ElMessageBox } from "element-plus";

interface Props {
  inputVisible: boolean;
  updateData?: FinaNote;
}
interface Option {
  value: string;
  label: string;
}

const showInput = defineEmits(["change:visible"]);
const businessOptions = ref<Array<Option>>([
  { value: "1", label: "外包派遣事业部" },
]);
const hasPayBack = ref(false);
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
const update = (data?: FinaNote) => {
  if(data != undefined) {
    for (let key in data) {
      formData[key] = data[key];
    }
  }
}
const submit = () => {
  ElMessageBox.confirm("确定要提交记录？", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "info",
  })
    .then(async () => {
      const response = await http.post("/workspace/financial", formData);
      if (response.status == 200) {
        console.log(response);
      }
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "提交取消",
      });
    });
};
const props = defineProps<Props>();
</script>
<style scoped>
.max-width {
  max-width: 180px;
}
.divider-font {
  font-size: 120px;
  font-style: italic;
  color: darkcyan;
}
</style>
