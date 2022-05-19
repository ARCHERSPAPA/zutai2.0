<!-- 属性栏 -->
<template>
  <div class="props">
    <el-tabs @tab-click="handleClick" v-if="data.draType != 0">
      <el-tab-pane label="外观">
        <div v-if="data.draType === 1">
          <p class="title">位置与大小</p>
          <div class="item">
            <span class="label"> 宽：</span>
            <el-input
              v-model="data.width"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('width')"
            />
          </div>
          <div class="item">
            <span class="label"> 高：</span>
            <el-input
              v-model="data.height"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('height')"
            />
            <!-- <input
          type="text"
          v-model="data.height"
          @change="changeProp('height')"
        /> -->
          </div>
          <div class="item">
            <span class="label"> x：</span>
            <el-input
              v-model="data.x"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('x')"
            />
          </div>
          <div class="item">
            <span class="label"> y：</span>
            <el-input
              v-model="data.y"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('y')"
            />
          </div>
          <!-- <div class="font">

      </div> -->
          <p class="title">文字属性</p>
          <div class="item">
            <span class="label"> 大小：</span>
            <el-input
              v-model="data.fontSize"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('fontSize')"
            />
          </div>
          <div class="item">
            <span class="label"> 颜色：</span>
            <el-input
              v-model="data.color"
              placeholder="请输入文字颜色"
              size="small"
              style="width: 100px"
              @change="changeProp('color')"
            />
          </div>
          <div class="item">
            <span class="label"> 行高：</span>
            <el-input
              v-model="data.lineHeight"
              placeholder="请输入文字行高"
              size="small"
              style="width: 100px"
              @change="changeProp('lineHeight')"
            />
          </div>
          <div class="item">
            <span class="label"> 字体：</span>
            <el-input
              v-model="data.fontFamily"
              placeholder="请输入字体"
              size="small"
              style="width: 100px"
              @change="changeProp('fontFamily')"
            />
          </div>
        </div>
        <div v-else>
          <p class="title">线条属性</p>
          <div class="item">
            <span class="label"> 线条宽度：</span>
            <el-input
              v-model="data.lineWidth"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('lineWidth')"
            />
          </div>
          <div class="item">
            <span class="label"> 线条颜色：</span>
            <el-input
              v-model="data.color"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('color')"
            />
          </div>
          <div class="item">
            <span class="label"> 线条类型：</span>
            <el-input
              v-model="data.strokeType"
              placeholder="Linear Radial"
              size="small"
              style="width: 100px"
              @change="changeProp('strokeType')"
            />
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="事件">
        <p class="title">事件属性</p>
        <p style="text-align:center;padding:8px">
          <el-button @click="addEvent()" v-if="!data.events"
            >添加事件</el-button
          >
        </p>

        <div class="item" v-if="data.events">
          <span class="label"> 事件类型：</span>
          <el-select
            v-if="data.events"
            v-model="data.events[0].name"
            class="m-2"
            style="width: 100px"
            @change="changeEvent('name')"
            placeholder="Select"
            size="small"
          >
            <el-option
              v-for="item in data.EventOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="item" v-if="data.events">
          <span class="label"> 事件行为：</span>
          <el-select
            v-if="data.events"
            v-model="data.events[0].action"
            class="m-2"
            style="width: 100px"
            placeholder="Select"
            @change="changeEvent('action')"
            size="small"
          >
            <el-option
              v-for="item in data.actionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="item" v-if="data.events && data.events[0].action != 5">
          <span class="label"> 值：</span>
          <el-input
            v-model="data.events[0].value"
            placeholder="Please input"
            size="small"
            style="width: 100px"
            @change="changeEvent('value')"
          />
        </div>
        <div class="item" v-if="data.events && data.events[0].action == 5">
          <span class="label">
            <el-button @click="openJsEdit()">自定义JS</el-button></span
          >
        </div>
        <p class="title">事件条件</p>
        <!-- <div class="item" v-if="data.events">
          <span class="label">
            <el-button @click="openJsEdit()">自定义JS</el-button></span
          >
        </div> -->
      </el-tab-pane>
      <el-tab-pane label="动画">
        <div class="line" v-if="data.draType === 2">
          <p class="title">动画属性</p>
          <div class="item">
            <span class="label"> 颜色：</span>
            <el-input
              v-model="data.animateColor"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('animateColor')"
            />
          </div>
          <div class="item">
            <span class="label"> 自动播放：</span>
            <el-input
              v-model="data.autoPlay"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('autoPlay')"
            />
          </div>
          <div class="item">
            <span class="label"> 速度：</span>
            <el-input
              v-model.number="data.animateSpan"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('animateSpan')"
            />
          </div>
          <div class="item">
            <el-button @click="start()">开启动画</el-button
            ><el-button @click="pause()">暂停动画</el-button>
          </div>
          <div class="item" style="justify-content: center">
            <el-button @click="close()">关闭动画</el-button>
          </div>
        </div></el-tab-pane
      >
      <el-tab-pane label="数据">
        <p class="title">id</p>
        <div class="item">
          <span class="label"> id：</span>
          <el-input
            v-model="data.id"
            placeholder="Please input"
            size="small"
            style="width: 100px"
            @change="changeId('id')"
          />
        </div>
        <p class="title">工程数据</p>
        <div class="item">
          <span class="label"> 状态：</span>
          <el-select
            v-model="data.image"
            style="width: 100px"
            @change="changeProp('image')"
            size="small"
          >
            <el-option
              v-for="item in renderOption('fengji')"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-tabs @tab-click="handleClick" v-else>
      <el-tab-pane label="图纸"> </el-tab-pane>
      <el-tab-pane label="通信">
        <div class="item">
          <span class="label"> websock：</span>
          <el-input
            v-model="data.WebSocketUrl"
            placeholder="Please input"
            size="small"
            @blur="connectWeb()"
            style="width: 80px"
          />
        </div>
        <div class="item">
          <span class="label"> http(轮询)：</span>
          <el-input
            v-model="data.httpUrl"
            placeholder="Please input"
            size="small"
            @blur="connectHttp()"
            style="width: 80px"
          />
        </div>
        <div class="item">
          <span class="label"> mqtt:</span>
          <el-input
            v-model="data.mqttUrl"
            placeholder="Please input"
            size="small"
            @blur="connectMqtt()"
            style="width: 80px"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="布局"> </el-tab-pane>
    </el-tabs>
       <color></color>
    <JSedit v-if="data.showEdit"></JSedit>

  </div>
