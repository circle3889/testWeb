$(document).ready(function(){
	
	/**
	 * t-world Native App�α��� ȭ���û
	 * 2013.11.13
	 */
    $.fnLogin = function(){
    	location.href='toapp:login';
    }
    
    
	/**
	 * t-world Native App �α׾ƿ� ó����û
	 * ��ȭ��� Appȭ�� session ����ȭ ó����
	 * 2013.11.13
	 */
	/*
	$.fnLogout = function(){
        var url = "toapp:logout"
        var ifr=$('<iframe />', {
					              id    : 'logout'
					            , src   : url
					            , async : false
					            , style : 'display:none'
					            , load  : function(){}
        						});
        $('body').append(ifr);   
	}
	*/
		
}); // ready


  /**
    * ���� �ѱ����� �������� üũ��
    */
   function checkData(remain){
  	 var num_regx=/^[0-9]*$/;
	 var remainTemp = getNumString(remain);
	 var result = 'N';
	 if(!num_regx.test(remainTemp)){
	    return 'Y';
	 }
	 return result;
   }

   /**
    * ���ڿ� ���� [,] ������
    */ 
    function getNumString(s) {
	    var rtn = parseFloat(s.replace(/,/gi, ""));
	    if (isNaN(rtn)) {
	        return s;
	    }else {
	        return rtn;
	    }
    }

	/**
	* ���ֿ� [,] �߰���
	*/
	function commify(n) {
	  var reg = /(^[+-]?\d+)(\d{3})/;   // ���Խ�
	  n += '';                          // ���ڸ� ���ڿ��� ��ȯ
	  while (reg.test(n)){
	    n = n.replace(reg, '$1' + ',' + '$2');
	  }
	  return n;
	}
	
	
	/** 
	 * Map Object
	 */
	function Map() {
		this.keys = new Array();
		this.data = new Object();
		
		this.put = function(key, value) {
		    if(this.data[key] == null){
		        this.keys.push(key);
		    }
		    this.data[key] = value;
		};
		
		this.get = function(key) {
		    return this.data[key];
		};
		
		this.remove = function(key) {
		    this.keys.remove(key);
		    this.data[key] = null;
		};
		
		this.each = function(fn){
		    if(typeof fn != 'function'){
		        return;
		    }
		    var len = this.keys.length;
		    for(var i=0;i<len;i++){
		        var k = this.keys[i];
		        fn(k,this.data[k],i);
		    }
		};
		
		this.entrys = function() {
		    var len = this.keys.length;
		    var entrys = new Array(len);
		    for (var i = 0; i < len; i++) {
		        entrys[i] = {
		            key : this.keys[i],
		            value : this.data[i]
		        };
		    }
		    return entrys;
		};
		
		this.isEmpty = function() {
		    return this.keys.length == 0;
		};
		
		this.size = function(){
		    return this.keys.length;
		};
	}