function growing(userId) {
	/*var _vds = _vds || [];
	window._vds = _vds;
	(function() {
		_vds.push([ 'setAccountId', '805f4f59955f89e2' ]);
		if(userId !== undefined && userId.length > 0)
			{
				_vds.push([ 'setCS1', 'user_id', userId ]);
			}

		(function() {
			var vds = document.createElement('script');
			vds.type = 'text/javascript';
			vds.async = true;
			vds.src = ('https:' == document.location.protocol ? 'https://'
					: 'http://')
					+ 'assets.growingio.com/vds.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(vds, s);
		})();
	})();*/
	
	!function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
	gio('init', '805f4f59955f89e2', {});
  	//custom page code begin here
	//setuserId API调用示例
	if(userId !== undefined && userId.length > 0){
		gio('setUserId', userId);
	}
	//custom page code end here
  	gio('send');
}
