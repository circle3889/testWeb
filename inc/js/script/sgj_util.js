/**
 * @fileoverview ��ƿ�� �Լ� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */

/** 
 * BIO HSM ����� �����ϴ� �Լ�
 * @param {String}lsit ���̿� ��ū ����̹� ���
 */
function SGJ_setBioHsmList( list )
{
	var SG = document.getElementById(object_id);

	var strCert = SG.setBioHsmList(list)

	if ( isNull(list))
	{
		setErrorCode( "NO_DATA_VALUE" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_setBioHsmList" );
		return;
	}
	return;
}

/**
 * BIO ��ū ���� ��� ���
 */
function SGJ_getBioErrorCodes()
{
	var SG = document.getElementById(object_id);
	return SG.getBioErrorCodes()
}


/** �Է����� ���� ��Ʈ���� CRLF�� �����ϴ� �޼ҵ�
* @param {String}str ������ String
* @return {String}CRLF�� ���ŵ� ��Ʈ��
*/
function removeCRLF( str )
{
	var SG = document.getElementById(object_id);

	var i = 0;
	var buf = "";
	for( i = 0; i < str.length; i++ )
	{
		if ( str.charAt(i) != '\n' && str.charAt(i) != '\r' )
		{
			buf += str.charAt(i);
		}
	}
	return buf;
}

/**
* ���� ���� �ý��ۿ� ����� HTML���Ͽ���
* �ٸ� ������ ��� ��θ� ���� ��η� �ٲپ� �ش�
* @param {String}strFileName ������ ���� ���
* @return {String}���� - 'SUCCESS', ���� - ""
*/
function getLocalPath( strFileName )
{
	var SG = document.getElementById(object_id);

	var strLocalPath = "";
	var pos = 0;
	var i = 0;

	if ( strFileName == null || strFileName == "" )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		return "";
	}

	var buf = location.href.substring( 0, 8 );
	if ( buf != "file:///" )
	{
		setErrorCode( "NOT_LOCAL_FILE" );
		setErrorMessage( "" );
		return "";
	}

	buf = location.href.substring( 8, location.href.length );

	for ( i = 0; i < buf.length; i++ )
	{
		if ( buf.charAt(i) == "/" )
		{
			strLocalPath += "\\";
			pos = strLocalPath.length;
		} else if ( buf.charAt(i) == "%"
				&& buf.charAt(i+1) == "2"
				&& buf.charAt(i+2) == "0" )
		{
			strLocalPath += " ";
			i += 2;
		} else {
			strLocalPath += buf.charAt(i);
		}
	}

	strLocalPath = strLocalPath.substring( 0, pos ) + strFileName;

	return strLocalPath;
}

/**
* LF�� ������ PEM ���� �������� LF�� �ٽ� �߰��ϴ� �޼ҵ�
* @param {String}strCert LF ���ڸ� ������ PEM ���� ������
* @param {String}outFilePath ��ǥ ���� ���� ���
* @return {String}����	- LF�� ���Ե� PEM ���� ������, ����	- ""
*/
function insertLF( strCert )
{
	var SG = document.getElementById(object_id);

	if ( strCert == null || strCert == "" )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "insertLFtoPEMCert()" );
		return "";
	}

	var pemHeader	= "-----BEGIN CERTIFICATE-----";
	var pemTrailer	= "-----END CERTIFICATE-----";
	var buf = removeCRLF( strCert );

	var i = 0;
	var nCount = 0;
	for ( i = 0; i < pemHeader.length; i++ )
	{
		if ( pemHeader.charAt( i ) == buf.charAt( i ) )
		{
			nCount = nCount + 1;
		}
	}
	if  ( nCount != pemHeader.length )
	{
		setErrorCode("NOT_PEM_CERT");
		setErrorMessage( "" );
		setErrorFunctionName( "insertLFtoPEMCert()" );
		return "";
	}

	nCount = 0;
	for ( i = 0; i < pemTrailer.length; i++ )
	{
		if ( pemTrailer.charAt( i ) == buf.charAt( buf.length - pemTrailer.length + i ) )
		{
			nCount = nCount + 1;
		}
	}
	if  ( nCount != pemTrailer.length )
	{
		setErrorCode("NOT_PEM_CERT");
		setErrorMessage( "" );
		setErrorFunctionName( "insertLFtoPEMCert()" );
		return "";
	}

	var strPEMCert = "";
	nCount = 0;
	for ( i = 0; i < buf.length - pemHeader.length - pemTrailer.length; i++ )
	{
		strPEMCert += buf.charAt( i + pemHeader.length );
		nCount = nCount + 1;
		if ( nCount == 64 )
		{
			strPEMCert += '\n';
			nCount = 0;
		}
	}

	strPEMCert = pemHeader + "\n" + strPEMCert + "\n" + pemTrailer;

	return strPEMCert;
}

/**
* Base64 ���ڵ��� String ��ȯ
* @param {String}strMessage String
* @return ���ڵ��� �޼���
*/function base64Encode( strMessage )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strMessage))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "base64Encode()" );
		return "";
	}

	var buf = SG.base64Encode ( strMessage );
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "base64Encode()" );
		return "";
	}

	return removeCRLF( buf );
}


/**
* Base64 ���ڵ��� String ��ȯ
* @param {String}strMessage BASE64 String
* @return ���ڵ��� �޼���
*/
function base64Decode( strMessage )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strMessage))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "base64Decode()" );
		return "";
	}

	var buf = SG.base64Decode( strMessage );
	if ( isNull(buf))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "base64Decode()" );
		return "";
	}

	return buf;
}

/**
* �ش� ��ü�� null ����üũ
* @param {String}string ��ü
* @return true �Ǵ� false
*/
function isNull( string )
{
	if ( string == null || string == "" )
		return true;
	return false
}

/**
* CA IP �� ��Ʈ ����
* @param{String} ip CA IP
* @param{String} port CA PORT
*/
function SGJ_setCaInfo(ip, port)
{
	var SG = document.getElementById(object_id);
	SG.setCaInfo(ip, port);
}


/**
* ����Ʈ�� �߰� ���� IP �� ��Ʈ ����
* @param{String} ip �߰輭�� IP
* @param{String} port �߰輭�� PORT
*/
function SGJ_setMobileRelayInfo(ip, port)
{
	var SG = document.getElementById(object_id);
	SG.setMobileRelayInfo(ip, port);
}

/**
* ������ �߱޽� Ű ���� ����
* @param{Integr} keyLength ������ �߱޽� Ű ���� ����
*
*/
function SGJ_setKeyLength(keyLength)
{
	var SG = document.getElementById(object_id);
	SG.setKeyLength(keyLength);
}

/**
* ������ �������� ���� ��� ��ȯ
*/
function SGJ_getFilePath()
{
	var SG = document.getElementById(object_id);
	return SG.getFilePath();
}