export const NAV_LIST = [
  {
    name: '首页',
    status: true,
    value: 0,
    url: '/vue3/#/index',
    hash: '',
  },
  {
    name: '资讯',
    status: false,
    value: 1,
    url: '/react15#/information',
  },
  {
    name: '视频',
    status: false,
    value: 2,
    url: '/react15#/video',
    hash: '',
  },
  {
    name: '选车',
    status: false,
    value: 3,
    url: '/vue3/#/select',
    hash: '',
  },
  {
    name: '新能源',
    status: false,
    value: 4,
    url: '/vue2#/energy',
    hash: '',
  },
  {
    name: '新车',
    status: false,
    value: 5,
    url: '/react16#/new-car',
    hash: '',
  },
  {
    name: '排行',
    status: false,
    value: 6,
    url: '/react16#/rank',
    hash: '',
  },
];

export const CHILD_LIST = [
  {
    name: 'react15',
    activeWhen: '/react15', // 匹配子应用激活路由
    container: 'micro-container', // 子应用渲染DOM
    entry: '//localhost:9002', // 获取子应用
  },
  {
    name: 'react16',
    activeWhen: '/react16',
    container: 'micro-container',
    entry: '//localhost:9003',
  },
  {
    name: 'vue2',
    activeWhen: '/vue2',
    container: 'micro-container',
    entry: '//localhost:9004',
  },
  {
    name: 'vue3',
    activeWhen: '/vue3',
    container: 'micro-container',
    entry: '//localhost:9005',
  },
];
