<!-- 属性栏 -->
<template>
  <div class="props">
    <el-tabs
      @tab-click="handleClick"
      v-if="data.draType != 0"
      style="height: 100%"
    >
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
            <color
              v-model="data.color"
              :attr="'color'"
              class="colorPicker"
            ></color>
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
            <color
              v-model="data.color"
              :attr="'color'"
              class="colorPicker"
              style="left: 165px"
            ></color>
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
        <p style="text-align: center; padding: 8px">
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
        <div
          class="item"
          v-if="data.events && ![5, 6].includes(data.events[0].action)"
        >
          <span class="label"> 值：</span>
          <el-input
            v-model="data.events[0].value"
            placeholder="Please input"
            size="small"
            style="width: 100px"
            @change="changeEvent('value')"
          />
        </div>
        <div
          class="item"
          v-if="data.events && [5, 6].includes(data.events[0].action)"
        >
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
            <color
              v-model="data.animateColor"
              :attr="'animateColor'"
              class="colorPicker"
              style="left: 165px"
            ></color>
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
            <el-button @click="start(0)">开启动画</el-button
            ><el-button @click="pause()">暂停动画</el-button>
          </div>
          <div class="item" style="justify-content: center">
            <el-button @click="close()">关闭动画</el-button>
          </div>
        </div>
        <div class="pen" v-else>
          <p class="title">动画属性</p>
          <div class="item">
            <span class="label"> 时长：</span>
            <el-input
              v-model.number="data.showDuration"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('showDuration')"
            />
          </div>
          <div class="item">
            <span class="label"> 动画效果：</span>
            <el-select
              v-model="data.animateType"
              placeholder="是否开启网格"
              style="width: 100px"
              @change="changeProp('animateType')"
              size="small"
            >
              <el-option label="上下跳动" value="upDown" />
              <el-option label="警告" value="warning" />
            </el-select>
          </div>
          <div class="item">
            <span class="label"> 循环次数：</span>
            <el-input
              v-model.number="data.animateCycle"
              placeholder="Please input"
              size="small"
              style="width: 100px"
              @change="changeProp('animateCycle')"
            />
          </div>
          <div class="item">
            <span class="label"> 下个动画：</span>
            <el-input
              v-model="data.nextAnimate"
              placeholder="tag"
              size="small"
              style="width: 100px"
              @change="changeProp('nextAnimate')"
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
            <el-button @click="start(1)">开启动画</el-button
            ><el-button @click="pause()">暂停动画</el-button>
          </div>
          <div class="item" style="justify-content: center">
            <el-button @click="close()">关闭动画</el-button>
          </div>
        </div>
      </el-tab-pane>
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
        <p class="title">tags</p>
        <div class="tags" v-if="data.tags.length > 0">
          tags：
          <span
            class="tag"
            v-for="(tag, index) of data.tags"
            :key="index"
            @click="removeTag(index)"
            >{{ tag }} x</span
          >
        </div>
        <div class="item">
          <span class="label">new tag：</span>

          <el-input
            v-model="data.newTag"
            placeholder="按Enter添加新tag"
            size="small"
            style="width: 100px"
            @keydown.enter="addTag()"
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
        <p class="title">自定义属性</p>
        <p style="text-align: center; padding: 8px">
          <el-button @click="addAttr()">添加属性</el-button>
          <el-dialog v-model="data.attrVisible" title="自定义属性" width="15%">
            <div class="attrItem">
              <span class="attr">显示名称：</span>
              <el-input
                type="text"
                v-model="data.formM.name"
                size="small"
              ></el-input>
            </div>
            <div class="attrItem">
              <span class="attr">属性名：</span>
              <el-input
                type="text"
                v-model="data.formM.key"
                size="small"
              ></el-input>
            </div>
            <div class="attrItem">
              <span class="attr">类型：</span>
              <el-select
                v-model="data.formM.type"
                placeholder="请选择类型"
                width="100px"
                size="small"
              >
                <el-option label="下拉选择" value="select" />
                <el-option label="颜色" value="color" />
                <el-option label="文本" value="text" />
              </el-select>
              <!-- <el-input type="text" v-model="data.formM.type"></el-input> -->
            </div>
            <div class="attrItem">
              <span class="attr">提示文字：</span>
              <el-input
                type="text"
                v-model="data.formM.placeholder"
                size="small"
              ></el-input>
            </div>

            <div
              v-for="(option, index) of data.formM.option"
              :key="index"
              style="margin-top: 8px"
            >
              <div class="attrItem">
                <span class="attr">名称：</span>
                <el-input
                  type="text"
                  v-model="option.label"
                  size="small"
                ></el-input>
              </div>
              <div class="attrItem">
                <span class="attr">值：</span>
                <el-input
                  type="text"
                  v-model="option.value"
                  size="small"
                ></el-input>
              </div>
            </div>
            <div v-if="data.formM.type == 'select'" style="margin-top: 8px">
              <el-button @click="addFormOption()" type="primary"
                >新增选项</el-button
              >
              <el-button @click="delFormOption()">删除选项</el-button>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="cancelDiag()">取消</el-button>
                <el-button type="primary" @click="submitAttr()">确定</el-button>
              </span>
            </template>
          </el-dialog>
          <el-dialog v-model="data.bindVisible" title="绑定数据" width="15%">
            <div class="attrItem">
              <span class="attr">字段名称：</span>
              <el-input
                type="text"
                v-model="data.formM.dataIds.dataId"
                size="small"
              ></el-input>
            </div>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="cancelDiag()">取消</el-button>
                <el-button type="primary" @click="submitAttr()">确定</el-button>
              </span>
            </template>
          </el-dialog>
        </p>
        <div class="item" v-for="(attr, index) of data.form" :key="index">
          <span class="label"> {{ attr.name }}：</span>
          <el-select
            v-if="attr.type == 'select'"
            v-model="attr.value"
            placeholder="请选择类型"
            width="100px"
            size="small"
            @change="changeAttr(attr.key, attr.value)"
          >
            <el-option
              v-for="(items, i) of attr.option"
              :label="items.label"
              :value="items.value"
              :key="i"
            />
          </el-select>
          <el-input
            v-else
            v-model="attr.value"
            :placeholder="attr.placeholder"
            size="small"
            style="width: 100px"
            @change="changeAttr(attr.key, attr.value)"
          ></el-input>
          <span class="iconfont icon-bianji" @click="bind(index)"></span>
          <span class="iconfont icon-bianji" @click="editAttr(index)"></span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="结构">
        <div class="pens">
          <span class="label">{{ data.name }}</span>
          <p>
            <span :class="getShow(data)" @click="isShow(data.id, 1)"></span>
          </p>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-tabs @tab-click="handleClick" v-else style="height: 100%">
      <el-tab-pane label="图纸">
        <div class="item">
          <span class="label">背景图：</span>
          <el-input
            v-model="data.config.background"
            placeholder="Please input"
            size="small"
            style="width: 100px"
            @change="changebackground()"
          />
        </div>
        <div class="item">
          <span class="label">背景网格：</span>
          <el-select
            v-model="data.config.grid"
            placeholder="是否开启网格"
            style="width: 100px"
            @change="changeMaps()"
            size="small"
          >
            <el-option label="开启" :value="true" />
            <el-option label="关闭" :value="false" />
          </el-select>
        </div>
        <div class="item" v-if="data.config.grid">
          <span class="label">网格颜色:</span>
          <color
            :color="data.config.gridColor"
            :attr="'gridColor'"
            :type="2"
            class="colorPicker"
            style="left: 165px"
          ></color>
          <el-input
            v-model="data.config.gridColor"
            placeholder="Please input"
            size="small"
            style="width: 100px"
            @change="changeMaps()"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="通信">
        <div class="item">
          <span class="label"> websock：</span>
          <el-input
            v-model="data.config.websocket"
            placeholder="Please input"
            size="small"
            @blur="connectWeb()"
            style="width: 80px"
          />
        </div>
        <div class="item">
          <span class="label"> http(轮询)：</span>
          <el-input
            v-model="data.config.http"
            placeholder="Please input"
            size="small"
            @blur="connectHttp()"
            style="width: 80px"
          />
        </div>
        <div class="item">
          <span class="label"> mqtt：</span>
          <el-input
            v-model="data.config.mqtt"
            placeholder="Please input"
            size="small"
            @blur="connectMqtt()"
            style="width: 80px"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="布局">
        <div class="item" >
          <span class="iconfont icon-juzhongduiqi lay" @click='layActive("middle")'></span>
          <span class="iconfont icon-youduiqi lay" @click='layActive("right")'></span>
          <span class="iconfont icon-zuoduiqi lay" @click='layActive("left")'></span>
          <span class="iconfont icon-juxiaduiqi lay" @click='layActive("bottom")'></span>
          <span class="iconfont icon-jushangduiqi lay" @click='layActive("top")'></span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="结构">
        <div class="pens" v-for="(pen, index) of pensData" :key="index">
          <span class="label">{{ pen.name }} <span style="color:#999">({{pen.id}}) </span> </span>
          <p><span :class="getShow(pen)" @click="isShow(pen.id, 0)"></span></p>
        </div>
      </el-tab-pane>
    </el-tabs>

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
  effect,
  vModelCheckbox,
  shallowRef,
  watchEffect,
  ref,
  computed,
} from "vue";
import JSedit from "./JSedit.vue";
import color from "./color.vue";
import { useWindowScroll } from "@vueuse/core";
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
let pensData = shallowRef([]);

