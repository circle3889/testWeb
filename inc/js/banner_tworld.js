/// Ÿ��Ʋ---------

/** @@ 2013 �����ټ� ���� START */
/// Ÿ��Ʋ---------
if(document.title == ""){
	document.title=" | ����� T world";
}
/** @@ 20132 �����ټ� ���� START */
document.domain = "tworld.co.kr";

/************************************************************************
* ���� : Xtractor_CRM_�м���ũ��Ʈ �߰� start
* ���� :  CSDummy ������ ���� �������� ������ callCSScript()�޼ҵ带 ���� log�� �����.
* �߰� : 2012.2.21
/************************************************************************/
var AJAX = function() {
    var request = null;
    this.sendRequest = sendRequest;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("MSXML2.XMLHTTP");
        if (!request) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    function sendRequest(reqType, url, asynch, action, queryString) {
        //request.onreadystatechange = action;  // CallBack
        request.open(reqType, url, asynch);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charaset=UTF-8");
        request.send(queryString);
    }
}
function callCSScriptBn(V_ID, L_ID, E_ID, CS_ID, P_ID) {
    var URI = "http://m2.tworld.co.kr/global/xtractor/CSDummy";
    var PARAMS = "V_ID=" + V_ID + "&L_ID=" + L_ID + "&E_ID=" + E_ID + "&CS_ID=" + CS_ID + "&P_ID=" + P_ID;
    var ajax = new AJAX();
    ajax.sendRequest("POST", URI, true, null, PARAMS);
}
/************************************************************************
* ���� : Xtractor_CRM_�м���ũ��Ʈ �߰� end 
/************************************************************************/
