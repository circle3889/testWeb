
 // - true: ��ȿ�� CAS ��ȣ
 // - false: ��ȿ���� ���� CAS ��ȣ
 function isSmartCardNoCheckDigit(arg) {
	var i = 0;
	var tmp = 0;
	var tmp2 = 0;
	var chkdgt = 0;

	for(i=9 ; i>=0 ; i--) {
		tmp = arg.substr(i,1) * (i%2 + 1);
		if(tmp>9) {
		tmp2 = tmp+"";
		tmp2 = tmp2.substr(0,1);
		tmp2 = parseInt(tmp2)*10;
		}else {
		tmp2 = 0;
		}

		chkdgt += tmp2/10;
		chkdgt += tmp%10;
	}

	tmp = chkdgt%10;
	if(tmp==0) {
		tmp = 0;
	}else {
		tmp = 10-tmp;
	}

	if(parseInt(arg.substr(10,1)) == tmp) {
		return true;
	}  else {
		return false;
	}
}

function checkSvcNo(frm)	// ���񽺹�ȣ �Է� form submit
{
    var sCell;
	var sCell1;
	var sCell2;
	var SvcCd;
	
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }

    if(SvcCd == 'C'){
        sCell  = frm.SvcNum1.value;
        sCell1 = frm.SvcNum2.value;
        sCell2 = frm.SvcNum3.value;
        if (sCell == "" || sCell == "20")
        {
            alert("�ڵ��� ��ȣ�� �����ϼ���");
            return false;
        }
        if (sCell1 == "")
        {
            alert("�ڵ��� ��ȣ�� �Է��ϼ���");
            frm.SvcNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("�ڵ��� ��ȣ�� �Է��ϼ���");
            frm.SvcNum3.focus();
            return false;
        }
    } else if(SvcCd == 'T'){
        sCell  = frm.TSvcNum1.value;
        sCell1 = frm.TSvcNum2.value;
        sCell2 = frm.TSvcNum3.value;
        if (sCell == "" || sCell == null)
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum1.focus();
            return false;
        }
        if (sCell1 == "")
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum3.focus();
            return false;
        }        
    } else if(SvcCd == 'D'){
        sCell  = frm.DmbNum1.value;
        sCell1 = frm.DmbNum2.value;
        sCell2 = frm.DmbNum3.value;
        if (sCell == "" || sCell == null)
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum1.focus();
            return false;
        }
        if (sCell1 == "")
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum3.focus();
            return false;
        }
        var result = isSmartCardNoCheckDigit(sCell+sCell1+sCell2);
        if (result == false){
            alert('����DMB ��ȣ�� Ȯ���ϼ���.');
            frm.DmbNum1.focus();
            return false;
        }

	    //DMB�ϰ�츦 ���񽺹�ȣ �׸� �� set
	    frm.SvcNum1.value	=	sCell ;
	    frm.SvcNum2.value	=	sCell1;
	    frm.SvcNum3.value	=	sCell2;
    } else if(SvcCd == 'T'){
    	
    } else if(SvcCd != ''){
		alert("���񽺱����� �����ϼ���");
	    return false;
    }
    return true;
}

function newCheckSvcNo(frm)	// ���񽺹�ȣ �Է� form submit
{
	var SvcCd;
	
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
	
	if(frm.SvcNum2.value == "" || frm.SvcNum3.value == ""){			
		if(SvcCd == 'C'){
			frm.SvcNum1.value	=	frm.chkSvcNum1.value;
		    frm.SvcNum2.value	=	frm.chkSvcNum2.value;
		    frm.SvcNum3.value	=	frm.chkSvcNum3.value;
	    } else if(SvcCd == 'T'){
			frm.TSvcNum1.value	=	frm.chkSvcNum1.value;
		    frm.TSvcNum2.value	=	frm.chkSvcNum2.value;
		    frm.TSvcNum3.value	=	frm.chkSvcNum3.value;
	    } else if(SvcCd == 'D'){
	        sCell  = frm.chkSvcNum1.value;
	        sCell1 = frm.chkSvcNum2.value;
	        sCell2 = frm.chkSvcNum3.value;
	        var result = isSmartCardNoCheckDigit(sCell+sCell1+sCell2);
	        if (result == false){
	            alert('����DMB ��ȣ�� Ȯ���ϼ���.');
	            frm.DmbNum1.focus();
	            return false;
	        }
	
		    //DMB�ϰ�츦 ���񽺹�ȣ �׸� �� set
		    frm.DmbNum1.value	=	sCell ;
		    frm.DmbNum2.value	=	sCell1;
		    frm.DmbNum3.value	=	sCell2;
	    } else if(SvcCd == 'T'){
	    } else if(SvcCd != ''){
			alert("���񽺱����� �����ϼ���");
		    return false;
	    }
	}	
	
    return true;
}

