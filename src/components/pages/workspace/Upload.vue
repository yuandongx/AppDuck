<template>
  <el-dialog
    :model-value="visibleValue"
    @close="$emit('change:visible')"
    title="上传表单"
  >
    <el-upload
      ref="upload"
      class="upload-demo"
      action="/apiV1/workspace/upload"
      :limit="1"
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
      :on-change="handleChange"
      drag
      :multiple="false"
    >
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">拖放文件到这里 <em>或点击上传</em></div>
    </el-upload>
    <el-checkbox-group  v-model="selects">
      <el-checkbox v-for="item in labels" :label="item" :key="item" />
    </el-checkbox-group >
  </el-dialog>
</template>
<script setup lang="ts">
import { UploadFilled } from "@element-plus/icons-vue";
import {   ref } from "vue";
import { genFileId } from "element-plus";
import type {
  UploadFile,
  UploadFiles,
  UploadInstance,
  UploadProps,
  UploadRawFile,
} from "element-plus";
let fileName = '';
const selects = ref<Array<string>>([]);
const labels = ref<Array<string>>([]);
defineEmits(["change:visible"]);
defineProps({
  visibleValue: Boolean,
});
const upload = ref<UploadInstance>();

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};
const update = (response: any): string[] => {
  const list: string[] = [];
  for (let file in response) {
    fileName = file;
    for(let sheet in response[file] ){
      list.push(response[file][sheet]);
    }
  }
  return list
}
const handleSuccess: UploadProps["onSuccess"] = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  if (uploadFile.response) labels.value =  [...update(uploadFile.response)];
};
const handleError: UploadProps["onError"] = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {};
const handleChange: UploadProps["onChange"] = (
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  if (uploadFile.response) labels.value = [...update(uploadFile.response)];
};
</script>
<style scoped>
.upload-demo {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}
.el-icon--upload {
  font-size: 60px;
  color: rgb(62, 98, 160);
}
</style>
