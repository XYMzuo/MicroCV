$(function(){
	getusername();
	$(".datepicker").datepicker();
	getinfo();
	$("#load_nav div.login-after").show();
	$("#load_nav div.login-before").hide();
	$("body").on("click",".evaluate-item .modify",function(){
		$(".pingjia").removeAttr("readonly");
		$(this).parent(".evaluate-item").find("textarea").focus();
	});
	$("body").on("blur",".evaluate-item",function(){
		$(".pingjia").attr("readonly","readonly");
		$(this).parent(".evaluate-istem").find("textarea").focus();
	});
	$(".gr-item li > span").on("click",function(){
		$(this).addClass("item-active");
		$(this).parents("li").siblings("li").find("span").removeClass("item-active");
		var index=$(this).parents("li").index();
		/*if(index==0){
			$(".xx-content").show();
		}*/
		if(index==0){//个人信息
			$(".person-right > div").hide();
			$(".xx-content").show();
			tipFun("info","点击左边铅笔！","可以编辑，撤销，保存~");
		}
		if(index==1){//简历管理
			showresume();
		}
		if(index==2){//我的投递
			$(".person-right > div").hide();
			$(".td-content").show();
			$.get("http://" + window.location.host + "/MicroCV/person/delivery.action", 
					function(data){
				tipFun("info","","可以查看我的投递~");
				$(".td-content").empty();
				for(var i=0;i<data.length;i++)
					{
					var str="";
					str+='<div class="item-row"><span class="td-item""><img src="' + data[i].logo +'" alt="hot position" class="td-cimg" id="img' + i + '" onerror="imgerrorlogo('+'\'img' + i + '\');"/>'+
							'<span class="detail-wrap"><span class="main-detail" data-pos_id="' + data[i].pos_id + '">'+
							'<span class="pos-name">'+data[i].pos_name+'</span>';
					switch(data[i].recond){
					case 1:
						str += '<span>高中以下</span>';
						break;
					case 2:
						str += '<span>中专</span>';
						break;
					case 3:
						str += '<span>高中</span>';
						break;
					case 4:
						str += '<span>大专</span>';
						break;
					case 5:
						str += '<span>本科</span>';
						break;
					case 6:
						str += '<span>硕士</span>';
						break;
					case 7:
						str += '<span>博士</span>';
						break;
					case 8:
						str += '<span>博士后</span>';
						break;
					}
					str += '</span></span>'+
							'<span class="sub-detail"><p class="com-name"><span>公司：</span><span>'+data[i].company_name+
							'</span>'+
							'<p class="this-salary"><span>月薪：</span>'+'<span>'+data[i].pos_salary+'</span>元</p></span></span>'+
							'<span class="status">';
							if(data[i].delivery_status==1)
							{
								str+='<span class="check"><i class="fa fa-eye"></i>已查看</span>';
							}
							else if(data[i].delivery_status==2){
								str+='<span class="nocheck"><i class="fa fa-eye"></i>未查看</span>';
							}else{
								str+='<span class="nocheck"><i class="fa fa-eye"></i>已邀请</span>';
							}
							if(data[i].interview.interview_time==null){
								str+='<span class="nomessage"><span class="com-wrap"><i class="fa fa-commenting"></i>'+
								'</span>无新信息</span></span></div>';
							}
							else {
								var mills=data[i].interview.interview_time;
								var date=new Date(mills);
								var times=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
								str+='<span class="message"><span class="com-wrap"><i class="fa fa-commenting"></i>'+
								'</span>有新信息</span></span><span class="mes-con"><p class="m-head">面试邀请</p>'+
								'<p>面试时间：<span>'+times+'</span></p>'+
								'<p>面试地点：<span>'+data[i].interview.interview_place+'</span></p>'+
								'<p class="contact"><span>联系方式：<span>'+data[i].interview.linkman_phone+
								'</span></span><span>联系人：<span>'+data[i].interview.linkman_name+'</span></span></p></span></div>';

							}
						
					$(".td-content").append(str);
				}
				});
		}
		if(index==3){//职位收藏
			$(".person-right > div").hide();
			$(".sc-content").show();
			$.get("http://" + window.location.host + "/MicroCV/person/poscollect.action", 
					function(data){
				tipFun("info","","可以查看收藏的职位~");
				$('.rmzp-content').empty();
				for(var i=0; i<data.length; i++){
					var str = "";
					str += '<span class="rmzp-item"><img src="' + data[i].logo + '" alt="hot position" id="content_img'+ i +'" onerror="imgerrorlogo(\'content_img'+ i +'\')"/>';
					str += '<span class="detail-wrap"><span class="main-detail" data-pos_id="' + data[i].pos_id + '"><span class="pos-name">' + data[i].pos_name + '</span>';
					str += '<i class="fa fa-heart"></i></span></span>';
					str += '<span class="sub-detail"><p class="this-salary"><span>月薪：</span><span>' + data[i].pos_salary + '</span>元</p>';
					str += '<p class="xueli"><span>时间：</span><span>' + data[i].pos_release_date + '</span></p>';
					str += '<p class="dizhi"><span>地点：</span><span>' + data[i].province_name+data[i].city_name;
					str += '</span></p></span></span>';
					$('.rmzp-content').append(str);
				}
			});
			
		}
		/*if(index==4){
			$(".person-right > div").hide();
			$(".pj-content").show();
			$.get("http://" + window.location.host + "/MicroCV/person/reflect.action", 
					function(data){
				$(".pj-content").empty();
				for(var i=0;i<data.length;i++)
					{
					var str = "";
					if(data[i].reflect.reflect_detail!=null){
						str += '<div class="evaluate-item">';
						str += '<textarea readonly="readonly" class="pingjia" onpropertychange="this.style.height=(this.scrollHeight-24)px;" oninput="this.style.height=(this.scrollHeight-24)px;">';
						str += data[i].reflect.reflect_detail;
						str += '</textarea>';
						str += '<span class="company-name"><span>' + data[i].company_name + '</span></span><span class="modify"><i class="fa fa-pencil-square-o"></i></span></div>';
						$(".pj-content").append(str);
					}else{
						str += '<div class="evaluate-item">';
						str += '<textarea readonly="readonly" class="pingjia" onpropertychange="this.style.height=(this.scrollHeight-24)px;" oninput="this.style.height=(this.scrollHeight-24)px;">';
						str += '</textarea>';
						str += '<span class="company-name"><span>' + data[i].company_name + '</span></span>';
						$(".wpj-content").append(str);
					}
				}
				});
		}*/
	});

/**
 * 更新个人教育经验
 */	
	$('#eduexpecheck').on("click",function(){
		var updateaction="http://" + window.location.host + "/MicroCV/resume/updateeduexep.action";
		var insertaction="http://" + window.location.host + "/MicroCV/resume/inserteduexep.action";
		$('.jiaoyu').find(".e-con").each(function(){
			var temp;
			if($(this).find(".chosen-item").text()=='高中以下')
				temp=1;
			else if($(this).find(".chosen-item").text()=='中专')
				temp=2;
			else if($(this).find(".chosen-item").text()=='高中')
				temp=3;
			else if($(this).find(".chosen-item").text()=='大专')
				temp=4;
			else if($(this).find(".chosen-item").text()=='本科')
				temp=5;
			else if($(this).find(".chosen-item").text()=='研究生')
				temp=6;
			else if($(this).find(".chosen-item").text()=='博士')
				temp=7;
			else
				temp=8;
			var data = {
					school_name:$(this).find(".school").val(),
					major_name:$(this).find(".major").val(),
					s_edu_start_time:$(this).find("#begintime").val(),
					s_edu_end_time:$(this).find("#endtime").val(),
					record:temp,
					e_id:$(this).find(".e-span").data("e_id"),
					r_id:$('#skill').data("r_id")
				};
			if(data.e_id!=null)
			$.post(updateaction, data, function(data) {
				if (data =="OK") {
					alert("个人教育经历更新成功");
				} else {
					alert("个人教育经历更新失败");
				}
			});
			else {
				$.post(insertaction, data, function(data) {
					if (data =="OK") {
						alert("个人教育经历插入成功");
					} else {
						alert("个人教育经历插入失败");
					}
				});
			}
		});
	});
	
/**
 * 更新个人项目经验
 */	
$('#proexpecheck').on("click",function(){
	var flag = false;
		$('.xiangmu').find(".e-con").each(function(){
			if($(this).find(".proname").val()==""){
				alert("项目名称不能为空");
				flag = true;
				return;
			}
		});
		if(flag==true){
			return;
		}
		var updateaction="http://" + window.location.host + "/MicroCV/resume/updateproexep.action";
		var insertaction="http://" + window.location.host + "/MicroCV/resume/insertproexep.action";
		$('.xiangmu').find(".e-con").each(function(){
		var data = {
				pro_id:$(this).data("pro_id"),
				s_pro_start_time:$(this).find("#begintime").val(),
				s_pro_end_time:$(this).find("#endtime").val(),
				pro_name:$(this).find(".proname").val(),
				pro_detail:$(this).find(".xm-desc").val(),
				r_id:$('#skill').data("r_id")
		};
		if(data.pro_id!=null)
		$.post(updateaction, data, function(data) {
			if (data == "OK") {
				alert("个人项目经验更新成功");
			} else {
				alert("个人项目经验更新失败");
			}
		});
		else{
			$.post(insertaction, data, function(data) {
				if (data == "OK") {
					alert("个人项目经验插入成功");
				} else {
					alert("个人项目经验插入失败");
				}
			});
		}
	});
});
	
/**
 * 更新个人工作经验
 */
$('#workexpecheck').on("click",function(){
	var updateaction="http://" + window.location.host + "/MicroCV/resume/updateworkexep.action";
	var insertaction="http://" + window.location.host + "/MicroCV/resume/insertworkexep.action";
	$('.gongzuo').find(".e-con").each(function(){
	var data = {
			w_id:$(this).data("w_id"),
			s_working_start_time:$(this).find("#begintime").val(),
			s_working_end_time:$(this).find("#endtime").val(),
			position_name:$(this).find(".positionname").val(),
			company_name:$(this).find(".companyname").val(),
			working_detail:$(this).find(".gz-desc").val(),
			r_id:$('#skill').data("r_id")
	};
	console.log(data);
	if(data.w_id!=null)
	 $.post(updateaction, data, function(data) {
		if (data == "OK") {
			alert("个人工作经验更新成功");
		} else {
			alert("个人工作经验更新失败");
		}
	});
	else{
		$.post(insertaction, data, function(data) {
			if (data == "OK") {
				alert("个人工作经验插入成功");
			} else {
				alert("个人工作经验插入失败");
			}
		});
	}
});
});

/**
* 更新个人职业意向
*/
$('#pwillcheck').on("click",function(){
	var action="http://" + window.location.host + "/MicroCV/resume/updatepwilling.action";
	var data = {
		w_industry:$('#willing_i').data("industry_id"),
		w_place:$('.qiuzhi-w').find('#city').find('.chosen-item').data("city_id"),
		w_salary:$('#willing_s').val(),
		current_salary:$('#cur_s').val(),
		p_willing_id:$('#willing_i').data("pwilling_id")
	};
	$.post(action, data, function(data) {
		if (data == "OK") {
			alert("个人意愿更新成功");
		} else {
			alert("个人意愿更新失败");
		}
	});
});

/**
 * 更新个人语言能力
 */
$('#languagecheck').on("click",function(){
	var deleteaction="http://" + window.location.host + "/MicroCV/resume/deletelanguageability.action";
	var insertaction="http://" + window.location.host + "/MicroCV/resume/insertlanguageability.action";
	
	var data={
			r_id:$('#skill').data("r_id")};
	$.post(deleteaction, data, function(data) {
		if (data == "OK") {
			alert("个人语言能力删除成功");
		} else {
			alert("个人语言能力删除失败");
		}
	});
	
	$('.language').find(".language-span").each(function(){
		var data = {
				language_id:$(this).data("language_id"),
				r_id:$('#skill').data("r_id")
		};	
		$.post(insertaction, data, function(data) {
			if (data == "OK") {
				alert("个人语言能力添加成功");
			} else {
				alert("个人语言能力添加失败");
			}
		});
	});
});

/**
 * 更新个人擅长技能
 */
$('#skillcheck').on("click",function(){
	var action="http://" + window.location.host + "/MicroCV/resume/updateresume.action";
	var data = {
			skills:$('#skill').val(),
			r_id:$('#skill').data("r_id")
	};
	$.post(action, data, function(data) {
		if (data == "OK") {
			alert("个人擅长技能更新成功");
		} else {
			alert("个人擅长技能更新失败");
		}
	});
});

/**
 * 个人自我评价的更新
 */
$('#evaluationcheck').on("click",function(){
	var action="http://" + window.location.host + "/MicroCV/resume/updateresume.action";
	var data = {
			self_evaluation:$('#selfevaluation').val(),
			r_id:$('#skill').data("r_id")
	};
	$.post(action, data, function(data) {
		if (data == "OK") {
			alert("个人自我评价更新成功");
		} else {
			alert("个人自我评价更新失败");
		}
	});
});

/**
 * 个人附加信息的更新
 */
$('#additioncheck').on("click",function(){
	var action="http://" + window.location.host + "/MicroCV/resume/updateresume.action";
	var data = {
			additional_information:$('#additional').val(),
			r_id:$('#skill').data("r_id")
	};
	$.post(action, data, function(data) {
		if (data == "OK") {
			alert("个人附加信息更新成功");
		} else {
			alert("个人附加信息更新失败");
		}
	});
});

		
	/*取消收藏*/
	$("body").on("click",".sc-content .fa-heart",function(){
		var pos_id = $(this).parents(".main-detail").data("pos_id");
		var action = "/MicroCV/person/deletecollect.action";
		var data = {pos_id:pos_id};
		var o = $(this).parents(".rmzp-item");
		$.post(action, data, function(data) {
			if(data=="OK"){
				o.remove();
			}else{
				alert("服务器错误");
			}
		});
	});
	$("#evalCon .pj-list > li").on("click",function(){
		$(".person-right > div").hide();
		$(".pj-content").show();
		$.get("http://" + window.location.host + "/MicroCV/person/reflect.action",
				function(data){
			$(".pj-content").empty();
			$(".wpj-content").empty();
			for(var i=0;i<data.length;i++)
				{
				var str = "";
				if(data[i].reflect.reflect_detail!=null){
					str += '<div class="evaluate-item">';
					str += '<textarea readonly="readonly" class="pingjia" onpropertychange="this.style.height=(this.scrollHeight)+'+'\'px\';"'+' oninput="this.style.height=(this.scrollHeight)+'+'\'px\';"'+'>';
					str += data[i].reflect.reflect_detail;
					str += '</textarea>';
					str += '<span class="company-name"><span>' + data[i].company_name + '</span></span><span class="modify"><i class="fa fa-pencil-square-o"></i></span></div>';
					$(".pj-content").append(str);
				}else{
					str += '<div class="evaluate-item">';
					str += '<textarea readonly="readonly" class="pingjia" onpropertychange="this.style.height=(this.scrollHeight)+'+'\'px\';"'+' oninput="this.style.height=(this.scrollHeight)+'+'\'px\';"'+'>';
					str += '</textarea>';
					str += '<span class="company-name"><span>' + data[i].company_name + '</span></span>';
					$(".wpj-content").append(str);
				}
			}
			});
	});
	/*个人信息的编辑*/
	$(".edit").on("click",function(){
		$(this).siblings("li").find("i").show();
		$(this).find("i").addClass("fa-active");
		$(this).siblings("li").find("i").removeClass("fa-active");
		$(this).parent().parent().siblings("div").find("input").removeAttr("readonly");
		$(".dropdown button,input.datepicker").removeAttr("disabled");
		$(".user-name").focus();
		$(".caret").css("display","inline-block");
	});
	/*个人信息的取消*/
	$("body").on("click",".xx-content .cancel",function(){
		$(".edit i").removeClass("fa-active");
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(this).parents(".xx-content").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".xx-content").find("input.datepicker,.dropdown button").attr("disabled","disabled");
		$(".caret").css("display","none");
		getinfo();
	});
	/*个人信息的保存*/
	$("body").on("click",".xx-content .save",function(){
		$(".edit i").removeClass("fa-active");
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(this).parents(".xx-content").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".xx-content").find("input.datepicker,.dropdown button").attr("disabled","disabled");
		$(".caret").css("display","none");
		var file = document.getElementById("user-img");
		if(file.value){
			change();
		}
		/*
		 * 个人信息的保存 byleo
		 */
		var action = "http://" + window.location.host
				+ "/MicroCV/person/updateinfo.action";
		var sex;
		if ($('#sex-chosen').text() == '女')
			sex = 'F';
		else
			sex = 'M';
		var marry;
		if ($('#marry-chosn').text() == '未婚') {
			marry = 'N';
		} else {
			marry = 'Y';
		}
		var index=$(this).parents(".xx-content").find(".status-choose li.flag").index();
		var data = {
			p_name:$('.u-name').val(),
			p_sex:sex,
			sp_birthday:$('#sr_date').val(),
			p_marry:marry,
			p_household:$('.u-registry').val(),
			p_nationality:$('.u-nation').val(),
			p_phone:$('.u-tel').val(),
			p_email:$('.u-email').val(),
			p_state:index+1
		};
		$.post(action, data, function(data) {
			if (data == "OK") {
				//alert("用户信息更新成功");
				tipFun("info","个人信息更新成功！","");
			} else {
				alert("更新失败");
			}

		});
	});
	$("body").on("click",".dropdown-menu li a",function(){
		event.preventDefault();
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
		$(this).parents("li").addClass("flag").siblings("li").removeClass("flag");
	});
	
	/*个人信息中的图片修改*/
	$("body").on("click",".touxiang .cur-img",function(){
		$(".edit").click();
		$(this).parent(".touxiang").find("input[type=file]").click();
	});
	$(".touxiang input").on("change",function(){
		var files = this.files;
		for(var i=0;i<files.length;i++){
			initImg(files[i]);
		}
	});
	function initImg(file){
		/*var s = '<span class="scimg"><img src="" /><i class="fa fa-trash-o"></i></span>';
		$(".img-wrap").append(s);*/
		var img = $(".touxiang .cur-img");
		var reader = new FileReader();
		reader.onload = function(evt){
			img.attr("src",evt.target.result);
			$(".current-img").attr("src",evt.target.result);
			};
		reader.readAsDataURL(file);
	}
	
	$("body").on("click",".current-img",function(){
		$("#mark,#bigimgCon").show();
	});
	
	$("body").on("click","#b_close",function(){
		$("#mark,#bigimgCon").hide();
	});
	/*个人评价--》已评价未评价ul*/
	$(".p-eval").on("mouseenter",function(){
		$("#evalCon").show();
	});
	$("#evalCon .u-content").on("mouseleave",function(){
		$("#evalCon").hide();
	});
	/*个人评价--》已评价，未评价*/
	$(".pj-list li").on("click",function(){
		$(this).addClass("pj-active").siblings("li").removeClass("pj-active");
		if($(this).index()==0){
			$(".person-right > div").hide();
			$(".pj-content").show();
			tipFun("info","","可以查看你已做出的评价~");
		}
		if($(this).index()==1){
			$(".person-right > div").hide();
			$(".wpj-content").show();
			tipFun("info","","这里是未评价列表，有待评价~");
		}
	});
	/*简历管理的添加*/
	$("body").on("click",".jl-item .add-btn",function(){
		var $item=$(this).parents(".jl-item");
		$item.find(".e-con:last-child").addClass("border-b");
		var index=$item.index();
		var str="";
		if(index==1){
		str+='<div class="e-con"><span class="del"><i class="fa fa-trash-o"></i></span><span class="e-span"><label>学校：</label>'+
				'<input type="text" value="" class="school" /><span class="period"><span><label>教育时间：</label>'+
				'<input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker"/>'+
				'<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>'+
				'<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker">'+
				'<i class="fa fa-calendar"></i></span></span>'+
				'</span><span class="e-span"><label>专业：</label>'+
				'<input type="text" value="" class="major"/></span><span class="e-span"><label>学位：</label>'+
				'<span class="dropdown"><button class="btn dropdown-toggle" type="button" id="" data-toggle="dropdown" disabled="disabled">'+
				'<span class="chosen-item">请选择</span><span class="caret"></span></button><ul class="dropdown-menu xl-menu">'+
				'<li><a href="#" onclick="return 0;">高中以下</a></li><li><a href="#" onclick="return 0;">中专</a></li>'+
				'<li><a href="#" onclick="return 0;">高中</a></li><li><a href="#" onclick="return 0;">大专</a></li>'+
				'<li><a href="#" onclick="return 0;">本科</a></li><li><a href="#" onclick="return 0;">研究生</a></li>'+
				'<li><a href="#" onclick="return 0;">博士</a></li><li><a href="#" onclick="return 0;">博士后</a></li>'+
				'</ul></span></span></div>';
		}
		if(index==2){
			str+='<div class="e-con x-con"><span class="del"><i class="fa fa-trash-o"></i></span><span><label>项目名称：</label>'+
				'<input type="text" value="" class="proname" /><span class="period"><span><label>项目时间：</label>'+
				'<input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker"/>'+
				'<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>'+
				'<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker">'+
				'<i class="fa fa-calendar"></i></span></span></span><span>'+
				'<textarea class="xm-desc" onpropertychange="this.style.height=(this.scrollHeight)+'+'\'px\';"'+' oninput="this.style.height=(this.scrollHeight)+'+'\'px\';"' +
				'readonly="readonly">项目的详细叙述</textarea></span></div>';
		}
		if(index==3){
			str+='<div class="e-con i-ron"><span class="del"><i class="fa fa-trash-o"></i></span><span class=""><label>公司名称：</label><input type="text" value="" class="companyname"/></span>'+
				'<span class=""><label>职位名称：</label><input type="text" value="" class="positionname"/></span>'+
				'<span class="date-spe"><label>工作时间：</label><span class="period"><span>'+
				'<input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker"/>'+
				'<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>'+
				'<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" value="" class="datepicker newdatepicker">'+
				'<i class="fa fa-calendar"></i></span></span></span>'+
				'<span class="gz-span">'+
				'<textarea class="gz-desc" onpropertychange="this.style.height=(this.scrollHeight)+'+'\'px\';"'+' oninput="this.style.height=(this.scrollHeight)+'+'\'px\';"'+
				'readonly="readonly">工作描述</textarea></span></div>';
		}
		var $educationFragment=$(str);
		$item.append($educationFragment);
		$($educationFragment).find('.datepicker').datepicker();
		/*$(".newdatepicker").datepicker();*/
		
		$item.find('.e-list li:first-child').click();
		/*第一个input focus*/
		$item.find(".e-con:last-child").find("input[type='text']:eq(0)").focus();
	});
	/*语言的增加*/
	var itmp=0;
	$("body").on("click",".dropdown-menu li a",function(){
		event.preventDefault();
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
		$(this).parents(".dropdown").find(".chosen-item").css("color","#666");
		var text=$(this).text();
		var flag=0;
		$(".slist").find("span >span").each(function(){
			var text1=$(this).text();
			if(text1==text)
				{
					flag=1;
				}
		});
		if(flag==0){
			var str="";
			str+='<span class="language-span" data-language_id="'+$(this).parent("li").data("language_id")+'"><span>'+$(this).text()+'</span><i class="fa fa-trash-o"></i></span>';
			$(this).parents(".dropdown").next(".slist").append(str);
		}
		});
	/*语言的删除*/
	$("body").on("mouseenter",".slist > span",function(){
		/*处于编辑状态才可以出现垃圾桶，才可以删除语言能力*/
		if($(this).parents(".language").find(".fa-pencil").hasClass("fa-active")){
			$(this).find(".fa").show();
		}
		else {
		}
	});
	$("body").on("mouseleave",".slist > span",function(){
		$(this).find(".fa").hide();
	});
	$("body").on("click",".slist .fa",function(){
		$(this).parents("span").remove();
	});
	/*编辑*/
	$( '.jl-item .e-list li:first-child').on("click",function(){
		$(this).siblings("li").find("i").show();
		$(this).find("i").addClass("fa-active");
		$(this).siblings("li").find("i").removeClass("fa-active");
		$(this).parents(".jl-item").find("input,textarea").removeAttr("readonly");
		$(this).parents(".jl-item").find("input.datepicker,.dropdown button").removeAttr("disabled");
		/*$(".datepicker").datepicker();*/
		$(".caret").css("display","inline-block");
		/*点击编辑的时候，如果是语言这个大项，则语言选择的下拉菜单出现*/
		if($(this).parents(".jl-item").hasClass("language")){
			$(this).parents(".jl-item.language").find(".dropdown").show();
		}
		if($(this).parents(".jl-item").hasClass("qiuzhi-w")){
			$.get("/MicroCV/li/allprovince.action", function(data){
				$('.prov_li').remove();
				var str = '';
				for(var i=0; i<data.length; i++){
					str += '<li class="prov_li"><a href="#" data-province_id="' + data[i].province_id + '">' + data[i].province_name + '</a></li>';
				}
				$('#ul_prov').append(str);
			});
		}
		
	});
	/*撤销*/
	$("body").on("click",".jl-item .e-list  li:nth-child(2)",function(){
		$(".fa-pencil").removeClass("fa-active");
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(this).parents(".jl-item").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".jl-item").find("input.datepicker,.dropdown button").attr("disabled","disabled");
		if($(this).parents(".jl-item").hasClass("language")){
			$(".slist > span").remove();
		}
		showresume();
	});
	/*保存*/
	$("body").on("click",".jl-item .e-list li:nth-child(3)",function(){
		$(this).parents(".e-list").find("li:eq(2),li:eq(1)").find("i").hide();
		$(".fa-pencil").removeClass("fa-active");
		$(this).parents(".jl-item").find("input,textarea").attr("readonly","readonly");
		$(this).parents(".jl-item").find("input.datepicker,.dropdown button").attr("disabled","disabled");
	});
	/*我的收藏下的item展示*/
	$("body").on("mouseenter",".rmzp-item .detail-wrap",function(){
		var $item=$(this).parents(".rmzp-item");
		$item.siblings(".rmzp-item").find(".sub-detail").hide();
		$item.find(".sub-detail").css("display","inline-block");
		$item.find(".sub-detail").css("height",$item.find("img").css("height"));
	});
	/*我的投递下的item展示*/
	$("body").on("mouseenter",".td-item .detail-wrap",function(){
		var $item=$(this).parents(".item-row");
		$item.siblings(".item-row").find(".sub-detail").hide();
		$item.find(".sub-detail").css("display","inline-block");
		$item.find(".sub-detail").css("height",$item.find("img").css("height"));
	});
	/*$("body").on("mouseleave",".td-item",function(){
		var $item=$(this).parents(".item-row");
		$item.find(".sub-detail").hide();
		$item.siblings(".item-row").find(".sub-detail").hide();
	});*/
	
	/*$("body").on("mouseleave",".td-item .detail-wrap",function(){
		var $item=$(this).parents(".item-row");
		$item.find(".sub-detail").hide();
	})*/
	
	$("body").on("mouseenter",".jiaoyu .e-con,.xiangmu .e-con,.gongzuo .e-con",function(){
		
	})
	/*$("body").on("mouseleave",".jiaoyu .e-con,.xiangmu .e-con,.gongzuo .e-con",function(){
		$(this).css("border-color","#999");
		$(this).css("border-style","dashed");
	})*/
	$("body").on("mouseenter",".jiaoyu .e-con,.xiangmu .e-con,.gongzuo .e-con",function(){
		$(this).find(".del i").show();	
	})
	$("body").on("mouseleave",".jiaoyu .e-con,.xiangmu .e-con,.gongzuo .e-con",function(){
		$(this).find(".del i").hide();	
	})
	
	/*整个项的删除*/
	$("body").on("click",".jiaoyu .fa-trash-o,.xiangmu .fa-trash-o,.gongzuo .fa-trash-o",function(){
		$(this).parents(".e-con").remove();		
	});
	
	/*
	 * 从数据库中删除三大经验数据 by leo
	 */
	$("body").on("click",".jiaoyu .fa-trash-o",function(){
		var action="/MicroCV/resume/deleteeduexep.action";
		var data={
				i:$(this).parents(".e-con").find(".e-span").data("e_id")};
		$.post(action,data,function(data){
				if(data=="OK")
					alert("教育经验删除成功");
				else
					alert("教育经验删除失败");
		});
	});
	
	$("body").on("click",".xiangmu .fa-trash-o",function(){
		var action="/MicroCV/resume/deleteproexep.action";
		var data={
				i:$(this).parents(".e-con").data("pro_id")};
		$.post(action,data,function(data){
				if(data=="OK")
					alert("项目经验删除成功");
				else
					alert("项目经验删除失败");
		});
	});
	
	$("body").on("click",".gongzuo .fa-trash-o",function(){
		var action="/MicroCV/resume/deleteworkexep.action";
		var data={
				i:$(this).parents(".e-con").data("w_id")};
		$.post(action,data,function(data){
				if(data=="OK")
					alert("工作经验删除成功");
				else
					alert("工作经验删除失败");
		});
	});
	
	/*个人中心 --》我的投递，点击投递的职位，进入详情*/
	$("body").on("click",".td-content .item-row .main-detail",function(){
		window.open("../html/posDetail_th.html?pos_id=" + $(this).data("pos_id"));
	});
	$("body").on("click",".sc-content .rmzp-content .main-detail .pos-name",function(){
		window.location.href="../html/posDetail_th.html?pos_id=" + $(this).parent(".main-detail").data("pos_id");
	});
	/*省份的选择*/
	$("body").on("click",".province-d ul li a",function(){
		$('#city .chosen-item').text("-");
		var a = $(this);
		var action = "/MicroCV/li/searchcitybyid.action?province_id="+a.data('province_id');
		$.get(action, function(data){
			$('.li_city').remove();
			var str = '';
			for(var i=0; i<data.length; i++){
				str += '<li class="li_city"><a onclick="return 0;" href="#" data-city_id="' + data[i].city_id + '">' + data[i].city_name + '</a></li>';
			}
			$('#ul_city').append(str);
		});
	});
	/*城市的选择*/
	$("body").on("click",".city-d ul li a",function(){
		var $citem=$(this).parents(".dropdown").find(".chosen-item");
		$citem.text($(this).text());
		$citem.attr("data-city_id",$(this).data("city_id"));
		
	});
	/*行业的选择*/
	$("body").on("click",".industry-d ul li a",function(){
		var $citem=$(this).parents(".dropdown.industry-d").find(".chosen-item");
		$citem.attr("data-industry_id",$(this).data("industry_id"));
	});
	
});

