<template>
  <div class="header-tool">
    <el-row>
      <el-col :span="2">
        <el-button link bg @click="() => onShowInput(true)">记一笔</el-button>
      </el-col>
      <el-col :span="2">
        <el-button link bg @click="() => onShowUpload(true)"
        >导入账单
        </el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button link bg>导出账单</el-button>
      </el-col>
    </el-row>
    <input-form
        :input-visible="showInput"
        @change:visible="() => onShowInput(false)"
        :update-data="updateData"
    />
    <import-vue
        @change:visible="() => onShowUpload(false)"
        :visible-value="showUpload"
    />
  </div>
  <el-divider/>
  <el-table
      height="80vh"
      :data="dataSource"
      :row-class-name="tableRowClassName"
      v-loading="loading"
  >
    <el-table-column label="业务" prop="BusinessDepartment" align="center"/>
    <el-table-column label="企业名称" prop="CompanyName" align="center"/>
    <el-table-column label="发票信息" align="center">
      <el-table-column label="种类" prop="InvoiceType" align="center"/>
      <el-table-column label="日期" prop="InvoiceDate" align="center"/>
      <el-table-column label="金额" prop="daInvoiceAmount" align="center"/>
      <el-table-column label="差额" prop="DiffBetweenAmount" align="center"/>
      <el-table-column label="手续费" prop="ServiceChange" align="center"/>
    </el-table-column>
    <el-table-column label="对方付款" align="center">
      <el-table-column label="付款日期" prop="PaymentDate" align="center"/>
      <el-table-column label="金额" prop="PaymentAmount" align="center"/>
    </el-table-column>
    <el-table-column label="劳务费" align="center">
      <el-table-column
          label="支付日期"
          prop="PaymentDateOfLabor"
          align="center"
      />
      <el-table-column
          label="支付金额"
          prop="PaymentDateOfAmount"
          align="center"
      />
    </el-table-column>
    <el-table-column label="备注" prop="Comment" align="center"/>

    <el-table-column label="操作">
      <template #default="scope">
        <el-popconfirm
            title="确定编辑本行数据？"
            confirm-button-text="是"
            cancel-button-text="否"
            @confirm="() => onEditOne(scope.row)"
            @cancel="notDelete"
        >
          <template #reference>
            <el-icon>
              <EditPen/>
            </el-icon>
          </template>
        </el-popconfirm>
        <el-divider direction="vertical"/>
        <el-popconfirm
            title="确定是否要删除本行数据？"
            confirm-button-text="是"
            cancel-button-text="否"
            @confirm="() => deleteOne(scope.row._id)"
            @cancel="notEditOne"
        >
          <template #reference>
            <el-icon>
              <DeleteFilled/>
            </el-icon>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      :small="true"
      :background="false"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
  />
</template>
<script setup lang="ts">
import {ref} from "vue";
import {FinaNote} from "./types";
import http from "~/libs/http";
import {onMounted} from "vue";
import {onUnmounted} from "vue";
import {DeleteFilled, EditPen} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";

let intervalId: string | number | NodeJS.Timeout | null | undefined = null;
const updateData = ref<FinaNote>();
const dataSource = ref<Array<FinaNote>>([]);
const showInput = ref<boolean>(false);
const showUpload = ref<boolean>(false);
const loading = ref<boolean>(true);
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);
const total = ref<number>(0);
const onShowUpload = (flag: boolean) => (showUpload.value = flag);
const onShowInput = (flag: boolean) => (showInput.value = flag);
const onEditOne = (data: FinaNote) => {
  showInput.value = true;
  updateData.value = data;
}
const notEditOne = () => {}
const deleteOne = (_id: string) => {
  loading.value = true;
  console.log(_id);
  http
      .delete(`/workspace/financial/${_id}`)
      .then((response) => {
        fetch();
        const msg =
            response.data.code == 0
                ? "刪除操作成功!"
                : "刪除操作失败，请联系管理员。";
        const type = response.data.code == 0 ? "success" : "error";
        ElMessage({
          message: msg,
          type: type,
        });
      })
      .finally(() => (loading.value = false));
};
const notDelete = () => {
  console.log("delete notthing");
};
const fetch = () => {
  const params = {pageSize: pageSize.value, currentPage: currentPage.value};
  http
      .get("/workspace/financial", {params})
      .then(({data, status}) => {
        if ((status = 200)) {
          console.log(data);
          dataSource.value = data.data;
          total.value = data.total;
        }
      })
      .finally(() => (loading.value = false));
};
const tableRowClassName = ({
                             row,
                             rowIndex,
                           }: {
  row: FinaNote;
  rowIndex: number;
}) => {
  if (rowIndex % 2 == 0) {
    return "odd-row";
  } else {
    return "even-row";
  }
};

const handleSizeChange = (value: number) => {
  loading.value = true;
  fetch();
  console.log("--handleSizeChange-->", value);
};
const handleCurrentChange = (value: number) => {
  loading.value = true;
  fetch();
  console.log("--handleCurrentChange-->", value);
};
onMounted(() => {
  loading.value = true;
  intervalId = setInterval(fetch, 5000);
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

.el-table .even-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .odd-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