function checkTabletPcSvcNo(frm)	// ���񽺹�ȣ �Է� form submit    //2011-05-04 �º�pc ���� ������� �߰� (�Լ� ���� ����)
{
    var sCell,sCell1,sCell2,SvcCd;
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }

    if(SvcCd == 'C'){
        sCell  = frm.SvcNum1.value;
        sCell1 = frm.SvcNum2.value;
        sCell2 = frm.SvcNum3.value;
        if (sCell == "" || sCell == "20")
        {
            alert("�ڵ��� ��ȣ�� �����ϼ���");
            return false;
        }
        if (sCell1 == "")
        {
            alert("�ڵ��� ��ȣ�� �Է��ϼ���");
            frm.SvcNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("�ڵ��� ��ȣ�� �Է��ϼ���");
            frm.SvcNum3.focus();
            return false;
        }
    } else if(SvcCd == 'T'){
        sCell  = frm.TSvcNum1.value;
        sCell1 = frm.TSvcNum2.value;
        sCell2 = frm.TSvcNum3.value;
        if (sCell == "" || sCell == null)
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum1.focus();
            return false;
        }
        if (sCell1 == "")
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("�º� ��ȣ�� �Է��ϼ���");
            frm.TSvcNum3.focus();
            return false;
        }        
    } else if(SvcCd == 'D'){
        sCell  = frm.DmbNum1.value;
        sCell1 = frm.DmbNum2.value;
        sCell2 = frm.DmbNum3.value;
        if (sCell == "" || sCell == null)
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum1.focus();
            return false;
        }
        if (sCell1 == "")
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum2.focus();
            return false;
        }
        if (sCell2 == "")
        {
            alert("����DMB ��ȣ�� �Է��ϼ���");
            frm.DmbNum3.focus();
            return false;
        }

        var result = isSmartCardNoCheckDigit(sCell+sCell1+sCell2);
        if (result == false){
            alert('����DMB ��ȣ�� Ȯ���ϼ���.');
            frm.DmbNum1.focus();
            return false;
        }

	    //DMB�ϰ�츦 ���񽺹�ȣ �׸� �� set
	    frm.SvcNum1.value	=	sCell ;
	    frm.SvcNum2.value	=	sCell1;
	    frm.SvcNum3.value	=	sCell2;
    } else if(SvcCd != ''){
		alert("���񽺱����� �����ϼ���");
	    return false;
    }
    	
    return true;
}




function sendSvcNo(frm)	// ���񽺹�ȣ �Է� form submit
{
    if ( !checkSvcNo(frm) ) return;

	frm.target = "ifr_hidden";
    frm.submit();
}

function Sendsvcinfo(frm){	//������ Ȯ�� form submit
    NameMsg = frm.NameTitle.value;
    NoMsg	= frm.CorpTitle.value;
    if (frm.CustName.value == ""){
        alert(NameMsg + '�� �Է��ϼ���.');
        frm.CustName.focus();
        return;
    }
	sCtzCorpNum = frm.CtzCorpNum1.value + frm.CtzCorpNum2.value + frm.CtzCorpNum3.value;
	if(sCtzCorpNum == ""){
		alert(NoMsg + '�� �Է��ϼ���.');
		frm.CtzCorpNum1.focus();
		return;
	}
	frm.target = "ifr_hidden";
	frm.CtzCorpNum.value = sCtzCorpNum;
	frm.submit();
}

var processCheck = "1";
function sendConFirm(frm)	//������ Ȯ�� form submit
{
	if(processCheck=="1"){
		processChecke = "2";
        if (frm.ConfirmNum.value == "")
        {
            alert("������ȣ�� �Է��ϼ���");
            frm.ConfirmNum.focus();
            return;
        }

        frm.target = "ifr_hidden";
        frm.submit();
	}else{
		return;
	}
}


function newSendConFirm(frm)	//������ Ȯ�� form submit
{
	var processCheck = "1";
	//////var parentFrm = parent.opener.document.frmMain; 
	
	if(processCheck=="1"){
		processChecke = "2";
        if (frm.ConfirmNum.value == "")
        {
            alert("������ȣ�� �Է��ϼ���");
            frm.ConfirmNum.focus();
            return;
        }
		
		var svcCd = frm.SvcCd.value;
		
		/*
		if(svcCd == "T"){			
			parentFrm.chkSvcNum1.value = frm.TSvcNum1.value;
			parentFrm.chkSvcNum2.value = frm.TSvcNum2.value;
			parentFrm.chkSvcNum3.value = frm.TSvcNum3.value;
		}else if(svcCd == "C"){
			parentFrm.chkSvcNum1.value = frm.SvcNum1.value;
			parentFrm.chkSvcNum2.value = frm.SvcNum2.value;
			parentFrm.chkSvcNum3.value = frm.SvcNum3.value;
		}else if(svcCd == "D"){
			parentFrm.chkSvcNum1.value = frm.DmbNum1.value;
			parentFrm.chkSvcNum2.value = frm.DmbNum2.value;
			parentFrm.chkSvcNum3.value = frm.DmbNum3.value;
		}
		*/

        frm.target = "ifr_hidden";
        frm.submit();
	}else{
		return;
	}
}

