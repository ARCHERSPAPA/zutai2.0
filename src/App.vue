<template>
  <div style="display: flex; flex-direction: column">
    <Header />
    <div class="mainContrl">
      <Icons />
      <Topology />
      <PropMenu />
    </div>
  </div>
</template>
<script setup >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import Header from "./components/header.vue";
import Icons from "./components/Icons.vue";
import Topology from "./components/Topology.vue";
import PropMenu from "./components/props.vue";
</script>



<style>
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