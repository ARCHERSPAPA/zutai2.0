<template>
  <color-picker
    @change="change"
    :value="color"

  ></color-picker>
</template>

<script setup>
import { onMounted, ref, watch } from "vue-demi";

const data = defineProps({
  color: {
    type: String,
    default: "#333",
  },
  type: {
    type: Number,
    default: 1,
  },
  modelValue:{
    type: String,
    default: "#333",
  },
  attr: {
    type: String,
    default: "",
  },
});
let color = ref('#333');
color.value=data.modelValue
  console.log(data.modelValue,444444444444444);
watch(
  color,
  () => {
    console.log(data.color, 3333333333333333);
  },
  {
    deep: true,
  }
);
//  color.value=data.color

// onMounted(() => {
// color.value=data.color
//  console.log(color.value,333333333)
// });

const change = (e) => {
  let colorParam = { name: data.attr, color: e.hex, type: data.type };
  window.topology.store.emitter.emit("changeColor", colorParam);
};
</script>
<style lang="scss" scoped>
</style>
