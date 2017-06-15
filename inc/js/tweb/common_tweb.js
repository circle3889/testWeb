/*************************************************************************************************
 *	@CreateDate			: 2016.05.11
 *	@ModifyDate			: 2016.05.11
 *	@FileName			: common_tweb.js
 *	@Author				: ndarkness
 *
 1. log				: �α׷��� ����
 2. setEnv   		: ȯ�溯�� �� backend����� ����
 3. showProgress	: ���α׷��� ���� ó��
 4. callbackTemplate: ���ø� ���ε�ó��
 5. renderData		: ������ �������� �� �ݹ��Լ� ����
 6. execute		    : ����
 *************************************************************************************************/



 ( function(){
 	
	//ȯ�溯��
	var _env = {
		logView : "N"
	};
	
	//ȣ�������� �ּ�
	var _locationUrl = location.pathname;
	
	//backend ���
	var _backendList = {};
	
	//�鿣�� �������� ��������
 	var _urlJs="<script type='text/javascript' charset='euc-kr' src='/inc/js/tweb/common_backend.js'></script>";
 	$('head').append(_urlJs);	
		
	
	//���� ��ũ��Ʈ ���� Ŭ����
	tweb = {
		
		//�α׷��� ����
		log : function(obj1, obj2){
			if(_env.logView == "Y"){
				if(obj2 == undefined){
					console.log(obj1);
				}else{
					console.log(obj1+" = ", obj2);
				}
			}
		},
		
		//ȯ�溯�� �� backend����� ����
		setEnv : function(){
		
			if("undefined" !== typeof(tweb_env)){
				_env = $.extend(_env, tweb_env);
			}
			
			_backendList = _urlJson[_locationUrl];
		},
		
		//���α׷��� ���� ó��
		showProgress : function(){
			var DEFAULT_LOAD_TAG = "<div class='tSpinnerA'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div><div class='bounce4'></div></div>";
			
			for(var key in _backendList){
				for (var i=1, len=_backendList[key].cnt; i<=len; i++){
					var loading = "";
					var tpId    = key+i;
					
					if("undefined" !== typeof(tweb_backend) && "undefined" !== typeof(tweb_backend[tpId])){
						loading = tweb_backend[tpId].loading || "no";
						
						tweb.log("tpId", tpId);
						tweb.log("loading", loading);
						
						if(loading != "no"){
							$("#"+tpId).html(loading);
						}
					}else{
						$("#"+tpId).html(DEFAULT_LOAD_TAG);
					}				
				}
			}
		},
		
		//���ø� ���ε�ó��
		callbackTemplate : function(type, tpCnt, tpId, tpOnAfterBinding, data){
			var suffix = "";
			
			switch(type){
				case "0000" : //����
					suffix = "_normal";
					break;
				case "0004" : //����
					suffix = "_block";
					break;
				case "0006" : //���ѺҰ�
					suffix = "_notAllow";
					break;
				default :
					tweb.log("default");
					break;				
			}
			
			for(var i=1; i<=tpCnt; i++){
				var source = $("#"+tpId+suffix+i).html();
				var template = Handlebars.compile(source);			
				var html = template(data);
				$("#"+tpId+i).html(html);
			}
		
			//�ڵ�� ���ε� �Ϸ� �Ŀ� ����
			if("_normal" == suffix){
				if("no" != tpOnAfterBinding){
					if("undefined" !== typeof(onAfterBinding)){
						tweb.log("onAfterBinding is call on "+tpId);
						onAfterBinding.init(data);
					}				
				}
			};			
		},
		
		//������ �������� �� �ݹ��Լ� ����
		renderData : function(key, value){
		
			tweb.log("renderData start ====================================================");
			var tpId  = key;
			var tpUrl = value.url;
			var tpCnt = value.cnt;
			var tpTimeout = 0;
			var tpError   = "default"; //error 
			var tpBlock   = "default"; //����
			var tpAuth    = "default";  //����
			var tpOnAfterBinding = ""; //���ε� �Ŀ� onAfterBinding()�� ȣ���� ������
			var parameters = getParameters();
			var param = "";
			
			if("undefined" !== typeof(tweb_backend) && "undefined" !== typeof(tweb_backend[tpId])){
				tpTimeout = tweb_backend[tpId].timeout || 0;
				tpError   = tweb_backend[tpId].error || "default";
				tpBlock   = tweb_backend[tpId].block || "default";
				tpAuth    = tweb_backend[tpId].auth || "default";  
				tpOnAfterBinding = tweb_backend[tpId].onAfterBinding || "";  
			}			

			//��� �Ķ���͵��� �׷��� �Ѱ��ش�.
			if("undefined" !== typeof(parameters)){
				for(var key in parameters){
					param += key + "=" + parameters[key] + "&";	
				}
			}
			
			tweb.log("tpId", tpId);
			tweb.log("tpUrl", tpUrl);
			tweb.log("tpCnt", tpCnt);			
			tweb.log("tpTimeout", tpTimeout);
			tweb.log("tpError", tpError);
			tweb.log("tpBlock", tpBlock);
			tweb.log("tpAuth", tpAuth);
			tweb.log("tpOnAfterBinding", tpOnAfterBinding);
			tweb.log("param = "+param);
			
			$.ajax({
				type:"post",
				url: tpUrl,
				data: param,
				timeout: tpTimeout,
				dataType:"json",
				async: true, 
				contentType: "application/x-www-form-urlencoded; charset=UTF-8", 
				
				success:function(result){
					tweb.log("success!!!");
					
					var twdCmn = result.RESULT;
					tweb.log("twdCmn.RTNCD: " + twdCmn.RTNCD);
					
					switch(twdCmn.RTNCD){
						
						case '0000' :
							tweb.callbackTemplate("0000", tpCnt, tpId, tpOnAfterBinding, result);
							break;
						
						case '0001' :
							tweb.log("common error");
							
							if(tpError != "default"){ 
								tweb.callbackTemplate("0001", tpCnt, tpError, "", result);
							}else{
								location.replace(twdCmn.ERRURL+"?errCd="+twdCmn.ERRCD+"&errMsg="+twdCmn.ERRMSG);
							}
							break;
						
						case '0002' :
							tweb.log("�α��� ��û");
							location.replace("/jsp/common/loginout/view/app_login_alert.jsp");
							break;
							
						case '0003' :
							tweb.log("view resolver");
							tweb.log("twdCmn.DISPATCHERURL: "+ twdCmn.DISPATCHERURL);

							if(twdCmn.DISPATCHERURL != ""){
								location.replace(twdCmn.DISPATCHERURL);
							}else{
								tweb.log("viewResolver�� �������ּ���.");
								tweb.error();
							}
							break;

						case '0004' :
							tweb.log("ȭ�� ����");
							if(tpBlock != "default"){ 
								tweb.callbackTemplate("0004", tpCnt, tpBlock, "", result);
							}else{
								location.replace("/common/error/error_system_check.html");
							}
							break;
							
						case '0005' :
							tweb.log("����й�ȣ");
							location.replace(twdCmn.PWDURL);
							break;
						
						case '0006' :
							tweb.log("���� �ȳ�");
							if(tpAuth != 'default'){ 
								tweb.callbackTemplate("0006", tpCnt, tpAuth, "", result);
							}else{
								location.replace(twdCmn.GUIDEURL);
							}
							break;
							
						case '0007' :
							tweb.log("2�� ����");
							location.replace(twdCmn.AUTHURL+"&REURL=http%3A%2F%2Fm2.tworld.co.kr"+encodeURIComponent(_locationUrl));
							break;
						
						default :
							tweb.log("default");
							break;
					}
				},
				
				error:function(a, b, c){
				
					console.error("ajax error("+b+")");
					var errMsg = {};
					
					if (b.indexOf("timeout")>-1) {
						errMsg = {ERRCD:'TIMEOUT', ERR: '����� �ٽ� �õ����ּ���.'};
					}else{
						errMsg = {ERRCD:'ERROR', ERR: '����� �ٽ� �õ����ּ���.'};
					}
					
					if(tpError != "default"){ 
						tweb.callbackTemplate("0001", tpCnt, tpError, "", errMsg);
					}else{
						location.replace("/jsp/common/error/ErrorMsg_full.jsp?errCd="+errMsg.ERRCD+"&errMsg="+errMsg.ERR);
					}											
				}
			});
			
			tweb.log("renderData end ====================================================");
		},
	
		//�����Լ�
		execute: function() {
			this.setEnv();
			this.showProgress();
			
			for(var key in _backendList){
				this.renderData(key, _backendList[key]);
			}
		},
				
		//�����Լ�
		endFunction : function(){}
	};
	
	
	//�Ķ���� ��������
	var getParameters = function(){
		var parameterMap = {};
		var parameters = window.location.search.substr(1);
		var splitParameters = parameters.split("&");
		for(var i=0; i<splitParameters.length; i++){
			var parameter = splitParameters[i];
			var splitParameter = parameter.split("=");
			parameterMap[splitParameter[0]] = splitParameter[1];
		}
		return parameterMap;		
	}	
		
} )( window );