</template>

<script setup >
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  getCurrentInstance,
  watch,
  vModelCheckbox,
} from "vue";
import JSedit from "./JSedit.vue";
import color from "./color.vue"
let vue = getCurrentInstance();
const renderOption = (name) => {
  return [
    {
      label: "停用",
      value: `public/DC/${name}0.png`,
    },
    {
      label: "正常",
      value: `public/DC/${name}1.png`,
    },
    {
      label: "报警",
      value: `public/DC/${name}2.png`,
    },
  ];
};
let data = reactive({
  pen: [],
  WebSocketUrl: "",
  httpUrl: "",
  mqttUrl: "",
  showEdit: false,
  EventOptions: [
    {
      label: "单击",
      value: "click",
    },
    {
      label: "双击",
      value: "dblclick",
    },
    {
      label: "进入",
      value: "enter",
    },
  ],
  actionOptions: [
    {
      label: "自定义事件",
      value: 7,
    },
    {
      label: "执行js函数",
      value: 5,
    },
    {
      label: "打开链接",
      value: 0,
    },
    // {
    //   label: "进入",
    //   value: "enter",
    // },
  ],
  draType: 0, //1pen 0画布 2线条
});
const handleClick = (e) => {
  console.log(e);
};
const openJsEdit = () => {
  data.showEdit = !data.showEdit;
};

