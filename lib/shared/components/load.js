'use strict';

window.onload = function () {
	function checkBottom() {
		//compatibility for height over browsers
		var body = document.body,
		    html = document.documentElement;
		var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

		if (window.scrollY + window.innerHeight == height) {
			alert('bottom!');
		}
	}
};