//tweb ����
jQuery( function(){
	tweb.execute();
});

//�̴ϸ���Ƽ �����ϱ�
var MiniMyT = {

	init : function(multiNumSelectAlign, multiNumSubmitURL){
		var domain = location.protocol + "//m2.tworld.co.kr"; 
		var url =  "/jsp/common/multiNumSelect.jsp";			
		var param = "?multiNumSelectAlign="+multiNumSelectAlign + "&multiNumSubmitURL=" + multiNumSubmitURL;

		jQuery("div.mini_myT").load(url + param);	
	}
}

//��ܸ޴� �����ϱ�
var Menu = {

	init : function(menuId, titleString, titleSize, backPageUrl, isBackButtonVisible, menuBackUrl, titleFocusYN, mPageRefer){
		var domain = location.protocol + "//m2.tworld.co.kr"; 
		var url =  "/jsp/common/menu.jsp";			
		var param = "?menuId="+menuId+"&titleString="+titleString+"&titleSize="+titleSize+"&backPageUrl="+backPageUrl+"&isBackButtonVisible="+isBackButtonVisible+"&menuBackUrl="+menuBackUrl+"&titleFocusYN="+titleFocusYN+"&mPageRefer="+mPageRefer;

		jQuery("div.my_menu").load(url + param);	
	}
}

//�ϴܹ�� �����ϱ�
var Banner = {

	init : function(expsMenuCd){
		var domain = location.protocol + "//m2.tworld.co.kr"; 
		var url =  "/jsp/main/sub_banner.jsp";			
		var param = "?expsMenuCd="+expsMenuCd;

		jQuery("div.bottom_banner").load(url + param);	
	}
}

//�����|�ܿ��⺻��ȭ|�ǽð������ȸ �����ϱ�
var MainSub = {

	init : function(p_cust_grade, appVer, osType, isRefresh, isCallFromIOSWidget, isCallFromAndroidWidget){
		var domain = location.protocol + "//m2.tworld.co.kr"; 
		var url =  "/jsp/main/main_sub.jsp";			
		var param = "?p_cust_grade="+p_cust_grade+"&APP_VER="+appVer+"&OS_TYPE="+osType+"&isRefresh="+isRefresh+"&isCallFromIOSWidget="+isCallFromIOSWidget+"&isCallFromAndroidWidget="+isCallFromAndroidWidget;

		jQuery("div.main_sub").load(url + param);	
	}
}