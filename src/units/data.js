import { EventAction } from "@topology/core";

export const icons = [
  {
    name: '基础类型', child: [{
      key: 'juxing',
      title: '矩形',
      data: {
        name: 'rectangle',
        text: '矩形',
        width: 100,
        height: 100,
        visible:true,
        title: '# 矩形',
        events: [
          {
            name: 'click',
            action: EventAction.Link, // 执行动作
            value: 'topology.le5le.com',
          },
        ],
      },
    },
    {
      key: 'wenzi',
      title: '矩形',
      data: {
        name: 'text',
        text: '文字',
        color:'#333',
        visible:true,
        width: 100,
        height: 100,
        title: '文字',
      },
    },
    {
      key: 'svg',
      title: '矩形',
      data: {
        name: "svgPath",
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        text: "Text",
        visible:true,
        path: "M250 150 L150 350 L350 350 Z",
      },
    },
    {
      key: 'circle',
      title: '圆形',
      data: {
        name: 'circle',
        text: '圆形',
        width: 100,
        visible:true,
        height: 100,
        events: [
          {
            name: 'dblclick',
            action: EventAction.Emit, // 执行动作
            value: 'test',
          },
        ]
      },
    },
    {
      key: 'img',
      title: '图片',
      data: {
        name: 'image',
        visible:true,
        width: 100,
        height: 100,
        image:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F016ba9554b952b000001bf72fa6574.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636344024&t=f977b8ad47acf62ee3579d594f32489a',
      },
    },
    {
      key: 'video',
      title: '视频',
      data: {
        name: 'video',
        width: 100,
        height: 100,
        visible:true,
        video: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
        autoPlay: true,
      },
    },
    {
      key: 'audio',
      title: '音频',
      data: {
        name: 'video',
        width: 100,
        visible:true,
        height: 100,
        audio: 'https://down.ear0.com:3321/preview?soundid=37418&type=mp3',
        autoPlay: true,
      },
    },
    {
      key: 'pentagram',
      title: '图表',
      data: {
        name: 'echarts',
        width: 400,
        height: 300,
        externElement: true,
        disableAnchor: true,
        echarts: {
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
              },
            ],
          },
        },
      },
    },]
  },
  {
    name: '工程工具', child: [{
      key: 'dianqi',
      title: '图片',
      data: {
        name: 'image',
        width: 100,
        visible:true,
        height: 100,
        image: 'public/DC/famen1.png',
        data: { name: '电气按钮', remark: '我是电气按钮' },
        events: [
          {
            action: EventAction.Emit,
            fn: null,
            name: "click",
            value: "showdiag"
          },
        ],

      },
    },
    {
      key: 'fengji',
      title: '图片',
      data: {
        name: 'image',
        width: 100,
        height: 100,
        visible:true,
        image: 'public/DC/fengji1.png',
        data: { name: '风机', remark: '我是风机' },
        events: [
          {
            action: EventAction.Emit,
            fn: null,
            name: "click",
            value: "showdiag"
          },
        ],
      },
    },
    {
      key: 'dianji',
      title: '图片',
      data: {
        visible:true,
        name: 'image',
        width: 100,
        height: 100,
        image: 'public/DC/dianji1.png'
      },
    },
    {
      key: 'dici',
      title: '图片',
      data: {
        visible:true,
        name: 'image',
        width: 100,
        height: 100,
        image: 'public/DC/qsb1.png'
      },
    },
    {
      key: 'gongcheng-',
      title: '图片',
      data: {
        name: 'image',
        visible:true,
        width: 100,
        height: 100,
        image: 'public/DC/061.png'
      },
    },
    {
      key: 'gongcheng',
      title: '图片',
      data: {
        name: 'image',
        width: 100,
        visible:true,
        height: 100,
        image: 'public/DC/tuijiu1.png'
      },
    },
    {
      key: 'dianqi',
      title: '图片',
      data: {
        name: 'image',
        width: 100,
        visible:true,
        height: 100,
        isBottom: true,
        image: 'public/DC/ZT.PNG'
      },
    },]
  },
  {
    name: '表格表单', child: [{
      key: 'biaoge',
      title: '表格',
      data: {
        name: 'table',
        width: 100,
        visible:true,
        height: 100,
        table: {
          colWidth: 150,
          rowHeight: 40,
          header: {
            height: 50,
            fontWeight: 'bold',
            // show: false,
            data: [
              {
                width: 100,
                text: '设备 ID'
              },
              {
                text: '设备名称'
              },

            ]
          },
          data: [1, 2]
        }
      },
    },
    ]
  },
  {
    name: 'Echart图表', child: [
      {
      key: 'line-chart-line',
      title: 'line-chart-line',
      data: {
        name: 'echarts',
        width: 400,
        visible:true,
        height: 300,
        externElement: true,
        disableAnchor: true,
        echarts: {
          option: {
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
            yAxis: {
              type: 'value',
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
              },
            ],
          },
        },
      },
    },
    {
      key: 'gauge',
      title: 'gauge',
      data: {
        name: 'gauge',
        x: 100,
        y: 100,
        width: 400,
        height: 400,
        disableAnchor: true,
        value: 90,
        unit: 'm/s',
        axisLine: [
          [0.3, '#67e0e3'],
          [0.7, '#37a2da'],
          [1, '#fd666d']
        ],
        animateCycle: 1,
        keepAnimateState: 0
      }
    },
    ]
  }
];