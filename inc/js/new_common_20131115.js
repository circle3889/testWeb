// 모바일 주소창 감추기

try {

	window.addEventListener('load', function(){

		setTimeout(scrollTo, 0, 0, 1); 

	}, false);

} catch(e) {}





// list menu

function accordion(){

	$('.list_accordion .list_tit a').click(function(){

		if ($(this).parents('p').parents('.list_accordion > li').hasClass('on')) {

			$(this).parents('p').parents('.list_accordion > li').removeClass('on');

		} else {

			$('.list_accordion > li').removeClass('on');

			$(this).parents('p').parents('li').addClass('on');

		}

	});

}



//sub menu

function subMenu(index,viewnum){

	/* 2012-12-11 수정*/ //기존에 2번째 li만 찾던것에서 마지막 찾는 것으로 수정함
	if ($('.menu_two_list')){

		$('.menu_two_list .menu_list').find('li').last().addClass('last');		
		$('.menu_two_list .prv_btn').addClass('prv_disabled'); // 2013-10-28 추가
		$('.menu_two_list .next_btn').addClass('next_disabled'); // 2013-10-28 추가
	}
	/* //2012-12-11 수정*/
	var menuLength = $('.menu_roll_list .menu_list').find('li').length,

		menuLi = $('.menu_roll_list .menu_list').find('li'),

		hiddenLi = viewnum - 3;

	if (index == 6){

		var indexNum = 3;

	} else if (index == 5){

		var indexNum = 2;

	} else if (index == 4){

		var indexNum = 1;

	}

	if (hiddenLi > 0){

		menuLi.eq(hiddenLi + 2).addClass('last');
		$('.menu_roll_list .menu_list').find('li:gt('+hiddenLi + 2 +')').addClass('disabled_list_d'); // 2013-10-04 추가

	} else {

		menuLi.eq(2).addClass('last');
	
		$('.menu_roll_list .menu_list').find('li:gt(2)').addClass('disabled_list_d'); // 2013-10-04 추가

	}

	if (menuLength <= 3){
   
		$('.menu_roll_list .prv_btn').addClass('prv_disabled');

		$('.menu_roll_list .next_btn').addClass('next_disabled');

	} else {

		if (hiddenLi > 0){

			for (var i = 0 ; i < hiddenLi ; i++ ){

				menuLi.eq(i).addClass('disabled_list');

			}

		}
         
				 
		if ($('.menu_roll_list .menu_list').find('.disabled_list').length == indexNum){
        
			$('.menu_roll_list .next_btn').addClass('next_disabled');

		} else if ($('.menu_roll_list .menu_list').find('.disabled_list').length == 0){
		
			$('.menu_roll_list .prv_btn').addClass('prv_disabled');

		}

		$('.menu_roll_list .next_btn').click(function(){ 

			var hdList = $('.menu_roll_list .menu_list').find('.disabled_list');

			var hdListNum = hdList.length;

			if (hdListNum == indexNum - 1){
				$('.menu_roll_list .next_btn').addClass('next_disabled');
			}

			if (hdListNum < indexNum){
           
				menuLi.eq(hdListNum).addClass('disabled_list');

				menuLi.removeClass('last');
                menuLi.eq(hdListNum + 3).removeClass('disabled_list_d'); // 2013-10-04 추가
				menuLi.eq(hdListNum + 3).addClass('last');	

			}

			if (hdListNum >= 0){

				$('.menu_roll_list .prv_btn').removeClass('prv_disabled');

			}
           return false;
		});

		$('.menu_roll_list .prv_btn').click(function(){

			var hdList = $('.menu_roll_list .menu_list').find('.disabled_list');

			var hdListNum = hdList.length;

			if (hdListNum <= 1){

				$('.menu_roll_list .prv_btn').addClass('prv_disabled');
				
			}

			if (hdListNum <= indexNum){

				menuLi.eq(hdListNum - 1).removeClass('disabled_list');

				menuLi.removeClass('last');

				if (hdListNum + 1 >= 2){

					menuLi.eq(hdListNum + 1).addClass('last');
					menuLi.eq(hdListNum + 2).addClass('disabled_list_d');; // 2013-10-04 추가
				} else {

					menuLi.eq(2).addClass('last');
					menuLi.eq(3).addClass('disabled_list_d'); //2013-10-04 추가

				}

			}

			if (hdListNum <= indexNum){

				$('.menu_roll_list .next_btn').removeClass('next_disabled');

			}
			
			return false;
		});

	}

}



//layerpopup

