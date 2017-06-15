/**
 *
 * T WORLD Common AJAX
 *
 * �ۼ��� : ���ϰ�.
 *
 * �� ���ϸ� ����Ͻø� �ȵǰ� �̸� ���ǵ� include �������� ���ؼ� ���Խ�Ű�ž� ���������� �۵��˴ϴ�.
 *
 * Usage : ajaxSend( url, parameters, callback_function );
 *             ajaxSend( url, parameters, callback_function, options );
 *
 *  options : { method : 'get', onLoading : onLoading, onError : onError }
 *
 */


var common = new Object();

common.ajax = function( url, parameters, callback, options ) {
    this.url = url;
    this.parameters = parameters;
    this.callback = callback;
    this.options = options;
}

common.ajax.prototype = {
    send : function() {
        var ajaxRequest = new Ajax.Request( this.url, this.createOptions() );
    },

    createOptions : function() {
        var ajaxOptions = {};

        ajaxOptions.parameters = this.parameters;
        ajaxOptions.onSuccess = this.onSuccess;
        ajaxOptions.onFailure = this.onError;

        if ( this.options ) {
            if ( this.options.method ) {
                ajaxOptions.method = this.options.method;
            }

            if ( this.options.onLoading ) {
                ajaxOptions.onUninitialized = this.options.onLoading;
                ajaxOptions.onLoading = this.options.onLoading;
                ajaxOptions.onLoaded = this.options.onLoading;
                ajaxOptions.onInteractive = this.options.onLoading;
            }

            if ( this.options.onError ) {
                ajaxOptions.onFailure = this.onError;
            }
			
			if ( ! this.options.asynchronous ) {
				ajaxOptions.asynchronous = this.options.asynchronous;
			}
        }

        return ajaxOptions;
    },

    onSuccess : function( request ) {
        var xml;

        try {
            xml = (new DOMParser()).parseFromString(request.responseText, "text/xml");
        }
        catch(e) {
            xml = request.responseXML;
        }

        __ajax.callback( xml );
    },

    onError : function() {
        alert( "ó���� ������ �߻��Ͽ����ϴ�. ��� �� �ٽ� �̿��� �ֽñ� �ٶ��ϴ�." );
    }
}



var __ajax;


/**
 * AJAX Send
 */
function ajaxSend( url, parameters, callback, options ) {
    __ajax = new common.ajax( url, parameters, callback, options );
    __ajax.send();
}


/**
 *
 * id���� �� �� �̻� �ѱ�� �ش� object���� '�̸�=��&' ���·� queryString�� ����� ��ȯ��.
 * �� �� ���� urlEncoding �� ������.
 *
 */
function $qs() {
    var qryStr = "";

    for ( var i = 0; i < arguments.length; i++ ) {
        qryStr += $(arguments[i]).name + "=" + encodeURIComponent( $F( arguments[i] ) );

        if ( i < arguments.length - 1 ) {
            qryStr += "&";
        }
    }

    return qryStr;
}


/**
 * XML ����κ��� Ư�� �±��� Node�� ����
 */
function $xn( xml, tagName ) {
    return $xl( xml, tagName ).item(0);
}


/*
 * XML ����κ��� Ư�� �±��� Node List�� ����
 */
function $xl( xml, tagName ) {
    return xml.getElementsByTagName( tagName );
}


/**
 * XML Node�κ��� Ư�� �±��� ���� ����.
 * �Ķ���Ͱ� �ϳ��̸� �׳� ���� ��ȯ.
 * node�� Xml Document Element �Ǵ� �Ϲ� Node Ÿ���� �� �� �ִ�.
 */
function $xv( node, tagName ) {
    if ( arguments.length == 1 ) {
        return node.firstChild.nodeValue;
    }

    if ( node.nodeType == 9 ) {
        return $xn(node, tagName).firstChild.nodeValue
    }

    return node.getElementsByTagName( tagName ).item(0).firstChild.nodeValue;
}



/*
 *
 * Common Javascript Logger
 *
 * �ۼ��� : ���ϰ�
 *
 */

function _log( msg ) {
    if ( ! $('loggingConsole') ) {
        _createDivConsole();
        Element.hide( 'loggingConsole' );
    }

    var textNode = document.createTextNode( msg );
    $('loggingConsole').appendChild( textNode );
}

function _createDivConsole() {
    var container = document.createElement( "div" );
    container.setAttribute( "id", "loggingConsole" );
    document.body.appendChild( container );
}