/*
 * 用于获取用户基本信息和“X”的刷新页面
 */
function getinfo(){
	$.get("http://" + window.location.host + "/MicroCV/person/info.action", 
			function(data){
		tipFun("info","点击铅笔！","可以编辑，撤销，保存~");
		var image = document.getElementById("img");
		image.src = data.p_image;
		var image1 = document.getElementById("current-img");
		image1.src = data.p_image;
		$(".base-info p").text(data.p_name);
		$(".u-name").val(data.p_name);
		if(data.p_sex=="M"){
			$(".xx-content #sex-chosen").text("男");
		}else{
			$(".xx-content #sex-chosen").text("女");
		}
		$("#sr_date").val(data.p_birthday);
		if(data.p_marry=="Y"){
			$(".xx-content #marry-chosn").text("已婚");
		}else{
			$(".xx-content #marry-chosn").text("未婚");
		}
		$(".u-registry").val(data.p_household);
		$(".u-nation").val(data.p_nationality);
		$(".u-tel").val(data.p_phone);
		$(".u-email").val(data.p_email);
		if(data.p_state==1)
			$(".xx-content #p-state").text("在职，看看新机会");
		else if(data.p_state==2)
			$(".xx-content #p-state").text("在职，急寻新工作");
		else if(data.p_state==3)
			$(".xx-content #p-state").text("在职，暂无跳槽打算");
		else
			$(".xx-content #p-state").text("离职，正在找工作");
	});
}

