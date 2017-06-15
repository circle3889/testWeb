var MobileUA = ( function () {
		var ua = navigator.userAgent.toLowerCase();
		var mua = {
			IOS: /ipod|iphone|ipad/.test(ua),										//iOS
			IPHONE: /iphone/.test(ua),												//iPhone
			IPAD: /ipad/.test(ua),													//iPad
			ANDROID: /android/.test(ua),											//Android Device
			WINDOWS: /windows/.test(ua),										//Windows Device
			TOUCH_DEVICE: ('ontouchstart' in window) || /touch/.test(ua),	//Touch Device
			MOBILE: /mobile/.test(ua),												//Mobile Device (iPad)
			ANDROID_TABLET: false,												//Android Tablet
			WINDOWS_TABLET: false,												//Windows Tablet
			TABLET: false,															//Tablet (iPad, Android, Windows)
			SMART_PHONE: false													//Smart Phone (iPhone, Android)
		};
		mua.ANDROID_TABLET = mua.ANDROID && !mua.MOBILE;
		mua.WINDOWS_TABLET = mua.WINDOWS && /tablet/.test(ua);
		mua.TABLET = mua.IPAD || mua.ANDROID_TABLET || mua.WINDOWS_TABLET;
		mua.SMART_PHONE = mua.MOBILE && !mua.TABLET;
	
		return mua;
	}());

alertPopup = {
	show : function(){
		$(".alertPopup").show();
		alertPopup.init();
		if (MobileUA.IOS){   // OS üũ
			$(document).bind("touchstart",  function(e){ 
				e.preventDefault(); 
				if(e.target.className == "btnClose"){
					alertPopup.close();
				} else if(e.target.tagName == "A" || e.target.tagName == "a"){
//					var link = $(e.target).attr("href");
//					if(link == "#"){
//						$(e.target).click(); //�ܺ� ��ũ �� ��� goLink �Լ� ȣ��
//					} else {
//						location.href = link; //���� ��ũ �� ���
//					}
					
					$($(e.target)).get(0).click();
				} else if(e.target.tagName == "BUTTON" || e.target.tagName == "button"){
					alertPopup.close();
				}
			});
			$("body").css("overflow", "hidden");
		} else {
			$("body").css("overflow", "hidden");
			if($(".alertPopup .btnTypeB").get(0).tagName == "BUTTON" || $(".alertPopup .btnTypeB").get(0).tagName == "button"){
				$(".alertPopup .btnTypeB").click(function(){
					alertPopup.close();
				});
			}
		}
	},

	init : function(){
		this.$alertPop = $(".alertPopup");
		this.addEvent();
		
		$(".alertPopup .btnClose").click(function(){
			alertPopup.close();
		});
	},

    addEvent : function() {
    	$(".alertPopup").find(".inner").css({
	        top : ($(window).height() - $(".alertPopup").find(".inner").outerHeight()) / 2
	    });
    },
    
	close : function(){
		$(".alertPopup").hide();
		if (MobileUA.IOS){   // OS üũ
			$(document).unbind("touchstart");
			$("html, body").css("overflow", "");
		}else{
			$("html, body").css("overflow", "");
		}
	}
}

/* 2016-06-14 ���� */
pollCheck = {
	init : function(){
		this.$obj = $(".pollType02, .pollBox");
		this.addEvent();
	},

    addEvent : function() {
    	var $list = $(".pollType02 li"),
    		$pollBox = $(".svyTbl td");
    	
    	$("input[type=radio]").on("click", function() {
    		$(this).focus();
    		$list.removeClass("on");
			$(this).closest("li").addClass("on");
    		$pollBox.removeClass("on");
			$(this).closest("td").addClass("on");
		});
    }
}

