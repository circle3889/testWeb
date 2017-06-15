/**
 * @loadJson (JSON ���� ��ũ��Ʈ)
 * @version 1.0, 2008-06-03
 * @author Yoon Tae Hyun ( thrukill@hotmail.com )
*/
function loadJson() {
	var xmlHttp;
	var retStr;
	this.Result = getResult;
	this.mget = doRequestUsingGET;
	this.mpost = doRequestUsingPOST;

	function createXMLHttpRequest() {
		if (window.ActiveXObject) {
			xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
		} else if (window.XMLHttpRequest) {
			xmlHttp = new XMLHttpRequest();
		}
	}
	function handleStateChange() {
	    if(xmlHttp.readyState == 4) {
	        if(xmlHttp.status == 200) {
	        	try {
	        		retStr = xmlHttp.responseText;
	            } catch(e) {}
	        } else if (xmlHttp.status == 404) {
	        	alert('�� ���� �������� ȣ���Ͽ����ϴ�.');
	        }
	    }
	}
	function hangleCheck(value) {
		return escape(value).replace(/\+/g, '%2B');
	}
	function doRequestUsingGET(vStr) {
	    createXMLHttpRequest();
	    xmlHttp.onreadystatechange = handleStateChange;
	    xmlHttp.open('GET', vStr, false);
	    xmlHttp.send(null);
	}
	function doRequestUsingPOST(vUrl, vStr) {
	    createXMLHttpRequest();
	    xmlHttp.open('POST', vUrl, false);
	    xmlHttp.onreadystatechange = handleStateChange;
	    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xmlHttp.send(vStr);
	}
	function getResult() {
		return retStr;
	}
}

/**
 * Ajax Call�� ���� Action ó��
 * ���� :
 * 		new Action(����ID, ��ID, �Լ���).copyParams(���̸�).run(���function�� �Ѱ��� �Ķ���͵�<���� �Է�>);
 *      �Ǵ�
 *      var action = new Action(����ID, ��ID, �Լ���);
 *      action.copyParams(���̸�1);
 *      action.copyParams(���̸�2);
 *      action.addParam(Ű, ��);
 *      action.run(���function�� �Ѱ��� �Ķ���͵�<���� �Է�>);
 *  �� ����Լ��� �Ķ����
 *     ù��° parameter�� responseText�� JSon��üȭ��Ų Object�� ����,
 *     �ι�° ���Ĵ� runȣ��� ���� �Ķ���Ͱ� ������� ���� �ȴ�.
 *
 * @param aServiceId ����ID(�ʼ� �Է�)
 * @param aViewId    ��ID(�ʼ� �Է�)
 * @param aFuncName  Ajax������ ȣ��Ǵ� �Լ���(�ʼ� �Է�)
 * @param aEncrypt   INIPlugin ��ȣȭ ����(true/false, Default true, ���� �Է�)
 */
