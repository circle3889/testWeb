

function zeroCheck(obj)		// ��ȭ��ȣ �Է½� ������ 0�� �Է����� ���ϵ��� ��.
{
    var chk = obj.value;
    if(obj.value.substring(0) == '0'){
        document.frmMain.PhoneNum1.value = '';
        return;
    }

}

function zeroCheckComm(obj, objTelGuk)		// ��ȭ��ȣ �Է½� ������ 0�� �Է����� ���ϵ��� ��.(0505,0502 ����)
{
    var telGuk = objTelGuk.value;
    //alert("telGuk==" + telGuk);

    var chk = obj.value;
    
    if(telGuk == '0505'  ||  telGuk == '0502')
    {}
    else   {
	    if(obj.value.substring(0) == '0'){
	        document.frmMain.PhoneNum1.value = '';
	        return;
	    }
	}   
}


function checkNum(obj)		//���� �˻�
{
	inStr	=	obj.value;
	for(var i=0; i<inStr.length;i++)
	{
		if(inStr.substring(i,i+1) < "0" || inStr.substring(i,i+1) > "9")
		{
			alert("�� �ʵ�� ���ڸ� �Է� �����մϴ�.");
			obj.value = "";
			obj.focus();
			return false;
		}
	}
	return true;
}

function checkNumCode()		//���� �˻�
{
    if((event.keyCode < 48) || (event.keyCode > 57)) {
        event.returnValue = false;
        alert("�� �ʵ�� ���ڸ� �Է� �����մϴ�.");
        return;
    }
    return true;
}

//checkChar ���� üũ �����Լ��� ����. �������: ������'-' ��󿡼� ���� 2008.12.16
function checkChar(obj) {		//���ĺ� �˻�
    var chars = "`~!@#$%^&*()_-=+{}[]|\:;\"\\'<>,./?0123456789";
    var InStr = obj.value;
    for (var inx = 0; inx < InStr.length; inx++) {
        if (chars.indexOf(InStr.charAt(inx)) > -1){
            alert('Ư������ �Ǵ� ���ڴ� �Է��� �� �����ϴ�.');
            obj.value ='';
            obj.focus();
            return false; // �ش� ���ڰ� ���� ��
        }
    }
	return true;
}

	function checkLenMoveNext(CurObj, chSize, AftObj) 	//ù��° obj�� ���� �˻� �� �������� focus ����
	{
	   if(CurObj.value.length>=chSize)  AftObj.focus();
	   else  return false ;
	   return true ;
	}

    function clear(frm){
        frm.value="";
        frm.focus();
    }

function getCookie(name) {		//��Ű ����
    var Found = false
    var start, end
    var i = 0

    while(i <= document.cookie.length) {
        start = i
        end = start + name.length

        if(document.cookie.substring(start, end) == name) {
            Found = true
            break
        }
        i++
    }

    if(Found == true) {
        start = end + 1
        end = document.cookie.indexOf(";", start)
        if(end < start)
            end = document.cookie.length
        return document.cookie.substring(start, end)
    }
    return ""
}

function ignoreSpaces(string) 
{
	var temp = ""; 
	string = '' + string; 
	splitstring = string.split(" "); 
	for(i = 0; i < splitstring.length; i++) 
		temp += splitstring[i]; 
	return temp; 
}

//���ڰ˻�
function checkdate(v_year,v_month,v_day )
{
	var err=0;
	r_year = eval(v_year) ; 
	r_month = eval(v_month); 
	r_day = eval(v_day)  ; 
	
	if (r_month==4 || r_month==6 || r_month==9 || r_month==11)
	{
		if (r_day==31) err=1;
	}

	// 2,����üũ
	if (r_month==2)
	{
		var g = parseInt(r_year/4);

		if (isNaN(g)) 
		{
			err=1;
		}
		
		if (r_day>29) err=1;
		
		if (r_day==29 && ((r_year/4)!=parseInt(r_year/4))) err=1;
	}

	if (err==1)
	{
		return false;
	}
	else
	{
	    return true;
	}
}

/*  ��� : �Ѱܿ� ���ڿ� �������ڸ� ���Ѵ�.
 *  Param   v_year  �⵵
 *  Param   v_month ��
 *  Param   v_day   ��
 *  return  1 : �������ں��� ũ��, 0 : ����. -1 : �������ں��� �۴�.
*/
function compCurrdate(v_year, v_month, v_day)
{
	var now,cyear,cmonth,cdate,currdate,ryear,rmonth,rday,pdate;
	var rtn=0;

	//�������� ����
	now = new Date();
	cyear = now.getYear();
	cmonth = (now.getMonth()+1);
	cdate = now.getDate();
	currdate = cyear * 10000 + cmonth * 100 + cdate

	ryear = eval(v_year) ; 
	rmonth = eval(v_month); 
	rday = eval(v_day)  ; 
	pdate = ryear * 10000 + rmonth * 100 + rday
	
	if (currdate < pdate)	{
		rtn = 1;
	}else if (currdate == pdate) {
		rtn = 0;
	} else {
		rtn = -1;
	}
    return rtn
}


function getToDay()	//���ó�¥
{

    var date = datToday;

    var year  = date.getFullYear();
    var month = date.getMonth() + 1; // 1��=0,12��=11�̹Ƿ� 1 ����
    var day   = date.getDate();

    if (("" + month).length == 1) { month = "0" + month; }
    if (("" + day).length   == 1) { day   = "0" + day;   }

    return ("" + year + month + day)

}


function ByteLen(sMsg) {

	var sOneChar   = '';
	var iCounts    = 0;

	for (k = 0 ;k < sMsg.length ;k++) {
		sOneChar = sMsg.charAt(k);
		if (escape(sOneChar).length > 4) {
			iCounts += 2;
		}
		else  {
			iCounts++;
		}
	}

	return iCounts
}

function checkByteLen(Obj, maxsize) {

	var imaxlen    = 0;
	sMsg	=	Obj.value;

	imaxlen	=	ByteLen(sMsg);
	if ( imaxlen > maxsize ) {
		alert("�׸��� �ִ� ���̴� " + maxsize + "�Դϴ�.\n�׸��� Ȯ���ϼ���.");
		Obj.value	=	"";
		return false;
	} else
		return true;
}

function checkByteLenYN(sMsg, maxsize) {
	var imaxlen    = 0;
	imaxlen	=	ByteLen(sMsg);
	if ( imaxlen > maxsize ) {
		return false;
	} else
		return true;
}
