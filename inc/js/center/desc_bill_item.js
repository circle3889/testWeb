/*                                                  */
/*   ����׸� �󼼼��� �˾�â�� fuction ( �޽��� )  */
/*   ����׸���� �񱳸� ���� ��Ī�� �����ϴ�       */
/*   ��� ������ �����Ͽ����� ����                  */
/*                                                  */
/* job_type : '0' - �������ȸ��, '1' - ������û�������ȸ��, '2' - ���񽺺�û�������ȸ��, '3' - ���������������ȸ��*/
function  bill_item_pop(bill_item, job_type, svc_mgmt_number, term) {

    //����ݾȳ�
    var paid_serv= new Array("popup_useChargeInfo.html",
                             "������ȭ��",         
                             "�׷�����ȭ��",     
                             "�⺻��",             
                             "��α�/�Ŀ���",      
                             "�ܸ����Һα�",       
                             "�ιּ��ű�����ȭ��", //"�ιֱ���ȣ������ȭ"
                             "�ιּ�����",         
                             "�ιֿ��",           
                             "��������μ���",   
                             "���Ǳ��Ŵ��",       
                             "�г����Ժ�",         
                             "��ü�����",         
                             "�ܸ���AS��",         //"����������"  
                             "�Ϲ���ȭ�����ںδ�", 
                             "������ȭ��",         //"�Ϲ���ȭ��"
                             "�ڵ��ι���ȭ���",   
                             "�����߰���",         
                             "BIZSMS���",        
                             "SK������ȭ��" );       

    //�ΰ�����ȳ�
    var paid_add = new Array("popup_addService.html",
                             "�ΰ�����",            
                             "080�⺻��",             
                             "080��ȭ��",            
                             "������ȭ���Űź�",     
                             "�������ͼ�����",        
                             "�׷�޽���",            
                             "�ѹ��÷���",            
                             "����Ÿ��ŷ�",       //"��������ŷ�"         
                             "�޽�¡20",           //"�޽�¡ ������ 2,000"
                             "�޽�¡50",           //"�޽�¡ ������ 5,000"
                             "�޽����ݿ�����",        
                             "��ȣ����ȳ�",          
                             "���ε��������׷�",      
                             "���θ޽�������",      
                             "��������й�ȣ",        
                             "������Ȯ��",            
                             "��Ÿ�����",            
                             "��ġ��������",        
                             "����(P)/�ڵ�����",      
                             "����������",        
                             "������ȯ����",        
                             "ĳ���͹���",           
                             "�÷����� ����",         
                             "�÷���",                
                             "�÷����÷���",          
                             "��Ű��",                
                             "��ȭ�����뺸����",    
                             "��ȭ�����뺸�÷���",    
                             "�ú���",                
                             "�����̾�SMS",          
                             "��������Ʈ",            
                             "�����Ϸ���",            
                             "�����Ҹ�����",          
                             "�츮���̾Ƚ���",    //"i-Kids ����"       
                             "JUNE50",             //"JUNE 50"           
                             "JUNE95",             //"JUNE 95"          
                             "JUNE(��)150",           
                             "JUNE(��)250",          
                             "JUNE(��)500",           
                             "MYSTOCK����",        
                             "M-Bank���׷�",          
                             "NATEVoice������" );     


    //���ο�ݾȳ�
    var paid_disc= new Array("popup_dis_charge_guide.html",
                             "������ȭ����",       //"������ȭ����"   
                             "�׷�������",       
                             "������ȭ����",      
                             "SKT����ȭ����",      //"��������"       
                             "��������",          
                             "����Ͻ�����(DATA)", //"����Ͻ�����(Data)" 
                             "�����Ͻ�����",       //"����Ͻ�����"  
                             "��Ȱ��ȣ����",      
                             "�Ƶ���������",      
                             "��ġ�������",      
                             "�ڵ���������",      
                             "��Ⱑ������",      
                             "��ð���ȭ����",     //"�����ȭ����"   
                             "����������",      
                             "������ȣ����",      
                             "���ڸ޼�������",     //"����������"   
                             "�����̾�����",      
                             "��������",          
                             "���̺�����",         //"MYBELL����"     
                             "NATE����",           //"NATE����"      
                             "PointBox����" );      

    //�����̿��ȳ�
    var paid_info= new Array("popup_info_charge_guide.html",
                             "�̵���ȭ700",
                             "�����̿��"   );

    //�ΰ����ȳ�
    var paid_tax = new Array("popup_tax_guide.html",
                             "�ΰ���", 
                             "��ȭ��" );

    //�������ͳݾȳ�
	var paid_mobi= new Array("popup_wireless_internet_guide.html",
                             "����LAN�̿��",      //"�������ͳ�" 
                             "������������",    
                             "���������׷�",    
                             "��������ȭ��",    
                             "���ڸ޽����̿��",   //"�������̿��"  
                             "���̹��ݿ��",   
                             "����Ʈ������ä��" );

    var msg_htm = '';
    var open_htm = "http://m.tworld.co.kr/common/popup/center/";

    if (bill_item == ''){
        return;
    }

    if (bill_item == '����Ʈ����'){
        if (job_type == '1') {
            alert('\n����Ʈ���� �󼼳�����ȸ�� ���񽺺� û����� ����ȸ�ÿ� �����մϴ�!\t');
            return;
        }

        if (job_type == '0' || job_type == '2' || job_type == '3'){
            msg_htm = "/jsp/center/bill/use/cm7_nate_shopping_detail.jsp?job_type=" + job_type + "&svc_mgmt_number=" + svc_mgmt_number + "&term=" + term;
        }
        else {
            alert('\n����Ʈ���� �󼼳�����ȸ ������ �����ϴ�!\t');
            return;
        }
        window.open( msg_htm, "WIN_SUB", "menubar=0, toolbar=0,location=0,status=0,directory=0,border=0,scrollbars=1,resizable=0,width=615,height=517,top=0,left=0" )
        return;   
    }

    //�� �ȳ��� �׸��� �Ǽ�
    paid_serv_cnt = 21;
    paid_add_cnt  = 45;
    paid_disc_cnt = 22;
    paid_info_cnt = 3;
    paid_tax_cnt  = 3;
    paid_mobi_cnt = 8;
    paid_smal_cnt = 7;

    //����ݾȳ� �׸����� Ȯ��
    for (i=1; i<paid_serv_cnt; i++) {
        if (bill_item==paid_serv[i]){
            if (i<10) {
                msg_htm = open_htm + paid_serv[0] + '#0' + i;
            }
            else {
                msg_htm = open_htm + paid_serv[0] + '#' + i;
            }
        }
    }

    if (msg_htm == ''){
        //�ΰ�����ȳ� �׸����� Ȯ��
        for (i=1; i<paid_add_cnt; i++) {
            if (bill_item==paid_add[i]){
                if (i<10) {
                    msg_htm = open_htm + paid_add[0] + '#0' + i;
                }
                else {
                    msg_htm = open_htm + paid_add[0] + '#' + i;
                }
            }
        }
    }

    if (msg_htm == ''){
        //���ο�ݾȳ� �׸����� Ȯ��
        for (i=1; i<paid_disc_cnt; i++) {
            if (bill_item==paid_disc[i]){
                if (i<10) {
                    msg_htm = open_htm + paid_disc[0] + '#0' + i;
                }
                else {
                    msg_htm = open_htm + paid_disc[0] + '#' + i;
                }
            }
        }
    }

    if (msg_htm == ''){
        //�ΰ����ȳ� �׸����� Ȯ��
        for (i=1; i<paid_tax_cnt; i++) {
            if (bill_item==paid_tax[i]){
                if (i<10) {
                    msg_htm = open_htm + paid_tax[0] + '#0' + i;
                }
                else {
                    msg_htm = open_htm + paid_tax[0] + '#' + i;
                }
            }
        }
    }

    if (msg_htm == ''){
        //�������ͳݾȳ� �׸����� Ȯ��
        for (i=1; i<paid_mobi_cnt; i++) {
            if (bill_item==paid_mobi[i]){
                if (i<10) {
                    msg_htm = open_htm + paid_mobi[0] + '#0' + i;
                }
                else {
                    msg_htm = open_htm + paid_mobi[0] + '#' + i;
                }
            }
        }
    }

    if (msg_htm == ''){
        //�����̿��ȳ� �׸����� Ȯ��
        for (i=1; i<paid_info_cnt; i++) {
            if (bill_item==paid_info[i]){
                if (i<10) {
                    msg_htm = open_htm + paid_info[0] + '#0' + i;
                }
                else {
                    msg_htm = open_htm + paid_info[0] + '#' + i;
                }
            }
        }
    }

    if (msg_htm != ''){
        window.open( msg_htm, "WIN_SUB", "menubar=0, toolbar=0,location=0,status=0,directory=0,border=0,scrollbars=1,resizable=0,width=665,height=570,top=0,left=0" )
        return;
    }

    if (msg_htm == ''){
        msg_htm = open_htm + "popup_charge_none.html";
        window.open( msg_htm, "WIN_SUB", "menubar=0, toolbar=0,location=0,status=0,directory=0,border=0,scrollbars=1,resizable=0,width=665,height=570,top=0,left=0" )
        return;
    }

    return;
}


