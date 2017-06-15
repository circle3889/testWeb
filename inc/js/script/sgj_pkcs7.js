/**
 * @fileoverview PKCS7 ���� �� ���� ��Ʈ��Ʈ
 *
 * @author hychul
 * @version 0.1
 */
/** 
* PKCS#7 Signed �޼����� ������ �߰��ϴ� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} data ���� pkcs7 ������
* @return{String} ������ �߰��� PKCS#7 Signed �޼���
*/
function SGJ_addSignPKCS7File(strUserID, data)
{
	return SGJ_addSignPKCS7FileWithAlgo(strUserID, data , 'SHA1');
}

/**
* PKCS#7 Signed �޼����� ������ �߰��ϴ� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} data ���� pkcs7 ������
* @param{String} �ؽ� �˰���
* @return{String} ������ �߰��� PKCS#7 Signed �޼���
*/
function SGJ_addSignPKCS7FileWithAlgo(strUserID, data, algorithm)
{
	return SG.SGJ_genPKCS7SignedDataWithAlgo(strUserID, data, algorithm);
}

/**
* ���ϱ������ PKCS#7 Signed �޼����� ������ �߰��ϴ� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} data ���� pkcs7 ������
* @return{String} ������ �߰��� PKCS#7 Signed �޼���
*/

function SGJ_addSignPKCS7Data(strUserID, data)
{
	return SGJ_genPKCS7SignedDataWithAlgo(strUserID, data , 'SHA1');
}


/**
* ���� ������� PKCS#7 Signed �޼����� ������ �߰��ϴ� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} data ���� pkcs7 ������
* @param{String} �ؽ� �˰���
* @return{String} ������ �߰��� PKCS#7 Signed �޼���
*/
function SGJ_addSignPKCS7DataWithAlgo(strUserID, data, algorithm)
{
	return SG.SGJ_addSignPKCS7DataWithAlgo(strUserID, data , algorithm);
}

/**
* PKCS#7 Signed �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strMessage ���� �޼���
* @return{String} PKCS#7 Signed �޼���
*/
function SGJ_genPKCS7SignedData(strUserID, data)
{
	return SGJ_genPKCS7SignedDataWithAlgo(strUserID, data , 'SHA1');
}

/**
* PKCS#7 Signed �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strMessage ���� �޼���
* @return{String} PKCS#7 Signed �޼���
*/
function SGJ_genPKCS7SignedDataWithAlgo(strUserID, data, algorithm )
{
	var SG = document.getElementById(object_id);

	if ( isNull(data))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignedData()" );
		return "";
	}

	var strPKCS7Message = SG.genPKCS7SignedData( strUserID, data, algorithm );

	if( isNull(strPKCS7Message))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7SignedData()" );
		return "";
	}
	return strPKCS7Message;
}

/**
* ���� ����� PKCS#7 Signed �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strInputFilePath ���� ���� ���
* @param{String} strOutputFilePath PKCS#7 Signed �޼��� ���� ���
* @return{String} PKCS#7 Signed �޼���
*/
function SGJ_genPKCS7SignedFile( strUserID, strInputFilePath, strOutputFilePath, fileType)
{
	return SGJ_genPKCS7SignedFileWithAlgo( strUserID, strInputFilePath, strOutputFilePath, 'SHA1', fileType);
}


