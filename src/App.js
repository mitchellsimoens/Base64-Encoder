Ext.ns("FileDrag");
Base64.App = Ext.extend(Ext.Component, {
	applyTo        : "drop-div",
	cls            : "filedrag",
	html           : "Drag Image Here",
	afterRender    : function() {
		var me      = this,
			dropbox = me.getEl();
		Base64.App.superclass.afterRender.call(me);
		dropbox.on("dragover", me.dragover, me);
		dropbox.on("drop", me.drop, me);
	},
	dragover       : function(e) {
		e.stopPropagation();
		e.preventDefault();
	},
	drop           : function(e) {
		e.stopEvent();
		var browserEvent = e.browserEvent,
			dataTransfer = browserEvent.dataTransfer,
			files        = dataTransfer.files,
			numFiles     = files.length,
			i            = 0,
			file;
		for (; i < numFiles; i++) {
			file = files[i];
			this.handleFile(file);
		}
	},
	handleFile     : function(file) {
		var imageType = /image.*/,
			reader    = new FileReader();
		if (!file.type.match(imageType)) { return ; }
		reader.onload = this.handleFileLoad;
		reader.readAsDataURL(file);
	},
	handleFileLoad : function(e) {
		var ta = new Base64.TextArea({ value : e.target.result });
		Base64.images.add(ta);
		Base64.images.doLayout();
	}
});