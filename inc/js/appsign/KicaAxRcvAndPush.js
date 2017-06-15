
// �߰輭�� ����
//var g_SMPServerIP = "relay.signgate.com";
//var g_SMPServerPort = 443;
var g_SMPServerIP = "61.250.20.235";
var g_SMPServerPort = 9014;
var g_SMPNewApp = 1;

// �ؽ� �˰���
var g_HashAlg = "SHA1";



/*************************************************************************************************************/
// ��� : ������ �߱� �� ������ ���� ������ ���� ���� (�Ǽ����� ����)
/*************************************************************************************************************/
function SetCommonInfoFromVal()
{
	var CA_IP1	= "ca.signgate.com";
	var CA_IP2	= "ldap.signgate.com";
	var SG_CN	= "CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR";

	// �ش� OID ����(����Ʈ �� ������ ��å�� ���� ����ϴ� ������ ����)
	var POLICIES= "1.2.410.200004.5.2.1.2|1.2.410.200004.5.2.1.1|1.2.410.200004.5.1.1.5|1.2.410.200004.5.1.1.7|1.2.410.200005.1.1.1|1.2.410.200005.1.1.5|1.2.410.200004.5.3.1.9|1.2.410.200004.5.3.1.2|1.2.410.200004.5.3.1.1|1.2.410.200004.5.4.1.1|1.2.410.200004.5.4.1.2|1.2.410.200012.1.1.1|1.2.410.200012.1.1.3";

	// �ش� OID�� ����ϰ� �ʹٸ� �Ʒ� �Ķ���� "yes" -> "no" �� ����
	document.KicaAX.SetCommonInfoFromVal( CA_IP1, 4502, CA_IP2, 389, CA_IP2, 389, SG_CN, "yes", POLICIES );
}

/*************************************************************************************************************/
// ���: ������ ����Ʈ������ �������� */
// ���: SG_init_user �Ķ���� 9 �� ����
/*************************************************************************************************************/
function SMP_PushCert()
{
	var	dn = "";

	// ������ ���� �� ���� ���� ����
	SetCommonInfoFromVal();

	// �߰輭�� ����
	var ret = document.KicaAX.SetCommonInfoFromServerInfo( g_SMPServerIP, g_SMPServerPort);
	if( ret != 0 )
		return;

	ret = document.KicaAX.SetCommonInfoFromNewApp(g_SMPNewApp);
	if( ret != 0 )
		return;
	
	// ��ȣ 8 ���� (������ �������� ����)
	// (���н� ���������� �����޽��� ���)
	dn = document.KicaAX.SG_init_user( 9, "" );

	if( dn == "" || dn == null ) 
		return;

	alert( "����Ʈ�� ������ �������� : " + "����" );
}

/*************************************************************************************************************/
// ���: ������ ����Ʈ������ �������� */
// ���: SG_init_user �Ķ���� 10 �� ����
/*************************************************************************************************************/
function SMP_RecvCert()
{
	var	dn = "";

	// ������ ���� �� ���� ���� ����
	SetCommonInfoFromVal();

	// �߰輭�� ����
	var ret = document.KicaAX.SetCommonInfoFromServerInfo( g_SMPServerIP, g_SMPServerPort);
	if( ret != 0 )
		return;

	ret = document.KicaAX.SetCommonInfoFromNewApp(g_SMPNewApp);
	if( ret != 0 )
		return;

	// ��ȣ 10 ���� (������ �������� ����)
	// (���н� ���������� �����޽��� ���)
	dn = document.KicaAX.SG_init_user( 10, "" );

	if( dn == "" || dn == null ) 
		return;

	alert( "����Ʈ�� ������ �������� : " + "����" );
}



/*************************************************************************************************************/
// ���			: VID ���� 													 
// ���� ��		: 0�� �ƴϸ� �ſ�Ȯ�� ����
// ���: �ֹι�ȣ �Է�â�� �ٿ��� ����� �Է��� ���� VID ������ �����Ѵ�. 												
/*************************************************************************************************************/
function VerifyIdentify()
{
	SetCommonInfoFromVal();

	var ret = document.KicaAX.VerifyIdentify( "" ,"" );
	if( ret != 0 ) 
		return ;
}


/*************************************************************************************************************/
// ���			: ������ ��ȣ Ȯ��										 
//				  1. ����: ���ڼ��� �� (base64 ���ڵ� ���ڿ�),
//				  2. ����: null , ""	
// ���: ������ ��й�ȣ�� �̿��Ͽ� ���ڼ����� �õ������ν� ���� ���¿� ���� ������ ��ȣȮ�� ���� üũ									
/*************************************************************************************************************/
function CheckPasswd()
{
	SetCommonInfoFromVal();
    var ret = document.KicaAX.InitializeUser();
    if( ret != 0 )
        return;
   
    var dn = document.KicaAX.GetUserDN();
    
    var signData = document.KicaAX.PKeySignData( dn, g_HashAlg, dn, "" );
    
	if (signData == null || signData == "")
    	return;
	
	alert( "������ ��й�ȣ�� ��ġ�մϴ�." );
}

