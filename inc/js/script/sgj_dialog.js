/** 
 * @fileoverview ������ ����â ���� ���� ��ũ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */


/**
* ������ ����â ���� �޼ҵ�
* ���ǿ� �̹� ������ ������ �����ϸ� true ��ȯ
* â�� ���� ������ �߻��ϸ� false ��ȯ
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return true �Ǵ� false
*/
function SGJ_selectCertificate( strUserId )
{
	var SG = document.getElementById(object_id);
	var bReturn = SG.selectCertificate(strUserId);
	if ( !bReturn )
	{
		setErrorCode( "GetLastErrMsg()" );
		setErrorMessage( "" );
		setErrorFunctionName( "selectCertificate()" );
		return false;
	}
	return bReturn;
}

/**
* ������ ����â ����̹��� ����
* @param {String}imagePath �̹��� Url ���
*/
function SGJ_setBannerImage( imagePath )
{
	var SG = document.getElementById(object_id);
	if ( isNull(imagePath) )
	{
		setErrorCode( "NO_USER_ID" );
		setErrorMessage( "" );
		setErrorFunctionName( "setBannerImage()" );
		return false;
	}
	SG.setBannerImage( imagePath );
	return true;
}

/**
* ������ ����â�� ������ ������ ��å ����
* @param {String}policyList ������ ��å ����Ʈ
*/
function SGJ_setCertPolicy( policyList )
{
	var SG = document.getElementById(object_id);
	SG.setCertPolicy( policyList );
	return true;
}


/**
* ������ ���̾ƿ� ����
* @param {String}layout ���̾ƿ� ����("NORMAL" | "EXT");
*/
function SGJ_setLayout( layout )
{
	var SG = document.getElementById(object_id);
	if ( isNull(layout) )
	{
		setErrorCode( "no layout" );
		setErrorMessage( "" );
		setErrorFunctionName( "setLayout()" );
		return false;
	}
	SG.setLayout( layout );
	return true;
}

/**
* <pre>
* Ȱ��ȭ �̵�� ����
* mediaType �� ��� ������ ��
* "" -> ��� ��ü ��Ȱ��ȭ
* location_hdd -> �ϵ��ũ
* location_removable -> �̵��ĵ�ũ
* location_token -> ������ū
* location_hsm -> ������ū
* location_bhsm -> ���̿� ������ū
* ������ ������ ������ "|"�� ���
* ex) location_hdd|location_token
* </pre>
* @param {String}mediaType Ȱ��ȭ ��ų �̵�� Ÿ��
*/
function SGJ_setEnableMedia( mediaType )
{
	var SG = document.getElementById(object_id);
	/*
	if ( isNull(mediaType) )
	{
		setErrorCode( "no media" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_setEnableMedia()" );
		return false;
	}
	*/
	SG.setEnableMedia( mediaType );
	return true;
}

/**
* ���� �ٸ� ���� ����
* @param {String}strUserId �����ų ���� ID<br>
*/
function SGJ_setPreSessionId( strUserId )
{
	var SG = document.getElementById(object_id);
	SG.setPreSessionId( strUserId );
	return true;
}


/**
* ������ ����â���� ���� ���â�� ���� ����
* @param {boolean}setting ���� ���â ���� ����<br>
*/
function SGJ_setUpdateWran ( setting )
{
	var SG = document.getElementById(object_id);
	SG.SGJ_setUpdateWran(setting);
	return;
}


/**
 * ������ ����â �������� ����
 */
function SGJ_getConfigMap()
{
	var SG = document.getElementById(object_id);
	var obj = SG.getConfigMap();
	return obj;
}

/**
* <pre>
* ����ڰ� ������ �������� ��� �̵�� Ÿ�� ��ȯ
* location_hdd -> �ϵ��ũ
* location_removable -> �̵��ĵ�ũ
* location_token -> ������ū
* location_hsm -> ������ū
* location_bhsm -> ���̿� ������ū
* </pre>
* @param {String}strUserID ���ǽĺ��� ������ ���� ID
* @return {String}����ڰ� ������ �������� ��� �̵�� Ÿ��
*/

function SGJ_getSelectedMedia( strUserId )
{
	var SG = document.getElementById(object_id);
	if ( isNull(strUserId) )
	{
		setErrorCode( "no strUserId" );
		setErrorMessage( "" );
		setErrorFunctionName( "SGJ_getSelectedMedia()" );
		return "";
	}
	return SG.getSelectedMedia( strUserId );
}