function layerView(id){

	var layerId = $('#' + id),

		layerH = layerId.find('.layer_content').height()/2,

		wHeight = $(window).height()/2,

		scrollH = $(window).scrollTop()/2,

		scrollHtow = $(window).scrollTop(),

		mHeight = wHeight + scrollHtow,

		layerTop = mHeight - layerH,

		scrollHtop = scrollH*2 - 44;

	layerId.addClass('view_layer');

	if (layerTop <= 0){

		if (layerTop <= scrollH*2){

			if (scrollHtow <= 44){

				layerId.find('.layer_content').css('top', '0');

			} else {

				layerId.find('.layer_content').css('top', scrollH - 16 + 'px');

			}

			if ($('#content').outerHeight(true) + 44 <= (scrollH*2) + layerId.find('.layer_content').outerHeight(true)){

				$('#content').css('height',(scrollH*2) + layerId.find('.layer_content').outerHeight(true) -44 + 'px');

			}

		} else {

			layerId.find('.layer_content').css('top', '10px');

		}

	} else if (layerTop <= scrollH*2){

		layerId.find('.layer_content').css('top', scrollH*2 - 44 + 'px');

		if ($('#content').outerHeight(true) + 44 <= (scrollH*2) + layerId.find('.layer_content').outerHeight(true)){

			$('#content').css('height',(scrollH*2) + layerId.find('.layer_content').outerHeight(true) -44 + 'px');

		}

	} else {

		if (layerTop <= 44){

			layerId.find('.layer_content').css('top', '0px');

		} else {

			layerId.find('.layer_content').css('top', layerTop - 50 + 'px');

		}

	}

	if ($('#content').height() <= layerId.find('.layer_content').height()){

		$('#content').css('height',layerId.find('.layer_content').height());

	}

	if ($(window).height() > $('#content').outerHeight(true)){

		$('#content').css('height',$(window).height()-74);

	}

}



function layerClose(id){

	var layerId = $('#' + id);

	layerId.removeClass('view_layer');

	$('#content').css('height','auto');

}



function loadLayerView(id){

	var layerId = $('#' + id),

		layerH = layerId.find('.layer_content').height()/2,

		wHeight = $(window).height()/2,

		scrollH = $(window).scrollTop()/2,

		scrollHtow = $(window).scrollTop(),

		mHeight = wHeight + scrollHtow,

		layerTop = mHeight - layerH,

		scrollHtop = scrollH*2 - 44;

	layerId.addClass('view_layer');

	if (layerTop <= 0){

		if (layerTop <= scrollH*2){

			layerId.find('.layer_content').css('top', scrollH + 'px');

			if ($('#content').outerHeight(true) + 44 <= (scrollH*2) + layerId.find('.layer_content').outerHeight(true)){

				$('#content').css('height',(scrollH*2) + layerId.find('.layer_content').outerHeight(true) -44 + 'px');

			}

		} else {

			layerId.find('.layer_content').css('top', '10px');

		}

	} else if (layerTop <= scrollH*2){

		layerId.find('.layer_content').css('top', scrollH*2 - 44 + 'px');

		if ($('#content').outerHeight(true) + 44 <= (scrollH*2) + layerId.find('.layer_content').outerHeight(true)){

			$('#content').css('height',(scrollH*2) + layerId.find('.layer_content').outerHeight(true) -44 + 'px');

		}

	} else {

		layerId.find('.layer_content').css('top', layerTop - 22 + 'px');

	}

	if ($('#content').height() <= layerId.find('.layer_content').height()){

		$('#content').css('height',layerId.find('.layer_content').height());

	}

	if ($(window).height() > $('#content').outerHeight(true)){

		$('#content').css('height',$(window).height()-74);

	}

}



//주변가맹점 찾기

function memberStore(){

	var storeT = $('.cont_listbox'),

		listArea = $('.cont_listbox .item_area'),

		textArea = listArea.find('.text_area'),

		textW = listArea.width() - 111,

		listBtn = storeT.find('.listbox_more');



	textArea.css('width', textW + 'px');

	if (listBtn.length <= 0){

		var lastList = storeT.find('ul > li').length;

		storeT.find('ul > li').eq(lastList - 1).addClass('no_btn_last_li');

	}

	listArea.bind('click', function() {

		var self = $(this);



		if (self.parent().hasClass('view_btn')) {

			storeT.find('li').removeClass('view_btn');

			//storeT.find('li .item_btn_area').slideUp(200);

		} else {

			storeT.find('li').removeClass('view_btn');

			self.parent().addClass('view_btn');

			//storeT.find('li .item_btn_area').slideUp(200);

			//self.parent().find('.item_btn_area').slideDown(200);

		}

	});

}



//고객센터 및 공지사항

function faqNote(){

	var noteT = $('.faq_note_list'),

		titleArea = $('.faq_note_list .title_area'),

		listTotal = noteT.find('li').length;



	//noteT.find('li').eq(listTotal - 1).addClass('list_list');

	titleArea.bind('click', function() {

		var self = $(this);



		if (self.parent().hasClass('view_cont')) {

			noteT.find('li').removeClass('view_cont');

			//storeT.find('li .item_btn_area').slideUp(200);

		} else {

			noteT.find('li').removeClass('view_cont');

			self.parent().addClass('view_cont');

			//storeT.find('li .item_btn_area').slideUp(200);

			//self.parent().find('.item_btn_area').slideDown(200);

		}

	});

}



// 상품 아코디언

function prdAccordion(){

	$('.product_accordion .pd_accordion_title span').click(function(){

		if ($(this).parents().parents('li').hasClass('view_cont')) {

			$(this).parents().parents('li').removeClass('view_cont');

		} else {

			$('.product_accordion > li').removeClass('view_cont');

			$(this).parents().parents('li').addClass('view_cont');

		}

	});

}



//클릭시 view/hidden

function viewHidden(id, className){

	var idName = $('#' + id);

	if (idName.hasClass(className)) {

		idName.removeClass(className);

	} else {

		idName.addClass(className);

	}

}