function Action(aServiceId, aViewId, aFuncName, aEncrypt) {
	var actionUrl = "/wire.do";
	var serviceId = aServiceId == null ? "" : aServiceId;
	var viewId    = aViewId    == null ? "" : aViewId;
	var funcName  = aFuncName  == null ? "" : aFuncName;
	var bEncrypt  = aEncrypt   == null ? true : aEncrypt;
	var resultArgs = new Array();
	var paramForm  = null;
	var encForm    = null;
	var xmlRequest = false;
	var resultType = "0"; // 0:JSon��ü, 1:responseText
	
	this.getRequest = function() {
		try {
			xmlRequest = new XMLHttpRequest();
		} catch (microsoft) {
			try {
				xmlRequest = new ActiveXObject('Msxml2.XMLHTTP');
			} catch (othermicrosoft) {
				try {
					xmlRequest = new ActiveXObject('Microsoft.XMLHTTP');
				} catch (failed) {
					return false;
				}
			}
		}

		return xmlRequest;
	};
	
	this.createParamForm = function() {
		// IE9 ��� ���� ����(IE9������ document.createElement�� �Ӽ����� �������� ó���ϴ� ���� �ʵ�)
		try {
			paramForm = document.createElement("<form name=__PARAMFORM__></form>");
		} catch (e) {
			paramForm = document.createElement("form");
			paramForm.setAttribute("name", "__PARAMFORM__");
		}
		document.body.appendChild(paramForm);
	};
	
	this.createEncForm = function() {
		// IE9 ��� ���� ����(IE9������ document.createElement�� �Ӽ����� �������� ó���ϴ� ���� �ʵ�)
		try {
			encForm   = document.createElement("<form name=__ENCFORM__></form>");
		} catch (e) {
			encForm = document.createElement("form");
			encForm.setAttribute("name", "__ENCFORM__");
		}
		// IE9 ��� ���� ����(IE9������ document.createElement�� �Ӽ����� �������� ó���ϴ� ���� �ʵ�)
		var INIpluginData = null;
		try {
			INIpluginData = document.createElement("<input type=hidden name=INIpluginData>");
		} catch (e) {
			INIpluginData = document.createElement("input");
			INIpluginData.setAttribute("type", "hidden");
			INIpluginData.setAttribute("name", "INIpluginData");
		}
		encForm.appendChild(INIpluginData);
		document.body.appendChild(encForm);
	};
	
	this.addParam = function(key, value) {
		if (!paramForm) this.createParamForm();
		// IE9 ��� ���� ����(IE9������ document.createElement�� �Ӽ����� �������� ó���ϴ� ���� �ʵ�)
		var hiddenInput = null;
		try {
			hiddenInput = document.createElement("<input type=hidden name='" + key + "' value='" + value + "'>");
		} catch (e) {
			hiddenInput = document.createElement("input");
			hiddenInput.setAttribute("type", "hidden");
			hiddenInput.setAttribute("name", key);
			hiddenInput.setAttribute("value", value);
		}
		paramForm.appendChild(hiddenInput);
	};
	
	this.setActionUrl = function(aActionUrl) {
		actionUrl = aActionUrl;
	};
	
	this.setFuncName = function(aFuncName) {
		funcName = aFuncName;
	};
	
	this.setResultType = function(aType) {
		resultType = aType;
	};
	
	this.destroyForm = function() {
		if (paramForm != null) document.body.removeChild(paramForm);
		if (encForm != null) document.body.removeChild(encForm);
	};
	
	this.copyParams = function(oForm) {
		if (oForm.tagName.toUpperCase() == "FORM") {
			var objInputs = oForm.getElementsByTagName("input");
			
			for(var i = 0; i < objInputs.length; i++) {
				var obj = objInputs[i];
				switch (obj.type.toUpperCase()) {
				    case "HIDDEN" :
				    case "TEXT" :
				    	this.addParam(obj.name, obj.value);
				    	break;
				    case "RADIO" :
                        if (obj.checked == true) {
                            this.addParam(obj.name, obj.value);
                        }
				    	break;
				    default :
				    	break;
				}
			}
			
			var objSelects = oForm.getElementsByTagName("select");
			
			for(var i = 0; i < objSelects.length; i++) {
				var obj = objSelects[i];
				if (obj.length > 0) {
					this.addParam(obj.name, obj.options[obj.options.selectedIndex].value);
				}
			}
			
			var objTextareas = oForm.getElementsByTagName("textarea");
			
			for(var i = 0; i < objTextareas.length; i++) {
				this.addParam(objTextareas[k].name, objTextareas[k].value);
			}
		} else {
			alert("FORM ��ü���� �־��ּ���.");
		}
	};
	
	this.debug = function() {
		var parameters = "";
		var objInputs = paramForm.getElementsByTagName("INPUT");
		for (var i = 0; i < objInputs.length; i++) {
			parameters += "\n\t" + objInputs[i].name + "=" + objInputs[i].value;
		}
		alert("Ajax Call Debugging ����\n"
		    + "=============================================\n"
		    + "1. serviceId : " + serviceId + "\n"
		    + "2. viewId : " + viewId + "\n"
		    + "3. parameters : " + parameters + "\n"
		    + "4. �Լ��� : " + funcName);
	};
	
	this.run = function() {
		if (serviceId == "") {
			alert("serviceId�� �����ϴ�.");
			return;
		}
		
		if (viewId == "") {
			alert("viewId�� �����ϴ�.");
			return;
		}
		
		if (!this.getRequest()) {
			alert("XMLHttpRequest��ü�� ����� �� �����ϴ�.");
			return;
		}
	    xmlRequest.open('POST', actionUrl, false);
	    xmlRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xmlRequest.onreadystatechange = this.callFunc;
	    
	    if (arguments.length > 0) {
		    for(var i = 0; i < arguments.length; i++) {
		    	resultArgs[i+1] = arguments[i];
		    }
	    }
		
		var PARAMS = "serviceId=" + serviceId + "&viewId=" + viewId;
		
		if (bEncrypt) {
			if (encForm == null) this.createEncForm();
			
			if (EncForm2(paramForm, encForm)) {
				PARAMS += "&INIpluginData=" + escape(encForm.INIpluginData.value);
				
			    xmlRequest.send(PARAMS);
			} else {
				alert('���Ȼ� ������ ���� ������ ��� �Ǿ����ϴ�.');
			}
		} else {
			var parameters = "";
			var objInputs = paramForm.getElementsByTagName("INPUT");
			for (var i = 0; i < objInputs.length; i++) {
				parameters += "&" + objInputs[i].name + "=" + escape(objInputs[i].value);
			}
			xmlRequest.send(PARAMS + parameters);
		}
		
		this.destroyForm();
	};
	
	this.callFunc = function() {
	    if (xmlRequest.readyState == 4) {
	        if (xmlRequest.status == 200) {
	        	try {
	        		var result = xmlRequest.responseText;//alert(result);
	        		
	        		var start = result.indexOf("{'");
	        		if ( start < 0 ) start = result.indexOf("{\"");
	        		var retStr = result.substring(start, result.lastIndexOf("}")+1);
	        		
	        		if (retStr) {
	        			retStr = eval("(" + retStr + ")");
	        			
	        			if (retStr.ERROR.ERR != "0") {
	        				alert(retStr.ERROR.ERRMSG + "(" + retStr.ERROR.ERR + ")");
	        				return;
	        			}
	        		}
        			
	        		if (resultType == "0") {
		        		result = retStr;
	        		}
					
	    			resultArgs[0] = result;
    				window[funcName].apply(this, resultArgs);
				} catch (error) {
					alert(error);
					alert("�˼��մϴ�. �ý��� �������Դϴ�.\n��� �� �ٽ� �̿��� �ֽñ� �ٶ��ϴ�.");
	            }
	        } else if (xmlRequest.status == 404) {
	        	alert('�߸��� �������� ȣ���Ͽ����ϴ�.');
	        } else {
	        	alert(xmlRequest.statusText);
	        }
	    }
	};
}