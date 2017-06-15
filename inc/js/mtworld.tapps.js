function checkPakageInstalled(packageSchme){
	if(MobileUA.IOS){
		$("#gotoAppStore").css("display", "inline-block");
	} else if(MobileUA.ANDROID){
		var cYn = "N"
	   try{
	    cYn = toapp.packageInstall(packageSchme, "0"); // �� ��ġ ���� Ȯ�� (Y: ��ġ / N : �̼�ġ)
	   }catch(err){
	    //4.0.3 ���� �������� toapp.packageInstall() �����ȵ�.
	    cYn = "N";
	   }
	   if(cYn == "N"){
			$("#gotoOneStore").css("display", "inline-block");
			$("#gotoGooglePlay").css("display", "inline-block");
	   } else {
		   $("#runApps_android").css("display", "inline-block");
	   }
	}
	
	$(".notice.copyright").removeClass("notice_copy");
}

function gotoStore(XTVID, XTLID, link, static_cd){
	if(confirm("3G/LTE�� ��� �� ������ ����� �߻��˴ϴ�.")){
		callCSScript(XTVID, XTLID, static_cd , '', '');
		goOutLink(link);
	}
}

function runApp(XTVID, XTLID, packageSchme, static_cd){ //android ��
	callCSScript(XTVID, XTLID, static_cd , '', '');
	try{
		location.href = "toapp:startPackage:" + packageSchme;
	   }catch(err){
	   }
}

function golink(XTVID, XTLID, url, b, inout, static_cd){
	if(static_cd != undefined) {
		callCSScript(XTVID, XTLID, static_cd , '', '');
	}
	try{
		if(inout == 'out'){
			if(b == 'y'){
				if(confirm("3G/LTE�� ��� �� ������ ����� �߻��˴ϴ�.")){
					goOutLink(url);
				}
			} else {
				goOutLink(url);
			}
		} else {
			location.href = url;
		}
	   }catch(err){
	   }
}

function goOutLink(link){
	if(MobileUA.ANDROID) {   // OS üũ
		toapp.webbrowserouter(link);
	}else if(MobileUA.IOS) {
		location.href = "toapp:webbrowserouter:" + link;
	}
}
