// components/common/goods-item/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Object,
      data: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail(e) {
      const iid = e.currentTarget.dataset.iid;
      wx.navigateTo({
        url: '../detail/detail?iid='+iid+''
      })
    }
  }
})
