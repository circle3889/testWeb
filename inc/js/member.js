function OCB_NotAgree_pop(SvcNum){	//OCB ������ �� ���� �̵��� ȭ��
    frm	=	document.frmMain;
    Param = "UP_CD=INIT&SvcNum=" + SvcNum + "&SktMemCardYn=" + frm.SktMemCardYn.value + "&OcbAccmAgreeYn=" + frm.OcbAccmAgreeYn.value;
    frm = document.PopupForm;
    frm.PostParam.value = Param;
    frm.action      = "/normal.do?serviceId=S_MUPT0014&viewId=V_MUPT4000";
    window.open('','NotAgree','toolbar=no,width=480,height=460,status=no,menubar=no,scrollbars=no,resizable=no');
    frm.target = "NotAgree";
    frm.submit();
}

function OCB_Agree_pop(SvcNum){  //OCB ������ �� ���� �̵��� ȭ��
    frm =   document.frmMain;
    Param = "UP_CD=AGREE&SvcNum=" + SvcNum + "&SktMemCardYn=" + frm.SktMemCardYn.value + "&OcbAccmAgreeYn=" + frm.OcbAccmAgreeYn.value;
    frm = document.PopupForm;
    frm.PostParam.value = Param;
    frm.action      = "/normal.do?serviceId=S_MUPT0014&viewId=V_MUPT4001";
    window.open('','Agree','toolbar=no,width=630,height=600,status=no,menubar=no,scrollbars=yes,resizable=no');
    frm.target = "Agree";
    frm.submit();
}

function pw_change_pop(){	//�н����庯�� �˾�
 
/*
    frm = document.PopupForm;
    frm.thisViewId.value = "V_MUPT0001";
    frm.action = "/normal.do?serviceId=S_MUPT0003&viewId=V_COMM1001";
    window.open('','pw_change','toolbar=no,width=480,height=343,status=no,menubar=no,scrollbars=no,resizable=no');
    frm.target = "pw_change";
    frm.submit();
*/

    //2011-09-15 �н����庯�� �˾� ��ȭ��ȣ �Է�����  referer �߰��� ���� ����
    frm = document.PopupForm;
    frm.thisViewId.value = "V_MUPT0001";
    frm.action = "/normal.do?serviceId=S_MUPT0003&viewId=V_COMM1001";
    //window.open('','pw_change','toolbar=no,width=650,height=330,status=no,menubar=no,scrollbars=no,resizable=no');
    frm.target = "ifr_hidden";
    frm.submit();
    
}

function popupOpenPwChange(returnViewId)	// 2011-09-15  ��й�ȣ ���� �˾� ( referer ���� �����ϱ� ���� popup ó�� )  ////////
{
    
    frm = document.PopupForm;

    // ���������� ���� ����
	window.open('','pw_change','toolbar=no,width=650,height=330,status=no,menubar=no,scrollbars=yes,resizable=no');
   	frm.target = "pw_change";
   	frm.action = "/normal.do?serviceId=SDUMMY0001&viewId=" + returnViewId;
    frm.submit();
    
}

/*
function multiSvcAdd(mCnt)		// ��ȸ�� �߰����
{
    if ( 8 < mCnt)
    {
        alert("�߰�ȸ���� 9������ ��� �����մϴ�. (��ǥȸ�� ���� ��10���� ���)");
        return;
    }

    
   // Param = "UP_CD=INIT&ReqSite=MULTI&SiteCd=est";
   // frm = document.PopupForm;
  //  frm.PostParam.value = Param;
   // frm.thisViewId.value = "V_MUPT0001";
   // frm.action      = "/normal.do?serviceId=S_MUPT0009&viewId=V_COMM1001";
   // var win = window.open('','SvcAdd','width=615,height=500');
  //  frm.target      = "SvcAdd";
  //  frm.submit();
	
	
	Param = "UP_CD=INIT&ReqSite=MULTI&SiteCd=est";
    frm = document.PopupForm;
    frm.PostParam.value = Param;
    frm.thisViewId.value = "V_MUPT0001";
    frm.target      = "ifr_hidden";
    frm.action      = "/normal.do?serviceId=S_MUPT0009&viewId=V_COMM1001";    
    frm.submit();
    		
}
*/