function sendSMS() {	//������ȣ ������
    with (document.HiddenForm) {
        target = "SMSAuth";
        submit();
    }
}

function SMSAuthMsg(Ind)	//������ȣ �߼� �� ��� �޽���
{	
    if ( Ind == "S" )
        alert("������ȣ�� ���������� �߼� �߽��ϴ�. ������ȣ�� Ȯ���Ͻð� �Է��Ͻʽÿ�.");
    else {
        alert("������ȣ ���ۿ� �����߽��ϴ�. \n����� �ٽ� �̿����ּ���.");
    }
    document.frmMain.ConfirmNum.focus();
}


function ChangeSvcNum1(frm)	//�̵���ȭ��ȣ 011/017 ���ý�
{
    if ( frm.SvcNum1.value == ""  ){	//��ȭ���� ����
    	frm.SvcNum2.value = "";
    	frm.SvcNum3.value = "";
    	frm.SvcNumCheck.value = "NON";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��, NON:��ȭ���� ����
    	if ( frm.SvcMgmtNum )
    		frm.SvcMgmtNum.value = "";
    	if ( OCBView )
    		OCBView.style.display = "none";
    } else {
    	frm.SvcNum2.value = "";
    	frm.SvcNum3.value = "";
    	frm.SvcNumCheck.value = "UP";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
	    frm.SvcNum2.focus();
    }
   	return;
}

function checkSvcNum1()	//�̵���ȭ��ȣ 011/017 ���ý�
{
    var frm	=	document.frmMain;
    if ( frm.SvcNum1.value == "20" || frm.SvcNum1.value == ""  ){
	    alert("�޴��� ���й�ȣ�� ���� �Ͻð� �Է� �ϼ���.");
    	frm.SvcNum1.focus();
    }
   	return;
}

function ChangeSvcNum(frm)	//�̵���ȭ��ȣ 011/017 ���ý�
{
	frm.SvcNumCheck.value = "UP";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
}
function aftMultiOpenerLink(Msg, RetUrl, Param)		//��ȸ�� ó���� Opener ���ΰ�ħ
{
	alert(Msg);
	if (parent.linkPost)    {
		parent.linkPost("RetUrl", Param);
	} else if (opener.parent.linkPost) {
		opener.parent.linkPost(RetUrl, Param);
	}
	self.close();
}

//function CertOk		��ȸ�� ó���� ����/���濡���� Opener�� �� set
function CertOk(up_cd, SvcMgmtNum, AuthSeq, twdGrade, twdGText, mbsGrade, mbsGText, ttlGrade, ttlGText, tngGrade, tngGText,
				CamsYn, RecvInd, RecIndDt, RecvInd1, RecInd1Dt, RelCd, OcbYn, SktMemCardYn, OcbAccmAgreeYn, msg )
{
	var frm = opener.document.frmMain;
	frm.SvcMgmtNum.value = SvcMgmtNum;
	frm.SvcNumCheck.value = "CRM";		//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
	frm.AuthSeq.value = AuthSeq;
	
	//ȸ����� set
	frm.TwdGradeCd.value = twdGrade;
	frm.TwdGradeNm.value = twdGText;
	frm.MbsGradeCd.value = mbsGrade;
	frm.MbsGradeNm.value = mbsGText;
	frm.TtlGradeCd.value = ttlGrade;
	frm.TtlGradeNm.value = ttlGText;
	frm.TngGradeCd.value = tngGrade;
	frm.TngGradeNm.value = tngGText;
	if ( up_cd == "REGUP" ) {
		frm.SktMemCardYn.value = SktMemCardYn;
		frm.OcbAccmAgreeYn.value = OcbAccmAgreeYn;
	}

	if ( CamsYn == "Y" ) {
		frm.CamsInd.value=CamsYn;
		if ( RecvInd.length > 0 ) {
			frm.RecvInd.value=RecvInd;	//NewsLetter ���ſ���
			frm.RecvIndDt.value=RecIndDt;
		}
		if ( RecvInd1.length > 0 ) {
			frm.RecvIndEvt.value=RecvInd1;	//�̺�Ʈ,���� ���ſ���
			frm.RecvIndEvtDt.value=RecInd1Dt;
		}
	}

	frm.RelCd.value=RelCd; // �����ڿ��� ����
	opener.changeOCB(OcbYn)
//	opener.changeOCB();
	alert(msg);
	window.close();
}

