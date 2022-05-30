<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { ElMessage } from "element-plus";
import { useStore } from "vuex"; // 引入useStore 方法
const store = useStore();
const isPenActive = ref(false);
const isPencilActive = ref(false);
const isMagnifierActive = ref(false);
const isMinimapActive = ref(false);
const isEditActive = ref(true);
const onCreate = () => {
  window.topology.open();
};
const onOpen = (e) => {
  const file = e.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const json = JSON.parse(event.target.result);
      window.topology.open(json);
    } catch {
      console.log("读取文件失败，请检查数据格式");
    }
  };
  reader.readAsText(file);
};
const onSave = () => {
  const filename = "测试数据.json";
  const data = window.topology.data();
  const json = JSON.stringify(data, undefined, 4);
  const blob = new Blob([json], { type: "text/json" });
  const a = document.createElement("a");
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  a.click();
};
const onTogglePen = () => {
  isPencilActive.value = false;
  window.topology.finishPencil();
  isPenActive.value = true;
  window.topology.drawLine("curve");
};
const onTogglePencil = () => {
  if (isPenActive.value === true) {
    return;
  }
  if (isPencilActive.value === true) {
    isPencilActive.value = false;
    window.topology.finishPencil();
  } else {
    isPencilActive.value = true;
    window.topology.drawingPencil();
  }
};
const onToggleMagnifier = () => {
  if (isMagnifierActive.value === true) {
    isMagnifierActive.value = false;
    window.topology.hideMagnifier();
  } else {
    isMagnifierActive.value = true;
    window.topology.showMagnifier();
  }
};
const onToggleMinimap = () => {
  if (isMinimapActive.value === true) {
    isMinimapActive.value = false;
    window.topology.hideMap();
  } else {
    isMinimapActive.value = true;
    window.topology.showMap();
  }
};
const onHelp = () => {
  window.open("https://www.yuque.com/alsmile/topology/cucep0");
};
const onKeyDown = (e) => {
  switch (e.key) {
    case "b":
    case "B":
      if (window.topology.canvas.pencil) {
        isPencilActive.value = true;
        isPenActive.value = false;
      } else {
        isPencilActive.value = false;
      }
      break;
    case "v":
    case "V":
      if (e.ctrlKey || e.metaKey) {
        return;
      } else {
        if (window.topology.canvas.drawingLineName) {
          isPenActive.value = true;
          isPencilActive.value = false;
        } else {
          isPenActive.value = false;
        }
      }
      break;
    case "m":
    case "M":
      if (window.topology.canvas.magnifier) {
        isMinimapActive.value = true;
      } else {
        isMinimapActive.value = false;
      }
      break;
    case "Q":
    case "q":
      isPenActive.value = false;
      isPencilActive.value = false;
      isMagnifierActive.value = false;
      window.topology.finishDrawLine();
      window.topology.canvas.drawingLineName = "";
    default:
      break;
  }
};
onMounted(() => {
  window.addEventListener("keydown", onKeyDown);
});
onUnmounted(() => {
  window.removeEventListener("keydown", onKeyDown);
});

const onOpenLocal = () => {
  const json = JSON.parse(window.localStorage.getItem("mapsData"));
  window.topology.store.emitter.emit("openData");
  window.topology.open(json);
};
const onSaveLocal = () => {
  const data = JSON.stringify(window.topology.data());
  ElMessage({
    message: "保存成功",
    type: "success",
  });
  window.localStorage.setItem("mapsData", data);
};
const preMaps = () => {
  window.topology.lock(1);
  isEditActive.value = false;
};
const EditMaps = () => {
  window.topology.lock(0);
  isEditActive.value = true;
};
const fitView = () => {
  window.topology.fitView(true);
};
const preMapsAll=()=>{
  store.dispatch('asyncUpdateIsPre',true)
}
</script>

<template>
  <div class="header">
    <div class="myTitle">组态编辑器 <i> by</i>:Xjy</div>
    <div class="button-group">
      <button id="create" @click="onCreate">新建文件</button>
      <button id="open">
        打开文件
        <input id="open-input" type="file" @change="onOpen" />
      </button>
      <button id="save" @click="onSave">保存</button>
      <button id="save" @click="fitView">自适应屏幕</button>
      <button id="openLoacal" @click="onOpenLocal">打开最近编辑</button>
      <button id="saveLoacal" @click="onSaveLocal">保存到本地</button>
      <button id="saveLoacal" @click="preMaps" :class="{ active: !isEditActive }">
        预览
      </button>
      <button id="saveLoacal" @click="preMapsAll" >
        预览(整体)
      </button>
      <button id="saveLoacal" @click="EditMaps" :class="{ active: isEditActive }">
        编辑
      </button>
      <button id="pen" :class="{ active: isPenActive }" @click="onTogglePen">钢笔</button>
      <button id="pencil" :class="{ active: isPencilActive }" @click="onTogglePencil">
        铅笔
      </button>
      <button
        id="magnifier"
        :class="{ active: isMagnifierActive }"
        @click="onToggleMagnifier"
      >
        放大镜
      </button>
      <button id="minimap" :class="{ active: isMinimapActive }" @click="onToggleMinimap">
        缩略图
      </button>
    </div>
  </div>
</template>

<style scoped>
.myTitle {
  float: left;
  padding-top: 10px;
  padding-left: 20px;
  font-size: 26px;
}
</style>
