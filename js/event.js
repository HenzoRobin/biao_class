/*事件处理相关*/

var el = require('./element');
var search = require('./search');


/*监听搜索表单提交事件*/
function detect_submit() {
  	el.form.addEventListener('submit', function (e) {
    	e.preventDefault();
    	/*获取INPUT元素的值*/
    	var keyword = el.input.value;


    	/*开始搜索*/
    	search.user(keyword,function(data){
    		el.render_user_list(data.items)
    	})
  	});
}


/*批量添加所有初始事件*/
function add_events() {
  	detect_submit();
}

module.exports = {
  	detect_submit: detect_submit,
  	add_events: add_events
};