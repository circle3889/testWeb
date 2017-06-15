<!--
/** 
 * ���� ó���� �մϴ�.
 */
function errHandler(msg, value )
{
	var isErr = false;

	if ( value == 0 | value == null | value == "" )
	{
		alert(msg + " ����");
		isErr = false;
	}
	else isErr = true;

	return isErr;
}
/**
 * ����� ������ üũ�մϴ�.
 */
function isNull( str )
{
	if (str == "" | str == null ) return true;
	else false;
}

/**
 * ���� ���� ������ üũ�մϴ�.
 */
function formCheck (msg, formValue)
{
	if (isNull(formValue))
	{
		alert(msg + "��(��) �����ϴ�.!!");
		return false;
	} else return true;
}
/**
 * ���ڿ��� �յ� ������ ���۴ϴ�.
 */
function trim(value) {
	value = value.replace(/^\s+/, "");  // remove leading white spaces
	value = value.replace(/\s+$/g, ""); // remove trailing while spaces
	return value;
}

function removeCR(value)
{
	return value.replace(/\r/,"");
}

/**
 * �������� ������ üũ�մϴ�.
 */
function getbrowser()
{
    var tempdocument = window.document;

    if (tempdocument.all && tempdocument.getelementbyid) // ���ͳ� �ͽ��÷η� 5.x
    {
        return 1;
    }
    else if (tempdocument.all && !tempdocument.getelementbyid) // ���ͳ� �ͽ��÷η� 4.x
    {
        return 2;
    }
    else if (tempdocument.getelementbyid && !tempdocument.all) // �ݽ������� 6
    {
        return 3;
    }
    else if (tempdocument.layers) // �ݽ������� 4.x
    {
        return 4;
    }
}

/**
 * ������ �̵��� �մϴ�.
 * @param        delay        ������ �̵� ���� �ð� (milliseconds)
 */
function movepage(str,delay)
{
    if (delay==null)
        window.location.href=str;
    else
        window.setinterval("window.location.href='"+str+"'",delay);
}
/**
 * ���� �����丮 ��Ʈ���� �������� �о���Դϴ�. (�ڷΰ��� ��ư ��Ȱ��ȭ)
 */
function replacepage(str,delay)
{
    if (delay==null)
        window.location.replace(str);
    else
        window.setinterval("window.location.replace('"+str+"')",delay);
}

/**
 * ���� ������ ���� ��ħ
 */
function reloadpage(delay)
{
if (delay==null)
        window.location.reload();
    else
        window.setinterval("window.location.reload()",delay);
}
/**
 * �ùٸ� ������������ üũ�մϴ�.
 */
function isvalidemail(str)
{
    var re=new regexp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$","gi");
    var matcharray=str.match(re);
    if (matcharray) return true;
    else return false;
}
/**
 * �ùٸ� ��ȭ��ȣ ����(����-����-����)���� üũ�մϴ�.
 */
function isvalidphone(str)
{
    if (str.search(/^(\d+)-(\d+)-(\d+)$/g)!=-1) return true;
    else return false;
}

/**
 * ���ĺ������� ������ ���ڿ����� üũ�մϴ�.
 */
function isalphabet(str)
{
    if (str.search(/[^a-za-z]/g)==-1) return true;
    else return false;
}

/**
 * �빮�ڷθ� ������ ���ڿ����� üũ�մϴ�.
 */
function isuppercase(str)
{
    if (str.search(/[^a-z]/g)==-1) return true;
    else return false;
}

/**
 * �ҹ��ڷθ� ������ ���ڿ����� üũ�մϴ�.
 */
function islowercase(str)
{
    if (str.search(/[^a-z]/g)==-1) return true;
    else return false;
}

/**
 * �ѱ۷θ� ������ ���ڿ����� üũ�մϴ�.
 */
function iskorean(str)
{
    var strlength = str.length;
    var i;
    var unicode;

    for (i=0;i<strlength;i++)
    {
        unicode = str.charCodeAt(i);
        if ( !(44032 <= unicode && unicode <= 55203) ) return false;
    }
    return true;
}

/**
 * ���ڸ����� ������ ���ڿ����� üũ�մϴ�.
 */
function isdigit(str)
{
    if (str.search(/[^0-9]/g)==-1) return true;
    else return false;
}

