Base64.TextArea = Ext.extend(Ext.form.TextArea, {
	anchor      : "100%",
	height      : 120,
	afterRender : function() {
		var me    = this,
			value = me.value,
			label = me.label;
		Base64.TextArea.superclass.afterRender.call(me);
		label.update("<img src='" + value + "' width='140'>");
	}
});