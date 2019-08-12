let {mongoose} = require('../core/db');
const autoIncrement = require('mongoose-auto-increment');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    // 文章标题
	title: { type: String, required: true, validate: /\S+/ },
	// 作者
	author: { type: String, required: true, validate: /\S+/ },
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
