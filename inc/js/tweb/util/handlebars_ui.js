/*************************************************************************************************
 *	@CreateDate	: 2016.07
 *	@ModifyDate	: 2016.07
 *	@FileName	: handlebars_ui.js
 *	@Author		: witchgreen
 *************************************************************************************************/
 
//ui ���� ����
Handlebars.registerHelper('_remove', function(a) {
	$("#"+a).remove();
});

//ui ���� �����
Handlebars.registerHelper('_hide', function(a) {
	$("#"+a).hide();
});

//ui ���� ǥ��
Handlebars.registerHelper('_show', function(a) {
	$("#"+a).show();
});