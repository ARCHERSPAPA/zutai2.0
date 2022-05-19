<script setup >
import { nextTick, ref } from "vue";
import { icons } from "../units/data";
const onDragStart = (e, data) => {
  e.dataTransfer.setData("Topology", JSON.stringify(data));
};
nextTick(() => {
  // 此处只注册，未将数据放置到工具栏
  // data.ts 中配置的最后一项即为该图形库中的内容
  // (window as any).registerToolsNew();
 
});
const rIcons = ref(icons);
// axios.get("/T型开关A -C.svg").then((res) => {
//   const data = res.data;
//   const pens = parseSvg(data);
//   rIcons.value.push({
//     svg: "/T型开关A -C.svg",
//     title: "svg",
//     data: pens,
//   });
// });
</script>

<template>
  <div class="aside">
    <div class="icon-list">
      <div class="typeList" v-for="(type,indexs) in rIcons" :key="indexs">
        <p class="title">{{type.name}}</p>
      <div v-for="(icon,index) in type.child" :key="index"
        draggable="true"
        @dragstart="onDragStart($event, icon.data)"
        :title="icon.title"
      >
        <i v-if="icon.key" class="iconfont" :class="`icon-${icon.key}`"></i>
        <img
          v-else-if="icon.svg"
          :src="icon.svg"
          alt=""
          srcset=""
          class="img"
        />
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .typeList{
    text-align: left ;
    .title{
      padding: 0 8px;
      font-weight: bold;
    }
    div{
      display: inline-block;
      margin-left: 10px;
    }
  }
.img {
  width: 100%;
  height: 100%;

}
</style>