/*
 * 用于获取简历的全部信息并展示在页面中，和“X”的页面刷新
 */
function showresume(){
	$(".person-right > div").hide();
	$(".jl-content").show();
	var img = document.getElementById("user-icon");
	$.get("http://" + window.location.host + "/MicroCV/person/resumeinfo.action", 
			function(data){
		console.log(data);
		tipFun("info","管理我的简历！","你可以编辑，撤销，保存~");
		if(data.personinfo.p_image!=null){
				img.src=data.personinfo.p_image;
		}else{
			img.src="/MicroCV/icon/default.png";
		}
				$('.jl-name').val(data.personinfo.p_name);
				$('.jl-phone').val(data.personinfo.p_phone);
				if(data.personinfo.p_sex=='M'){
					$('.jl-sex').val("男");
				}else{
					$('.jl-sex').val("女");
				}
				$('.jl-email').val(data.personinfo.p_email);
				$('.jl-birthday').val(data.personinfo.p_birthday);
				if(data.personinfo.p_marry=='N'){
					$('.jl-marry').val('未婚');
				}else{
					$('.jl-marry').val('已婚');
				}
				var edu_experience = data.edu_experience;
				if(edu_experience[0].e_id>0){
					$(".jiaoyu .e-con").remove();
	
				for(var i=0; i<edu_experience.length; i++){
					var str = "";
					if(i!=edu_experience.length-1){
						str+='<div class="e-con border-b">';
					}
					else{
						str+='<div class="e-con">';
					}
					str += '<span class="del"><i class="fa fa-trash-o"></i></span><span class="e-span" data-e_id="'+ data.edu_experience[i].e_id +'">';
					str += '<label>学校：</label><input type="text" value="' + edu_experience[i].school_name + '" readonly="readonly" class="school"/>';
					str += '<span class="period"><span><label>教育时间：</label>';
					str += '<input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" value="' + edu_experience[i].edu_start_time + '" class="datepicker"  disabled="disabled"/>';
					str += '<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>';
					str += '<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" value="' + edu_experience[i].edu_end_time + '" class="datepicker" disabled="disabled" />';
					str += '<i class="fa fa-calendar"></i></span></span></span>';
					str += '<span class="e-span"><label>专业：</label>';
					str += '<input type="text" value="' + edu_experience[i].major_name + '" readonly="readonly" class="major"/>';
					str += '</span><span class="e-span"><label>学位：</label>';
					str+='<span class="dropdown"><button class="btn dropdown-toggle" type="button" id="" data-toggle="dropdown" disabled="disabled">'+
					'<span class="chosen-item">';
					var record = edu_experience[i].record;
					switch (record) {
					case 1:
						str+='高中以下';
						break;
					case 2:
						str+='中专';
						break;
					case 3:
						str+='高中';
						break;
					case 4:
						str+='大专';
						break;
					case 5:
						str+='本科';
						break;
					case 6:
						str+='研究生';
						break;
					case 7:
						str+='博士';
						break;
					default:
						str+='博士后';
						break;
					}
					str+='</span><span class="caret"></span></button><ul class="dropdown-menu xl-menu">'+
					'<li><a href="#" onclick="return 0;">高中以下</a></li><li><a href="#" onclick="return 0;">中专</a></li>'+
					'<li><a href="#" onclick="return 0;">高中</a></li><li><a href="#" onclick="return 0;">大专</a></li>'+
					'<li><a href="#" onclick="return 0;">本科</a></li><li><a href="#" onclick="return 0;">研究生</a></li>'+
					'<li><a href="#" onclick="return 0;">博士</a></li><li><a href="#" onclick="return 0;">博士后</a></li>'+
					'</ul></span></span></div>';
					$(".jiaoyu").append(str);
					}
				}
				var pro_experience = data.pro_experience;
				if(pro_experience[0].pro_id>0){
					$(".xiangmu .e-con").remove();
					for(var i=0; i<pro_experience.length; i++){
						var str = '';
						if(i!=pro_experience.length-1){
							str+='<div class="e-con x-con border-b" data-pro_id="' + pro_experience[i].pro_id +'">';
						}
						else{
							str+='<div class="e-con x-con" data-pro_id="' + pro_experience[i].pro_id +'">';
						}
						str += '<span class="del"><i class="fa fa-trash-o"></i></span><span><label>项目名称：</label>';
						str += '<input type="text" value="' + pro_experience[i].pro_name + '" readonly="readonly" class="proname"/>';
						str += '<span class="period"><span><label>项目时间：</label>';
						str += '<input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" value="' + pro_experience[i].pro_start_time + '" class="datepicker" disabled="disabled"/>';
						str += '<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>';
						str += '<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" value="' + pro_experience[i].pro_end_time + '" class="datepicker" disabled="disabled" />';
						str += '<i class="fa fa-calendar"></i></span></span>';
						str += '<span><textarea class="xm-desc" onpropertychange="this.style.height=(this.scrollHeight)+'+'\'px\';"'+' oninput="this.style.height=(this.scrollHeight)+'+'\'px\';"';
						if(pro_experience[i].pro_detail){
							str += 'readonly="readonly">' + pro_experience[i].pro_detail + '</textarea></span></div>';
						}else{
							str += 'readonly="readonly">' + '无' + '</textarea></span></div>';
						}
						$(".xiangmu").append(str);
					}
				}
				var working_experience = data.working_experience;
				if(working_experience[0].w_id>0){
					$(".gongzuo .e-con").remove();
				for(var i=0;i < working_experience.length; i++){
					var str = '';
					//<div class="e-con i-ron">
					if(i!=pro_experience.length-1){
						str+='<div class="e-con i-ron border-b" data-w_id="' + working_experience[i].w_id +'">';
					}
					else{
						str+='<div class="e-con i-ron" data-w_id="' + working_experience[i].w_id +'">';
					}
					str += '<span class="del"><i class="fa fa-trash-o"></i></span><span class=""><label>公司名称：</label>';
					str += '<input type="text" value="' + working_experience[i].company_name + '"  readonly="readonly" class="companyname"/></span>';
					str += '<span class=""><label>职位名称：</label>';
					str += '<input type="text" readonly="readonly" class="positionname" value="' + working_experience[i].position_name + '"/></span>';
					str += '<span class="date-spe"><label>工作时间：</label><span class="period">';
					str += '<span><input type="text" id="begintime" name="firstdate" data-date-format="yyyy-mm-dd" class="datepicker" disabled="disabled" value="' + working_experience[i].working_start_time + '"/>';
					str += '<i class="fa fa-calendar"></i></span>&nbsp;- &nbsp;<span>';
					str += '<input type="text" id="endtime" name="lastdate" data-date-format="yyyy-mm-dd" class="datepicker" disabled="disabled" value="' + working_experience[i].working_end_time + '"/>';
					str += '<i class="fa fa-calendar"></i></span></span></span>';
					str += '<span class="gz-span">';
					str += '<textarea class="gz-desc" onpropertychange="this.style.height=(this.scrollHeight-24)px;" oninput="this.style.height=(this.scrollHeight-24)px;" readonly="readonly">'+working_experience[i].working_detail+'</textarea></span>';
					$(".gongzuo").append(str);
				}
				}
				
				var personwilling = data.personwilling;
				if(personwilling.w_industry_name!==null)
					$('#willing_i').text(personwilling.w_industry_name);
				else
					$('#willing_i').text("");
				
				if(personwilling.w_place_provincename!=null)
					$(".province-d .chosen-item").text(personwilling.w_place_provincename);
				else
					$(".province-d .chosen-item").text("");
				
				if(personwilling.w_place_name!=null)
					$(".city-d .chosen-item").text(personwilling.w_place_name);
				else
					$(".city-d .chosen-item").text("");
				
				if(personwilling.w_salary!=0)
					$('#willing_s').val(personwilling.w_salary);
	
				if(personwilling.current_salary!=0)
					$('#cur_s').val(personwilling.current_salary);

				$('#willing_i').attr('data-pwilling_id',personwilling.p_willing_id);
				var langguage_ability = data.langguage_ability;
				/*加载简历的时候，如果语言能力大于0则，语言选择去掉。*/
				if(langguage_ability.length>0){
					$(".language .dropdown").hide();
					$(".slist .language-span").remove();
				}
				for(var i=0;i <langguage_ability.length; i++){
					if(langguage_ability[i].language_id!=null){
					var str = '';
					str+='<span class="language-span" data-language_id='+langguage_ability[i].language_id+'>'+'<span>'+langguage_ability[i].languageinfo.language_name+'</span><i class="fa fa-trash-o" style="display: none;"></i></span>';
					$(".slist").append(str);}
				}
				
				if(data.skills!=null){
					$('#skill').text(data.skills);
				}
					$('#skill').attr('data-r_id',data.r_id);
				if(data.additional_information!=null){
					$('#additional').text(data.additional_information);
				}
				if(data.self_evaluation!=null){
					$('#selfevaluation').text(data.self_evaluation);
				}
			});
	/*language*/
	$.get("/MicroCV/li/alllanguage.action", function(data){
		var str = '';
		for(var i=0; i<data.length; i++){
			str+= '<li data-language_id="'+data[i].language_id+'"><a href="#" onclick="return false;">' + data[i].language_name + '</a></li>';
		}
		$("#language_menu").append(str);
	});
	
}

function change(){
	ajaxFileUpload();
}

function ajaxFileUpload() {
	$.ajaxFileUpload({
		url : "http://" + window.location.host
				+ "/MicroCV/person/uploadicon.action", //用于文件上传的服务器端请求地址
		secureuri : false, //是否需要安全协议，一般设置为false
		fileElementId : 'user-img', //文件上传域的ID
		dataType : 'string', //返回值类型 一般设置为json
		success : function(data, status) //服务器成功响应处理函数
		{
			if(data==null){
				alert("上传失败");
			}
		},
		error : function(data, status, e){//服务器响应失败处理函数
			alert(e);
		}
	});
	return false;
}

function imgerrorperson(id){
	document.getElementById(id).src="/MicroCV/icon/default.png";
}

function imgerrorlogo(id){
	document.getElementById(id).src="/MicroCV/icon/default.png";
}