function multiSvcAdd(mCnt)		// ��ȸ�� �߰����
{
    if ( 8 < mCnt)
    {
        alert("�߰�ȸ���� 9������ ��� �����մϴ�. (��ǥȸ�� ���� ��10���� ���)");
        return;
    }
	
	var frmPopup = document.PopupForm;
    var frm = document.frmMain;	
	var tmpSvcCheck = frmPopup.tmpSvcCheck.value;
	var tmpSvcSplit = tmpSvcCheck.split("/");
    var SvcNum,SvcNum1,SvcNum2,SvcNum3,SocSecNum,UserId,UserName,SiteCd,SvcMgmtNum;
    var TFlag ="";
	
	 if ( !checkSvcNo(frm) ) return;
	
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
	
	if(SvcCd=='C'){
		
	    frmPopup.SvcNum1.value	=	frm.SvcNum1.value;
	    frmPopup.SvcNum2.value  =	frm.SvcNum2.value;
	    frmPopup.SvcNum3.value  =	frm.SvcNum3.value;
		
		SvcNum = frmPopup.SvcNum1.value + frmPopup.SvcNum2.value + frmPopup.SvcNum3.value;
		
	}else if(SvcCd=='T'){
		
	    frmPopup.SvcNum1.value	=	frm.TSvcNum1.value;
	    frmPopup.SvcNum2.value  =	frm.TSvcNum2.value;
	    frmPopup.SvcNum3.value  =	frm.TSvcNum3.value;
	    TFlag ="tablet";       
		
		SvcNum = frmPopup.SvcNum1.value + frmPopup.SvcNum2.value + frmPopup.SvcNum3.value;
		
	}else if(SvcCd=='D'){
		
	    frmPopup.SvcNum1.value	=	frm.DmbNum1.value;
	    frmPopup.SvcNum2.value  =	frm.DmbNum2.value;
	    frmPopup.SvcNum3.value  =	frm.DmbNum3.value;

		SvcNum = frmPopup.SvcNum1.value + frmPopup.SvcNum2.value + frmPopup.SvcNum3.value;
	}
	 
	for(var i=0; i < tmpSvcSplit.length-1 ; i++){
		
		if(tmpSvcSplit[i] == SvcNum){
			alert("�̹� �߰�ȸ�� �Ǵ� ��ǥ��ȣ�� ��ϵ� ���񽺹�ȣ �Դϴ�.");
			return;
		}
	}
	
    SocSecNum   =	frmPopup.SocSecNum.value;
	UserId      =	frmPopup.UserId.value;
	UserName    =	frmPopup.UserName.value;
	SiteCd		=   frmPopup.SiteCd.value;
	SvcMgmtNum  =   frmPopup.SvcMgmtNum.value;
	
	Param = "ReqSite=MULTI&UP_CD=CHKSVCNO&SiteCd="+SiteCd+"&SvcCd="+SvcCd+"&SvcNum1="+frmPopup.SvcNum1.value + "&SvcNum2="+frmPopup.SvcNum2.value+"&SvcNum3="+frmPopup.SvcNum3.value+"&SocSecNum="+SocSecNum+"&UserId="+UserId+"&UserName="+UserName+"&SvcNum="+SvcNum+"&SvcMgmtNum="+SvcMgmtNum;
    frmPopup.PostParam.value = Param;
	
    if (SvcCd == 'T') {
	
		if (frm.tabletCertConfirmYN.value == 'Y') {
			frm.target = "ifr_hidden";
			frm.action = "/normal.do?serviceId=S_MUPT0019&viewId=V_COMM1001&thisViewId=V_MUPT3001"; //doMultiSvcTabletPcInsert()
			frm.thisViewId.value = "V_MUPT3001";
			frm.UP_CD.value = "REGCERT";
			frm.submit();
			
		}
		else {
			alert("�º� ��ȣ ������ ���� �����̽��ϴ�. SMS/�ſ�ī��/������������� ������ ��������.");
			return;
		}
		
		top.location.href = "https://webzone.tworld.co.kr/normal.do?serviceId=S_MUPT0002&viewId=V_MUPT0001";
		
		
	}else {		
		
		frmPopup.SvcCd.value = SvcCd;
		
		window.open('','addMemberInfo','toolbar=no,width=615,height=550,status=no,menubar=no,scrollbars=no,resizable=no'); //530
   		frmPopup.target = "addMemberInfo";
	
		//frmPopup.target = "ifr_hidden";
		frmPopup.thisViewId.value = "V_MUPT3002";
		frmPopup.returnViewId.value = "V_MUPT3000";
		frmPopup.action = "/normal.do?serviceId=S_CERT0004&viewId=V_COMM1001";
		frmPopup.submit();
	}
}

// ��ȸ�� ����
function multiSvcDel(idx, para2) {
	frm = document.frmMain;
	para2 = para2 + "&SvcCd=" + frm.MSSvcCd[idx].value + "&SvcNum=" + frm.MSSvcNum[idx].value + "&SvcMgmtNum=" + frm.MSSvcMgmtNum[idx].value;

    if(confirm("�����Ͻðڽ��ϱ�?\n�����Ͻø�, �ش� ��ȭ��ȣ�� ��ȸ�� ���� �̿��� �Ұ����մϴ�."))
    {
        linkPost("/normal.do?serviceId=S_MUPT0011&viewId=V_COMM1001", para2, "Y");
    }
}


// ��ȸ�� ����
function multiSvcDel(idx, para2, para3 ) {
	frm = document.frmMain;
	para2 = para2 + "&SvcCd=" + frm.MSSvcCd[idx].value + "&SvcNum=" + frm.MSSvcNum[idx].value + "&SvcMgmtNum=" + frm.MSSvcMgmtNum[idx].value;

    if(confirm("�����Ͻðڽ��ϱ�?\n�����Ͻø�, �ش� ��ȭ��ȣ�� ��ȸ�� ���� �̿��� �Ұ����մϴ�."))
    {
        linkPost("/normal.do?serviceId=S_MUPT0011&viewId=V_COMM1001", para2, para3 );
    }
}



