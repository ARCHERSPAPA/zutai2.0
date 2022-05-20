<template>
  <color-picker @change="change" :value="data.color"></color-picker>
</template>

<script setup>
import { ref } from "vue";
const color = ref("#ffffff");
const colorRgba = ref("#eeeeee");
const data = defineProps({
  color: {
    type: String,
    default: "",
  },
   type: {
    type: Number,
    default: 1,
  },
  attr: {
    type: String,
    default: "",
  },
});
const change = (e) => {
  console.log(e,data.attr);
  let colorParam={name:data.attr,color:e.hex,type:data.type}
  window.topology.store.emitter.emit("changeColor", colorParam);
  colorRgba.value = e.rgba;
};
</script>
<style lang="scss" scoped>
</style>
