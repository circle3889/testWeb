/**
 * @fileoverview ���� ���� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */

/**
* �־��� ���� ID �� ���� ���� 
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {boolean}true �Ǵ� false
*/
function SGJ_removeSession( strUserID )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strUserID))
	{
		setErrorCode( "NO_USER_ID" );
		setErrorMessage( "" );
		setErrorFunctionName( "removeSession()" );
		return false;
	}
	SG.removeSession(strUserID);
	return true;
}

/**
* ��� ���� ���� ����
* @return {boolean}true �Ǵ� false
*/
function SGJ_removeAllSession()
{
	var SG = document.getElementById(object_id);
	var bReturn = SG.removeAllSession();
	if ( !bReturn )
	{
		setErrorCode( GetLastErrMsg() );
		setErrorMessage( "" );
		setErrorFunctionName( "removeAllSession()" );
		return false;
	}
	return bReturn;
}

/**
* ���������� �߻��� ���� ��ȯ
* ������ ���� ��� null ��ȯ
* @return {String}���� �޽���
*/
function SGJ_getErrorMsg() {
	var SG = document.getElementById(object_id);
	var errMsg = SG.getErrorMsg();
	return errMsg;
}

/**
* ���� ���� ��ȯ
* ���� ������ ���� ��� null ��ȯ
* @return {String}���� ����
*/
function SGJ_getStackTrace() {
	var SG = document.getElementById(object_id);
	var stack = SG.getStackTrace();
	return stack;
}