var strErrMsg = "";
var strErrCode = "";
var strErrFuncName = "";

/** 
* ������ ���� �ڵ带 �����Ѵ�.
*	���� �ڵ�
*
*	NO_DATA_VALUE	: �Լ��� ���� ���� null�̰ų� ""�� ���
*	NO_USER_ID	: ����ڸ� �����ϱ� ���� ID ���� null �̰ų� ""�� ���
*	NO_SESSION_KEY	: �����͸� ��ȣȭ �ϱ����� ��ĪŰ�� ���� ���
*	WRONG_PASSWORD	: ����ڰ� ������ ��ȣ�� ������ ȸ�� �̻� Ʋ���� �Է��� ���
*	NOT_INDEX_VALUE : �Լ��� nIndex ���� ���� 0 �̻��� ���� �ƴ� ���
*	NOT_PEM_CERT	: PEM Ÿ�� �������� �ƴ� ���
*	NOT_LOCAL_FILE	: ���� �������� �����ִ� �������� ����� PC�� �����
*			  ���� ������ �ƴѰ��
* @param strCode ���� �ڵ�
* @return ����
*/
function setErrorCode( strCode )
{
	strErrCode = strCode;
	return;
}

/**
* ������ ���� �޼����� �����Ѵ�.
* @param strCode �����޼���
* @return ����
*/
function setErrorMessage( strMsg )
{
	strErrMsg = strMsg;
	return;
}
/**
* ������ �߻��� �Լ� �̸��� �����Ѵ�.
* @param strFunctionName �Լ� �̸�
* @return ����
*/
function setErrorFunctionName( strFunctionName )
{
	strErrFuncName = strFunctionName;
	return;
}

/**
* ���������� �߻��� ������ ���� �ڵ带 ��´�.
* @return ���� - �����ڵ�, ���� - ""
*/
function getErrorCode()
{
	var buf = strErrCode;
	strErrCode = "";
	return buf;
}

/**
* ���������� �߻��� ������ ���� �ڵ带 ��´�.
* @return ���� - �����ڵ�, ���� - ""
*/
function GetLastErrMsg()
{
	var buf = strErrCode;
	strErrCode = "";
	return buf;
}
/**
* ���������� �߻��� ������ ���� �޼����� ��´�.
* @return ����	- ���� �޽���
*		  ����	- ""
*/
function getErrorMsg()
{
	return SG.getErrorMsg();
}

/**
* ���������� ������ �߻��� �Լ� �̸��� �ִ´�.
* @return ����	- ������ �߻��� �Լ� �̸�
*		  ����	- ""
*/
function getErrorFunctionName()
{
	var buf = strErrFuncName;
	strErrFuncName = "";
	return buf;
}
/**
* ���������� �߻��� ������ ���� �ڵ峪 �޼����� ��´�.
* @return ����	- ���� �ڵ� �Ǵ� ���� �޽���
*		  ����	- ""
*/
function getErrorString()
{
	var buf = getErrorCode();
	buf += getErrorMessage();
	return buf;	
}