'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
    /**
     * 页面的初始数据
     */
    data: {
        queryDate: {
            startDate: "",
            endDate: ""
        },
        onReachBottom: 0,
        recordListData: null,
        pageScroll:null,
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function onLoad(opt) {
        if (opt.startDate != undefined && opt.startDate != null && opt.endDate != undefined && opt.endDate != null) {
            let queryDate = {};
            queryDate.startDate = opt.startDate;
            queryDate.endDate = opt.endDate;
            this.setData({
                queryDate: queryDate,
                recordListData: {
                    queryDate: queryDate
                }
            });
        }
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function onUnload(opt) {
        getApp().destroyAudioContext();//摧毁音频对象
    },

    /**
     * d点击搜索
     * @param {*} e 
     */
    onClickSearchSubmit: function onClickSearchSubmit(e) {
        console.log(e);
        wx.showToast({
          title: '搜索',
          icon:'none'
        })
    },

    onReachBottom: function onReachBottom() {
        // console.log('onReachBottom');
        this.setData({
            onReachBottom: this.data.onReachBottom + 1
        });
    },

    onPageScroll: function onPageScroll(Object) {
        this.setData({
            pageScroll: Object
        });
    },

});