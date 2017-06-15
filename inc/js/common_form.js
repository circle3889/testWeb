/**
 *
 * T WORLD Form ���� js util
 *
 * �ۼ��� : ���ϰ�.
 *
 * �� ���ϸ� ����Ͻø� �ȵǰ� �̸� ���ǵ� include �������� ���ؼ� ���Խ�Ű�ž� ���������� �۵��˴ϴ�.
 *
 */



/**
 * ���� ����
 */
String.prototype.trim = function()
{
    return this.replace( /(^\s*)|(\s*$)/g, "" );
}


function trim( val ) {
    var len = val.length;

    if ( len == 0 ) {
        return val;
    }

    var str = "", chr = "";
    for ( i = 0; i < len; i++ ) {
        chr = val.charAt( i );
        if ( chr != " " ) {
            str += chr;
        }
    }

    return str;
}


/**
 * ���� ������� Ȯ��
 */
function isEmpty( val ) {
    return ( ! trim( val ) );
}


/**
 * ������������ üũ
 */
function isNumber( val ) {
    re = /^\d+$/;

    if ( re.test( val ) ) {
        return true;
    } else {
        return false;
    }
}


/**
 * �޽��� �Ѹ���, id�� ��Ŀ��
 */
function msgFocus( msg, id ) {
    alert( msg );

    if ( $(id).type != "hidden" ) {
        $(id).focus();
    }
}


/**
 * form field üũ �� �޽��� & focus
 */
function required( id, msg ) {
    if ( ! msg ) {
        msg = "�ʼ� �Է»����� �����Ǿ����ϴ�.";
    }

    if ( isEmpty( $F(id) ) ) {
        msgFocus( msg, id );
        $(id).value = "";

        return true;
    }

    return false;
}


/**
 * form field number üũ & �޽���
 */
function requiredNumber( id, msg ) {
    if ( ! msg ) {
        msg = "�������� �Է��� �����մϴ�.";
    }

    if ( ! isNumber( $F(id) ) ) {
        msgFocus( msg, id );
        $(id).value = "";

        return true;
    }

    return false;
}


/**
 * radio button üũ ����
 */
function isRadioChecked( formId, elementName ) {
    return isFormElementChecked( formId, 'radio', elementName );
}


/**
 * checkbox üũ ����
 */
function isChecked( formId, elementName ) {
    return isFormElementChecked( formId, 'checkbox', elementName );
}


/**
 * from element üũ ����
 */
function isFormElementChecked( formId, elementType, elementName ) {
    var radioList = $(formId).getInputs( elementType, elementName );

    for ( var i = 0; i < radioList.length; i++ ) {
        if ( radioList[i].checked ) {
            return true;
        }
    }

    return false;
}


/**
 * ���õ� radio button�� ��
 */
function getRadioValue( formId, elementName ) {
    var radioList = $(formId).getInputs( 'radio', elementName );

    for ( var i = 0; i < radioList.length; i++ ) {
        if ( radioList[i].checked ) {
            return radioList[i].value;
        }
    }

    return "";
}


/**
 * ���ص� checkbox�� �� list
 */
function getCheckedValueList( formId, elementName ) {
    var checkboxList = $(formId).getInputs( 'checkbox', elementName );
    var resultList = [], idx = 0;

    for ( var i = 0; i < checkboxList.length; i++ ) {
        if ( checkboxList[i].checked ) {
            resultList[idx++] = checkboxList[i].value;
        }
    }

    return resultList;
}