/*************************************************************************************************************/
// ���			: ������ ��ȣ����											 
// ���� ��		: 
//				  1. ����: 0
//				  2. ����: 0 ���� ��
// ���: 						
/*************************************************************************************************************/
function ChangePrivKeyPwd()
{
	SetCommonInfoFromVal();
	var ret = document.KicaAX.ChangePrivKeyPwd();
	if(ret != 0 )
		return;


}

/*************************************************************************************************************/
// ���			: ������ ����									 
// ���� ��		: 
//				  1. ����: 0
//				  2. ����: 0 ���� ��
// ���: 						
/*************************************************************************************************************/
function ChangeMedia()
{    
	SetCommonInfoFromVal();
	var ret = document.KicaAX.ChangeMedia( "", "",0,0,"" );
	if( ret != 0 )
		return;
   

	alert( "���������簡 �����Ͽ����ϴ�." );
}

/*************************************************************************************************************/
// ���			: ������ ����								 
// ���� ��		: 
//				  1. ����: 0
//				  2. ����: 0 ���� ��
// ���: ������ ����â�� �ε��ϰ� ����Ʈ�� �������� ����Ŭ���Ͽ� ������ ������ Ȯ���Ѵ�.						
/*************************************************************************************************************/
function ShowCertInfo()
{
	SetCommonInfoFromVal();

	var ret = document.KicaAX.InitializeUser();
    if( ret != 0 )
        return;
}

/***************************************************************/
// �ش� ���� �̵� �̿��� ���ڼ��� ���� �׽�Ʈ
// ���:	���ڼ��� �� ���� �׽�Ʈ
/***************************************************************/
function VerifySignKey()
{
	/* 1. SetCommonInfoFromVal �Լ��� ȣ�� */
	SetCommonInfoFromVal();
	var strSign = "";

	// ����(������ ��)
	var strPlaintext = "signgate";
	
	var strUserDN = document.KicaAX.SG_init_user(0, "");
	if ( strUserDN == null || strUserDN == "" )
		return ;
	
	document.KicaAX.SetInitUserMedia(6); 

	/* 2. ���ڼ��� ���� */
	strSign = document.KicaAX.PKeySignData(strPlaintext, g_HashAlg, strUserDN, "");
	if( strSign == null || strSign  == "" )
	{
		alert("���ڼ��� �� ������ �����Ͽ����ϴ�.");
		return ;
	}

	/* 3. ���ڼ��� ���� */
	if( document.KicaAX.PKeyVerifyData(strPlaintext, strSign, g_HashAlg, strUserDN, "") != 0 )
	{
		alert("������ �ش� ��ü�� ������ Ű(����Ű,����Ű) �� ������ �����Ͽ����ϴ�.");
		return ;
	}

	alert("������ ���ڼ��� ������ �����Ͽ����ϴ�.")
}


/************************************************************************/
// ������ ��ȿ�� ���� �׽�Ʈ
// ���:	1. PKCS#7_Signed ���� �� ����
//			2. PKCS#7_Signed ���� �� ���� ��, ������ ��ȿ�� üũ�� ���ڼ��� �� ����		
// �߰�:	1. ���� ������ �Ӹ��ƴ϶� �뵵���ѿ� �������� ���� �����ϵ��� ���� �׽�Ʈ(OID Ȱ��ȭ("yes"))
//			2. RA�� ��û���� �ݿ�
/************************************************************************/
function ValidateCert()
{
	SetCommonInfoFromVal();
    var userDN = document.KicaAX.SG_init_user(0, "");
    if ( userDN == null || userDN == "" )
	{
		document.KicaAX.SetInitUserMedia(0);
		document.KicaAX.HSMFree();
		return ;
	}
   
    document.KicaAX.SetInitUserMedia(6);

	//64 byte ����(������ ���� ��)
	var strPlaintext = "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcd";
	
    // PKCS#7_signed �޽��� ����
    var signedData = document.KicaAX.SignData( strPlaintext , g_HashAlg, "");

	if( signedData  == null || signedData == "" )
	{
		document.KicaAX.SetInitUserMedia(0);
		document.KicaAX.HSMFree();
		return ;
	}
	
	//PKCS#7_Signed �޽��� ����
	var strRetPlaintext =  document.KicaAX.VerifysignSignature( signedData , g_HashAlg );
   
    if( strRetPlaintext == null || strRetPlaintext == "" )
    {
		document.KicaAX.SetInitUserMedia(0);
		document.KicaAX.HSMFree();
        return;
    }
	else if(strRetPlaintext != strPlaintext)
	{
		document.KicaAX.SetInitUserMedia(0);
		alert("�������� ��ȿ���� �ʽ��ϴ�.");
	}
	else
	{
		alert("������ �������� ��ȿ�� ������ �Դϴ�.")
	}

	//�ε�� HSM �޸� ����
	document.KicaAX.SetInitUserMedia(0);
	document.KicaAX.HSMFree();
}


/************************************************************************/
// PC �ð� ���߱�
// ���:	1. ���� �ǽ��� �ð��� ������ ��ġ��Ų��.
//			
// �߰�:	1. 
/************************************************************************/
function SetTime()
{
	SetCommonInfoFromVal();
    var ret = document.KicaAX.SetSystemTimeFromSrv();
    if ( ret == 0 )
    	alert( "PC �ð��� ���������� ����Ǿ����ϴ�." );
    
}

