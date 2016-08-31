$(function(){
	if(getQueryString().value!=null){
		$("#query_w").val(decodeURIComponent(getQueryString().value));
	}
	$("#load_nav").load("microcvLayout_th.html",function(){
		/*回调函数，最上导航条的搜索条隐藏*/
		$(".searching-uint").remove();
	});
	getInfo();
	var page = 1;
	/*职位类型    F:全职    P:兼职    S:实习*/
	var pos_type = "N";
	var industry = 0;
	var city_id = 0;
	var minSalary = 0;
	var maxSalary = 0;
	var pos_name = "";
	if(getQueryString().value!=null){
		pos_name =getQueryString().value;
	}
	/*1.高中以下 2.中专 3.高中 4.大专 5.本科 6.研究生 7.博士 8.博士后*/
	var record_request=0;
	var pos_release_date = "2011-01-01";
	var company_name = "";
	var pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
	$("body").on("click",".dropdown-menu li a",function(event){
		event.preventDefault();
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
		var index=$(this).parents(".form-group").index();
		switch (index){
			/*职位类型*/
			case 1:
				pos_type=$(this).data("pos_type");
				pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
				break;
			/*学历*/
			case 5:
				record_request=$(this).data("record_request");
				console.log(record_request);
				pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
				break;
			/*发布时间*/
			case 6:
				var date="2011-01-01";
				var dindex=$(this).parent("li").index();
				if(dindex==0){
					date=new Date();
					date=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
				}
				if(dindex==1){
				 var tmp=new Date();
					tmp.setDate(tmp.getDate()-3);
					date=tmp;
					date=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
				}
				if(dindex==2){
					 var tmp=new Date();
						tmp.setDate(tmp.getDate()-7);
						date=tmp;
						date=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
				}
				/*一个月内*/
				if(dindex==3){
					 var atoday=new Date();
					 var dateArray=new Array();
					 var datetmp;
					 var count=1;
					 datetmp=atoday.getFullYear()+"-"+atoday.getMonth();
					 	dateArray.push(datetmp);
					 	atoday.setMonth(atoday.getMonth()-count);
						date=atoday.getFullYear()+"-"+(atoday.getMonth()+1)+"-"+atoday.getDate();
				}
				pos_release_date=date;
				pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
				break;
		}
	});
	/*第二个下拉，城市的选定之后的搜索*/
	$("body").on("click",".city-d li a",function(event){
		city_id=$(this).data("city_id");
		pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
	});
	/*第二个下拉，工资的选定之后的搜索*/
	$("body").on("click",".secsal-d li a",function(event){
		minSalary=$(".firsal-d .chosen-item").text();
		var salary = $(this).text();
		if(salary=="不限"){
			maxSalary=2147483647;
		}else{
			maxSalary=salary;
		}
		pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
	});
	/*搜索时候的公司名称输入完之后的enter*/
	$("#company_name").on("keyup",function(event){
		if(event.keyCode==13){
			company_name = $('#company_name').val();
			pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
		}
	});
	/*最上面的搜索，职位名称输入完之后的enter*/
	$("body").on("keyup","#query_w",function(event){
		if(event.keyCode==13){
		console.log(13);
			pos_name = $('#query_w').val();
			pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
		}
		});
	/*行业类型*/
	$(".hylx-item > span >span:first-child").on("click",function(){
		$(this).parents(".hylx-item").show().siblings(".hylx-item").hide();
		$(".hylx-list").css("height","30px");
		$(".label-wrap").css("height",$(".hylx-list").css("height"));
		industry=$(this).data("industry_id");
		pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name);
	});
	//pencil的出现
	$(".hylx-item > span").on("mouseenter",function(){
		if($(this).parents(".hylx-list").css("height")=="30px"){
			$(this).find(".modify-lx").show();
		}
		else{
		}
	});
	$(".hylx-item > span").on("mouseleave",function(){
		$(this).find(".modify-lx").hide();
	});
	
	/*pencil之后修改行业类型*/
	$("body").on("click",".hylx-item .fa-pencil-square-o",function(){
		$(".hylx-list").css("height","60px");
		$(".label-wrap").css("height",$(".hylx-list").css("height"));
		$(".hylx-item").show();
		/*$(this).hide();*/
	});
	/*搜索出来结果之后，点击职位名称跳转到职位的详细信息页面*/
	$("body").on("click",".result-table .pos-name",function(){
		window.location.href="../html/posDetail_th.html?pos_id=" + $(this).data("pos_id");
	});
	/*省份选择后城市的出现*/
	$("body").on("click",".province-d ul li a",function(){
		$('#city .chosen-item').text("-");
		var a = $(this);
		var action = "/MicroCV/li/searchcitybyid.action?province_id="+a.data('province_id');
		$.get(action, function(data){
			$('.li_city').remove();
			var str = '';
			for(var i=0; i<data.length; i++){
				str += '<li class="li_city"><a href="#" data-city_id="' + data[i].city_id + '">' + data[i].city_name + '</a></li>';
			}
			$('#ul_city').append(str);
		});
	});
	/*工资范围的选择，第一个工资选好后，限定工资区间*/
	$("body").on("click","#first_sal li a",function(){
		$("#gz-btn2").find(".chosen-item").text("-");
		var fsal= parseInt($(this).parents(".dropdown").find(".chosen-item").text());
		$("#second_sal li a").each(function(){
			if(fsal>=parseInt($(this).text())){
				$(this).parent("li").hide();
			}
		});
	});
	/*分页*/
	$("body").on("click",".pagination li a",function(event){
		event.preventDefault();
		var $pagination=$(this).parents(".pagination");
		var $li=$(this).parent("li");
		if($li.hasClass("previous")||$li.hasClass("next")){
			/*上一页*/
			if($li.hasClass("previous")){
				$pagination.find(".active").prev("li").find("a").click();
			}
			if($li.hasClass("next")){
				page++;
				console.log(page);
				console.log(pagesize);
				if(page==pagesize){
					console.log("next");
					$(".next a").hide();
				}
				$pagination.find(".active").next("li").find("a").click();
//				pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name)
			}
		}
		else {
			$li.addClass("active");
			$li.siblings("li").removeClass("active");
			/*if($(".first-page").hasClass("active")){
				$(".previous").addClass("disabled");
			}
			else {
				$(".previous").removeClass("disabled");
			}*/
			page=$(this).text();
			pagesize=getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name)

		}
	});

});
function getQueryString() { 
	var url = location.search; //获取url中"?"符后的字串
	   var theRequest = new Object();
	   if (url.indexOf("?") != -1) {
	      var str = url.substr(1);
	      strs = str.split("&");
	      for(var i = 0; i < strs.length; i ++) {
	         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
	      }
	   }
	   return theRequest;
} 
function getInfo(){
	/*省份的初始化*/
	$.get("/MicroCV/li/allprovince.action", function(data){
		$('.prov_li').remove();
		var str = '';
		for(var i=0; i<data.length; i++){
			str += '<li class="prov_li"><a href="#" data-province_id="' + data[i].province_id + '">' + data[i].province_name + '</a></li>';
		}
		$('#ul_prov').append(str);
	});
};
function getSimplePisition(page, pos_type, industry, city_id, minSalary, maxSalary, pos_name, record_request, pos_release_date, company_name){
	var pagesize=0;
	var str = $('#query_w').val();
	if(pos_name!=str){
		pos_name = str;
	}
	str = $('#company_name').val();
	if(company_name!=str){
		company_name = str;
	}
	var data = {
			page:page,
			pos_type:pos_type,
			industry:industry,
			"city.city_id":city_id,
			minSalary:minSalary,
			maxSalary:maxSalary,
			pos_name:pos_name,
			record_request:record_request,
			release_date:pos_release_date,
			company_name:company_name
	};
	$.post("/MicroCV/search/simpos.action",data,
			function(data){
		if(data==null){
			alert('服务器异常，请稍后再试！');
		}
		var str = "";
		if(data.length==0){
			$('.search_p').remove();
			$('.result-table').remove();
			str += '<p class="search_p">无相关搜索结果</p>';
			$('#search_result').append(str);
		}else{
			var sumnum=data[0].sumPage;
			pagesize=Math.ceil(sumnum/6);
			$('.result-table,.page-nav').remove();
			$('.search_p').remove();
			str += '<table class="result-table"><thead><tr><td>职位名称</td><td>公司名称</td><td>职位月薪</td><td>工作地点</td><td>发布日期</td></tr></thead>';
			str += '<tbody id="search_body">';
			for(var i=0; i<data.length;i++){
				str += '<tr class="search_tr">';
				str += '<td class="pos-name" data-pos_id="' + data[i].pos_id + '">'+ data[i].pos_name +'</td>';
				str += '<td class="com-name">' + data[i].c_name + '</td>';
				str += '<td>' + data[i].pos_salary + '</td>';
				str += '<td>' + data[i].pos_province_name + data[i].pos_cityname + '</td>';
				str += '<td>' + data[i].pos_release_date + '</td></tr>';
			}
			str += '</tbody></table>';
			if(pagesize!=1){
				str+='<nav class="page-nav"><ul class="pagination"><li class="previous"><a href="#" aria-label="Previous">'+
					'<span aria-hidden="true">&laquo;</span></a></li>';
				for(var i=1;i<=pagesize;i++){
					if(i==page){
						str+='<li class="active"><a href="#">'+i+'</a></li>';
					}
					else{
						str+='<li><a href="#">'+i+'</a></li>';
					}
				}
					str+='<li class="next"><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></nav>';
			}
			$('#search_result').append(str);
		}
	});
	return pagesize;
};