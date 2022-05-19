<template>
<colorPicker v-model="color"></colorPicker>
</template>
<script>
import { Sketch } from 'vue-color'
export default {
  components: {
    'sketch-picker': Sketch
  },
  data () {
    return {
      isShowColors: true,
      color: '#3f3f3f'
    }
  },
  methods: {
    // 颜色输入框点击事件处理
    colorInputClick () {
      this.isShowColors = !this.isShowColors
    },
    // 颜色值改变事件处理
    colorValueChange (val) {
      console.log(val)

      // 取颜色对象的十六进制值
      this.color = val.hex
    }
  }
}
</script>

<style>
.controls-box {
  position: absolute;
  left: 150px;
  top: 50px;
  width: 300px;
  padding: 10px;
  background-color: #fafafa;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
}
.label-col {
  padding: 8px 5px;
}
.color-select-layer {
  position: relative;
  left: -36px;
  top: 10px;
  padding: 15px 0;
}
</style>
