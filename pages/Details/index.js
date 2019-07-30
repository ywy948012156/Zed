//Details.js
Page({
	data: {},
	onLoad: function() {
		wx.request({
			url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods', //仅为示例，并非真实的接口地址
			header: {
				'content-type': 'application/json' // 默认值
			},
			success(res) {
				console.log(res)
			}
		})
	}
})
