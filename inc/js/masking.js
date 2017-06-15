var strUnlockMaskingButton = '<div id="unlock_masking" class="masking_animate">' +
		'<button class="btn_open">������ �������� ����/�ݱ�</button>' +
		'<button class="btn_txt">������ ��������</button>' +
		'</div>';

var maskingDisabled;

function fnInitUnlockMasking() {
	
	var getMasking = getCookie('masking');
	var lastX;

	if ($('#unlock_masking').length) $('#unlock_masking').show();
	else {
		// ����ŷ ���� append
		$('body').append(strUnlockMaskingButton);
		
		// ������ �������� Ŭ��
		$('#unlock_masking .btn_txt').on('touchend click', function() {
			fnMaskCert();   // �������ܰ��������� ȣ��
		});
			
		if( getMasking ) {
			// ��Ű�� ���� ��� disabled ����
			$('#unlock_masking').addClass('disabled');
		} else {
			// ��Ű�� ���� ��� ��Ű�� �����ϰ� 2���� ��
			setCookie('masking', 'maskingCookie', 1);
			fnInitUnlockMaskingDisabled();
		}
		
		// ����ŷ �����̵� �̺�Ʈ, �ȵ���̵� 4.0 �������� touchstart ������ġ ������ �߻��Ͽ�
		// �ȵ���̵忡���� click �̺�Ʈ�� ����ϵ��� ����
		var flag = false;
		var ua = navigator.userAgent.toLowerCase();
		var isAndroid = ua.indexOf('android') > -1;
		
		if( isAndroid ) {
			var clickHandler = 'click'
		} else {
			var clickHandler = 'touchstart click';
		}
		
		// �ڹ��� Ŭ��
		$('#unlock_masking .btn_open').on(clickHandler, function(e){
			e.preventDefault();
			if( isAndroid ) {
				fnInitUnlockMaskingEnabled();
			} else {
				if (!flag) {
					flag = true;
					setTimeout(function(){  
						flag = false; 
						fnInitUnlockMaskingEnabled();
					}, 100);
				}
				return false;
			}
		});	
	}
}

function fnInitUnlockMaskingEnabled(){
	$('#unlock_masking').toggleClass('disabled');
}

function fnInitUnlockMaskingDisabled(){
	maskingDisabled = setTimeout(function(){
		$('#unlock_masking').addClass('disabled');
	}, 9000);
}

function fnInitUnlockMaskingHide() {
	if ($('#unlock_masking').length) $('#unlock_masking').hide();
}

// ��Ű ����
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires='+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
 }

//��Ű ��������
function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return '';
}