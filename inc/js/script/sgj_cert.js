/** 
 * @fileoverview ������ ���� ���� ȹ�� �� �ſ�Ȯ�� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */

/**
* �ش� �������� ��ȿ���� ����<br>
* �⺻ CRL ������丮�� USER_HOME<br>
* strCert ���� null �ΰ�� ���ǿ� ����� �������� ��ȿ���� ����<br>
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return true �Ǵ� false
*/
function SGJ_checkCertValidity(strUserID, strCert)
{
	var SG = document.getElementById(object_id);

	if ( isNull(strUserID) || isNull(strCert))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertValidity()" );
		return false;
	}

	var bReturn = SG.checkCertValidity(strUserID, strCert );

	if ( !bReturn )
	{
		setErrorCode( GetLastErrMsg() );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertValidity()" );
		return bReturn;
	}
	return bReturn;
}

/**
* �������� ��ȿ���� ����
* strCert ���� null �ΰ�� ���ǿ� ����� �������� ��ȿ���� ����
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @param {String}crlPath CRL ���� ���
* @return true �Ǵ� false
*/
function SGJ_checkCertValidityWithPath( strUserID, strCert, crlPath )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strUserID) || isNull(strCert) || isNull(crlPath))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertValidity()" );
		return false;
	}

	var bReturn = SG.checkCertValidity(strUserID, strCert, crlPath);

	if ( !bReturn )
	{
		setErrorCode( GetLastErrMsg() );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertValidity()" );
		return bReturn;
	}
	return bReturn;
}


/**
* ������ ������� �ſ�Ȯ��
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}idn ������� �ֹι�ȣ �Ǵ� ����� ��ȣ
* @param {String}encRandom ��ȣȭ�� ������(BASE64 ���ڵ�)
* @return true �Ǵ� false
*/
function SGJ_checkCertUserIdentity( strUserID, idn, encRandom )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strUserID) || isNull(idn) || isNull(encRandom))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertUserIdentity()" );
		return false;
	}

	var bReturn = SG.checkCertUserIdentity( strUserID, idn, encRandom );

	if ( !bReturn )
	{
		setErrorCode( GetLastErrMsg() );
		setErrorMessage( "" );
		setErrorFunctionName( "checkCertUserIdentity()" );
		return bReturn;
	}
	return bReturn;
}



/**
* ���ǿ� ����� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}certType ����� �ϴ� ������ Ÿ��("SIGN" �Ǵ� "KM");
* @return {String}PEM Ÿ���� ������
*/
function SGJ_getCert( strUserID, certType )
{
	var SG = document.getElementById(object_id);

	var strCert = SG.getCert(strUserID, certType)

	if ( isNull(strCert))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "getCert()" );
		return "";
	}
	return strCert;
}

//������ū ���� �߰� �޼ҵ�========================================

/**
* ������ū�� ����� ���� ����� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}certType ����� �ϴ� ������ Ÿ��("SIGN" �Ǵ� "KM");
* @return {String}PEM Ÿ���� ������
*/
function SGJ_getBioUserCert( strUserID, certType )
{
	var SG = document.getElementById(object_id);

	var strCert = SG.getBioUserCert(strUserID, certType)

	if ( isNull(strCert))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getBioUserCert()" );
		return "";
	}
	return strCert;
}


/**
* ������ū ����� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}svrCert ��ȣȭ�� ���� ���� ������;
* @param {String}gonggoNum �����ȣ;
* @return {String}����� ������
*/
function SGJ_getAuthValue( strUserID, svrCert, gonggoNum )
{
	var SG = document.getElementById(object_id);

	var authValue = SG.getAuthValue(strUserID, svrCert, gonggoNum)

	if ( isNull(authValue))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getAuthValue()" );
		return "";
	}
	return authValue;
}


/**
* ������ū ��� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}keyId ��� ��ȣ(����û�� 01);
* @param {String}gonggoNum �����ȣ;
* @return {String}������ū ��� ������
*/
function SGJ_getBioGenDevAuth( strUserID, keyId, gonggoNum )
{
	var SG = document.getElementById(object_id);

	var devAuthValue = SG.getBioGenDevAuth( strUserID, keyId, gonggoNum )

	if ( isNull(devAuthValue))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getBioGenDevAuth()" );
		return "";
	}
	return devAuthValue;
}