function linkPost(LinkPage, Param, HiddenGbn) {	// HiddenGbn : "Y" - ��ȸ�� ����, "N" - "ȸ��Ż��"  , "P" - " ��ȸ�� �߰� �˾�"
    frm = document.PopupForm;
    frm.PostParam.value = Param;
    if ( HiddenGbn == "Y" ) {
	    frm.thisViewId.value = "V_MUPT0001";
	    frm.target = "ifr_hidden";
	} else if ( HiddenGbn == "P"  ) { 
	    frm.thisViewId.value = "V_MUPT6001";
	    frm.target = "ifr_hidden";
	} else
	{
    	frm.target = "_self";
	}
    frm.action      = LinkPage;
    frm.submit();
}

// ��ȸ�� ��ȣ�� ��ǥ��ȣ�� ����
function multiSvcToMager(idx) {
    var sGubun;

	svc_num1    =   document.frmMain.MSIdx1[idx].value;
	svc_num2    =   document.frmMain.MSIdx2[idx].value;
	svc_num3    =   document.frmMain.MSIdx3[idx].value;
	SvcMgmtNum  =   document.frmMain.MSSvcMgmtNum[idx].value;

    if(confirm(svc_num1 + "-" + svc_num2 + "-" + svc_num3 + "��(��) ��ǥȸ������ ���� �Ͻðڽ��ϱ�?"))
    {
        if (svc_num3.length == 5){
            sGubun = 'D';
        } else {
            sGubun = 'C';
			//��ȸ�������� 3�ڸ����ΰ�� 0���� �����ְ� ����
			if (svc_num2.length == 3) svc_num2 = "0" + svc_num2;
        }

        frm = document.MultiForm;
        frm.SvcCd.value = sGubun;
        frm.SvcNum1.value  =   svc_num1;
        frm.SvcNum2.value  =   svc_num2;
        frm.SvcNum3.value  =   svc_num3;
        frm.SvcMgmtNum.value  =   SvcMgmtNum
        frm.target = "ifr_hidden";
        frm.submit();
    }
}

function memberInfo(ReqInd, MultiCnt)
{
	var frmPopup = document.PopupForm;
	var frm = document.frmMain;
    var SvcNum1,SvcNum2,SvcNum3,SvcCd;
    var SocSecNum,UserId,UserName,returnViewId;
    if ( !checkSvcNo(frm) ) return;

    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
    
    SiteCd      =	frm.SiteCd.value;
    SvcNum1     =	frm.SvcNum1.value;
    SvcNum2     =	frm.SvcNum2.value;
    SvcNum3     =	frm.SvcNum3.value;
    if ( SvcCd == "D" ) {
	    SvcNum1     =	frm.DmbNum1.value;
	    SvcNum2     =	frm.DmbNum2.value;
	    SvcNum3     =	frm.DmbNum3.value;
    }else if(SvcCd == "T"){
		SvcNum1     =	frm.DmbNum1.value;
	    SvcNum2     =	frm.DmbNum2.value;
	    SvcNum3     =	frm.DmbNum3.value;
	}
	
    if ( ReqInd != "UPDATE" ) {
		SocSecNum   =	frm.SocSecNum.value;
		UserId      =	frm.UserId.value;
		UserName    =	frm.UserName.value;
    } else {
		SocSecNum   =	"";
		UserId      =	"";
		UserName    =	"";
    }

    // ��ȸ����ȣ üũ
    if ( eval(MultiCnt) > 0 ) {
		var chkNum1,chkNum2,chkNum3;
		var inputNum1,inputchkNum2,inputchkNum3,inputSvcCd;
		chkNum1 = SvcNum1;
		chkNum2 = SvcNum2;
		chkNum3 = SvcNum3;
	   	if ( SvcCd == "C" && chkNum2.length == 3 )
			chkNum2 = "0" + chkNum2;
	
	    for( i=1; i<frm.MSSvcCd.length; i++) {
	    	inputSvcCd = frm.MSSvcCd[i].value;
	    	inputNum1 = frm.MSIdx1[i].value;
	    	inputNum2 = frm.MSIdx2[i].value;
	    	inputNum3 = frm.MSIdx3[i].value;
	
	    	if ( inputSvcCd == "C" && inputNum2.length == 3 )
				inputNum2 = "0" + inputNum2;
	
		    if ( inputSvcCd == SvcCd && inputNum1 == chkNum1 && inputNum2 == chkNum2 && inputNum3 == chkNum3 )
		    {
		    	alert("�߰�ȸ���� ��ϵǾ��ִ� ��ȣ�Դϴ�.\n\n��ǥȸ������ �����Ͻ� ��� �߰�ȸ���� ��ǥȸ������ ���� ��ư�� Ŭ���ϼ���.");
		    	return;
		    }
	    }
    }

	frmPopup.target = "ifr_hidden";
    Param = "ReqSite=" + ReqInd + "&UP_CD=CHKSVCNO&SiteCd=" +SiteCd+"&SvcCd="+SvcCd+"&SvcNum1="+SvcNum1 + "&SvcNum2="+SvcNum2+"&SvcNum3="+SvcNum3+"&SocSecNum="+SocSecNum+"&UserId="+UserId+"&UserName="+UserName;
   
	frmPopup.PostParam.value = Param;
    frmPopup.thisViewId.value = "V_MUPT0001";
    frmPopup.returnViewId.value = "V_MUPT0003";
    frmPopup.action = "/normal.do?serviceId=S_CERT0004&viewId=V_COMM1001&pageFlag=upUSER";
    frmPopup.submit();
}


