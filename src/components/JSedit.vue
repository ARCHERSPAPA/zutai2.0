<template>
  <div>
    <div id="container"></div>
    <el-button @click="close"> 保存</el-button>
  </div>
</template>
<script setup>
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import * as monaco from "monaco-editor";
import { ref, onMounted, toRaw } from "vue-demi";
let editor = ref("");
// let text = ref("");
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (["typescript", "javascript"].includes(label)) {
      return new tsWorker();
    }
    return new EditorWorker();
  },
};

onMounted(() => {
  initEditor();
  console.log(window.topology.store,333333333333333333);
});
const getVal = () => {
  return toRaw(editor.value).getValue(); //获取编辑器中的文本
};
const close = () => {
  // this.data=this.editor.getValue()
  // console.log(this.editor.getValue());
    window.topology.store.emitter.emit("JSdata", getVal());
};
const initEditor = () => {
  // 初始化编辑器，确保dom已经渲染
  editor.value = monaco.editor.create(document.getElementById("container"), {
    value: window.topology.store.active[0].events[0].value, //编辑器初始显示文字
    language: "javascript",
    theme: "vs-dark", //官方自带三种主题vs, hc-black, or vs-dark
    selectOnLineNumbers: true, //显示行号
    roundedSelection: false,
    readOnly: false, // 只读
    cursorStyle: "line", //光标样式
    automaticLayout: false, //自动布局
    glyphMargin: true, //字形边缘
    useTabStops: false,
    fontSize: 18, //字体大小
    autoIndent: true, //自动布局
    quickSuggestionsDelay: 100, //代码提示延时
  });
  // editor.value.onDidChangeModelContent((val) => {
  //   text.value = getVal();
  // });
    // editor.value.setValue(window.topology.store.active[0].events.value);
};
</script>
<style lang="scss">
#container {
  position: absolute;
  top: 30%;
  right: 200px;
  display: inline-block;
  width: 600px;
  height: 600px;
}
</style>