/**
 * ���� ���� �ʱ�ȭ
 * @params formType : �� Ÿ��(text, textarea ���)
 */
function resetForm(tag, formType)
{
	// document ���� ��� INPUT �±� ��ҵ��� �÷������� ���ϰ�...
	var collTxt = document.getElementsByTagName(tag);

	for(var i=0; i<collTxt.length; i++)  // ��� INPUT �� ���Ͽ�
	{
		if (formType == null | formType == "")
		{
			collTxt[i].value="";
		}
		// �� TYPE�� �˻��Ͽ� TEXT �̸� ���� ����.
		else if (collTxt[i].type == formType) collTxt[i].value="";
	}
}

/**
 * ��θ� �Է¹޾� ���丮�̸�, �����̸�, ���� Ȯ���ڰ� ��� �迭�� ��ȯ�մϴ�.
 * @params formType : ���� ���
 */
function splitPath( fullPath )
{
	var pathLength = fullPath.length;
	var lastDelim = fullPath.lastIndexOf("\\")+1;
	var startIndex = 0;

	//���丮 �и�
	var dirname = fullPath.substring(0 , lastDelim);
	//���� �и� �� �����̸��� Ȯ���� �и�
	var fullfilename = fullPath.substring(lastDelim, pathLength);
	var filename = fullfilename.substring(0, fullfilename.lastIndexOf("."));
	var fileext= fullfilename.substring(fullfilename.lastIndexOf("."), fullfilename.length);

	//var signedXmlFile = dirname+filename+"-sign"+fileext;

	var splitArray = new Array (dirname, filename, fileext);
	return (splitArray);
}
/**
 * ���ο� â�� ����.
 * @params url : ���� ���
 * @params name : â Ÿ��Ʋ �̸�
 * @params width : ����
 * @params height : ����
 * @params scroll : ��ũ�� ����
 * @params locTop : top ����
 * @params locLeft : left ����
 *
 */
function jsOpenWindowPos(url, name, width, height, scroll, locTop, locLeft){
	var top, left;
	if(scroll == null || scroll == '')	scroll='0';
	if(locTop != null) {
		top	 = locTop;
		left = locLeft;
	} else {
		top  = 10;
		left = 10;
	}
	var	option = 'width='+width+',height='+height+',top='+top+',left='+left+',resizable=yes,status=no,toolbar=no,menubar=no,scrollbars=' + scroll;
   	var win = window.open(url, name, option);
   	win.focus();
   	return win;
}

function jsOpenWindow(url, name, width, height, scroll, loc){
	var top, left;
	if(scroll == null || scroll == '')	scroll='0';
	if(loc != null) {
		top	 = screen.height/2 - height/2 - 50;
		left = screen.width/2 - width/2 ;
	} else {
		top  = 10;
		left = 10;
	}
	var	option = 'width='+width+',height='+height+',top='+top+',left='+left+',resizable=yes,status=no,toolbar=no,menubar=no,scrollbars=' + scroll;
   	var win = window.open(url, name, option);
   	win.focus();
   	return win;
}

function goIbChalTuchal(num, cha){

	var x = (screen.width - 840) / 2 ;
	var y = (screen.height - 600) / 2 ;
	var action = "����";
	var docType = "OrderBid";

	/*window.open("http://www.g2b.go.kr:8081/servlet/GG/EP_MPV_GGQ019?gonggo_num=" + num +
		"&gonggo_cha=" + cha + "&action=" + action + "&docType=" + docType,"tuchal", "left=50, top=50, width=840, height=600, toolbar=no, scrollbars=yes, menubar=no, resizable=yes");*/

	window.open("a.jsp","tuchal", "left=50, top=50, width=840, height=600, toolbar=no, scrollbars=yes, menubar=no, resizable=yes");

}

function myfun()
{
 var collTxt = document.getElementsByTagName("INPUT");   // document ���� ��� INPUT �±� ��ҵ��� �÷������� ���ϰ�...
 for(var i=0; i<collTxt.length; i++)  // ��� INPUT �� ���Ͽ�
 {
  if(collTxt[i].type=="text")           // �� TYPE�� �˻��Ͽ� TEXT �̸�
   collTxt[i].value="";                 // ���� ����.
 }
}

function getFilePath(inputform)
{
	inputform.value = SG.SGJ_getFilePath();
}

-->