/**
* ���� ����� PKCS#7 Signed �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strInputFilePath ���� ���� ���
* @param{String} strOutputFilePath PKCS#7 Signed �޼��� ���� ���
* @return{String} PKCS#7 Signed �޼���
*/
function SGJ_genPKCS7SignedFileWithAlgo( strUserID, strInputFilePath, strOutputFilePath, algorithm, fileType)
{
	var SG = document.getElementById(object_id);

	if ( isNull(strInputFilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignedFileWithAlgo()" );
		return false ;
	}

	bReturn = SG.genPKCS7SignedFile( strUserID, strInputFilePath, strOutputFilePath, algorithm, fileType);
	if( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7SignedFile()" );
		return false;
	}
	return bReturn;
}

/**
* PKCS#7 Signed �޼����� ������ �߰� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strP7Msg  PKCS#7 Signed �޼���
* @return{String} �����ڰ� �߰��� PKCS#7 Signed �޼���
*/
function SGJ_addSignPKCS7Data( strUserID, strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "addSignPKCS7Data()" );
		return "";
	}

	var strPKCS7Message = SG.addSignPKCS7Data( strUserID, strP7Msg );
	if( isNull(strPKCS7Message))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "addSignPKCS7Data()" );
		return "";
	}

	return strPKCS7Message;
}
/**
* ���ϱ���� PKCS#7 Signed �޼����� ������ �߰� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strP7FilePath  PKCS#7 Signed �޼��� ���� ���
* @param{String} strOutputFilePath  ������ PKCS#7 Signed �޼��� ���
* @return ���� ����(true|false)
*/
function SGJ_addSignPKCS7File( strUserID, strP7FilePath, strOutputFilePath)
{
	var SG = document.getElementById(object_id);

	if ( isNull(strP7FilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "addSignPKCS7File()" );
		return false;
	}

	bReturn = SG.addSignPKCS7File( strUserID, strP7FilePath, strOutputFilePath );
	if( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "addSignPKCS7File()" );
		return false;
	}

	return bReturn;
}

function SGJ_genPKCS7EnvelopedData( strUserID, kmCert, data )
{
	return SGJ_genPKCS7EnvelopedDataWithAlgo( strUserID, kmCert, data, 'SEED/CBC/PKCS5' );
}

/**
* PKCS#7 Enveloped �޼��� ���� �޼ҵ�
* @param{String} strMessage ���� �޼���
* @param{String} strMyCert �ڽ��� ������
* @param{String} strRecipientCert ������ ������
* @return PKCS#7 Signed �޼���
*/
function SGJ_genPKCS7EnvelopedDataWithAlgo( strUserID, kmCert, data, algorithm )
{
	var SG = document.getElementById(object_id);

	if ( isNull(data))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7EnvelopedDataWithAlgo()" );
		return "" ;
	}

	if ( isNull(kmCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7EnvelopedDataWithAlgo()" );
		return "" ;
	}

	var strPKCS7Message = SG.genPKCS7EnvelopedData( strUserID, kmCert, data, algorithm );
	if( isNull(strPKCS7Message))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7EnvelopedData()" );
		return "" ;
	}

	return strPKCS7Message ;
}

function SGJ_genPKCS7EnvelopedFile( strUserID, kmCert, strInputFilePath, strOutputFilePath, fileType )
{
	return SGJ_genPKCS7EnvelopedFileWithAlgo( strUserID, kmCert, strInputFilePath, strOutputFilePath, 'SEED/CBC/PKCS5', fileType );
}


/**
* ���� ����� PKCS#7 Enveloped �޼��� ���� �޼ҵ�
* @param{String} strInputFilePath ���� �޼��� ���� ���
* @param{String} strMyCert �ڽ��� ������
* @param{String} strRecipientCert ������ ������
* @param{String}strOutputFilePath ������ PKCS#7 Enveloped �޼���
* @return ���� ����(true|false)
*/
function SGJ_genPKCS7EnvelopedFileWithAlgo( strUserID, kmCert, strInputFilePath, strOutputFilePath, algorithm, fileType )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strInputFilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7EnvelopedFile()" );
		return false;
	}

	if ( isNull(kmCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7EnvelopedFile()" );
		return false;
	}

	var bReturn = SG.genPKCS7EnvelopedFile( strUserID, kmCert, strInputFilePath, strOutputFilePath, algorithm, fileType );
	if( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7EnvelopedFile()" );
		return false;
	}

	return bReturn;
}

function SGJ_genPKCS7SignEnvData( strUserID, kmCert, data)
{
	return SGJ_genPKCS7SignEnvDataWithAlgo( strUserID, kmCert, data, 'SEED/CBC/PKCS5', 'SHA1' );
}

