Ext.onReady(function() {
	Base64.app    = new Base64.App();
	Base64.images = new Ext.Container({
		renderTo   : "mainbody",
		layout     : "form",
		labelWidth : 150
	});
});