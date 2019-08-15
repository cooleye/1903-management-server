let {mongoose} = require('../core/db');
const autoIncrement = require('mongoose-auto-increment');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    // 文章标题
	title: { type: String, required: true, validate: /\S+/ },
	// 作者
	author: { type: String, required: true, validate: /\S+/ },

	// 简介
	desc: { type: String, default:"小编又偷懒了..."},

	// 封面图
	img_url: { type: String, default: 'http://localhost:3000/upload/cover.png' },
	
	// 创建日期
	create_time: { type: Date, default: Date.now },

	// 文章内容
	content: { type: String, required: true, validate: /\S+/ },
})

// 自增 ID 插件配置
// articleSchema.plugin(autoIncrement.plugin, {
// 	model: 'Article',
// 	field: 'id',
// 	startAt: 1,
// 	incrementBy: 1,
// });

module.exports = mongoose.model("Article",articleSchema)