/**
* PKCS#7 SignedAndEnveloped �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strMessage ���� �޼���
* @param{String} strMyCert �ڽ��� ������
* @param{String} strRecipientCert ������ ������
* @return{String} PKCS#7 SignedAndEnveloped �޼���
*/
function SGJ_genPKCS7SignEnvDataWithAlgo( strUserID, kmCert, data, encAlgorithm, signAlgorithm )
{
	var SG = document.getElementById(object_id);

	if ( isNull(data))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignEnvData()" );
		return "" ;
	}

	if ( isNull(kmCert))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignEnvData()" );
		return "" ;
	}

	var strPKCS7Message = SG.genPKCS7SignEnvData( strUserID, kmCert, data, encAlgorithm, signAlgorithm );
	if( isNull(strPKCS7Message))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7SignEnvData()" );
		return "" ;
	}

	return strPKCS7Message;
}


function SGJ_genPKCS7SignEnvFile( strUserID, kmCert, strInputFilePath, strOutputFilePath, fileType )
{
	return SGJ_genPKCS7SignEnvFileWithAlgo( strUserID, kmCert, strInputFilePath, strOutputFilePath, 'SEED/CBC/PKCS5', 'SHA1', fileType );
}

/**
* ���� ����� PKCS#7 SignedAndEnveloped �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} strInputFilePath ���� ���� ���
* @param{String} strMessage ���� �޼���
* @param{String} strMyCert �ڽ��� ������
* @param{String} strRecipientCert ������ ������
* @param{String} strOutputFilePath ������ PKCS#7 SignedAndEnveloped �޼��� ���� ���
* @return ���� ����(true|false)
*/
function SGJ_genPKCS7SignEnvFileWithAlgo( strUserID, kmCert, strInputFilePath, strOutputFilePath, encAlgorithm, signAlgorithm, fileType )
{
	var SG = document.getElementById(object_id);

	if ( isNull(strInputFilePath) || isNull(strOutputFilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignEnvFile()" );
		return false;
	}

	if ( isNull(kmCert) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "genPKCS7SignEnvFile()" );
		return false;
	}

	bReturn =  SG.genPKCS7SignEnvFile( strUserID, kmCert, strInputFilePath, strOutputFilePath, encAlgorithm, signAlgorithm, fileType );
	if( !bReturn )
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "genPKCS7SignEnvFile()" );
		return false;
	}

	return bReturn;
}