function memberInfoTablet(ReqInd, MultiCnt)   //2011-05-19  �º���� �����߰��� ���� ����(��ǥ��ȣ �����ϱ� Ŭ����)
{
	
	var SvcNum1,SvcNum2,SvcNum3;
	var frm = document.frmMain;
	
	if ( !checkTabletPcSvcNo(frm) ) return;	    
	    
	for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
	    
    SvcNum1     =	frm.TSvcNum1.value;
    SvcNum2     =	frm.TSvcNum2.value;
    SvcNum3     =	frm.TSvcNum3.value;
	    
	// ��ȸ����ȣ üũ
    if ( eval(MultiCnt) > 0 ) {
		var chkNum1,chkNum2,chkNum3;
		var inputNum1,inputchkNum2,inputchkNum3,inputSvcCd;
		chkNum1 = SvcNum1;
		chkNum2 = SvcNum2;
		chkNum3 = SvcNum3;
	   	if ( SvcCd == "T" && chkNum2.length == 3 )
			chkNum2 = "0" + chkNum2;
	
	    for( i=1; i<frm.MSSvcCd.length; i++) {
	    	inputSvcCd = frm.MSSvcCd[i].value;
	    	inputNum1 = frm.MSIdx1[i].value;
	    	inputNum2 = frm.MSIdx2[i].value;
	    	inputNum3 = frm.MSIdx3[i].value;
	
			//alert("inputSvcCd===" + inputSvcCd + ", inputNum1=="+ inputNum1 + ", inputNum2==" + inputNum2 + ", SvcCd==" + SvcCd + ", inputNum1==" + inputNum1 + ",inputNum2==" + inputNum2   );
	
	    	if ( inputSvcCd == "T" && inputNum2.length == 3 )
				inputNum2 = "0" + inputNum2;
	
		    //if ( inputSvcCd == SvcCd && inputNum1 == chkNum1 && inputNum2 == chkNum2 && inputNum3 == chkNum3 )
		    if ( inputNum1 == chkNum1 && inputNum2 == chkNum2 && inputNum3 == chkNum3 )
		    {
		    	alert("�߰�ȸ���� ��ϵǾ��ִ� ��ȣ�Դϴ�.\n\n��ǥȸ������ �����Ͻ� ��� �߰�ȸ���� ��ǥȸ������ ���� ��ư�� Ŭ���ϼ���.");
		    	return;
		    }
	    }
    }	    
	    
    frm.thisViewId.value = "V_MUPT0001" ;
    frm.ReqSite.value=ReqInd;
    frm.UP_CD.value="CHKSVCNO";
    //frm.target = "ifr_hidden";
    frm.action = "/normal.do?serviceId=S_CERT0004&viewId=V_COMM1001&pageFlag=upUSER";
    frm.submit(); 
}


