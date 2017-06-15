/** 
 * @fileoverview ������ �� ���� �ؽ� ���� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */



/**
* String�� ���� �ؽ��� ��ȯ
* @param {String}strMessage ������
* @return {String}String�� ���� �ؽ���
*/
function SGJ_getMessageDigest( strMessage )
{
	return SGJ_getMessageDigestWithAlgo( strMessage, 'SHA1');
}

/**
* String�� ���� �ؽ��� ��ȯ
* @param {String}strMessage ������
* @param {String}algorithm �ؽ� �˰���
* @return {String}String�� ���� �ؽ���
*/
function SGJ_getMessageDigestWithAlgo( strMessage, algorithm )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strMessage) || isNull(algorithm) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getMessageDigestWithAlgo()" );
		return "";
	}

	var strDigest = SG.getMessageDigest( strMessage, algorithm );

	if ( strDigest == "" )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "SGJ_getMessageDigestWithAlgo()" );
		return "";
	}

	return strDigest;
}
/**
* ���Ͽ� ���� �ؽ��� ��ȯ
* @param {String}strFilePath �ؽ� ��� ����
* @return {String}���Ͽ� ���� �ؽ���
*/
function SGJ_getMessageDigestFromFile( strFilePath )
{
	return SGJ_getMessageDigestFromFileWithAlgo( strFilePath, 'SHA1');
}

/**
* ���Ͽ� ���� �ؽ��� ��ȯ
* @param {String}strFilePath �ؽ� ��� ����
* @param {String}algorithm �ؽ� ��� ����
* @return {String}���Ͽ� ���� �ؽ���
*/
function SGJ_getMessageDigestFromFileWithAlgo( strFilePath, algorithm )
{
	var SG = document.getElementById(object_id);

	if ( strFilePath == null || strFilePath == "" )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getMessageDigestFromFileWithAlgo()" );
		return "";
	}

	var strDigest = SG.getMessageDigestFromFile( strFilePath, algorithm);
	if ( strDigest == "" )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "SGJ_getMessageDigestFromFileWithAlgo()" );
		return "";
	}
	return strDigest;
}