/**
* PKCS#7 �޼��� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} p7File PKCS#7 �޽���
* @param{String} orgFIle ���� �޽���
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7Data( strUserID, strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7Data()" );
		return "";
	}

	var strOriginalMessage = SG.verifyPKCS7Data( strUserID, strP7Msg );
	if( isNull(strOriginalMessage))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifyPKCS7Data()" );
		nSignerCount = 0;
		return "";
	}
	return strOriginalMessage;
}

/**
* PKCS#7 �޼��� ���� �޼ҵ�
* @param{String} strP7Msg PKCS#7 �޽���
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7SignedData( strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7SignedData()" );
		return "";
	}

	var strOriginalMessage = SG.verifyPKCS7SignedData( strP7Msg );
	if( isNull(strOriginalMessage))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifyPKCS7SignedData()" );
		nSignerCount = 0;
		return "";
	}
	return strOriginalMessage;
}

/**
* PKCS#7 Enveloped �޼��� ���� �޼ҵ�
* @param{String} strUserID ���ǽĺ��� ������ ID
* @param{String} strP7Msg PKCS#7 Enveloped �޽���
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7EnvelopedData( strUserID, strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strUserID) || isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7EnvelopedData()" );
		return "";
	}

	var strOriginalMessage = SG.verifyPKCS7EnvelopedData( strP7Msg );
	if( isNull(strOriginalMessage))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifyPKCS7EnvelopedData()" );
		nSignerCount = 0;
		return "";
	}
	return strOriginalMessage;
}

/**
* PKCS#7 SignedAndEnveloped �޼��� ���� �޼ҵ�
* @param{String} strUserID ���ǽĺ��� ������ ID
* @param{String} strP7Msg PKCS#7 SignedAndEnveloped �޽���
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7SignEnvData( strUserID, strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strUserID) || isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7SignEnvData()" );
		return "";
	}

	var strOriginalMessage = SG.verifyPKCS7SignEnvData( strP7Msg );
	if( isNull(strOriginalMessage))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "verifyPKCS7SignEnvData()" );
		nSignerCount = 0;
		return "";
	}
	return strOriginalMessage;
}

/**
* PKCS#7 ���� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} p7File PKCS#7 ����
* @param{String} orgFIle ���� ����
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7File(strUserID, p7File, orgFile)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7File) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7File()" );
		return "";
	}

	var check = SG.verifyPKCS7File( strUserID, p7File, orgFile );
	if(!check)
	{
		setErrorCode( "" );
		setErrorMessage(GetLastErrMsg());
		setErrorFunctionName( "verifyPKCS7File()" );
	}

	return check;
}

/**
* PKCS#7 Signed ���� ���� �޼ҵ�
* @param{String} p7File PKCS #7 Signed ����
* @param{String} orgFile ������ ���� ����
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7SignedFile( p7File, orgFile )
{
	var SG = document.getElementById(object_id);

	if( isNull(p7File) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7SignedFile()" );
		return "";
	}

	var check = SG.verifyPKCS7SignedFile( strUserID, p7File, orgFile );
	if(!check)
	{
		setErrorCode( "" );
		setErrorMessage(GetLastErrMsg());
		setErrorFunctionName( "verifyPKCS7SignedFile()" );
	}
	return check;
}


/**
* PKCS#7 Enveloped ���� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} p7File PKCS#7 Enveloped ����
* @param{String} orgFile ���� ����
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7EnvelopedFile( strUserID, p7File, orgFile )
{
	var SG = document.getElementById(object_id);

	if( isNull(strUserID) || isNull(p7File) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7EnvelopedFile()" );
		return "";
	}

	var check = SG.verifyPKCS7EnvelopedFile( strUserID, p7File, orgFile );
	if(!check)
	{
		setErrorCode( "" );
		setErrorMessage(GetLastErrMsg());
		setErrorFunctionName( "verifyPKCS7EnvelopedFile()" );
	}
	return check;
}

/**
* PKCS#7 SignAndEnveloped ���� ���� �޼ҵ�
* @param{String} strUserID ����� ID
* @param{String} p7File PKCS#7 SignAndEnveloped ����
* @param{String} orgFile ���� ����
* @return ���� ����(true|false)
*/
function SGJ_verifyPKCS7SignEnvFile(strUserID, p7File, orgFile)
{
	var SG = document.getElementById(object_id);

	if( isNull(strUserID) || isNull(p7File) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "verifyPKCS7SignEnvFile()" );
		return "";
	}

	var check = SG.verifyPKCS7SignEnvFile( strUserID, p7File, orgFile );
	if(!check)
	{
		setErrorCode( "" );
		setErrorMessage(GetLastErrMsg());
		setErrorFunctionName( "verifyPKCS7SignEnvFile()" );
	}
	return check;
}

/**
* PKCS #7 �޼����� Ÿ���� ��ȯ
* @param{String} strP7Msg PKCS #7 �޼���
* @return{String} ���� : (PKCS7SignedMessage|PKCS7EnvelopedMessage|PKCS7SignedAndEnvelopedMessage)
*		  ���� : ""
*/
function SGJ_getPKCS7Type( strP7Msg )
{
	var SG = document.getElementById(object_id);

	if( isNull(strP7Msg) )
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getPKCS7Type()" );
		return "" ;
	}

	var strType = SG.getPKCS7Type( strP7Msg );
	if(isNull(strType))
	{
			setErrorCode( "" );
			setErrorMessage( GetLastErrMsg() );
			setErrorFunctionName( "getPKCS7TypeFile()" );
			return "" ;
	}

	return strType;
}

