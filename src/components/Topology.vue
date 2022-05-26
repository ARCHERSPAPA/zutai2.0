<template>
  <div class="main">
    <div class="topology" id="topology"></div>
    <div class="context-menu" v-if="contextmenu.left" :style="contextmenu">
      <CanvasContextMenu></CanvasContextMenu>
    </div>
    <el-dialog
      v-model="dialogVisible"
      v-if="currentMap.active"
      :title="currentMap.active[0]?.data?.name"
      width="30%"
      draggable
    >
      <span>{{ currentMap.active[0]?.data?.remark }}</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup >
import { onMounted, ref, getCurrentInstance, reactive } from "vue";
import CanvasContextMenu from "./CanvasContextMenu.vue";
// 测试本地使用
// import { Topology } from "../../../../packages/core";
import { register as registerEcharts } from "@topology/chart-diagram";
import { Topology } from "@topology/core";
let vue = getCurrentInstance();
const Emit = vue.appContext.app.config.globalProperties.$mitt;
let contextmenu = reactive({ left: 2 });
let dialogVisible = ref(false);
const onContextMenu = (event, v) => {
  console.log(event, v);
  contextmenu.left = event.e.x + "px";
  contextmenu.top = event.e.y + "px";
};
let currentMap = ref("");
onMounted(() => {
  const option = {
    disableScale: false,
    rule: true,
    // grid:true,
    autoAnchor: false, //自动瞄点连线
  };
  const topology = new Topology("topology", option);
  currentMap.value = window.topology.store;
  registerEcharts();
  topology.on("contextmenu", onContextMenu);
  topology.fitView();
  topology.on("closeMenu", () => {
    close();
  });
  topology.on("showdiag", ({ pen }) => {
    dialogVisible.value = true;
    console.log(currentMap);
  });
  topology.on("test", ({ pen }) => {
    alert("自定义事件执行成功", pen.name);
  });
  topology.on("onValue", ({ pen }) => {
    console.log(pen);
  });
  // 点击画布

  topology.on("click", (datas) => {
    console.log(datas, 555);
    topology.store.emitter.emit("clickPen", datas.pen);
    visible.value = true;
    close();
  });
});

const close = () => {
  contextmenu.left = 0;
  contextmenu.bottom = 0;
};
const visible = ref(false);
// const currentPen = ref({});
</script>



<style scoped lang="scss">
.main {
  height: calc(100vh - 61px);
  flex-grow: 1;
  #topology {
    display: inline-block;
    height: calc(100vh - 61px);
    width: 100%;
  }
  .context-menu {
    position: fixed;
    z-index: 10;
  }
}
</style>