function popupOpen(LinkGbn)	//�޴��� �� DMB ������ ���� Ȯ��////////
{
    var frmPopup = document.PopupForm;
    var frm = document.frmMain;

    var SvcNum1,SvcNum2,SvcNum3;
    if ( !checkSvcNo(frm) ) return;
    for( i=0; i<frm.SvcCd.length; i++) { 
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
    frmPopup.SvcCd.value	=	SvcCd;
    frmPopup.SvcNum1.value	=	frm.SvcNum1.value;
    frmPopup.SvcNum2.value  =	frm.SvcNum2.value;
    frmPopup.SvcNum3.value  =	frm.SvcNum3.value;
    frmPopup.DmbNum1.value  =	frm.DmbNum1.value;
    frmPopup.DmbNum2.value  =	frm.DmbNum2.value;
    frmPopup.DmbNum3.value  =	frm.DmbNum3.value;
    
    //20111212 �º� ������ ��� ����
    var TFlag ="";
    if(SvcCd=='T')
    {
	    frmPopup.SvcNum1.value	=	frm.TSvcNum1.value;
	    frmPopup.SvcNum2.value  =	frm.TSvcNum2.value;
	    frmPopup.SvcNum3.value  =	frm.TSvcNum3.value;
	    TFlag ="tablet";       
	 }   


    // ���������� ���� ����
    if ( LinkGbn == "0" ) {	
		if(frmPopup.SvcNum.value == ""){
			window.open('','memberInfoTarget'+LinkGbn,'toolbar=no,width=650,height=470,status=no,menubar=no,scrollbars=no,resizable=no');
	    	frmPopup.target = 'memberInfoTarget'+LinkGbn;
		}
    	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3001";
    } else if ( LinkGbn == "1" ) {
		if(frmPopup.SvcNum.value == ""){
			window.open('','memberInfoTarb'+LinkGbn,'toolbar=no,width=650,height=470,status=no,menubar=no,scrollbars=no,resizable=no');
	    	frmPopup.target = 'memberInfoTarb'+LinkGbn;
		}
    	frmPopup.action = "/normal.do?serviceId=S_AUTH0003&viewId=V_AUTH3000&TFlag="+TFlag;
    } else if ( LinkGbn == "2" ) {
    	frmPopup.target = "ifr_hidden";
    	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_AUTH0000&SiteCd="+SiteCd+"&pageGubun=mupt";
    } else if ( LinkGbn == "3" ) {
		window.open('','memberInfoTarget'+LinkGbn,'toolbar=no,width=480,height=343,status=no,menubar=no,scrollbars=no,resizable=no');

    	frmPopup.target = 'memberInfoTarget'+LinkGbn;
    	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT1003";
    } else if ( LinkGbn == "4" ) {
		window.open('','memberInfoTarget'+LinkGbn,'toolbar=no,width=615,height=500,status=no,menubar=no,scrollbars=no,resizable=no');

    	frmPopup.target = 'memberInfoTarget'+LinkGbn;
    	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3002";
    } else if ( LinkGbn == "5" ) {
    	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3001&LinkGbn=5";
    } 

    frmPopup.submit();
}


function tabletPopupOpen()	//2011-05-19  �º���� ��ǥ��ȣ ���� �˾�
{
    var frmPopup = document.PopupForm;
    var frm = document.frmMain;

    var SvcNum1,SvcNum2,SvcNum3;
    if ( !checkSvcNo(frm) ) return;
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
    frmPopup.SvcCd.value	=	SvcCd;
    frmPopup.SvcNum1.value	=	frm.TSvcNum1.value;
    frmPopup.SvcNum2.value  =	frm.TSvcNum2.value;
    frmPopup.SvcNum3.value  =	frm.TSvcNum3.value;

    // ���������� ���� ����
	tabletpcpop = window.open('','tabletpcpop','toolbar=no,width=555,height=320,status=no,menubar=no,scrollbars=no,resizable=no');
	//2011-06-22 �˾��̸� ���� (����� �ʿ�)

   	frmPopup.target = "tabletpcpop";
   	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3003";

    frmPopup.submit();
    
    
}
/*
function popupOpenMultiSvc(usimChk)	//��ȸ�� �߰� �˾� ( referer ���� �����ϱ� ���� popup ó�� )  ////////
{
    var frmPopup = document.PopupForm;
    var frm = document.frmMain;

    var SvcNum1,SvcNum2,SvcNum3;
    if ( !checkSvcNo(frm) ) return;
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
    frmPopup.SvcCd.value	=	SvcCd;
    frmPopup.SvcNum1.value	=	frm.SvcNum1.value;
    frmPopup.SvcNum2.value  =	frm.SvcNum2.value;
    frmPopup.SvcNum3.value  =	frm.SvcNum3.value;
    frmPopup.DmbNum1.value  =	frm.DmbNum1.value;
    frmPopup.DmbNum2.value  =	frm.DmbNum2.value;
    frmPopup.DmbNum3.value  =	frm.DmbNum3.value;

    // ���������� ���� ����
	window.open('','memberInfo','toolbar=no,width=615,height=550,status=no,menubar=no,scrollbars=no,resizable=no'); //530

   	frmPopup.target = "memberInfo";
   	if(usimChk != '')
   	{
	   	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3002&usimChk="+usimChk;
	}else
	{
	   	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3002";
	}  	

    frmPopup.submit();
}
*/
function popupOpenMultiSvc(usimChk)	//��ȸ�� �߰� �˾� ( referer ���� �����ϱ� ���� popup ó�� )  ////////
{
    var frmPopup = document.PopupForm;
    var frm = document.frmMain;
    var SvcNum,SvcNum1,SvcNum2,SvcNum3;

    if ( !checkSvcNo(frm) ) return;
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
    	
	frmPopup.SvcCd.value	=	SvcCd;
			
	if(SvcCd=='C'){
	    frmPopup.SvcNum1.value	=	frm.SvcNum1.value;
	    frmPopup.SvcNum2.value  =	frm.SvcNum2.value;
	    frmPopup.SvcNum3.value  =	frm.SvcNum3.value;
		
	}
	if(SvcCd=='T'){
		
	    frmPopup.TSvcNum1.value	=	frm.TSvcNum1.value;
	    frmPopup.TSvcNum2.value  =	frm.TSvcNum2.value;
	    frmPopup.TSvcNum3.value  =	frm.TSvcNum3.value;
	    TFlag ="tablet";       
		
	}
	if(SvcCd=='T'){
		
	    frmPopup.DmbNum1.value	=	frm.DmbNum1.value;
	    frmPopup.DmbNum1.value  =	frm.DmbNum2.value;
	    frmPopup.DmbNum1.value  =	frm.DmbNum3.value;
	}	
	
    // ���������� ���� ����
	window.open('','memberInfoInsert','toolbar=no,width=615,height=550,status=no,menubar=no,scrollbars=no,resizable=no'); //530
   	frmPopup.target = "memberInfoInsert";
	
   	if(usimChk != '')
   	{
	   	frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3002&usimChk="+usimChk;
	}else
	{
		frmPopup.action = "/normal.do?serviceId=SDUMMY0001&viewId=V_MUPT3001";
	}  	

    frmPopup.submit();
}


function reg_conform(Ind)
{
    if ( Ind == "Y" ) {
        return confirm("ȸ�� ������ ������ �Ŵ� ���� SMS 100���� �̿� �Ͻ� �� �ֽ��ϴ�.\n ȸ�� ������ �����ðڽ��ϱ�?");
    }
    return false; 
}

function checkMember()	//������ Ȯ�� ���� �˻�
{
    var frm	= document.frmMain;
    var sSvcCd;
    var chkSvcNum1, chkSvcNum2, chkSvcNum3;
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            sSvcCd = frm.SvcCd[i].value;
        }
    }

    if ( sSvcCd == "" ) {	//��ȭ���� ���ý� ó��
    	frm.SvcNumCheck.value == "NON"
    }
	
    if (frm.SvcNumCheck.value == "UP")		//INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��, NON:��ȭ��������
    {
    	if( sSvcCd == 'C' )
    	{
    		chkSvcNum1 = frm.SvcNum1.value;
    		chkSvcNum2 = frm.SvcNum2.value;
    		chkSvcNum3 = frm.SvcNum3.value;
    	}
    	if( sSvcCd == 'T' )  //2011-05-24  �º���� �߰��� ���� ����
    	{
    		chkSvcNum1 = frm.TSvcNum1.value;
    		chkSvcNum2 = frm.TSvcNum2.value;
    		chkSvcNum3 = frm.TSvcNum3.value;
    	}    	

    	if( sSvcCd == 'D' )
    	{
    		chkSvcNum1 = frm.DmbNum1.value;
    		chkSvcNum2 = frm.DmbNum2.value;
    		chkSvcNum3 = frm.DmbNum3.value;
    	}
		
		//alert("sSvcCd===" + sSvcCd + "\n  , chkSvcNum1==" + chkSvcNum1 + ", frm.chkSvcNum1.value===  " + frm.chkSvcNum1.value + "\n    , chkSvcNum2==" + chkSvcNum2 + ", frm.chkSvcNum2.value===  " + frm.chkSvcNum2.value  + "\n    , chkSvcNum3==" + chkSvcNum3 + ", frm.chkSvcNum3.value===  " + frm.chkSvcNum3.value  );
    	/*
		if(sSvcCd == 'T'){
			
			if(document.frmMain.tabletCertConfirmYN.value != 'Y'){
				alert(" ȸ���߰��� [����] ��ư�� Ŭ���Ͽ�\n�������� �� ȸ���߰� �����մϴ�.");
				return;				
			}
			
			if (chkSvcNum1 != frm.chkSvcNum1.value || chkSvcNum2 != frm.chkSvcNum2.value || chkSvcNum3 != frm.chkSvcNum3.value) {
				alert(" ȸ���߰��� [����] ��ư�� Ŭ���Ͽ�\n�������� �� ȸ���߰� �����մϴ�.");
				return;				
			}
			
		}else{
		*/
		
		if( chkSvcNum1 != frm.chkSvcNum1.value || chkSvcNum2 != frm.chkSvcNum2.value || chkSvcNum3 != frm.chkSvcNum3.value )
    	{
			//alert("�Է��Ͻ� �̵���ȭ��ȣ, �º���ȣ �Ǵ� ���� DMB ��ȣ ������ ������ ���� Ȯ�� ��ư�� ������ Ȯ���ϼ���");
	    	if(sSvcCd == 'C'){
				alert(" ȸ���߰��� [����] ��ư�� Ŭ���Ͽ�\n�������� �� ȸ���߰� �����մϴ�.");
				frm.SvcNum1.focus();
			}else if(sSvcCd == 'D'){
				frm.DmbNum1.focus();				
			}
	        return false;
    	}
			
		//}
		
    	
    	//2011-06-01  ��ȸ���ΰ��, ����������, ���� ��ǥ��ȣ �Է��� [�����ϱ�]��ư ������� [Ȯ��]������ ��� 
    	// �������� ��ȸ������ �ٲ�����,  ���� ��ȣ�ϰ���  ������� ó���Ѵ�.
    	if( chkSvcNum1 == frm.chkSvcNum1.value && chkSvcNum2 == frm.chkSvcNum2.value && chkSvcNum3 == frm.chkSvcNum3.value )
    	{
    	    //frm.SvcNumCheck.value = "INI";      //INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
    	    frm.SvcNumCheck.value = "CRM";      //INI:�ʱ�, UP:���񽺹�ȣ ����, CRM:������ Ȯ��
    	    frm.SvcMgmtNum.value = frm.defaultSvcMgmtNum.value;
    	    frm.chkSameData.value = "Y";    //��ǥȸ������������ ��Ÿ���� ��     
    	}
    }

	return true;
}

