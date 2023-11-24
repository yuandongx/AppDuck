<template>
  <div class="header-tool">
    <el-button link bg @click="() => onShowInput(true)">记一笔</el-button>
    <input-form
      :input-visible="showInput"
      @change:visible="() => onShowInput(false)"
    />
  </div>
  <el-divider />
  <el-table height="80vh">
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

const showInput = ref<boolean>(false);
const onShowInput = (flag: boolean) => {
  showInput.value = flag;
  console.log(showInput);
};
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
