// miniprogram/pages/home/home.js
import {getmultidata,getHomeData} from '../../service/home.js'
import {
  POP,
  SELL,
  NEW,
  BACK_TO_TOP
} from '../../commons/const.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommends: [],
    currentType: 'pop',
    tabControl: ['流行','新款','精选'],
    goods: {
      [POP]: { page: 1, list: [] },
      [NEW]: { page: 1, list: [] },
      [SELL]: { page: 1, list: [] },
  },
    topDistance: '',
    scrollheight: '',
    isBackTop: false,
    topPosition: '',
    istabControl: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          scrollheight: result.windowHeight
        })
      },
    })
    this._getmultidata();
    this._getData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },


  tabControlIndex(index) {
    this._switchIndex(index);
  },

  _switchIndex(index) {
    let type = '';
    switch(index.detail) {
      case 0:
        type = POP
        break;
      case 1: 
        type = NEW
        break;
      case 2:
        type = SELL
        break;
    }
    
    this.setData({
      currentType: type
    })
  },

  _getData(){
    this._getHomeData(SELL)
    this._getHomeData(NEW)
    this._getHomeData(POP)
  },

  _getHomeData(type){
    const page = this.data.goods[type].page
    
    getHomeData(type,page).then(res=>{
        // 抽取获取得到的数据
        const list = res.data.data.list;
        const goods = this.data.goods;
        goods[type].list.push(...list);
        goods[type].page += 1;
        this.setData({
          goods: goods
        })
    })
  },
  _getmultidata() {
    getmultidata().then(res=>{
      const banner = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banner: banner,
        recommends: recommends,
      })
    })
  },
  backTop() {
    this.setData({
      topPosition: 0
    })
  },
  scrolltolower() {
    this._getHomeData(this.data.currentType);
  },
  RecImageFinsih(option) {
    wx.createSelectorQuery().select('#tabControl').boundingClientRect((res)=>{
      this.setData({
        topDistance: res.top
      })
    }).exec()
  },
  scrollEvent: function(e) {
    const scrollTop = e.detail.scrollTop;
      this.setData({
        isBackTop: scrollTop > BACK_TO_TOP
      })

      wx.createSelectorQuery().select('#tabControl').boundingClientRect((res)=>{
        const show = res.top > 0
        this.setData({
          istabControl: !show
        })
      }).exec()
  }
})