<template>
  <div class="header-tool">
    <el-row>
      <el-col :span="2">
        <el-button link bg @click="() => onShowInput(true)">记一笔</el-button>
      </el-col>
      <el-col :span="2">
        <el-button link bg @click="() => onShowUpload(true)">导入账单</el-button>
      </el-col>
    </el-row>
    <input-form
      :input-visible="showInput"
      @change:visible="() => onShowInput(false)"
    />
    <upload @change:visible="() => onShowUpload(false)" :visible-value="showUpload"/>
  </div>
  <el-divider />
  <el-table height="80vh" :data="dataSource">
    <el-table-column label="业务" prop="date" align="center" />
    <el-table-column label="企业名称" prop="date" align="center" />
    <el-table-column label="发票信息" align="center">
      <el-table-column label="种类" prop="date" align="center" />
      <el-table-column label="日期" prop="date" align="center" />
      <el-table-column label="金额" prop="date" align="center" />
      <el-table-column label="差额" prop="date" align="center" />
      <el-table-column label="手续费" prop="date" align="center" />
    </el-table-column>
    <el-table-column label="对方付款" align="center">
      <el-table-column label="日期" prop="date" align="center" />
      <el-table-column label="金额" prop="date" align="center" />
    </el-table-column>
    <el-table-column label="劳务费" align="center">
      <el-table-column label="支付日期" prop="date" align="center" />
      <el-table-column label="支付金额" prop="date" align="center" />
    </el-table-column>
    <el-table-column label="备注" prop="date" align="center" />
    <el-table-column label="操作" prop="date" align="center" />
  </el-table>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { FinaNote } from "./types";
import http from "~/libs/http";
import { reactive } from "vue";
import { onMounted } from "vue";
import { onUnmounted } from "vue";

interface P  {
  [key :string]: string;
}
let intervalId: string | number | NodeJS.Timeout | null | undefined = null;
const params: P = reactive({});
const dataSource = ref<Array<FinaNote>>([]);
const showInput = ref<boolean>(false);
const showUpload = ref<boolean>(false);
const onShowUpload = (flag: boolean) => showUpload.value = flag;
const onShowInput = (flag: boolean) => showInput.value = flag;
const fetch = () => {
  http.get('/workspace/financial', {params})
  .then((response)=> {
    if (response.status = 200) {
      console.log(response);
      dataSource.value = response.data.data;
    }
  });
}
onMounted(() => {
  // intervalId = setInterval(fetch, 5000);
});
onUnmounted(() => intervalId && clearInterval(intervalId));
</script>
<style scoped>
.header-tool {
  text-align: left;
  padding-left: 5px;
}

.header-tool + .ep-divider--horizontal {
  margin: 8px 0;
}

.header-tool .ep-button {
  padding: 10px 10px;
}
</style>
