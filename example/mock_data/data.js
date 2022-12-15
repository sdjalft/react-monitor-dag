'use strict';
export default {
  nodes: [
    {
      id: '1',
      top: 50,
      left: 500,
      title: '任务1',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'success'
    }, {
      id: '2',
      top: 150,
      left: 500,
      title: '任务2',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'running'
    }, {
      id: '3',
      top: 250,
      left: 500,
      title: '任务3',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'waiting'
    }, {
      id: '4',
      top: 350,
      left: 500,
      title: '任务4',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'timeout'
    }, {
      id:'5',
      top: 450,
      left: 500,
      title: '任务5',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'fail'
    }, {
      id: '6',
      top: 550,
      left: 500,
      title: '自定义',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'other',
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      },{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '21',
      top: 550,
      left: 500,
      title: '自定义21',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'other',
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      },{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '22',
      top: 550,
      left: 500,
      title: '自定义21',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      status: 'other',
      endpoints: [{
        id: 'top',
        orientation: [0, -1],
        pos: [0.5, 0]
      },{
        id: 'bottom',
        orientation: [0, 1],
        pos: [0.5, 0]
      }]
    },
    {
      id: '7',
      title: '某某算法11',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 55,
      left: 15,
      group: 'group',
      status: 'success',
    },
    {
      id: '8',
      title: '某某算法22',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 55,
      left: 130,
      group: 'group',
      status: 'success',
    },
    {
      id: '9',
      title: '某某算法33',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 55,
      left: 245,
      group: 'group',
      status: 'success',
    },
    {
      id: '10',
      title: '某某算法44',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 55,
      left: 360,
      group: 'group',
      status: 'success',
    },
    {
      id: '11',
      title: '某某算法55',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 110,
      left: 15,
      group: 'group',
      status: 'success',
    },
    {
      id: '12',
      title: '某某算法66',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 110,
      left: 130,
      group: 'group',
      status: 'success',
    },
    {
      id: '13',
      title: '某某算法77',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 110,
      left: 245,
      group: 'group',
      status: 'success',
    },
    {
      id: '14',
      title: '某某算法88',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 110,
      left: 360,
      group: 'group',
      status: 'success',
    },
    {
      id: '15',
      title: '某某算法99',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 165,
      left: 15,
      group: 'group',
      status: 'success',
    },
    {
      id: '16',
      title: '某某算法00',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 165,
      left: 130,
      group: 'group',
      status: 'success',
    },
    {
      id: '17',
      title: '某某算法qq',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 165,
      left: 245,
      group: 'group',
      status: 'success',
    },
    {
      id: '18',
      title: '某某算法ww',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 165,
      left: 360,
      group: 'group',
      status: 'success',
    },
    {
      id: '19',
      title: '某某算法ee',
      className: 'icon-background-color',
      iconType: 'icon-kaifa',
      top: 220,
      left: 15,
      group: 'group',
      status: 'success',
    },
    {
      id: '20',
      title: '交运算rr',
      className: 'icon-background-color',
      iconType: 'icon-guanlian',
      top: 220,
      left: 130,
      group: 'group',
      status: 'success',
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
      sourceNode: '1',
      targetNode: '2',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: '2',
      target: '3',
      sourceNode: '2',
      targetNode: '3',
      arrow: true,
      flow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: '3',
      target: '4',
      sourceNode: '3',
      targetNode: '4',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: '4',
      target: '5',
      sourceNode: '4',
      targetNode: '5',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: '5',
      target: '6',
      sourceNode: '5',
      targetNode: '6',
      arrow: true,
      type: 'endpoint',
      label: 'test label',
      arrowPosition: 0.5,
    },
    {
      source: 'bottom',
      target: 'groupTop',
      sourceNode: '6',
      targetNode: 'group',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: '5',
      target: '21',
      sourceNode: '5',
      targetNode: '21',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    },
    {
      source: 'groupBottom',
      target: 'top',
      sourceNode: 'group',
      targetNode: '22',
      arrow: true,
      type: 'endpoint',
      arrowPosition: 0.5,
    }
  ],
  groups: [{
    id: 'group',
    options: {
      title: '测试'
    },
    top: 650,
    left: 300,
    width: 820,
    height: 300,
    resize: true,
    // draggable: false,
    endpoints: [{
      id: 'groupTop',
      orientation: [0, -1],
      pos: [0.5, 0],
    },{
      id: 'groupBottom',
      orientation: [0, 1],
      pos: [0.5, 0],
    }]
  }],
};
