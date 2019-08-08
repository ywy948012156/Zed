// Home.js
import {
	GoodsModel
} from '../../models/goods.js'
const goodsModel = new GoodsModel()
Page({
	data: {
		// tab切换
		currentTab: 'Commodity',
		// 商品数据
		goods:[],
		// 底部所需数据
		footer: {
			toView: '0',
			scrollTop: 100,
			foodCounts: 0,
			totalPrice: 0, // 总价格
			totalCount: 0, // 总商品数
			carArray: [],
			minPrice: 20, //起送價格
			payDesc: '',
			deliveryPrice: 4, //配送費
			fold: true,
			selectFoods: [{
				price: 20,
				count: 2
			}],
			cartShow: 'none',
		}
	},
	tabNav: function(e) {
		if (this.data.currentTab === e.target.dataset.current) {
			return false;
		} else {
			this.setData({
				currentTab: e.target.dataset.current,
			})
		}
	},
	onLoad: function(options) {
		// 生命周期函数--监听页面加载
		let that = this;
		goodsModel.getList().then(res => {
			that.setData({
				goods: res.goods
			})
			console.log(res.goods)
		})
	},
	onReady: function() {
		// 生命周期函数--监听页面初次渲染完成
	},
	onShow: function() {
		// 生命周期函数--监听页面显示
	},
	onHide: function() {
		// 生命周期函数--监听页面隐藏
	},
	onUnload: function() {
		// 生命周期函数--监听页面卸载
	},
	onPullDownRefresh: function() {
		// 页面相关事件处理函数--监听用户下拉动作
	},
	onReachBottom: function() {
		// 页面上拉触底事件的处理函数
	},
	onShareAppMessage: function() {
		// 用户点击右上角分享
		return {
			title: 'title', // 分享标题
			desc: 'desc', // 分享描述
			path: 'path' // 分享路径
		}
	}
})
