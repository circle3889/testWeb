// �������� ȸ�籸�� üũ---------
function checkCoClCd()
{
	var wform = document.wireform;
	if(wform.co_cl_cd !=null) {
		if(wform.co_cl_cd.value != "T") 
		{
			alert("�����Ͻ� ���񽺴� SK��ε��带 ���� �����Ͻ� �����̹Ƿ� ��ȭ 106 �Ǵ� SK��ε��� ������Ʈ�� �̿��� �ֽñ� �ٶ��ϴ�.");
			return false;
		} 
	}
	return true;
}

function checkRepYn()
{
	var wform = document.wireform;
	var aRadio = wform.wire_svc_mgmt_num;
	if(wform.rep_yn !=null) {
		if(wform.rep_yn.value != "Y") 
		{
			alert("��ǥ ���񽺸� �����մϴ�.");
			return false;
		} 
	}
	return true;
}

function checkSvcCd()
{
	var wform = document.wireform;
	if(wform.svc_cd !=null) {
		if(wform.svc_cd.value == "P") 
		{
			return true;
		} else  {
			alert("������ȭ ���񽺸� ������ �ּ���.");
			return false;
		}
	}
	return false;
}

var telLayer = '<div id="telLayer" class="layer_pop" style="top:100px;display:none">';
telLayer += '	<div class="wrap">';
telLayer += '		<div class="pop_header">';
telLayer += '			<div class="header_in">';
telLayer += '				<a href="#" onclick="showTelLayer(false);" id="nfocus2"><img src="/img/wire/pop_close.png" alt="��ȭ��� â �ݱ�"/></a>'; //2013-10-22 alt �߰� a �±� �Ӽ� �߰� �� ���� 
telLayer += '				<h1>��ȭ���</h1>';
telLayer += '			</div>';
telLayer += '		</div>';
telLayer += '		<div class="pop_contents">';
telLayer += '			<p class="pop_txt_bor">SKT ������(080-816-2000, ����)�� �����Ͻðڽ��ϱ�?<span>*���� �����ȭ�� ���Ͻô� �в����� 1600-2000���� ��ȭ�ֽñ� �ٶ��ϴ�.</span></p>';
telLayer += '			<div class="btn_area01">';
telLayer += '				<a href="tel:080-816-2000"><img src="/img/wire/btn_call.gif" alt="��ȭ" /></a>';  //2013-10-22 alt �߰� 
telLayer += '				<a href="#" onclick="showTelLayer(false);"><img src="/img/wire/btn_cancel.png" alt="���"  /></a>';  //2013-10-22 alt,a �߰� 
telLayer += '			</div>';
telLayer += '		</div>';
telLayer += '	</div>';
telLayer += '</div>';
telLayer += '<div id="modal" class="progress_img_all_cover"><div id="layerLoddig" style=" width:69px; padding-top:200px; margin:0 auto; display:none"><img src="/img/common/loading.png" alt="ó�����Դϴ�."/></div></div>'; //2013-10-22 alt �߰� 
document.write(telLayer);

function showModalLayer(isView, isLodding) {
	var modal = document.getElementById("modal");	
	var layerLoddig = document.getElementById("layerLoddig");	

	if (isView) {
		modal.style.display = "block";        
	}else{
		modal.style.display = "none";        
	}

	if (isLodding) {
		layerLoddig.style.display = "block";        
	}else{
		layerLoddig.style.display = "none";        
	}

	window.scrollTo(0,0);
}

function showTelLayer(isView) {
	var obj = document.getElementById("telLayer");
	var obj2 = document.getElementById("nfocus2");// 2013-11-07 �����ټ� �߰�
	var obj3 = document.getElementById("nfocus");// 2013-11-07 �����ټ� �߰�

	if (isView) {
		obj.style.display = "block";
		obj2.focus();// 2013-11-07 �����ټ� �߰�
	}else{
		obj.style.display = "none";
		obj3.focus();// 2013-11-07 �����ټ� �߰�
	}
	showModalLayer(isView, false);
}	

function toggleDisable(elementName, isDisable) {
	var elementArr = document.form1.getElementsByTagName(elementName);
	for(var i=0; i<elementArr.length; i++) {
		elementArr[i].disabled = isDisable;
	}
}
    
function disabledCheck(isView) {
	toggleDisable("select", isView);   
	toggleDisable("input", isView);
	toggleDisable("textarea", isView);
	toggleDisable("checkbox", isView);    	    	
}

function showModalDisableLayer(isView, isLodding) {
	showModalLayer(isView, isLodding);
	disabledCheck(isView);
}

function eleshow(ele) { /* ���̱� */
	if(typeof ele == "string") ele = document.getElementById(ele);
	ele.style.display = 'block';
	return false;
}	

function elehidden(ele) { /* ���߱� */
	if(typeof ele == "string") ele = document.getElementById(ele);
	ele.style.display = 'none';
	return false;
}