let data = reactive({
  config: [], //配置属性
  showEdit: false,
  data: [],
  pens: [],
  newTag: "",
  currentFormValue: "",
  formM: {
    //自定义属性模板
    isNotString: true,
    key: "",
    language: "json",
    name: "",
    placeholder: "",
    title: "json",
    type: "",
    value: "",
    dataIds: {
      dataId: "",
    },
  },
  attrVisible: false,
  currentAttr: null,
  bindVisible: false,
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
const layActive=(type)=>{
  window.topology.alignNodes(type, window.topology.store.active);
  window.topology.render()
}
const isShow = (id, type) => {
  let pen = window.topology.find(id)[0];
  window.topology.setVisible(pen, !pen.visible);
  window.topology.render();
  if (type) {
    data.visible = window.topology.store.active[0].visible;
  } else {
    data.pens = window.topology.store.data.pens;
    pensData.value = window.topology.store.data.pens;
  }
  // vue.ctx.$forceUpdate();
};

const getShow = (pen) => {
  if (pen.visible) {
    return "iconfont icon-xianshi";
  } else {
    return "iconfont icon-yincang";
  }
};
const bind = (i) => {
  data.currentAttr = i;
  data.formM = JSON.parse(JSON.stringify(data.form[i]));
  window.topology.store.data.socketCbJs = `
  // params: e - the message
let data=JSON.parse(e);
if(data){
  data.forEach(item=>{
    this.store.data.pens.forEach(v=>{
      if(v.form && v.form[0].dataIds?.dataId==item.dataId){
            console.log(v);
         window.topology.setValue({id:v.id,text:item.value});
      }
    })
  })
}
`;
  window.topology.listenSocket();
  data.bindVisible = true;
};
const handleClick = (e) => {};
// const bindAttr=()=>{
//   data.formM.code.push({ label: "", value: "" });
//   dataIds
// }
const cancelDiag = () => {
  data.attrVisible = false;
  data.bindVisible = false;
};
const addFormOption = () => {
  data.formM.option = data.formM.option ? data.formM.option : [];
  data.formM.option.push({ label: "", value: "" });
};
const delFormOption = () => {
  if (data.formM.option && data.formM.option.length > 0) {
    data.formM.option.splice(0, 1);
  }
};
const changeAttr = (key, v) => {
  let params = {
    id: data.id,
  };
  params[key] = v;
  window.topology.setValue(params);
};
const submitAttr = () => {
  if (data.currentAttr != null) {
    // let arr = data.form.find((v, i) => i == data.currentAttr);
    data.form[data.currentAttr] = data.formM;
  } else {
    data.form.push(data.formM);
  }
  data.attrVisible = false;
  data.bindVisible = false;
  data.currentAttr = null;
  window.topology.setValue({ id: data.id, form: data.form });
  // reset();
};
const addAttr = () => {
  data.attrVisible = true;
  reset();
};
const editAttr = (i) => {
  data.currentAttr = i;
  data.formM = JSON.parse(JSON.stringify(data.form[i]));
  data.attrVisible = true;
};
const reset = () => {
  data.formM = {
    isNotString: true,
    key: "",
    language: "json",
    name: "",
    placeholder: "",
    title: "json",
    type: "",
    dataIds: { dataId: "" },
  };
};
const openJsEdit = () => {
  data.showEdit = !data.showEdit;
};

onMounted(() => {
  let Emits = window.topology.store.emitter;

  Emits.on("JSdata", (v) => {
    if ([5].includes(data.events[0].action)) {
      data.events[0].value = v;
      data.showEdit = false;
    }
    window.topology.render();
  });
  Emits.on("changeColor", (v) => {
    if (v.type == 1) {
      //一般属性颜色修改
      data[v.name] = v.color;
      changeProp(v.name);
    } else {
      //网格颜色修改
      data.config.gridColor = v.color;
      changeMaps();
    }
  });
  Emits.on("openData", (v) => {
    console.log(window.topology.WebSocket);
    setTimeout(() => {
      data.config = window.topology.data();
      // data.http = window.topology.http.url;
    }, 1000);
  });
  Emits.on("clickPen", (maps) => {
    data.pens = window.topology.store.data.pens;
    pensData.value = window.topology.store.data.pens;
    console.log(pensData, 2222);
    // vue.ctx.$forceUpdate();
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
  data.animateType = pen.animateType;
  data.autoPlay = pen.autoPla ? pen.autoPlay : true;
  data.showDuration = pen.showDuration;
  data.animateCycle = pen.animateCycle;
  data.name = pen.name;
  data.nextAnimate = pen.nextAnimate;
  data.lineHeight = pen.lineHeight;
  data.visible = pen.visible ? pen.visible : false;
  data.fontFamily = pen.fontFamily;
  (data.form = pen.form ? pen.form : []),
    (data.tags = pen.tags ? pen.tags : []);
};
const renderLine = (line) => {
  window.topology.addPen(line);
  data.id = line.id;
  data.lineWidth = line.lineWidth;
  data.color = line.color;
  data.name = line.name;
  data.strokeType = line.strokeType;
  data.animateColor = line.animateColor;
  data.animateSpan = line.animateSpan;
  data.autoPlay = line.autoPlay;
  data.visible = line.visible ? line.visible : false;
  data.tags = line.tags ? line.tags : [];
  window.topology.inactive();
};
//链接websorck
const connectWeb = () => {
  window.topology.connectWebsocket(data.WebSocketUrl);
};
const removeTag = (index) => {
  data.tags.splice(index, 1);
  window.topology.setValue({ id: data.id, tags: data.tags });
  window.topology.render();
};
const addTag = () => {
  // let param = { id: data.id, tags: data.tags ? data.tags : [] };
  // param.tags.push(data.newTag);
  data.tags.push(data.newTag);
  window.topology.setValue({ id: data.id, tags: data.tags });
  data.newTag = "";
  window.topology.render();
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
  topology.connectMqtt(params);
};
//开启动画
const start = (type) => {
  if (type) {
    switch (data.animateType) {
      case "upDown":
        window.topology.setValue({
          id: data.id,
          frames: [
            {
              y: -10,
              duration: 100,
            },
            { y: 0, duration: 100 },
            { y: -10, duration: 200 },
          ],
        });
        window.topology.render();
        break;

      default:
        break;
    }
    window.topology.startAnimate(data.id);
  } else {
    data.lineAnimateType = 1;
    changeProp("lineAnimateType");
    window.topology.startAnimate(data.id);
  }
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
  window.topology.render();
};
//更新画布数据
const changeProp = (propName) => {
  let updateValue = { id: data.id };
  updateValue[propName] = data[propName];
  window.topology.setValue(updateValue);
  window.topology.render();
};
const changeMaps = () => {
  window.topology.setGrid({
    grid: data.config.grid,
    gridColor: data.config.gridColor,
  });
  window.topology.render(Infinity);
};
const changebackground = () => {
  window.topology.setBackgroundImage(data.config.background);
  window.topology.render(Infinity);
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
  .iconfont {
    // font-size: ;
    padding-top: 5px;
    cursor: pointer;
  }
  .lay{
    padding: 10px;
  }
  .lay:hover{
    color:rgb(11, 167, 229)
  }
  .icon-xianshi {
    color: rgba(8, 137, 243, 0.5);
  }
  .attrItem {
    margin-top: 10px;
    .attr {
      width: 8em;
    }
    display: flex;
  }
  .title {
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }
  .tags {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .tag {
      padding: 0 10px 4px 10px;
      border: 1px solid #333;
      cursor: pointer;
      border-radius: 8px;
      color: #999;
      margin: 8px 8px 0 0;
    }
    .tag:hover {
      background: #444;
    }
  }
  .pens {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .item {
    display: flex;
    padding: 10px;
    position: relative;

    .label {
      white-space: nowrap;
    }
    .colorPicker {
      position: absolute;
      left: 165px;
      z-index: 55555;
    }
    input {
      width: 100px;
    }
    :deep(.el-input) {
      flex-grow: 1;
    }
  }
}

:deep(.el-tabs__content) {
  height: 100%;
}
:deep(.el-tabs__item) {
  padding: 0 7px;
}
</style>