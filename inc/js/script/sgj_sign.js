/**
 * @fileoverview ���� ���� �� ���� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */

/** 
* String�� ���� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strMessage ���� ��� String
* @return String�� ���� ����
*/
function SGJ_getSignature(strUserID, strMessage )
{
	return SGJ_getSignatureWithAlgo(strUserID, strMessage, null)
}

/**
* String�� ���� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strMessage ���� ��� String
* @param {String}algorithm ����� �ؽ� �˰���
* @return String�� ���� ����
*/
function SGJ_getSignatureWithAlgo(strUserID, strMessage, algorithm)
{
	var SG = document.getElementById(object_id);
	if ( isNull(strMessage))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignature()" );
		return "";
	}

	var strSignValue = SG.getSignature( strUserID, strMessage, algorithm );

	if ( strSignValue == "" || strSignValue == null )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignature()" );
		return "";
	}

	return strSignValue;
}


/**
* String�� ���� ������� ��� ��ȯ
* @param {String}strMessage ���� �޼���
* @param {String}strSignValue ����
* @param {String}strCert ���� ������ ���� PEM Ÿ�� ������
* @return true �Ǵ� false
*/
function SGJ_verifySignature( strMessage, strSignValue, strCert )
{
	return SGJ_verifySignatureWithAlgo( strMessage, strSignValue, strCert, null);
}

/**
* String�� ���� ������� ��� ��ȯ
* @param {String}strMessage ���� �޼���
* @param {String}strSignValue ����
* @param {String}strCert ���� ������ ���� PEM Ÿ�� ������
* @param {String}algorithm ������ ����� �ؽ� �˰���
* @return true �Ǵ� false
*/
function SGJ_verifySignatureWithAlgo( strMessage, strSignValue, strCert, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strSignValue) || isNull(strCert) || isNull(strMessage))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifySignature()" );
		return false;
	}

	var bReturn = SG.verifySignature( strMessage, strSignValue, strCert, algorithm );

	if ( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifySignature()" );
		return false;
	}
	return bReturn;
}

/**
* ���Ͽ� ���� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strFilePath ���� ��� ���� ���
* @return {String}���Ͽ� ���� ����
*/
function SGJ_getSignatureFromFile( strUserID, strFilePath )
{
	return SGJ_getSignatureFromFileWithAlgo( strUserID, strFilePath, null );
}

/**
* ���Ͽ� ���� ���� ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @param {String}strFilePath ���� ��� ���� ���
* @param {String}algorithm ����� ����� �ؽ� �˰���
* @return {String}���Ͽ� ���� ����
*/
function SGJ_getSignatureFromFileWithAlgo( strUserID, strFilePath, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignatureFromFile()" );
		return "";
	}

	var strSignValue = SG.getSignatureFromFile (strUserID, strFilePath, algorithm);
	if ( isNull(strSignValue))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignatureFromFile()" );
		return "";
	}
	return strSignValue;
}


/**
* ���Ͽ� ���� ���� ���� ��� ��ȯ
* @param {String}strFilePath ���� ���� ���
* @param {String}strSignValue ����
* @param {String}strCert ���� ������ ���� PEM Ÿ�� ������
* @return {String}���Ͽ� ���� ����
*/
function SGJ_verifySignatureFromFile( strFilePath, strSignValue, strCert )
{
	return SGJ_verifySignatureFromFileWithAlgo( strFilePath, strSignValue, strCert, null )
}

/**
* ���Ͽ� ���� ���� ���� ��� ��ȯ
* @param {String}strFilePath ���� ���� ���
* @param {String}strSignValue ����
* @param {String}strCert ���� ������ ���� PEM Ÿ�� ������
* @param {String}algorithm ���� ������ ����� �ؽ� �˰���
* @return {String}���Ͽ� ���� ����
*/
function SGJ_verifySignatureFromFileWithAlgo( strFilePath, strSignValue, strCert, algorithm )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strSignValue) || isNull(strCert) || isNull(strFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifySignatureFromFile()" );
		return false;
	}

	bReturn = SG.verifySignatureFromFile( strFilePath, strSignValue, strCert, algorithm);
	if ( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifySignatureFromFile()" );
		return false;
	}

	return bReturn;
}