/**
* ������ū ���� ����� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}������ū ���� ����ڷ�����
*/
function SGJ_getBioUserRandom( strUserID )
{
	var SG = document.getElementById(object_id);

	var random = SG.getBioUserRandom(strUserID)

	if ( isNull(random))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getBioUserRandom()" );
		return "";
	}
	return random;
}

/**
* ������ū ���� �ֹι�ȣ �Ǵ� ����� ��ȣ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}������ū ���� �ֹι�ȣ �Ǵ� ����ڹ�ȣ
*/
function SGJ_getBioUserIDN( strUserID )
{
	var SG = document.getElementById(object_id);

	var idn = SG.getBioUserIDN(strUserID)

	if ( isNull(idn))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getBioUserIDN()" );
		return "";
	}
	return idn;
}

/**
* ����Ű�� ��ȣȭ�� ������ū ���� �ֹι�ȣ �Ǵ� ����� ��ȣ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}����Ű�� ��ȣȭ�� ������ū ���� �ֹι�ȣ �Ǵ� ����ڹ�ȣ
*/

function SGJ_getEncryptedBioUserIDN( strUserID )
{
	var SG = document.getElementById(object_id);

	var idn = SG.getEncryptedBioUserIDN(strUserID)

	if ( isNull(idn))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getEncryptedBioUserIDN()" );
		return "";
	}
	return idn;
}

/**
* ������ū �ø��� ��ȣ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}������ū �ø��� ��ȣ
*/
function SGJ_getBioCSN( strUserID)
{
	var SG = document.getElementById(object_id);

	var csn = SG.getBioCSN(strUserID)

	if ( isNull(csn))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getBioCSN()" );
		return "";
	}
	return csn;
}
//������ū ���� �߰� �޼ҵ� ��========================================

/**
* ���� �������� ����� ��� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}������ ������
*/
function SGJ_getCertPath( strUserID )
{
	var SG = document.getElementById(object_id);

	var strCertPath = SG.getCertPath(strUserID);
	if ( isNull(strCertPath) )
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "getCertPath()" );
		return "";
	}
	return strCertPath;
}

/**
* ������ �ø���ѹ� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ�� ������
* @return {String}������ �ø��� �ѹ�
*/
function SGJ_getSerialNumber( strUserID, strCert )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strCert) )
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "getCertSerialNumber()" );
		return -1;
	}

	var nSerial = SG.getSerialNumber( strUserID, strCert );

	if ( nSerial < 0 )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertSerialNumber()" );
		return -1;
	}
	return nSerial;
}

/**
* �������� subjectDN ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� subjectDN
*/
function SGJ_getSubjectDN( strUserID, strCert )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strCert))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "getCertSubjectDN()" );
		return "";
	}

	var buf = SG.getSubjectDN( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertSubjectDN()" );
		return "";
	}

	return buf;
}

/**
* �������� IssuerDN ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� subjectDN
*/
function SGJ_getIssuerDN( strUserID, strCert )
{
	var SG = document.getElementById(object_id);

	if (isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertIssuerDN()" );
		return "";
	}

	var buf = SG.getIssuerDN(strUserID, strCert);
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertIssuerDN()" );
		return "";
	}

	return buf;
}

/**
* �������� ��ȿ���۽��� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� ��ȿ ���۽���
*/

function SGJ_getNotBefore( strUserID, strCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertNotBefore()" );
		return "";
	}

	var buf = SG.getNotBefore( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertNotBefore()" );
		return "";
	}

	return buf;
}

/**
* �������� ��ȿ������� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� ��ȿ �������
*/
function SGJ_getNotAfter( strUserID, strCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertNotAfter()" );
		return "";
	}

	var buf = SG.getNotAfter( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertNotAfter()" );
		return "";
	}

	return buf;
}


/**
* �������� ����Ű ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� ����Ű(Hex)
*/
function SGJ_getPublicKey( strUserID, strCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertPublicKey()" );
		return "";
	}

	var buf = SG.getPublicKey( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertPublicKey()" );
		return "";
	}

	return buf;
}

/**
* �������� Ű�뵵Ű ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}�������� Ű�뵵
*/
function SGJ_getKeyUsage( strUserID, strCert )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertKeyUsage()" );
		return "";
	}

	var buf = SG.getKeyUsage( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertKeyUsage()" );
		return "";
	}
	return buf;
}