//function CertMcgOk       ��ȸ�� ó���� ����/���濡���� Opener�� �� set
function CertMcgOk(Flag, up_cd, SvcMgmtNum, AuthSeq, twdGrade, twdGText, mbsGrade, mbsGText, ttlGrade, ttlGText, tngGrade, tngGText,
                CamsYn, RecvInd, RecIndDt, RecvInd1, RecInd1Dt, RelCd, OcbYn, SktMemCardYn, OcbAccmAgreeYn, msg,
				EmailId, EmailDomain, PostCd1, PostCd2, PostAddr, DtlAddr, PhoneArea, PhoneNum1, PhoneNum2, EmailValue, SocSecNum )
{
    //frm = opener.document.frmMain;
    //frm = opener.parent.frmMain;

	var frm;
    if (Flag == 'parent') {
		frm = parent.opener.parent.document.frmMain;
	}else if (Flag == 'dmb') {
		frm = parent.document.frmMain;
	}else {
		frm = parent.opener.document.frmMain;
	}
	
    frm.SvcMgmtNum.value = SvcMgmtNum;
    frm.SvcNumCheck.value = "CRM";      //INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
    frm.AuthSeq.value = AuthSeq;
	
    //ȸ����� set
    frm.TwdGradeCd.value = twdGrade;
    frm.TwdGradeNm.value = twdGText;
    frm.MbsGradeCd.value = mbsGrade;
    frm.MbsGradeNm.value = mbsGText;
    frm.TtlGradeCd.value = ttlGrade;
    frm.TtlGradeNm.value = ttlGText;
    frm.TngGradeCd.value = tngGrade;
    frm.TngGradeNm.value = tngGText;

    //2011-08-02 �ּ��������� (mcg û����������ȸ ����)
    /*
    if( frm.PostCd1.value.length == 0 ){
        frm.PostCd1.value      = PostCd1;
        frm.PostCd2.value      = PostCd2;
        frm.PostAddr.value     = PostAddr;
        frm.DtlAddr.value      = DtlAddr;
    }

    if( frm.PhoneNum1.value.length == 0 ){
        frm.PhoneArea.value    = PhoneArea;
        frm.PhoneNum1.value    = PhoneNum1;
        frm.PhoneNum2.value    = PhoneNum2;
    }
    */

    if ( up_cd == "REGUP" ) {
        frm.SktMemCardYn.value = SktMemCardYn;
        frm.OcbAccmAgreeYn.value = OcbAccmAgreeYn;
    }

    if ( CamsYn == "Y" ) {
        frm.CamsInd.value=CamsYn;
        if ( RecvInd.length > 0 ) {
            frm.RecvInd.value=RecvInd;  //NewsLetter ���ſ���
            frm.RecvIndDt.value=RecIndDt;
        }
        if ( RecvInd1.length > 0 ) {
            frm.RecvIndEvt.value=RecvInd1;  //�̺�Ʈ,���� ���ſ���
            frm.RecvIndEvtDt.value=RecInd1Dt;
        }
    }
    frm.RelCd.value=RelCd; // �����ڿ��� ����

    //opener.changeOCB(OcbYn)
    //opener.parent.changeOCB(OcbYn);

    if (Flag == 'parent') {
		parent.opener.parent.changeOCB(OcbYn);
	}else if (Flag == 'dmb') {
		parent.changeOCB(OcbYn);
	}else {
		parent.opener.changeOCB(OcbYn);
	}
	
    if ( EmailId.length > 0 && frm.EmailId.value.length == 0 ){
        frm.EmailId.value      = EmailId;
        frm.EmailDomain.value  = EmailDomain;
		frm.EmailDomain1.value = EmailValue;
        frm.EmailDomain.onchange();
    }

    frm.SocSecNum.value = SocSecNum;

    if (Flag != 'dmb') {
		parent.window.close();
	}
}