/****************************************************
    tbl      : ������ ��� table object
    startRow : ���� ���� row, title �� ���� ��� 1
    cNum     : ���� �ǽ��� �÷���ȣ, 0���� ����
    length   : ������ row�� ����, ���� 1
    add      : ���� ���ؿ� �߰��� �÷���ȣ
              A | 1
              B | 1
             �� ���� �����ϰ� �ʹٸ�, add�� 0��°
             �÷��� �߰�
*****************************************************/
function mergeCell(tbl, startRow, cNum, length, add)
{
    var isAdd = false;
    if(tbl == null) return;
    if(startRow == null || startRow.length == 0) startRow = 1;
    if(cNum == null || cNum.length == 0) return ;
    if(add  == null || add.length == 0) {
        isAdd = false;
    }else {
        isAdd = true;
        add   = parseInt(add);
    }
    cNum   = parseInt(cNum);
    length = parseInt(length);

    rows   = tbl.rows;
    rowNum = rows.length;

    tempVal  = '';
    cnt      = 0;
    startRow = parseInt(startRow);

    for( i = startRow; i < rowNum; i++ ) { 
        curVal = rows[i].cells[cNum].innerHTML;
        if(isAdd) curVal += rows[i].cells[add].innerHTML;
        if( curVal == tempVal ) {
            if(cnt == 0) {
                cnt++;
                startRow = i - 1;
            }
            cnt++;
        }else if(cnt > 0) {
            merge(tbl, startRow, cnt, cNum, length);
            startRow = endRow = 0;
            cnt = 0;
        }else {
        }
        tempVal = curVal;
    }

    if(cnt > 0) {
        merge(tbl, startRow, cnt, cNum, length);
    }
}

/*******************************************
    mergeCell���� ����ϴ� �Լ�
********************************************/
function merge(tbl, startRow, cnt, cellNum, length)
{
    rows = tbl.rows;
    row  = rows[startRow];

    for( i = startRow + 1; i < startRow + cnt; i++ ) {
        for( j = 0; j < length; j++) {
            rows[i].deleteCell(cellNum);
        }
    }
    for( j = 0; j < length; j++) {
        row.cells[cellNum + j].rowSpan = cnt;
    }
}