/**
* �������� ��å ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}������ ��å
*/
function SGJ_getPolicy( strUserID, strCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertPolicy()" );
		return "";
	}

	var buf = SG.getPolicy( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "SGJ_getPolicy()" );
		return "";
	}

	return buf;
}

/**
* ������ ���� ���
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ���� ������
* @return {String}������ ���� ���
*/
function SGJ_getCertInfo( strUserID, strCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getCertInfo()" );
		return "";
	}

	var buf = SG.getCertInfo( strUserID, strCert );
	if ( isNull(buf))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getCertInfo()" );
		return "";
	}
	return buf;
}

/**
* ������ ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}certType ������ ����("NPKI", "GPKI", "EPKI");
* @return {String}������ ���� ���
*/
function SGJ_getCertClass ( strUserID, certType )
{
	var SG = document.getElementById(object_id);
	var certClass = SG.getCertClass(strUserID, certType)

	if ( isNull(certClass))
	{
		setErrorFunctionName( "getCertClass()" );
		return "";
	}

	return certClass;
}

/**
* �־��� �������� ��ȣȭ�� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strCert PEM Ÿ�� ������
* @return {String}�������� ��ȣȭ�� ������(BASE64)
*/
function SGJ_getEncryptedRandomWithCert(strUserID, strCert)
{
	var SG = document.getElementById(object_id);
	if ( isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getEncryptedRandom()" );
		return "";
	}

	var strRandomNumber = SG.getEncryptedRandom(strUserID, strCert);

	if ( isNull(strRandomNumber))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getEncryptedRandom()" );
		return "";
	}
	return strRandomNumber;
}

/**
* ����Ű�� ��ȣȭ�� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}����Ű�� ��ȣȭ�� ������(BASE64)
*/
function SGJ_getEncryptedRandom(strUserID)
{
	var SG = document.getElementById(object_id);
	var strRandomNumber = SG.getEncryptedRandom(strUserID);
	if ( isNull(strRandomNumber))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getEncryptedRandom()" );
		return "";
	}
	//return removeCRLF( strRandomNumber );
	return strRandomNumber;
}

/**
* �������� ��й�ȣ üũ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return true �Ǵ� false
*/
function SGJ_isCorrectPasswd( strUserID )
{
	var SG = document.getElementById(object_id);
	var check = SG.isCorrectPasswd(strUserID);
	if ( !check)
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "isCorrectPasswd()" );
		return check;
	}
	return check;
}
/**
* ������ �߱�
*/
function SGJ_issueCert()
{
	var SG = document.getElementById(object_id);
	SG.issueCert();
}


/**
* ������ �߱�
* @param {String}authCode ������ȣ
* @param {String}refNumber �ΰ��ڵ�
*/
function SGJ_issueCert(authCode, refNumber)
{
	var SG = document.getElementById(object_id);
	SG.issueCert(authCode, refNumber);
}


/**
* ������ ����
*/
function SGJ_updateCert()
{
	var SG = document.getElementById(object_id);
	SG.updateCert();
}

/**
* ������ ��߱�
*/
function SGJ_reIssueCert()
{
	var SG = document.getElementById(object_id);
	SG.reIssueCert();
}


/**
* ������ ��߱�
* @param {String}authCode ������ȣ
* @param {String}refNumber �ΰ��ڵ�
*/
function SGJ_reIssueCert(authCode, refNumber)
{
	var SG = document.getElementById(object_id);
	SG.reIssueCert(authCode, refNumber);
}

/**
* ������ ����
*/
function SGJ_revokeCert()
{
	var SG = document.getElementById(object_id);
	SG.revokeCert();
}

/**
* ������ ȿ������
*/
function SGJ_stopCert()
{
	var SG = document.getElementById(object_id);
	SG.stopCert();
}


/**
* PC���� ����� ���� ������ ��������
* @param {String}phoneType ��Ÿ�� ����("iphone", "android");
*
*/
function SGJ_pcToMobile()
{
	var SG = document.getElementById(object_id);
	SG.pcToMobile();
}

/**
* ����� ��⿡�� PC�� ������ ��������
* @param {String}phoneType ��Ÿ�� ����("iphone", "android");
*
*/
function SGJ_mobileToPc()
{
	var SG = document.getElementById(object_id);
	SG.mobileToPc();
}