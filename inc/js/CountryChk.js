    function findCountry() {
        //$('countryCodeEntity.countryCode').value = "";
        //$('countryCodeEntity.countryNameKor').value = "";

        //if ( required( 'keyword', "���� �˻�� �Է��ϼž� �մϴ�." ) ) return;
        
        if ( $('keyword').value == "���޷���" || $('keyword').value == "��������") $('keyword').value = "���޷���";
        else if ( $('keyword').value == "�׶󳪴�") $('keyword').value = "�׷�����";
        else if ( $('keyword').value == "�׸�����") $('keyword').value = "�׸�����";
        else if ( $('keyword').value == "�׵�����") $('keyword').value = "�״�����";
        else if ( $('keyword').value == "�״������ƿ����" || $('keyword').value == "�״����� ����" || $('keyword').value == "�״����� ��ƿ���� ����" || $('keyword').value == "�״����� ��ƿ���� ����") $('keyword').value = "�״����� ��ƿ���� ����";
        else if ( $('keyword').value == "Ÿ�̿�") $('keyword').value = "�븸";
        else if ( $('keyword').value == "���̴�ī ����") $('keyword').value = "���̴�ī(����)";
        else if ( $('keyword').value == "����θ���") $('keyword').value = "����θ�ũ";
        else if ( $('keyword').value == "�����Ͽ�") $('keyword').value = "�����Ͼ�";
        else if ( $('keyword').value == "���ɵ���") $('keyword').value = "���ɵ��Ͼ�";
        else if ( $('keyword').value == "����������") $('keyword').value = "�����̽þ�";
        else if ( $('keyword').value == "���츮Ÿ�Ͼ�" || $('keyword').value == "��Ÿ��") $('keyword').value = "��Ÿ�Ͼ�";
        else if ( $('keyword').value == "��Ÿ") $('keyword').value = "��Ÿ";
        else if ( $('keyword').value == "����") $('keyword').value = "����";
        else if ( $('keyword').value == "�ٹٵ���" || $('keyword').value == "�ٺ�����") $('keyword').value = "�ٺ��̵���";
        else if ( $('keyword').value == "������ ���� ����" || $('keyword').value == "������ ���� ����") $('keyword').value = "���� ����(����)";
        else if ( $('keyword').value == "���׼�����") $('keyword').value = "�����ֿ���";
        else if ( $('keyword').value == "����") $('keyword').value = "����";
        else if ( $('keyword').value == "����罺") $('keyword').value = "���η��";
        else if ( $('keyword').value == "������") $('keyword').value = "������";
        else if ( $('keyword').value == "��������" || $('keyword').value == "����������") $('keyword').value = "����������";
        else if ( $('keyword').value == "���̼�") $('keyword').value = "���̼�";
        else if ( $('keyword').value == "����þ�") $('keyword').value = "����Ʈ ��þ�";
        else if ( $('keyword').value == "����Ʈ��Ʈ�׷�����" || $('keyword').value == "����Ʈ�׷�����") $('keyword').value = "����Ʈ";
        else if ( $('keyword').value == "����ƮŰ���׺�" || $('keyword').value == "��Ű���׺�") $('keyword').value = "����Ʈ Ű�� �� �׺�";
        else if ( $('keyword').value == "���߹ٸ� ���� �� ����" || $('keyword').value == "���߹ٸ� ����") $('keyword').value = "���߹ٸ� ���� �� ����";
        else if ( $('keyword').value == "����������") $('keyword').value = "����������";
        else if ( $('keyword').value == "�ÿ��� ������" || $('keyword').value == "�ÿ��� ������") $('keyword').value = "�ÿ��󸮿�";
        else if ( $('keyword').value == "�̰���") $('keyword').value = "�̰�����";
        else if ( $('keyword').value == "�ƶ����̷���Ʈ" || $('keyword').value == "�ƶ����̸�Ʈ ����" || $('keyword').value == "�ƶ����̷���Ʈ ����") $('keyword').value = "�ƶ����̸�Ʈ";
        else if ( $('keyword').value == "�Ƹ޸�ĭ����" || $('keyword').value == "�̱��ɻ�������") $('keyword').value = "�Ƹ޸�ī ����";
        else if ( $('keyword').value == "���̽�����" || $('keyword').value == "���̽�����") $('keyword').value = "���̽�����";
        else if ( $('keyword').value == "������������") $('keyword').value = "������������";
        else if ( $('keyword').value == "�ȱж�" || $('keyword').value == "�ӱж�") $('keyword').value = "�ȱ��";
        else if ( $('keyword').value == "��Ƽ�� �ٺ��" || $('keyword').value == "��Ƽ��") $('keyword').value = "��Ƽ����";
        else if ( $('keyword').value == "��Ƽ���Ǿ�" || $('keyword').value == "�̵���Ǿ�") $('keyword').value = "������Ǿ�";
        else if ( $('keyword').value == "���� ���" || $('keyword').value == "�����丮�˱��") $('keyword').value = "�����丮�� ��Ͼ�";
        else if ( $('keyword').value == "���") $('keyword').value = "���Ű��ź";
        else if ( $('keyword').value == "���¸�") $('keyword').value = "��Ż����";
        else if ( $('keyword').value == "�ε��") $('keyword').value = "�ε�";
        else if ( $('keyword').value == "�ڸ���ī") $('keyword').value = "�ڸ���ī";
        else if ( $('keyword').value == "�׷�����" || $('keyword').value == "�׷�����") $('keyword').value = "������";
        else if ( $('keyword').value == "�����Ÿ" || $('keyword').value == "�������") $('keyword').value = "�����Ÿ";
        else if ( $('keyword').value == "��ٺ��") $('keyword').value = "���ٺ��";
        else if ( $('keyword').value == "í��") $('keyword').value = "����";
        else if ( $('keyword').value == "ü�� ��ȭ��") $('keyword').value = "ü��";
        else if ( $('keyword').value == "ī��������" || $('keyword').value == "ī�����Ʊ���" || $('keyword').value == "ī����������") $('keyword').value = "ī��������";
        else if ( $('keyword').value == "ī����") $('keyword').value = "ĳ����";
        else if ( $('keyword').value == "���̸� ����" || $('keyword').value == "���̸� ����" || $('keyword').value == "���̸�����" || $('keyword').value == "���̸Ǳ���" || $('keyword').value == "ī�̸�����" || $('keyword').value == "ī�̸�����") $('keyword').value = "ĳ�̸� ����";
        else if ( $('keyword').value == "��Ʈ�����" || $('keyword').value == "��Ʈ���͸�" || $('keyword').value == "��Ʈ��ο͸�" || $('keyword').value == "��Ʈ���Ƹ�") $('keyword').value = "��Ʈ��ξƸ�";
        else if ( $('keyword').value == "Ű��Ű�ź") $('keyword').value = "Ű���⽺��ź";
        else if ( $('keyword').value == "��ũ��������Ŀ������" || $('keyword').value == "��ũ��������Ŀ��" || $('keyword').value == "��ũ���������ڽ�" || $('keyword').value == "��ũ���������ڽ�����" || $('keyword').value == "�ν�������Ŀ��" || $('keyword').value == "��ũ��������Ŀ������" || $('keyword').value == "�ν��������ڽ�����") $('keyword').value = "��ũ��ī���ڽ� ����";
        else if ( $('keyword').value == "����ũ��") $('keyword').value = "����ũ�޴Ͻ�ź";
        else if ( $('keyword').value == "�ķο� ����" || $('keyword').value == "�ķο� ����") $('keyword').value = "�ķο�";
        else if ( $('keyword').value == "������Į") $('keyword').value = "��������";
        else if ( $('keyword').value == "����ġ �����׽þ�" || $('keyword').value == "�������� �����׽þ�") $('keyword').value = "�����׽þ�";
        else if ( $('keyword').value == "������" || $('keyword').value == "����") {
        	alert("������(������)�� ������ ������ ��� �� Ŀ�������� ����˴ϴ�");
        	$('keyword').value = "����";
        }
        //ajaxSend( "/24hours/t_roaming/CountryCharge.do?method=findCountryList", "countryCodeEntity.keyword=" +  encodeURIComponent($F('keyword')), onLoadFindCountry );
        //ajaxSend( "/jsp/brand/roaming/charge/FindCountry.jsp", "keyword=" +  encodeURIComponent($F('keyword')), onLoadFindCountry );
        ajaxSend( "/normal.do?viewId=V_ROAM0033&serviceId=S_ROAM0002", "keyword=" +  encodeURIComponent($F('keyword')), onLoadFindCountry );
    }
    
    // �Ӵ�ι� ���� �߰��� ���� ���� �۾� [2010.06.14][s] 
    function findCountryReserve(inputVal) {
        $('countryCodeEntity.countryCode').value = "";
        $('countryCodeEntity.countryNameKor').value = "";

				var nation = 'nationcode_' + inputVal;
           
        if ( required( nation, "���� �˻�� �Է��ϼž� �մϴ�." ) ) return;
      
        if ( $(nation).value == "���޷���" || $(nation).value == "��������") $(nation).value = "���޷���";
        else if ( $(nation).value == "�׶󳪴�") $(nation).value = "�׷�����";
        else if ( $(nation).value == "�׸�����") $(nation).value = "�׸�����";
        else if ( $(nation).value == "�׵�����") $(nation).value = "�״�����";
        else if ( $(nation).value == "�״������ƿ����" || $(nation).value == "�״����� ����" || $(nation).value == "�״����� ��ƿ���� ����" || $(nation).value == "�״����� ��ƿ���� ����") $(nation).value = "�״����� ��ƿ���� ����";
        else if ( $(nation).value == "Ÿ�̿�") $(nation).value = "�븸";
        else if ( $(nation).value == "���̴�ī ����") $(nation).value = "���̴�ī(����)";
        else if ( $(nation).value == "����θ���") $(nation).value = "����θ�ũ";
        else if ( $(nation).value == "�����Ͽ�") $(nation).value = "�����Ͼ�";
        else if ( $(nation).value == "���ɵ���") $(nation).value = "���ɵ��Ͼ�";
        else if ( $(nation).value == "����������") $(nation).value = "�����̽þ�";
        else if ( $(nation).value == "���츮Ÿ�Ͼ�" || $(nation).value == "��Ÿ��") $(nation).value = "��Ÿ�Ͼ�";
        else if ( $(nation).value == "��Ÿ") $(nation).value = "��Ÿ";
        else if ( $(nation).value == "����") $(nation).value = "����";
        else if ( $(nation).value == "�ٹٵ���" || $(nation).value == "�ٺ�����") $(nation).value = "�ٺ��̵���";
        else if ( $(nation).value == "������ ���� ����" || $(nation).value == "������ ���� ����") $(nation).value = "���� ����(����)";
        else if ( $(nation).value == "���׼�����") $(nation).value = "�����ֿ���";
        else if ( $(nation).value == "����") $(nation).value = "����";
        else if ( $(nation).value == "����罺") $(nation).value = "���η��";
        else if ( $(nation).value == "������") $(nation).value = "������";
        else if ( $(nation).value == "��������" || $(nation).value == "����������") $(nation).value = "����������";
        else if ( $(nation).value == "���̼�") $(nation).value = "���̼�";
        else if ( $(nation).value == "����þ�") $(nation).value = "����Ʈ ��þ�";
        else if ( $(nation).value == "����Ʈ��Ʈ�׷�����" || $(nation).value == "����Ʈ�׷�����") $(nation).value = "����Ʈ";
        else if ( $(nation).value == "����ƮŰ���׺�" || $(nation).value == "��Ű���׺�") $(nation).value = "����Ʈ Ű�� �� �׺�";
        else if ( $(nation).value == "���߹ٸ� ���� �� ����" || $(nation).value == "���߹ٸ� ����") $(nation).value = "���߹ٸ� ���� �� ����";
        else if ( $(nation).value == "����������") $(nation).value = "����������";
        else if ( $(nation).value == "�ÿ��� ������" || $(nation).value == "�ÿ��� ������") $(nation).value = "�ÿ��󸮿�";
        else if ( $(nation).value == "�̰���") $(nation).value = "�̰�����";
        else if ( $(nation).value == "�ƶ����̷���Ʈ" || $(nation).value == "�ƶ����̸�Ʈ ����" || $(nation).value == "�ƶ����̷���Ʈ ����") $(nation).value = "�ƶ����̸�Ʈ";
        else if ( $(nation).value == "�Ƹ޸�ĭ����" || $(nation).value == "�̱��ɻ�������") $(nation).value = "�Ƹ޸�ī ����";
        else if ( $(nation).value == "���̽�����" || $(nation).value == "���̽�����") $(nation).value = "���̽�����";
        else if ( $(nation).value == "������������") $(nation).value = "������������";
        else if ( $(nation).value == "�ȱж�" || $(nation).value == "�ӱж�") $(nation).value = "�ȱ��";
        else if ( $(nation).value == "��Ƽ�� �ٺ��" || $(nation).value == "��Ƽ��") $(nation).value = "��Ƽ����";
        else if ( $(nation).value == "��Ƽ���Ǿ�" || $(nation).value == "�̵���Ǿ�") $(nation).value = "������Ǿ�";
        else if ( $(nation).value == "���� ���" || $(nation).value == "�����丮�˱��") $(nation).value = "�����丮�� ��Ͼ�";
        else if ( $(nation).value == "���") $(nation).value = "���Ű��ź";
        else if ( $(nation).value == "���¸�") $(nation).value = "��Ż����";
        else if ( $(nation).value == "�ε��") $(nation).value = "�ε�";
        else if ( $(nation).value == "�ڸ���ī") $(nation).value = "�ڸ���ī";
        else if ( $(nation).value == "�׷�����" || $(nation).value == "�׷�����") $(nation).value = "������";
        else if ( $(nation).value == "�����Ÿ" || $(nation).value == "�������") $(nation).value = "�����Ÿ";
        else if ( $(nation).value == "��ٺ��") $(nation).value = "���ٺ��";
        else if ( $(nation).value == "í��") $(nation).value = "����";
        else if ( $(nation).value == "ü�� ��ȭ��") $(nation).value = "ü��";
        else if ( $(nation).value == "ī��������" || $(nation).value == "ī�����Ʊ���" || $(nation).value == "ī����������") $(nation).value = "ī��������";
        else if ( $(nation).value == "ī����") $(nation).value = "ĳ����";
        else if ( $(nation).value == "���̸� ����" || $(nation).value == "���̸� ����" || $(nation).value == "���̸�����" || $(nation).value == "���̸Ǳ���" || $(nation).value == "ī�̸�����" || $(nation).value == "ī�̸�����") $(nation).value = "ĳ�̸� ����";
        else if ( $(nation).value == "��Ʈ�����" || $(nation).value == "��Ʈ���͸�" || $(nation).value == "��Ʈ��ο͸�" || $(nation).value == "��Ʈ���Ƹ�") $(nation).value = "��Ʈ��ξƸ�";
        else if ( $(nation).value == "Ű��Ű�ź") $('keyword').value = "Ű���⽺��ź";
        else if ( $(nation).value == "��ũ��������Ŀ������" || $(nation).value == "��ũ��������Ŀ��" || $(nation).value == "��ũ���������ڽ�" || $(nation).value == "��ũ���������ڽ�����" || $(nation).value == "�ν�������Ŀ��" || $(nation).value == "��ũ��������Ŀ������" || $(nation).value == "�ν��������ڽ�����") $(nation).value = "��ũ��ī���ڽ� ����";
        else if ( $(nation).value == "����ũ��") $(nation).value = "����ũ�޴Ͻ�ź";
        else if ( $(nation).value == "�ķο� ����" || $(nation).value == "�ķο� ����") $(nation).value = "�ķο�";
        else if ( $(nation).value == "������Į") $(nation).value = "��������";
        else if ( $(nation).value == "����ġ �����׽þ�" || $(nation).value == "�������� �����׽þ�") $(nation).value = "�����׽þ�";
        else if ( $(nation).value == "������" || $(nation).value == "����") {
        	alert("������(������)�� ������ ������ ��� �� Ŀ�������� ����˴ϴ�");
        	$(nation).value = "����";
        }
        	
        ajaxSend( "/normal.do?viewId=V_ROAM0033&serviceId=S_ROAM0002", "keyword=" +  encodeURIComponent($F(nation)), onLoadFindCountry );
    }
    // �Ӵ�ι� ���� �߰��� ���� ���� �۾� [2010.06.14][e]