function Ment()		//RegMainView.jsp(������ �ű԰��� ȭ�� id �ߺ��˻� ��)
{
    alert("���̵� �ߺ�Ȯ�� �� ��� �����մϴ�.");
    return;
}


function searchId(frm, LinkUrl)	//���̵� �ߺ� üũ
{
    if ( !checkID(frm) ) return
    var UserId = frm.UserId.value;
    frm = document.HiddenFrm;
    frm.UserId.value = UserId
    window.open('','idcheck','toolbar=no,width=480,height=310,status=no,menubar=no,scrollbars=no,resizable=no');
    frm.target = "idcheck";
    frm.action = LinkUrl;
    frm.submit()
}

function changeOCB(ViewInd)	//OCB ���� �κ� ���ְ� OCB���� ��û���θ� �̽�û(N)���� ����
{
    var frm = document.frmMain;

	if (ViewInd == "Y" )	{	//OCB ���� ȭ�� ������
	    document.getElementById('OCBView').style.display = "none";
    } else {
	    document.getElementById('OCBView').style.display = "none";
    }
	
    return;
}

function checkMemberInfo(frm)	//ȸ������ ����/���� �� ��Ÿ���� �˻�
{
	var SvcNumChk = frm.defaultSvcMgmtNum.value;
	var tabletChk = frm.strFirstPhoneTabletPcYn.value;
	var SvcCdChk = frm.SvcCdChk.value;
	var SvcCd;
	
    for( i=0; i<frm.SvcCd.length; i++) {
        if(frm.SvcCd[i].checked) {
            SvcCd = frm.SvcCd[i].value;
        }
    }
	
	if(tabletChk == "Y"){
		
		if(SvcCd == "C" || SvcCd == "D"){		
		    // �Է� ���� ���񽺹�ȣ �˻�
		    if ( !checkSvcNo(frm) ) return;	
		}else{
			// �Է� ���� ���񽺹�ȣ �˻�
		    if ( !newCheckSvcNo(frm) ) return;
		}
	}else{
		
		if(SvcNumChk == "" || SvcCdChk != SvcCd){		
		    // �Է� ���� ���񽺹�ȣ �˻�
		    if ( !checkSvcNo(frm) ) return;	
		}else{
			// �Է� ���� ���񽺹�ȣ �˻�
		    if ( !newCheckSvcNo(frm) ) return;
		}
	}
	
	
    // �Է� ���� ���� �˻�
    var inputDate = frm.BirthYear.value + frm.BirthMon.value + frm.BirthDay.value;
    if(inputDate > getToDay){
        alert('�Է��Ͻ� ������ Ȯ���Ͻñ� �ٶ��ϴ�.');
        return false;
    }

    var checkboxvalue;

    if (frm.BirthInd[0].checked) {
        checkboxvalue = frm.BirthInd[0].value;
    } else {
        checkboxvalue = frm.BirthInd[1].value;
    }

    if ( frm.BirthInd[0].checked ) {
        if(checkdate(frm.BirthYear.value,frm.BirthMon.value,frm.BirthDay.value ) == false)
        {
            alert("��ȿ�� ��� ���ڰ� �ƴմϴ�.\n ��������� Ȯ�����ּ���.");
            frm.BirthYear.focus();
            return false;
        }
    } else {
        if(day_deal(frm.BirthYear.value,frm.BirthMon.value,frm.BirthDay.value ) == false)
        {
            alert("��ȿ�� ���� ���ڰ� �ƴմϴ�.\n ��������� Ȯ�����ּ���.");
            frm.BirthYear.focus();
            return false;
        }
    }

	if ( !checkMember() )	return false;
    //�̸��� �ǽð� �˻簡 ���� �Ǿ����� �˻�
    if ( !checkMailEnd(frm) ) return false;
    
	return true;
}

