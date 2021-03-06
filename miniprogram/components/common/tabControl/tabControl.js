// components/common/tabControl/tabControl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type: Array,
      data: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentList(event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      })

      this.triggerEvent('tabControlIndex',index)
    }
  }
})