onMounted(() => {
  let Emits = window.topology.store.emitter;
  Emits.on("JSdata", (v) => {
    if (data.events[0].action == 5) {
      data.events[0].value = v;
      data.showEdit = false;
    }
  });
  Emits.on("openData", (v) => {
    console.log(window.topology.WebSocket);
    setTimeout(() => {
      data.WebSocketUrl = window.topology.websocket.url;
      data.httpUrl = window.topology.store.data.http;
      data.mqttUrl = window.topology.store.data.mqtt;
      // data.http = window.topology.http.url;
    }, 1000);
  });
  Emits.on("clickPen", (maps) => {
    console.log(maps, 2222);
    if (maps && maps.name === "line") {
      data.draType = 2;
      data.currentId = maps.id;
      renderLine(maps);
    } else if (!maps) {
      data.draType = 0;
      data.showEdit = false;
    } else {
      data.draType = 1;
      data.currentId = maps.id;
      renderPen(maps);
    }
  });
});

const Emit = vue.appContext.app.config.globalProperties.$mitt;

//数据渲染
const renderPen = (pen) => {
  data.draType = 1;
  data.height = pen.height;
  data.width = pen.width;
  data.id = pen.id;
  data.x = pen.x;
  data.fontSize = pen.fontSize;
  data.y = pen.y;
  data.events = pen.events;
  data.color = pen.color;
  data.lineHeight = pen.lineHeight;
  data.fontFamily = pen.fontFamily;
};
const renderLine = (line) => {
  window.topology.addPen(line);
  data.id = line.id;
  data.lineWidth = line.lineWidth;
  data.color = line.color;
  data.strokeType = line.strokeType;
  data.animateColor = line.animateColor;
  data.animateSpan = line.animateSpan;
  data.autoPlay = line.autoPlay;
  window.topology.inactive();
};
//链接websorck
const connectWeb = () => {
  window.topology.connectWebsocket(data.WebSocketUrl);
};
//链接http
const connectHttp = () => {
  window.topology.store.data.http = data.httpUrl;
  window.topology.store.data.httpTimeInterval = 4000; // 轮询间隔时间, 默认 1000
  window.topology.connectHttp();
};
//链接MQTT
const connectMqtt = () => {
  const params = {
    mqtt: data.mqttUrl,
    mqttTopics: "topic1/#,topoc2", // 多个主题用,分割
    mqttOptions: {
      clientId: "string",
      username: "string",
      password: "string",
      // 如果clientId不为空，默认会随机重新生成一个clientId，避免连接冲突
      // 如果设置customClientId=true，不随机生成，使用用户自定义的固定的clientId
      customClientId: false,
    },
  };

  // 方式1
  topology.connectMqtt(params);
};
//开启动画
const start = () => {
  data.lineAnimateType = 1;
  changeProp("lineAnimateType");
  window.topology.startAnimate(data.id);
};
//暂停动画
const pause = () => {
  window.topology.pauseAnimate(data.id);
};
//关闭动画
const close = () => {
  window.topology.stopAnimate(data.id);
};
//监听事件

const changeId = () => {
  window.topology.setValue({ id: data.currentId, newId: data.id });
};
//更新画布数据
const changeProp = (propName) => {
  let updateValue = { id: data.id };
  updateValue[propName] = data[propName];
  window.topology.setValue(updateValue);
  window.topology.render();
};
//添加事件
const addEvent = () => {
  let updateValue = {
    id: data.id,
    events: data.events ? data.events : [],
  };
  updateValue.events.push({
    action: 7,
    fn: null,
    name: "click",
    value: "showdiag",
  });
  window.topology.setValue(updateValue);
  window.topology.render();
  renderPen(window.topology.store.active[0]);
};
//改变事件
const changeEvent = (eventName) => {
  let updateValue = { id: data.id, events: data.events };
  updateValue.events[0][eventName] = data.events[0][eventName];
  window.topology.setValue(updateValue);
  window.topology.render();
};
</script>
<style lang='scss' scoped>
.props {
  float: left;
  position: relative;
  width: 201px;
  height: calc(100vh - 61px);
  border-left: 1px solid #ccc;
  background-color: #fff;
  .title {
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }
  .item {
    display: flex;
    padding: 10px;

    input {
      width: 100px;
    }
  }
}
</style>