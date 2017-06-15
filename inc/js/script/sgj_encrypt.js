/** 
 * @fileoverview ����Ű ��ȣȭ �� ��ĪŰ/���ĪŰ ��/��ȣȭ ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */

/**
* ��ȣȭ�� ����Ű ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param  {String}strKmCert PEM Ÿ���� ������
* @return {String}��ȣȭ�� ����Ű(BASE64)
*/
function SGJ_encryptSessionKey(strUserID, strKmCert )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strKmCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "encryptSessionKey()" );
		return "";
	}

	var strEncryptedSessionKey = SG.encryptSessionKey( strUserID, strKmCert );
	if ( isNull(strEncryptedSessionKey))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "encryptSessionKey()" );
		return "";
	}
	return strEncryptedSessionKey;
}

/**
* ��ȣȭ�� ����Ű ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strEncryptedSessionKey ��ȣȭ�� ����Ű
* @return {String}��ȣȭ�� ����Ű
*/
function SGJ_decryptSessionKey( strUserID, strEncryptedSessionKey )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strUserID) )
	{
		setErrorCode( "NO_USER_ID" );
		setErrorMessage( "" );
		setErrorFunctionName( "decryptSessionKey()" );
		return "";
	}

	if (isNull(strEncryptedSessionKey))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "decryptSessionKey()" );
		return "";
	}

	var decryptSessionKey = SG.decryptSessionKey(strUserID, strEncryptedSessionKey);
	if ( isNull(decryptSessionKey))
	{
		setErrorFunctionName( "decryptSessionKey()" );
		return "";
	}
	return decryptSessionKey;
}

/**
* ����Ű�� ��ȣȭ�� String ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strMessage ���� �޼���(��ȣȭ ���)
* @return {String}��ĪŰ�� ��ȣȭ�� �޼���(BASE64)
*/
function SGJ_encryptData( strUserID, strMessage )
{
	return SGJ_encryptDataWithAlgo(strUserID, strMessage, 'SEED/CBC/PKCS5');
}

/**
* ����Ű�� ��ȣȭ�� String ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strMessage ���� �޼���(��ȣȭ ���)
* @param {String}algorithm ��ĪŰ �˰���
* @return {String}��ĪŰ�� ��ȣȭ�� String
*/
function SGJ_encryptDataWithAlgo( strUserID, strMessage, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( strMessage == null || strMessage == "" )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "encryptData()" );
		return "";
	}

	var encStr = SG.encryptData( strUserID, strMessage, algorithm );

	if ( isNull(encStr))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "encryptData()" );
		return "";
	}

	return encStr;
}

/**
* ����Ű�� ��ȣȭ�� String ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strEncryptedMessage ��ȣȭ�� String
* @return {String}����Ű�� ��ȣȭ�� String
*/
function SGJ_decryptData( strUserID, strEncryptedMessage )
{
	return SGJ_decryptDataWithAlgo( strUserID, strEncryptedMessage, 'SEED/CBC/PKCS5' )
}

/**
* ����Ű�� ��ȣȭ�� String ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strEncryptedMessage ��ȣȭ�� String
* @return {String}����Ű�� ��ȣȭ�� String
*/
function SGJ_decryptDataWithAlgo( strUserID, strEncryptedMessage, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strEncryptedMessage))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "decryptData()" );
		return "";
	}

	var decStr = SG.decryptData(strUserID, strEncryptedMessage, algorithm);
	if ( isNull(decStr))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "decryptData()" );
		return "";
	}

	return decStr;
}

/**
* ����Ű�� ��ȣȭ�� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strInputFilePath ��ȣȭ�� ���ϸ�
* @param {String}strOutputFilePath ��ȣȭ�� ���ϸ�
* @return {boolean}true �Ǵ� false
*/
function SGJ_encryptFile(strUserID,  strInputFilePath, strOutputFilePath )
{
	return SGJ_encryptFileWithAlgo(strUserID,  strInputFilePath, strOutputFilePath, 'SEED/CBC/PKCS5');
}


/**
* ����Ű�� ��ȣȭ�� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strInputFilePath ��ȣȭ�� ���ϸ�
* @param {String}strOutputFilePath ��ȣȭ�� ���ϸ�
* @param {String}algorithm ��ĪŰ �˰���
* @return {boolean}true �Ǵ� false
*/
function SGJ_encryptFileWithAlgo(strUserID,  strInputFilePath, strOutputFilePath, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strInputFilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "encryptFile()" );
		return false;
	}

	var bReturn = SG.encryptFile( strUserID, strInputFilePath, strOutputFilePath, algorithm );
	if ( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "encryptFile()" );
		return false;
	}
	return bReturn;
}



/**
* ����Ű�� ��ȣȭ�� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strInputFilePath ��ȣȭ�� ���ϸ�
* @param {String}strOutputFilePath ��ȣȭ�� ���ϸ�
* @return true �Ǵ� false
*/
function SGJ_decryptFile(strUserID,  strInputFilePath, strOutputFilePath )
{
	return SGJ_decryptFileWithAlgo(strUserID,  strInputFilePath, strOutputFilePath, 'SEED/CBC/PKCS5' );
}

/**
* ����Ű�� ��ȣȭ�� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strInputFilePath ��ȣȭ�� ���ϸ�
* @param {String}strOutputFilePath ��ȣȭ�� ���ϸ�
* @param {String}algorithm ��ĪŰ �˰���
* @return true �Ǵ� false
*/
function SGJ_decryptFileWithAlgo(strUserID,  strInputFilePath, strOutputFilePath, algorithm )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strInputFilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "decryptFile()" );
		return false;
	}

	var bReturn = SG.decryptFile(  strUserID, strInputFilePath, strOutputFilePath, algorithm  );
	if ( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "decryptFile()" );
		return false;
	}
	return bReturn;
}

/**
* �־��� �������� ��ȣȭ�� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}kmCertString PEM Ÿ���� ������
* @param {String}data ��ȣȭ�� String
* @return {String}RSA ��ȣȭ�� String(BASE64)
*/
function SGJ_encryptRSA( strUserID, kmCertString, data )
{
	var SG = document.getElementById(object_id);

	if ( isNull(kmCertString) || isNull(data))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "encryptRSA()" );
		return "";
	}

	var encStr = SG.encryptRSA( strUserID, kmCertString, data );

	if ( isNull(encStr))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "encryptRSA()" );
		return "";
	}

	return encStr;
}


/**
* RSA ��ȣȭ�� ������ ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}encString ��ȣȭ�� String
* @return {String}RSA ��ȣȭ�� String
*/
function SGJ_decryptRSA( strUserID, encString )
{
	var SG = document.getElementById(object_id);
	if ( isNull(encString))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage("");
		setErrorFunctionName( "decryptRSA()" );
		return "";
	}

	var decStr = SG.decryptRSA(strUserID, encString);
	if ( isNull(decStr))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "decryptRSA()" );
		return "";
	}

	return decStr;
}