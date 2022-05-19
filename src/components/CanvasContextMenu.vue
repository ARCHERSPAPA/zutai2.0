<template>
  <div class="menus" @click="click">
    <div>
      <a @click="onTop()">置顶</a>
    </div>
    <div>
      <a @click="onBottom()">置底</a>
    </div>
    <div class="line"></div>
    <div>
      <a @click="onCombine()">组合</a>
      <div>
        <a @click="onCombine(true)">包含</a>
      </div>
    </div>
    <div>
      <a @click="onUncombine()">取消组合/包含</a>
    </div>
    <div>
      <a @click="onLock()">解锁(锁定)</a>
    </div>
    <div class="line"></div>
    <div>
      <a @click="onDel()">删除</a>
    </div>
    <div class="line"></div>
    <div>
      <a @click="canvas.undo()" class="flex">
        <span class="full">撤消</span>
        <span class="ml50">Ctrl + Z</span>
      </a>
    </div>
    <div>
      <a @click="canvas.redo()">
        恢复
        <span class="ml50">Ctrl + Shift+ Z</span>
      </a>
    </div>
    <div class="line"></div>
    <div>
      <a @click="canvas.cut()" class="flex">
        <span class="full">剪切</span>
        <span class="ml50">Ctrl + X</span>
      </a>
    </div>
    <div>
      <a @click="canvas.copy()" class="flex">
        <span class="full">复制</span>
        <span class="ml50">Ctrl + C</span>
      </a>
    </div>
    <div>
      <a @click="canvas.paste()" class="flex">
        <span class="full">粘贴</span>
        <span class="ml50">Ctrl + V</span>
      </a>
    </div>
    <div class="line"></div>
    <div>
      <a @click="onCopyImage()" class="flex">
        <span class="full">复制节点图片地址</span>
      </a>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return { canvas: "" };
  },
  created() {
    this.canvas = window.topology;
  },
  mounted() {
    this.canvas = window.topology;
  },
  methods: {
    click() {
      console.log(this.canvas);
      window.topology.emit("closeMenu");
    },
    onTop() {
      window.topology.top(window.topology.store.active[0]);
    },

    onBottom() {
      window.topology.bottom(window.topology.store.active[0]);
    },

    onCombine(stand) {},

    onUncombine() {},

    onLock() {
      // if (window.topology.store.active.length > 0) {
      //   window.topology.store.active.forEach((v) => {
      //     if (v.locked == 0) {
      //       window.topology.setValue({ id: v.id, locked: 2 }, { willRender: false });
      //     } else {
      //       window.topology.setValue({ id: v.id, locked: 0 }, { willRender: false });
      //     }
      //   });
      //   window.topology.render(Infinity);
      // }
      if (window.topology.store.active[0].locked) {
        window.topology.setValue(
          { id: window.topology.store.active[0].id, locked: 0 },
          { willRender: false }
        );
      } else {
        window.topology.setValue(
          { id: window.topology.store.active[0].id, locked: 2 },
          { willRender: false }
        );
      }

      // this.canvas.setValue();
    },

    onDel() {
      window.topology.delete(
        window.topology.find(window.topology.store.active[0].id)
      );
    },
  },
};
</script>

<style lang="scss">
.menus {
  color: #000;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  min-width: 1.8rem;
  text-align: left;
  padding: 10px;

  & > div {
    line-height: 2.2;
    a {
      color: #314659;
      display: block;
      padding: 0 0.2rem;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: #1890ff;
      }

      &.flex {
        display: flex;
      }

      &.disabled {
        color: #ccc;
        cursor: default;
      }
    }
  }

  .line {
    background-color: transparent !important;
    padding: 0;
    margin: 0.05rem 0;
    border-top: 1px solid #eee;
  }
}
</style>
