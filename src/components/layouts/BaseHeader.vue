<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">主页面</el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作空间</template>
      <el-menu-item index="2-1">日报</el-menu-item>
      <el-menu-item index="2-2">周报</el-menu-item>
      <el-menu-item index="2-3">计划</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">证券行情</el-menu-item>
    <el-menu-item index="4">里程碑</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
