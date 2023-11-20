<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title="工作任务">
        <el-icon><icon-list /></el-icon>
        <span>Navigator One222</span>
      </template>
      <el-menu-item-group>
        <template #title><span>日常工作</span></template>
        <el-menu-item index="1-1">日报</el-menu-item>
        <el-menu-item index="1-2">周报</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="计划">
        <el-menu-item index="1-3">下周计划</el-menu-item>
        <el-menu-item index="1-4">月度计划</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title="工作任务">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator One222</span>
      </template>
      <el-menu-item index="2-1">
        <template #title>财务笔记</template>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
