var SG;
var id = "localhost";

var sgObj = new Array();
//opner�� ���� ��� 

sgObj[0] = parent.frames["TOP"];
sgObj[1] = parent.parent.frames['TOP'];
sgObj[2] = parent.parent.parent.frames['TOP'];
//sgObj[3] = parent.parent.parent.parent.frames['TOP'];
sgObj[3] = this.frames['TOP'];

//opner�� ������ ��ü ���
try{
	opener;
	sgObj[4] = opener.frames['TOP'];
	sgObj[5] = opener.parent.frames['TOP'];
	sgObj[6] = opener.parent.frames['TOP'];
	sgObj[7] = opener.parent.parent.frames['TOP'];
	sgObj[8] = opener.parent.parent.parent.frames['TOP'];
}
catch(ex){}

for(i=0;i<sgObj.length;i++)
{
	SG = sgObj[i];
	alert(SG);
	if(SG == "" || SG == 'undefined' || SG == null)
		continue;
	else
	{
		try { SG.SGJ_getErrorMsg(); }
		catch (ex) { continue; }

		//���̿� ��ū ��� ����
		var test = SG.SGJ_setBioHsmList(SG.bioList);
		break;
	}
}