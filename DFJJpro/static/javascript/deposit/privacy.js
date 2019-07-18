


var privacy = (function () {
	// 创建隐私弹框盒子
	var privacyWrap = createEl('div', {
		id: 'layPrivacy',
		class: 'lay-privacy',
		style: 'display: none'
	})
	
	var token;
	var version = '';
	
	function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
	
	var _html = '\
		<div class="n-mask"></div>\
	    <div class="privacy-box">\
		     <h2 class="privacy-box-tit">隐私保护提示</h2>\
		     <div class="privacy-box-content">\
		      <div id="parivacyList"></div>\
		     </div>\
		     <div class="privacy-box-btns">\
		      <button id="privacyClose" class="n-btn n-btn1" >不同意</button>\
		      <button id="privacySubmit" class="n-btn n-btn2" onclick="zcy.agreePrivacy("layPrivacy")">同意</button>\
		     </div>\
	     </div>'

	var domList = []

	var methods = {
		onload: function (fn) {
			window.addEventListener('DOMContentLoaded', fn, false)
		},

		// 获取id元素
		getId: function (id) {
			return document.getElementById(id)
		},

		// 获取class元素
		getClass: function(className){
			var tags = document.getElementsByTagName('*')
			var len = tags.length
			for (var i = 0; i < len; i++) {
				if (tags[i].className == className) {
					domList.push(tags[i])
				}
			}
			if (domList.length > 1) {
				return domList
			} else {
				return domList[0]
			}			
		},
		
		// 处理事件监听
		listener: function (type, el, fn) {
			if (el.addEventListener) {
				el.addEventListener(type, fn, false)
			} else if (el.attachEvent) {
				el.attachEvent('on' + type, fn)
			} else {
				el['on' + event] = fn
			}
		},
		
		init: function(home, cb){
			token = getCookie("utoken")
			$.ajax({
				type: 'POST',
				url: '/weixin/v393/privacy-policy.html',
				data: {
					token: token
				},
				async: !!home,
				dataType: 'json',
				success: function(res) {
					var data = res.data.privacy
					version = data.version
					if (home) {
						var privacyHistoryVersion = window.localStorage.getItem('privacyHistoryVersion')
						if (data.version !== privacyHistoryVersion && data.state === 'T') {
							$('#layPrivacy').show();
							$('.privacy-box-tit').text(data.title)
							window.localStorage.setItem('privacyHistoryVersion', data.version)
							return false
						} else {
							$('#layPrivacy').hide();
						}
					} else {
						if (data.state === 'T') {
							$('#layPrivacy').show();
							return false
						} else {
							$('#layPrivacy').hide();
							cb && cb()
						}
					} 
				}
			})
		}
	};
 
	// 创建dom元素
	function createEl(element, attrsObj) {
		var el = document.createElement(element)
		var params = attrsObj || {}
		if (attrsObj && typeof attrsObj == 'object') {
			for (key in attrsObj) {
				params[key] = attrsObj[key];
				el.setAttribute(key, params[key])
			}
		}
		return el
	}

	function render () {
		privacyWrap.innerHTML = _html;
		document.body.appendChild(privacyWrap)
		eventBox()
	}
	
	function eventBox () {
		// 关闭弹框
		$('#privacyClose').click(function() {
			$('#layPrivacy').hide()
		})
		// 同意
		$('#privacySubmit').click(function() {
			arrgey()
			$('#layPrivacy').hide()
		})
	}
	
	function arrgey() {
		$.ajax({
			type: 'POST',
			url: '/weixin/v393/privacy-agree.html',
			data: {
				token: token,
				versions: version 
			},
			success: function(){
				console.log('已同意: ')
			}
		})
	}
	
	

	return {
		loaded: methods.onload,
		init: methods.init,
		render: render,
		createEl: createEl,
		getId: methods.getId,
		getClass: methods.getClass,
		on: methods.listener
	}	
})()

/*privacy.loaded(function () {
	privacy.init()
	var closeEl = privacy.getId('close')
	var tit = privacy.getClass('privacy-box-tit')
    var privacyVersion = window.localStorage.getItem('privacyVersion')
	privacy.on('click', closeEl, function() {
		console.log(tit)
		tit.innerText = '1'
	})
})*/
