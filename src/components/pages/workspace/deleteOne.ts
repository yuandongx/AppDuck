import { h } from "vue";
import http from "~/libs/http";
import { ElMessage } from 'element-plus';
import { loading, fetch } from "./FinancialNote.vue";

export const deleteOne = (_id: string) => {
loading.value = true;
console.log(_id);
http.delete(`/workspace/financial/${_id}`)
.then((response) => {
fetch();
const msg = response.data.code == 0 ? "刪除操作成功!" : "刪除操作失败，请联系管理员。";
const type = response.data.code == 0 ? "" : "";
ElMessage({
message: h('p', null, [
h('span', null, 'Message can be '),
h('i', { style: 'color: teal' }, 'VNode'),
]),
type: type,
});
})
.finally(() => loading.value = false);
};
