<template>
  <div style="display: flex; flex-direction: column">
    <Header v-show="!store.state.isPreview" />
    <div class="mainContrl">
      <Icons v-show="!store.state.isPreview" />
      <Topology />
      <PropMenu v-show="!store.state.isPreview" />
    </div>
  </div>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from "./components/header.vue";
import Icons from "./components/Icons.vue";
import Topology from "./components/Topology.vue";
import PropMenu from "./components/props.vue";
import { useStore } from "vuex"; // 引入useStore 方法
const store = useStore();
console.log(store,'wossssss')
</script>

<style>
.zs-color-picker[data-v-87d63fa8] {
  position: relative;
  text-align: left;
  font-size: 14px;
  display: inline-block;
  outline: none;
}
.zs-color-picker-panel[data-v-87d63fa8] {
  position: absolute;
  right: -19px;
  width: 190px;
  background: #fff;
  border: 1px solid #ddd;
  visibility: hidden;
  border-radius: 2px;
  margin-top: 2px;
  padding: 10px 10px 5px;
  box-shadow: 0 0 5px #00000026;
  opacity: 0;
  transition: all 0.3s ease;
  box-sizing: content-box;
}
.zs-color-picker-panel__visible[data-v-87d63fa8] {
  visibility: visible;
  opacity: 1;
  z-index: 1;
}
.zs-color-picker-panel h3[data-v-87d63fa8] {
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #333;
}
.zs-color-picker-panel .color-input[data-v-87d63fa8] {
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
}
.zs-color-picker-btn[data-v-87d63fa8] {
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 1px solid #eee;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVRIiWM8fubkfwYygKWJOSM5+mCAhRLNoxaPWjxq8ajFoxbTyeL/DAfJ0Xjs3Cl7Siwmu4Yht1aDgZEYx6MWj1o8avGoxaMWD3qLya5X//4nqx6HAQC7RBGFzolqTAAAAABJRU5ErkJggg==);
  background-size: 10px 10px;
}
.zs-color-picker-btn .zs-color-picker-btn-color[data-v-87d63fa8] {
  box-sizing: border-box;
  border: 4px solid #fff;
  width: 100%;
  height: 100%;
}
.panel-header[data-v-87d63fa8] {
  overflow: hidden;
  line-height: 29px;
}
.color-view-bg[data-v-87d63fa8] {
  width: 100px;
  height: 30px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWElEQVRIiWM8fubkfwYygKWJOSM5+mCAhRLNoxaPWjxq8ajFoxbTyeL/DAfJ0Xjs3Cl7Siwmu4Yht1aDgZEYx6MWj1o8avGoxaMWD3qLya5X//4nqx6HAQC7RBGFzolqTAAAAABJRU5ErkJggg==);
  background-size: 10px 10px;
  float: left;
}
.color-view[data-v-87d63fa8] {
  width: 100px;
  height: 30px;
  transition: background-color 0.3s ease;
}
.default-color[data-v-87d63fa8] {
  width: 80px;
  float: right;
  text-align: center;
  border: 1px solid #ddd;
  cursor: pointer;
  color: #333;
}
.panel-main .theme-color li[data-v-87d63fa8] {
  width: 15px;
  height: 15px;
  display: inline-block;
  margin: 0 2px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.panel-main .theme-color li[data-v-87d63fa8]:hover {
  box-shadow: 0 0 5px #0006;
  transform: scale(1.3);
}
.standard-color li[data-v-87d63fa8] {
  width: 15px;
  display: inline-block;
  margin: 0 2px;
}
.standard-color li li[data-v-87d63fa8] {
  display: block;
  width: 15px;
  height: 15px;
  transition: all 0.3s ease;
  margin: 0;
}
.standard-color li li[data-v-87d63fa8]:hover {
  box-shadow: 0 0 5px #0006;
  transform: scale(1.3);
}
ul[data-v-87d63fa8],
li[data-v-87d63fa8],
ol[data-v-87d63fa8] {
  list-style: none;
  margin: 0;
  padding: 0;
}
.bottom-btn[data-v-87d63fa8] {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.bottom-btn .finsh[data-v-87d63fa8] {
  margin-left: auto;
  background: rgb(0, 162, 255);
  color: #fff;
  cursor: pointer;
  margin-right: 5px;
  padding: 5px 10px;
  border-radius: 2px;
}
.monaco-list-row {
}
* {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;
  word-break: break-all;
  word-break: break-word;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mainContrl {
  display: flex;
}
input[type=file], /* FF, IE7+, chrome (except button) */
input[type=file]::-webkit-file-upload-button {
  /* chromes and blink button */
  cursor: pointer;
}
i.iconfont {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.65);
}
.header {
  height: 61px;
  border-bottom: 1px solid #ccc;
}
.logo,
.button-group {
  height: 60px;
}
.logo {
  width: 100px;
  padding: 5px;
  float: left;
  text-align: center;
}
.logo img {
  width: 50px;
  height: 50px;
}
.button-group {
  text-align: center;
  padding: 14px;
}
.button-group button {
  width: 100px;
  height: 32px;
  border: 1px solid #ccc;
  border-radius: 2px;
  color: black;
  background-color: transparent;
  cursor: pointer;
}
.button-group button:hover,
.button-group button.active {
  background-color: rgba(1, 1, 1, 0.5);
  color: #fff;
}
.button-group > button + button {
  margin-left: 10px;
}
#open {
  position: relative;
}
#open-input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.aside {
  width: 200px;
  height: calc(100% - 61px);
  float: left;
  border-right: 1px solid #ccc;
  background-color: #fff;
}
.aside .icon-list {
  border-bottom: 1px solid #ccc;
}
.aside .icon-list > div,
.aside .link {
  line-height: 50px;
}
.aside .icon-list > div i {
  cursor: pointer;
  user-select: none;
}
.main {
  height: calc(100% - 61px);
}
#topology {
  height: 100%;
}
</style>