//function CertMcgOk       ��ȸ�� ó���� ����/���濡���� Opener�� �� set   :  �º� ��� ������ 
function tabletCertMcgOk(Flag, up_cd, SvcMgmtNum, AuthSeq, twdGrade, twdGText, mbsGrade, mbsGText, ttlGrade, ttlGText, tngGrade, tngGText, CamsYn, RecvInd, RecIndDt, RecvInd1, RecInd1Dt, RelCd, OcbYn, SktMemCardYn, OcbAccmAgreeYn, msg, EmailId, EmailDomain, PostCd1, PostCd2, PostAddr, DtlAddr, PhoneArea, PhoneNum1, PhoneNum2, EmailValue, SocSecNum){
	//frm = opener.document.frmMain;
	//frm = opener.parent.frmMain;

	
	if (Flag == 'parent') {
		frm = parent.opener.parent.document.frmMain;
	}else if (Flag == 'dmb') {
		frm = parent.document.frmMain;
	}else if (Flag == 'mupt') {
		frm = parent.opener.opener.document.frmMain;
	}else if (Flag == 'muptOutTel') {
		frm = parent.parent.opener.document.frmMain;
	}else {
		if (parent.opener) {
			frm = parent.opener.document.frmMain;
		} else {
			frm = parent.document.frmMain;

		}
	}

	frm.SvcMgmtNum.value = SvcMgmtNum;
	frm.SvcNumCheck.value = "CRM"; //INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
	frm.AuthSeq.value = AuthSeq;
	
	//ȸ����� set
	frm.TwdGradeCd.value = twdGrade;
	frm.TwdGradeNm.value = twdGText;
	frm.MbsGradeCd.value = mbsGrade;
	frm.MbsGradeNm.value = mbsGText;
	frm.TtlGradeCd.value = ttlGrade;
	frm.TtlGradeNm.value = ttlGText;
	frm.TngGradeCd.value = tngGrade;
	frm.TngGradeNm.value = tngGText;
	
	//2011-08-02 �ּ��������� (mcg û����������ȸ ����)
	/*
	 if( frm.PostCd1.value.length == 0 ){
	 frm.PostCd1.value      = PostCd1;
	 frm.PostCd2.value      = PostCd2;
	 frm.PostAddr.value     = PostAddr;
	 frm.DtlAddr.value      = DtlAddr;
	 }
	 if( frm.PhoneNum1.value.length == 0 ){
	 frm.PhoneArea.value    = PhoneArea;
	 frm.PhoneNum1.value    = PhoneNum1;
	 frm.PhoneNum2.value    = PhoneNum2;
	 }
	 */
	if (up_cd == "REGUP") {
		frm.SktMemCardYn.value = SktMemCardYn;
		frm.OcbAccmAgreeYn.value = OcbAccmAgreeYn;
	}
	
	if (CamsYn == "Y") {
		frm.CamsInd.value = CamsYn;
		if (RecvInd.length > 0) {
			frm.RecvInd.value = RecvInd; //NewsLetter ���ſ���
			frm.RecvIndDt.value = RecIndDt;
		}
		if (RecvInd1.length > 0) {
			frm.RecvIndEvt.value = RecvInd1; //�̺�Ʈ,���� ���ſ���
			frm.RecvIndEvtDt.value = RecInd1Dt;
		}
	}
	
	
	frm.RelCd.value = RelCd; // �����ڿ��� ����
	//opener.changeOCB(OcbYn)
	//opener.parent.changeOCB(OcbYn);
	
	if (Flag == 'parent'){
		parent.opener.parent.changeOCB(OcbYn);
	}else if( Flag == 'dmb' ){
    	parent.changeOCB(OcbYn);
	}else if( Flag == 'mupt' ){
	    parent.opener.opener.changeOCB(OcbYn);
	}else if( Flag == 'muptOutTel' ){
	    parent.parent.opener.changeOCB(OcbYn);	    
    }else{
		if (parent.opener) {
			parent.opener.changeOCB(OcbYn);
		} else {
			parent.changeOCB(OcbYn);

		}    	
	}
		
    if ( EmailId.length > 0 && frm.EmailId.value.length == 0 ){
        frm.EmailId.value      = EmailId;
        frm.EmailDomain.value  = EmailDomain;
		frm.EmailDomain1.value = EmailValue;
        frm.EmailDomain.onchange();
    }


    frm.SocSecNum.value = SocSecNum;

	if( Flag == 'mupt' )		 //2011-06-22  �˾�â control 
		parent.opener.window.close();

	if( Flag == 'muptOutTel' )		 //2011-06-22  �˾�â control 
		parent.opener.window.close();
				
    if( Flag != 'dmb' )
		parent.window.close();
	
}


function setNonMember()		//SKT���� �ƴѰ�� Opener�� �� set
{
	var frm = opener.document.frmMain;
	if ( frm.SvcMgmtNum )
		frm.SvcMgmtNum.value = "";
	frm.SvcNumCheck.value = "NON";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��, NON:��ȭ���� ����
	frm.AuthSeq.value = "0";

	//ȸ����� set
	frm.TwdGradeCd.value = "N";
	frm.TwdGradeNm.value = "��ȸ��";
	frm.MbsGradeCd.value = "E";
	frm.MbsGradeNm.value = "��Ÿ��ȸ��";
	frm.TtlGradeCd.value = "E";
	frm.TtlGradeNm.value = "��ȸ��";
	frm.TngGradeCd.value = "E";
	frm.TngGradeNm.value = "��ȸ��";
	frm.CamsInd.value	 = "N";
	frm.RelCd.value=""; // �����ڿ��� ����
	if ( opener.OCBView )
		opener.OCBView.style.display = "none";
	window.close();
}