//14�� �̸� �̿� ����
function checkLegalSvcNum1()	//�����븮�� �̵���ȭ��ȣ 011/017 ���ý�
{
    var frm	= document.frmMain;
	
    if ( frm.LegalSvcNum1.value == "20" || frm.LegalSvcNum1.value == ""  ){
	    alert("������ȭ ���й�ȣ�� ���� �Ͻð� �Է� �ϼ���.");
    	frm.LegalSvcNum1.focus();
    }
   	return;
}

///////email ��Ÿ��///////////
function changeLegalMail(frm)
{
    if (frm.LegalEmailDomain.value == "0")
    {
        LegalmailShow.style.display="";
        frm.LegalEmailDomain1.focus();
    }
    else
    {
        LegalmailShow.style.display = "none";
    }
}

function checkeLegalMailAddr(frm)	//�����븮�� ���� �˻�
{
	var emailAddr;
	var emailValue;
	if (frm.LegalEmailId.value == "")
	{
		alert("�̸��� �ּҸ� �Է��ϼ���");
		frm.LegalEmailId.focus();
		return false;
	}
	if (frm.LegalEmailDomain.value == "0")
	{
		if (frm.LegalEmailDomain1.value == "")
		{
			alert("�̸��� �ּҸ� �Է��ϼ���");
			return false;
		}
		if(! ignoreSpaces(frm.LegalEmailId.value))
		{
			alert("�̸��� �ּҿ� ������ �����ϼ̽��ϴ�. ��Ȯ�� �Է��ϼ���");
			frm.LegalEmailId.focus();
			return false;
		}
		if(! ignoreSpaces(frm.LegalEmailDomain1.value))
		{
			alert("�̸��� �ּҿ� ������ �����ϼ̽��ϴ�. ��Ȯ�� �Է��ϼ���");
			frm.LegalEmailDomain1.focus();
			return false;
		}
		if( !checkEmail(frm.LegalEmailId.value+"@"+frm.LegalEmailDomain1.value) )
		{
			alert("�̸��� �ּҰ� �ùٸ��� �ʽ��ϴ�.");
			frm.LegalEmailId.focus();
			return false;
		}
		emailAddr = frm.LegalEmailId.value+"@"+frm.LegalEmailDomain1.value;
		emailValue = parseDomain(emailAddr);
		if (DomainCheck(emailValue))
		{
			alert("�̸��� �ּҰ� �ùٸ��� �ʽ��ϴ�.");
			frm.LegalEmailId.focus();
			return false;
		}
	}
	else
	{
		if( !checkEmail(frm.LegalEmailId.value+"@"+frm.LegalEmailDomain.value) )
		{
			alert("�̸��� �ּҰ� �ùٸ��� �ʽ��ϴ�.");
			frm.LegalEmailId.focus();
			return false;
		}
		emailAddr = frm.LegalEmailId.value+"@"+frm.LegalEmailDomain.value;
		emailValue = parseDomain(emailAddr);

		if (DomainCheck(emailValue))
		{
			alert("�̸��� �ּҰ� �ùٸ��� �ʽ��ϴ�.");
			frm.LegalEmailId.focus();
			return false;
		}
	}
	return true;

}

	function checkLegalJuminName() {		//�����븮�� �ֹι�ȣ, �̸� �Է½� �˻�
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
			if ( includeSpace > 0 ) {
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


function checkLegalInfo(frm)	//�븮�� ���� Ȯ��
{
    var val;
    if( !checkLegalJuminName())	return false;

    /*
    if (! ageCheck(20,String(frm.LegalSecNum1.value+frm.LegalSecNum2.value)))
    {
        alert("�����븮��(�θ��,ģ����,�İ��� ��)�� ��20���̻� �����մϴ�.\n�����븮��(�θ��,ģ����,�İ��� ��)�� Ȯ���Ͽ��ֽʽÿ�");
        frm.LegalSecNum1.focus();
        return false;
    }
    */

    var  SocSecNum1 =  frm.SocSecNum1.value;
    var  SocSecNum2_firNum =  frm.SocSecNum2_firNum.value;    //���� 1 �ڸ� 
    var  LegalSecNum1 = frm.LegalSecNum1.value  ;
    var  LegalSecNum2 = frm.LegalSecNum2.value  ;

    var  SocSecNum1_sum = "19";
    var  LegalSecNum1_sum = "19";
    
    var  LegalSecNum2_firNum = LegalSecNum2.substring(0,1);
    
    //1,2 (�ܱ��� 5,6) => 1900 �⵵��    3,4 (�ܱ��� 7,8) => 2000�⵵��
    if(SocSecNum2_firNum == '3' || SocSecNum2_firNum == '4' || 
        SocSecNum2_firNum == '7' || SocSecNum2_firNum == '8' )
    {
    	SocSecNum1_sum = "20" + SocSecNum1;
    }else
    {
    	SocSecNum1_sum = "19" + SocSecNum1;
    }   
    
    if(LegalSecNum2_firNum == '3' || LegalSecNum2_firNum == '4' || 
       LegalSecNum2_firNum == '7' || LegalSecNum2_firNum == '8' )
    {
    	LegalSecNum1_sum = "20" + LegalSecNum1; 
    }else
    {
    	LegalSecNum1_sum = "19" + LegalSecNum1;
    }    
     
    var  legalAgeDiffer =  SocSecNum1_sum - LegalSecNum1_sum  ;
        
    //alert("SocSecNum1_sum==" + SocSecNum1_sum + "LegalSecNum1_sum==" + LegalSecNum1_sum + ", legalAgeDiffer===" + legalAgeDiffer );
	//alert(ageCheck(20,String(LegalSecNum1_sum+frm.LegalSecNum2.value)) );

	//2011-03-11  ����
    if (! ageCheck(20,String(frm.LegalSecNum1.value+frm.LegalSecNum2.value))   ||  legalAgeDiffer < 140000 )
    {
        alert("�븮��(�θ��, �İ���)�� ���� ���� ������ ���Ͽ� �����븮���� ��20�� �̻��̸鼭\n�̼����� ȸ���� 14�� �̻� ���̰� ���� ���� �����ϰ� �ֽ��ϴ�.\n\n�� ���ǿ��� �ұ��ϰ� ���� �����븮���� ��쿡�� �����ͷ� ���� �ֽñ� �ٶ��ϴ�.");
        frm.LegalSecNum1.focus();
        return false;
    }    

    /*
    if (frm.LegalRelCd[0].checked == false && frm.LegalRelCd[1].checked == false)
    {
        alert("�����븮�� ���踦 �����ϼ���");
        return false;
    }

    LegalSvcNum	=	frm.LegalSvcNum1.value + frm.LegalSvcNum2.value + frm.LegalSvcNum3.value;
    if (frm.LegalSvcNum1.value != "" && LegalSvcNum.length < 9)
    {
        alert("���� �븮�� ����ó�� �����ϼ���");
        frm.LegalSvcNum1.focus();
        return false;
	}

	if ( !checkeLegalMailAddr(frm) )	{
		frm.LegalEmailId.focus();
		return false;
	}
	*/
    return true;
}

//14�� �̸� �̿� ����
