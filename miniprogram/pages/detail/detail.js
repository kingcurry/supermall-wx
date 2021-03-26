// miniprogram/pages/detail/detail.js
import {getDetail,
        getRecommends,
        GoodsBaseInfo,
        ShopInfo,
        ParamInfo,} from '../../service/detail.js'
Page({
  // behaviors: [computedBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    navBar: ['商品','参数','评论','推荐'],
    bottomBar:[
      {src: '../../../assets/images/detail/service.png',text: '客服'},
      {src: '../../../assets/images/detail/shop.png',text: '店铺'},
      {src: '../../../assets/images/detail/collect.png',text: '收藏'}
    ],                  
    topImages: [],
    iid: '',
    baseInfo: {},
    shopInfo: {},
    paramInfo: {},
    detailInfo:{},
    commentInfo: {},
    recommendsData: {},
    scrollheight:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid: options.iid
    })
    this._getData(this.data.iid);
    wx.getSystemInfo({
      success: (result) => {
        this.setData({
          scrollheight: result.windowHeight
        })
      },
    })
  },

  _getData(iid) {
    getDetail(iid).then(res=>{
      const data = res.data.result;
      const topImages = data.itemInfo.topImages;
      const baseInfo =new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);
      baseInfo.services.pop();
      const shopInfo = new ShopInfo(data.shopInfo);
      const detailInfo = data.detailInfo;
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
      // 获取评论信息
      let commentInfo = {};
      if(data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0];
      }

      getRecommends().then(res=>{
        this.setData({
          recommendsData: res.data.data.list
        })
      })

      this.setData({
        topImages: topImages,
        baseInfo: baseInfo,
        shopInfo: shopInfo,
        commentInfo: commentInfo,
        detailInfo: detailInfo,
        paramInfo: paramInfo
      })
    })
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})