function bIsDualMsg(bIsDualYn, SvcCd)		//�޴���, DMB ����� �޽��� ó��
{
	if (bIsDualYn == "Y")    {
		if ( SvcCd == "C") 
	        alert('���Բ��� ���� �̵���ȭ ���񽺿� DMB ���񽺸� \n���ÿ� ����Ͻð� ��ø�, T world�� ���� \nDMB ���񽺸� ���ÿ� �̿��Ͻ� �� �ֽ��ϴ�.');
		else {
	        alert('���Բ��� ���� �̵���ȭ ���񽺿� DMB ���񽺸� \n���ÿ� ����Ͻð� ��ø�, T world�� ���� �̵���ȭ��ȣ�� ��� �Ͻø� \nDMB ���񽺸� ���ÿ� �̿��Ͻ� �� ������ DMB���񽺴� ��� �Ͻ� �� �����ϴ�.');
			//�Էµ� �� clear
			opener.document.frmMain.SvcNum1.value = "";
			opener.document.frmMain.SvcNum2.value = "";
			opener.document.frmMain.SvcNum3.value = "";
			opener.document.frmMain.DmbNum1.value = "";
			opener.document.frmMain.DmbNum2.value = "";
			opener.document.frmMain.DmbNum3.value = "";
			self.close();
		}
	}
}