/* 2016-08-10 �߰� */ /* �߰� ���̵� ��� ���� ������ ���� ��ũ��Ʈ */
moreGuideBanner = {
	leftLink : [
	            {
	            	imgUrl : "/img/new_customer/center_left_00.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu02.html",
	            	altText : "�̿��� ���ؿ��� ����, ���� ������� �޸� ��ŷ ����� �˾ƺ���"
	            },
	            {
	            	imgUrl : "/img/new_customer/center_left_01.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu03.html",
	            	altText : "�̿��� ���ؿ��� ����, �Ĺ� ������Ʈ �ĺ����� ��ó��� �˾ƺ���"
	            },
	            {
	            	imgUrl : "/img/new_customer/center_left_02.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu05.html",
	            	altText : "�̿��� ���ؿ��� ����, ����Ʈ�� ���ȼ�Ģ �˾ƺ���"
	            },
	            {
	            	imgUrl : "/img/new_customer/center_left_03.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu01.html",
	            	altText : "�̿��� ���ؿ��� ����, ����Ʈ���� ���� ���̽� ���� ������ �˾ƺ���"
	            },
	            {
	            	imgUrl : "/img/new_customer/center_left_04.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu06.html",
	            	altText : "�̿��� ���ؿ��� ����, ������ �ҹ� ���� ��ó��� �˾ƺ���"
	            },
	            {
	            	imgUrl : "/img/new_customer/center_left_05.png",
	            	linkUrl : "http://m2.tworld.co.kr/dev/emphasis/customer/customer_damage_menu04.html",
	            	altText : "�̿��� ���ؿ��� ����, ���� ������ Ŭ���� ���� ��� �˾ƺ���"
	            }
	            ],
	rightLink : [
				{
					imgUrl : "/img/new_customer/08_ban_how01_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0001",
					altText : "�̷��� �̷��� �ϼ���. SKT LTE ���̶�� ������ �ʰ� ��� ����������!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0002",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �Ƚ��ϰ� ������ �����͸� ������?"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0003",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. ������ ���� ���� TV ���� ������?"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_04.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0004",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. ������ ������ �̿����Ͽ� �´� ���� ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_05.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0005",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �޴��� ������ �º��� �Բ� �� �� �־��!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_06.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0006",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. ������ �� ���� �� ������ �����ϼ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how01_07.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0007",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. ���� ������ ģ���� �������� �����ϼ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how02_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0008",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �޴��� �н��ߴٸ�? ���� ���� �нǽŰ�!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how02_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0009",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �Ҿ���� �޴��� ��ġ�������� ã�ƺ�����!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how02_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0010",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �޴��� �н��ߴٸ�? �Ӵ��� or ��⺯��"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how02_04.png",	
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0011",
					altText : "�̷��� �̷��� �ϼ���. �̷��� �̷��� �ϼ���. �нǺ��� �����ڶ�� �нǺ��� ��������!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how02_05.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0012",
					altText : "�̷��� �̷��� �ϼ���. �̸� �Ƚɹ�� �ߴٸ�? ������ ����!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how03_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0013",
					altText : "�̷��� �̷��� �ϼ���. �ؿܿ��� �� �� �ι� ���� Ȯ���ϼ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how03_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0014",
					altText : "�̷��� �̷��� �ϼ���. ������ �� ���� �������ּ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how03_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0015",
					altText : "�̷��� �̷��� �ϼ���. �ι� ���� ������� �Ƚ� �����ϼ���!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how03_04.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0016",
					altText : "�̷��� �̷��� �ϼ���. �ؿܿ��� �� �˾Ƶθ� ������ Tip!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how03_05.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0017",
					altText : "�̷��� �̷��� �ϼ���. �ؿܿ��� �ٳ�ͼ� ì�ܾ� �� ��!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how04_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0018",
					altText : "�̷��� �̷��� �ϼ���. ���� ������ �ް� �ֳ���?"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how04_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0019",
					altText : "�̷��� �̷��� �ϼ���. �� �̻� ���̽̿� ���� ������!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how04_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0020",
					altText : "�̷��� �̷��� �ϼ���. ����ϸ� ���� �� �־��! �޴��� ���ǵ���"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how04_04.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0021",
					altText : "�̷��� �̷��� �ϼ���. ��Ȱ �� ����� ������ �������� ��Ű����!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how05_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0022",
					altText : "�̷��� �̷��� �ϼ���. �ȶ��� �������� �ڳ� ��� ������"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how05_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0023",
					altText : "�̷��� �̷��� �ϼ���. ���� ������ ���� ����Ʈ�� Ȱ����"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how05_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0024",
					altText : "�̷��� �̷��� �ϼ���. �ٸ� �޴��� �������� ���� ��õ ���̵�"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how06_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0025",
					altText : "�̷��� �̷��� �ϼ���. �˰� ���� �� ���� T�����"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how06_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0026",
					altText : "�̷��� �̷��� �ϼ���. ���� ���� �����ϴ� ����� Ȱ����!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how06_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0027",
					altText : "�̷��� �̷��� �ϼ���. T���� ������θ� ���ݸ�"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how06_04.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0028",
					altText : "�̷��� �̷��� �ϼ���. ���� �ٸ� ���� T���� ���� ���"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how07_01.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0029",
					altText : "�̷��� �̷��� �ϼ���. ������ ��� ������ ����! �̿��� �� ���ϰ�!"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how07_02.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0030",
					altText : "�̷��� �̷��� �ϼ���. ����Ʈ�� �ʺ� Ż���� ���� �̿��"
				},
				{
					imgUrl : "/img/new_customer/08_ban_how07_03.png",
					linkUrl : "http://m2.tworld.co.kr/normal.do?serviceId=S_CMIS0122&viewId=V_CMIS1091&cntsId=TIP0031",
					altText : "�̷��� �̷��� �ϼ���. ����Ʈ�� ������ �÷��ִ� Ȱ�� ���̵�"
				}
	             ],
	init : function(){
		var now = new Date();
		var leftRandIdx = now.getTime() % moreGuideBanner.leftLink.length;
		var rightRandIdx = now.getTime() % moreGuideBanner.rightLink.length;
		$("#more_left_link .contents_link").attr("href", moreGuideBanner.leftLink[leftRandIdx].linkUrl)
										   .attr("title", moreGuideBanner.leftLink[leftRandIdx].altText);;
		$("#more_left_link img").attr("src", moreGuideBanner.leftLink[leftRandIdx].imgUrl)
								
		$("#more_right_link .contents_link").attr("href", moreGuideBanner.rightLink[rightRandIdx].linkUrl)
											.attr("title", moreGuideBanner.rightLink[rightRandIdx].altText);
		$("#more_right_link img").attr("src", moreGuideBanner.rightLink[rightRandIdx].imgUrl)
								
	},
}
