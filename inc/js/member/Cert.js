	function checkJuminName() {		//�ֹι�ȣ, �̸� �Է½� �˻�
		if( document.frmMain.UserName.value == "" )
		{
			alert("�̸��� �Է��ϼ���");
			document.frmMain.UserName.focus();
			return false;
		}

		//���ĺ� �� ����˻�
		var includeAlpha    =   0;
		var includeSpace    =   0;
		for(i = 0; i < document.frmMain.UserName.value.length; i++){
			if(document.frmMain.UserName.value.substring(i, i+1)==" "){
			    includeSpace++;				
			}
				
            if(document.frmMain.UserName.value.substring(i,i+1) >= 'a' || document.frmMain.UserName.value.substring(i,i+1) <= 'Z'){
			    includeAlpha++;				
			}
		}
				
		//�ܱ����̰� ���� �̸��� ��� ���� �Է� �����ϰ� ����
		if ( document.frmMain.UserInd ) {
			if ( includeSpace > 0 && (!document.frmMain.UserInd.checked || includeAlpha < 1) ) {
				alert("�̸��� ������ ������ �� �����ϴ�.");
    		    document.frmMain.UserName.focus();
				return false;
		    }
		} else {
			
			var juminCheck = document.frmMain.Jumin2.value;
			var juminStr   = juminCheck.substring(0,1);
			
			if ( includeSpace > 0 && (juminStr == "1" || juminStr == "2" || juminStr == "3" || juminStr == "4")) {
				alert("�̸��� ������ ������ �� �����ϴ�.");
    		    document.frmMain.UserName.focus();
				return false;
		    }
		}

		if(document.frmMain.Jumin1.value.length != 6) {
			alert("�ֹε�Ϲ�ȣ�� �Է����ּ���.");
		    document.frmMain.Jumin1.focus();
		    return false;
		}
		if(document.frmMain.Jumin2.value.length != 7) {
			alert("�ֹε�Ϲ�ȣ�� �Է����ּ���.");
		    document.frmMain.Jumin2.focus();
		    return false;
		}

		var fgn_reg_no = document.frmMain.Jumin1.value + document.frmMain.Jumin2.value;
		if ( document.frmMain.UserInd ) {
			if ( document.frmMain.UserInd.checked )
				document.frmMain.UserInd.value = "9";	//�ܱ���
			else
				document.frmMain.UserInd.value = "1";	//������
			if (document.frmMain.UserInd.value == 9)	{
				if (! fgn_no_chksum(fgn_reg_no)){
					alert('�ܱ��ε�Ϲ�ȣ�� ������ �ֽ��ϴ�. �ٽ� Ȯ���Ͻʽÿ�.');
					document.frmMain.Jumin1.focus();
					return false ;
				}
			} else {
				if( checkRegisterNum(fgn_reg_no) == false) {
					alert("�ֹε�� ��ȣ�� �ٸ��� ���� �ֽʽÿ�.");
					document.frmMain.Jumin1.focus();
					return false;
				}
			}
		}
	    return true;
	}


	function checkLegalJuminName() {		//�̼����� �����븮�� �ֹι�ȣ, �̸� �Է½� �˻�
		if( document.frmMain.LegalName.value == "" )
		{
			alert("�̸��� �Է��ϼ���");
			document.frmMain.LegalName.focus();
			return false;
		}

		//���ĺ� �� ����˻�
		var includeAlpha    =   0;
		var includeSpace    =   0;
		for(i = 0; i < document.frmMain.LegalName.value.length; i++){
			if(document.frmMain.LegalName.value.substring(i, i+1)==" ")
			    includeSpace++;
            if(document.frmMain.LegalName.value.substring(i,i+1) >= "a" || document.frmMain.LegalName.value.substring(i,i+1) <= "Z")
			    includeAlpha++;
		}
		
		//�ܱ����̰� ���� �̸��� ��� ���� �Է� �����ϰ� ����
		if ( document.frmMain.LegalInd ) {
			if ( includeSpace > 0 && (!document.frmMain.LegalInd.checked || includeAlpha < 1) ) {
				alert("�̸��� ������ ������ �� �����ϴ�.");
    		    document.frmMain.LegalName.focus();
				return false;
		    }
		} else {
			
			var juminCheck = document.frmMain.LegalSecNum2.value;
			var juminStr   = juminCheck.substring(0,1);
			
			if ( includeSpace > 0  && (juminStr == "1" || juminStr == "2" || juminStr == "3" || juminStr == "4")) {
				alert("�̸��� ������ ������ �� �����ϴ�.");
    		    document.frmMain.LegalName.focus();
				return false;
		    }
		}

		if(document.frmMain.LegalSecNum1.value.length != 6) {
			alert("�ֹε�Ϲ�ȣ�� �Է����ּ���.");
		    document.frmMain.LegalSecNum1.focus();
		    return false;
		}
		if(document.frmMain.LegalSecNum2.value.length != 7) {
			alert("�ֹε�Ϲ�ȣ�� �Է����ּ���.");
		    document.frmMain.LegalSecNum2.focus();
		    return false;
		}

		var fgn_reg_no = document.frmMain.LegalSecNum1.value + document.frmMain.LegalSecNum2.value;
		if ( document.frmMain.LegalInd ) {
			if ( document.frmMain.LegalInd.checked )
				document.frmMain.LegalInd.value = "9";	//�ܱ���
			else
				document.frmMain.LegalInd.value = "1";	//������
			if (document.frmMain.LegalInd.value == 9)	{
				if (! fgn_no_chksum(fgn_reg_no)){
					alert('�ܱ��ε�Ϲ�ȣ�� ������ �ֽ��ϴ�. �ٽ� Ȯ���Ͻʽÿ�.');
					document.frmMain.LegalSecNum1.focus();
					return false ;
				}
			} else {
				if( checkRegisterNum(fgn_reg_no) == false) {
					alert("�ֹε�� ��ȣ�� �ٸ��� ���� �ֽʽÿ�.");
					document.frmMain.LegalSecNum1.focus();
					return false;
				}
			}
		}
	    return true;
	}

	function checkIdPwdCrm() {		//�� ������ ID/PWD Ȯ��

		if( document.frmMain.UserId.value == "" )
		{
			alert("���̵� �Է��ϼ���");
			document.frmMain.UserId.focus();
			return false;
		}
		if( document.frmMain.UserPwd.value == "" )
		{
			alert("�н����带 �Է��ϼ���");
			document.frmMain.UserPwd.focus();
			return false;
		}
	    return true;
	}

	function cancel_reset()
	{
		document.frmMain.UserName.value = '';
		document.frmMain.Jumin1.value = '';
		document.frmMain.Jumin2.value = '';
		document.frmMain.UserName.focus();
	}

