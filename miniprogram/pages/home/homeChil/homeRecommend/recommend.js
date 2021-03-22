// pages/home/homeChil/homeRecommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends: {
      type: Array,
      data:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoadFinish: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    finishLoad(option) {
      if(!this.data.isLoadFinish) {
        this.triggerEvent('RecImageFinsih',{option});
        this.data.isLoadFinish = true
      }
    }
  }
})