/**
* PKCS #7 �޼����� Ÿ���� ��ȯ
* @param{String} strP7FilePath PKCS#7 ����
* @return{String} ���� : (PKCS7SignedMessage|PKCS7EnvelopedMessage|PKCS7SignedAndEnvelopedMessage)
*		  ���� : ""
*/
function SGJ_getPKCS7TypeFile( strP7FilePath)
{
	var SG = document.getElementById(object_id);

	if( isNull(strP7FilePath))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getPKCS7TypeFile()" );
		return "" ;
	}

	var strType = SG.getPKCS7TypeFile( strP7FilePath );

	if(isNull(strType))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getPKCS7TypeFile()" );
		return "" ;
	}

	return strType;
}


/**
* PKCS #7 Signed �޽������� �־��� ���ι�ȣ�� �������� ��ȯ
* @param{String} p7Data PKCS #7 �޼���
* @param{Integer} index PKCS #7 �޼���
* @return{String} ������ ��Ʈ��
*/
function SGJ_getSignerCert(p7Data, index)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7Data) || isNull(index))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCert()" );
		return "" ;
	}

	var strCert = SG.getSignerCert(p7Data, index);

	if(isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCert()" );
		return "" ;
	}
	return strCert;
}

/**
* PKCS #7 Signed �޽������� �־��� DN�� ���� �������� ��ȯ
* @param{String} p7Data PKCS #7 �޼���
* @param{String} subjectDN ������DN
* @return{String} ������ ��Ʈ��
*/
function SGJ_getSignerCertwithDN(p7Data, subjectDN)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7Data) || isNull(subjectDN))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCert()" );
		return "" ;
	}

	var strCert = SG.getSignerCert(p7Data, subjectDN);

	if(isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCert()" );
		return "" ;
	}
	return strCert;
}

/**
* PKCS #7 Signed �޽������� �������� �� ��ȯ
* @param{String} p7Data PKCS #7 �޼���
* @return{Integer} ������ ��Ʈ��
*/
function SGJ_getSignerCount(p7Data)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7Data))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCount()" );
		return 0;
	}

	var count = SG.getSignerCount(p7Data);

	if(isNull(count))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCount()" );
		return 0;
	}
	return count;
}

/**
* PKCS #7 Signed ���Ͽ��� �־��� ���ι�ȣ�� �������� ��ȯ
* @param{String} p7File PKCS #7 ����
* @param{Integer} index PKCS #7 �޼���
* @return{String} ������ ��Ʈ��
*/
function SGJ_getSignerCertFile(p7File, index)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7File) || isNull(index))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCertFile()" );
		return "" ;
	}

	var strCert = SG.getSignerCertFile(p7File, index);

	if(isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCertFile()" );
		return "" ;
	}
	return strCert;
}

/**
* PKCS #7 Signed ���Ͽ��� �־��� DN�� ���� �������� ��ȯ
* @param{String} p7File PKCS #7 ����
* @param{String} subjectDN ������DN
* @return{String} ������ ��Ʈ��
*/
function SGJ_getSignerCertFileWithDN(p7File, subjectDN)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7File) || isNull(index))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCertFile()" );
		return "" ;
	}

	var strCert = SG.getSignerCertFile(p7File, subjectDN)

	if(isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCertFile()" );
		return "" ;
	}
	return strCert;
}

/**
* PKCS #7 Signed ���Ͽ��� �������� �� ��ȯ
* @param{String} p7File PKCS #7 ����
* @return{Integer} ������ ��Ʈ��
*/
function SGJ_getSignerCountFile(p7File)
{
	var SG = document.getElementById(object_id);

	if( isNull(p7Data) || isNull(index))
	{
		setErrorCode("NO_DATA_VALUE");
		setErrorMessage( "" );
		setErrorFunctionName( "getSignerCountFile()" );
		return 0;
	}

	var count = SG.getSignerCountFile(p7File);

	if(isNull(strCert))
	{
		setErrorCode( "" );
		setErrorMessage( GetLastErrMsg() );
		setErrorFunctionName( "getSignerCountFile()" );
		return 0;
	}
	return count;
}
