/**
 *    统一封装各种消息提示框
 *
 * @author xsgao
 * @date 2018/1/19 0019 下午 2:36
 * @param
 * @return
 */

/*消息提示框*/
function showPrompt(times, message) {
    layer.open({
        content: message,
        anim: 'scale',
        skin: 'msg',
        style: 'padding:0.2rem 0.1rem;font-size:0.28rem;vertical-align: middle;',
        time: times //n秒后自动关闭
    });
}

/*alert提示*/
function showAlert(btn, message, cb) {
    if (btn == "") {
        btn = "我知道了"
    }
    layer.open({
        content: '<p style="font-size:0.28rem;line-height:0.4rem;">' + message + '</p>',
        btn: btn
    });
    console.log($('.layui-m-layerbtn'))
    if(cb){
    	$('.layui-m-layerbtn').on('click',function(){
        	cb()
        })
    }
    
}

/*询问框*/
function showInquiry(message, leftBtn, rightBtn) {
    layer.open({
        content: '<h5 style="margin-bottom:0.4rem;font-size:0.36rem;">温馨提示</h5><p' + ' style="margin-bottom:0.1rem;font-size:0.28rem;line-height:0.4rem;">' + message + '</p>',
        btn: [rightBtn, leftBtn],
        yes: function (index) {
            layer.close(index);
        }
    });
}