function view_cat3(UP_CD)		//���� ������ ���ÿ����� ó��	(�����ڵ� : MEM:ȸ�� ����, ����,  OTR:�̿�)
{
	var sSvc_cd;
	var frm = document.frmMain;

	for( i=0; i<frm.SvcCd.length; i++) {
		if(frm.SvcCd[i].checked) {
			sSvc_cd = document.frmMain.SvcCd[i].value;
		}
	}
	
	if ( UP_CD == "MEM" ) {		//MEM:ȸ�� ����, ����
		if (sSvc_cd == "C")	{	//�̵���ȭ
			document.getElementById("NON_TEXT").style.display = "none";
			document.getElementById("NON_TEXTTH").style.display = "none";
			document.getElementById("NON_TEXTTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("Cellular").style.display = "";
			document.getElementById("CellularTH").style.display = "";
			document.getElementById("CellularTD").style.display = "";
			document.getElementById("NON_TEXTCM").style.display = "none";
			document.getElementById("TabletPcCM").style.display = "none";
			document.getElementById("DMBViewCM").style.display = "none";
			document.getElementById("CellularCM").style.display = "";
			document.frmMain.SvcNum2.value = "";
			document.frmMain.SvcNum3.value = "";			
			document.frmMain.SvcCdDel.value = "";			
		} else if (sSvc_cd == "T")	{	//�º�pc ����  2011-05-04 �߰�
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "";
			document.getElementById("TabletPcTH").style.display = "";
			document.getElementById("TabletPcTD").style.display = "";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("NON_TEXT").style.display = "none";
			document.getElementById("NON_TEXTTH").style.display = "none";
			document.getElementById("NON_TEXTTD").style.display = "none";
			document.getElementById("CellularCM").style.display = "none";
			document.getElementById("TabletPcCM").style.display = "";
			document.getElementById("DMBViewCM").style.display = "none";
			document.getElementById("NON_TEXTCM").style.display = "none";
			document.frmMain.TSvcNum1.value = "";
			document.frmMain.TSvcNum2.value = "";			
			document.frmMain.TSvcNum3.value = "";						
			document.frmMain.SvcCdDel.value = "";			
		}else if (sSvc_cd == "D")	{	//���� DMB(������)
			document.getElementById("NON_TEXT").style.display = "none";
			document.getElementById("NON_TEXTTH").style.display = "none";
			document.getElementById("NON_TEXTTD").style.display = "none";
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "";
			document.getElementById("DMBViewTH").style.display = "";
			document.getElementById("DMBViewTD").style.display = "";
			document.getElementById("NON_TEXTCM").style.display = "none";
			document.getElementById("CellularCM").style.display = "none";
			document.getElementById("TabletPcCM").style.display = "none";
			document.getElementById("DMBViewCM").style.display = "";
			document.frmMain.DmbNum1.focus();
			document.frmMain.DmbNum1.value = "";
			document.frmMain.DmbNum2.value = "";
			document.frmMain.DmbNum3.value = "";			
			document.frmMain.SvcCdDel.value = "";			
		} else 	{	//��ȭ����
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("NON_TEXT").style.display = "";
			document.getElementById("NON_TEXTTH").style.display = "";
			document.getElementById("NON_TEXTTD").style.display = "";
			document.getElementById("CellularCM").style.display = "none";
			document.getElementById("TabletPcCM").style.display = "none";
			document.getElementById("DMBViewCM").style.display = "none";
			document.getElementById("NON_TEXTCM").style.display = "";
	    	frm.SvcNum2.value = "";
	    	frm.SvcNum3.value = "";
	    	frm.SvcNumCheck.value = "NON";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��, NON:��ȭ���� ����
			frm.SvcCdDel.value = "";			
	    	if ( frm.SvcMgmtNum )
	    		frm.SvcMgmtNum.value = "";
	    	if ( OCBView )
	    		OCBView.style.display = "none";
		}
	} else if ( UP_CD == "MEM_LOAD" ) {		//MEM_LOAD:ȸ�� ����, ����
		if (sSvc_cd == "C")	{	//�̵���ȭ
			document.getElementById("NON_TEXT").style.display = "none";
			document.getElementById("NON_TEXTTH").style.display = "none";
			document.getElementById("NON_TEXTTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("Cellular").style.display = "";
			document.getElementById("CellularTH").style.display = "";
			document.getElementById("CellularTD").style.display = "";
		} else if (sSvc_cd == "T")	{	//�º�pc ����  2011-05-04 �߰�
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "";
			document.getElementById("TabletPcTH").style.display = "";
			document.getElementById("TabletPcTD").style.display = "";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("NON_TEXT").style.display = "none";			
			document.getElementById("NON_TEXTTH").style.display = "none";			
			document.getElementById("NON_TEXTTD").style.display = "none";			
		}else if (sSvc_cd == "D")	{	//���� DMB(������)
			document.getElementById("NON_TEXT").style.display = "none";
			document.getElementById("NON_TEXTTH").style.display = "none";
			document.getElementById("NON_TEXTTD").style.display = "none";
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "";
			document.getElementById("DMBViewTH").style.display = "";
			document.getElementById("DMBViewTD").style.display = "";
			document.frmMain.DmbNum1.focus();
		} else 	{	//��ȭ����
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTH").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("NON_TEXT").style.display = "";
			document.getElementById("NON_TEXTTH").style.display = "";
			document.getElementById("NON_TEXTTD").style.display = "";
	    	frm.SvcNum2.value = "";
	    	frm.SvcNum3.value = "";
	    	frm.SvcNumCheck.value = "NON";	//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��, NON:��ȭ���� ����
	    	frm.SvcCdDel.value = "";
	    	if ( frm.SvcMgmtNum )
	    		frm.SvcMgmtNum.value = "";
	    	if ( OCBView )
	    		OCBView.style.display = "none";
		}
	} else {					//OTR:�̿�
		if (sSvc_cd == "C")	{	//�̵���ȭ
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("Cellular").style.display = "";
			document.getElementById("CellularTH").style.display = "";
			document.getElementById("CellularTD").style.display = "";
			document.frmMain.SvcNum2.value = "";
			document.frmMain.SvcNum3.value = "";
		}else if (sSvc_cd == "D")	{	//���� DMB(������)
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("DMBView").style.display = "";
			document.getElementById("DMBViewTH").style.display = "";
			document.getElementById("DMBViewTD").style.display = "";
			document.frmMain.DmbNum1.focus();
			document.frmMain.DmbNum1.value = "";
			document.frmMain.DmbNum2.value = "";
			document.frmMain.DmbNum3.value = "";
		} else 	{	//��ȭ����
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTH").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTH").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
		}
	}
}
/*
function view_cat4()		//���̵�/�н����� ã�� ������ȣ �ޱ�
{
	var sSvc_cd;
	var frm = document.frmMain;
	
	for( i=0; i<frm.SvcCd.length; i++) {
		if(frm.SvcCd[i].checked) {
			sSvc_cd = document.frmMain.SvcCd[i].value;
		}
	}
					
	if (sSvc_cd == "C")	{	//�̵���ȭ
		document.getElementById("DMBView").style.display = "none";
		document.getElementById("Cellular").style.display = "";
		document.getElementById("TabletPc").style.display = "none";
		document.frmMain.SvcNum2.value = "";
		document.frmMain.SvcNum3.value = "";
	}else if (sSvc_cd == "D")	{	//���� DMB(������)
		document.getElementById("Cellular").style.display = "none";
		document.getElementById("DMBView").style.display = "";
		document.getElementById("TabletPc").style.display = "none";
		document.frmMain.DmbNum1.focus();
		document.frmMain.DmbNum1.value = "";
		document.frmMain.DmbNum2.value = "";
		document.frmMain.DmbNum3.value = "";
	}else if (sSvc_cd == "T")	{	//�º�pc
		document.getElementById("Cellular").style.display = "none";
		document.getElementById("DMBView").style.display = "none";
		document.getElementById("TabletPc").style.display = "";
		document.frmMain.TSvcNum1.value = "";
		document.frmMain.TSvcNum2.value = "";			
		document.frmMain.TSvcNum3.value = "";
	}
}
*/

//���� ������ ���ÿ����� ó��	(�����ڵ� : OTR: ����,IDPWã����,  OTR2: ��ȸ���߰� )  2011-05-04  �º�pc �����߰��� �Լ� ���� (������ ���� �ݿ����� ���� ����)
function view_cat3_tabletPc(UP_CD)		
{
	var sSvc_cd;
	var frm = document.frmMain;
	for( i=0; i<frm.SvcCd.length; i++) {
		if(frm.SvcCd[i].checked) {
			sSvc_cd = document.frmMain.SvcCd[i].value;
		}
	}
	if ( UP_CD == "OTR" ) {		//OTR:ȸ�� ���� �� 
	    //�º�pc ����  2011-05-04 �߰�
		if (sSvc_cd == "C")	{	//�̵���ȭ

			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("Cellular").style.display = "";
			document.getElementById("CellularTD").style.display = "";
			document.getElementById("Cellular_Cert").style.display = "";
			document.getElementById("confirmBtn").style.display = "";
			document.frmMain.SvcNum2.value = "";
			document.frmMain.SvcNum3.value = "";
			document.frmMain.tabletCertConfirmYN.value = "N";

		} else if (sSvc_cd == "T")	{	//�º�pc ����  2011-05-04 �߰�

			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("TabletPc").style.display = "";
			document.getElementById("TabletPcTD").style.display = "";
			document.getElementById("confirmBtn").style.display = "none";
			document.frmMain.TSvcNum1.value = "";
			document.frmMain.TSvcNum2.value = "";			
			document.frmMain.TSvcNum3.value = "";

		}else if (sSvc_cd == "D")	{	//���� DMB(������)

			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "";
			document.getElementById("DMBViewTD").style.display = "";
			document.getElementById("confirmBtn").style.display = "";
			document.frmMain.DmbNum1.focus();
			document.frmMain.DmbNum1.value = "";
			document.frmMain.DmbNum2.value = "";
			document.frmMain.DmbNum3.value = "";
			document.frmMain.tabletCertConfirmYN.value = "N";

		} else 	{	//��ȭ����

			document.getElementById("Cellular").style.display = "none";
			document.getElementById("CellularTD").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPcTD").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("DMBViewTD").style.display = "none";
			document.getElementById("confirmBtn").style.display = "";
			document.frmMain.tabletCertConfirmYN.value = "N";

		}
		
	} else {					//OTR_below: ȸ���߰� ��
	    //�º�pc ����  2011-05-04 �߰�
		if (sSvc_cd == "C")	{	//�̵���ȭ
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPc_below").style.display = "none";
			document.getElementById("Cellular").style.display = "";
			document.getElementById("Cellular_Cert").style.display = "";
			document.frmMain.SvcNum2.value = "";
			document.frmMain.SvcNum3.value = "";
			document.frmMain.tabletCertConfirmYN.value = "N";
			
		} else if (sSvc_cd == "T")	{	//�º�pc ����  2011-05-04 �߰�
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("TabletPc").style.display = "";
			document.getElementById("TabletPc_below").style.display = "";
			document.frmMain.TSvcNum1.value = "";
			document.frmMain.TSvcNum2.value = "";			
			document.frmMain.TSvcNum3.value = "";
		}else if (sSvc_cd == "D")	{	//���� DMB(������)
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("TabletPc_below").style.display = "none";
			document.getElementById("DMBView").style.display = "";
			document.frmMain.DmbNum1.focus();
			document.frmMain.DmbNum1.value = "";
			document.frmMain.DmbNum2.value = "";
			document.frmMain.DmbNum3.value = "";
			document.frmMain.tabletCertConfirmYN.value = "N";
			
		} else 	{	//��ȭ����
			document.getElementById("Cellular").style.display = "none";
			document.getElementById("Cellular_Cert").style.display = "none";
			document.getElementById("TabletPc").style.display = "none";
			document.getElementById("DMBView").style.display = "none";
			document.getElementById("TabletPc_below").style.display = "none";
			document.frmMain.tabletCertConfirmYN.value = "N";
			
		}
	}
}
