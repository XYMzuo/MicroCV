$(function(){
	getusername();
	/*$(".datepicker").datepicker();*/
	$("body").on("click",".invi-span",function(){
		$(this).addClass("invitation-active");
	})
	showResumeDetail();
	$(".invitation").on("click",function(){
		if(trim($(this).text())=="面试邀请"){
		$("#mark,#msyqCon").show();
		}
	})
	$("#msyqCon .con-close").on("click",function(){
		$("#mark,#msyqCon").hide();
	})
	//by leo 写邀请按钮的触发事件		
	$(".sendto").on("click",function(){
		var data={
				s_interview_time:$('#interviewtime').val(),
				interview_place:$('#interviewplace').val(),
				linkman_name:$('#linkmanname').val(),
				linkman_phone:$('#linkmanphone').val(),
				delivery_id:getQueryString().value
			};
			var action="/MicroCV/company/insertInterview.action";
			$.post(action,data,function(data){
				if(data=="OK")
					alert("面试邀请发送成功");
				else
					alert("面试邀请发送失败");
			});
			$("#mark,#msyqCon").hide();
			$(".invitation").text("已邀请");
			
			
	});
})

function showResumeDetail(){
	var img = document.getElementById("user-icon");
	var delivery_id=getQueryString().value;
	var data = {delivery_id:delivery_id};
	$.get("/MicroCV/company/searchpdeliveryposbydeliveryid.action",data,
			function(data){
				var data2={p_id:data.p_id};
				$.get("/MicroCV/company/resumeinfo.action",data2, 
						function(data){
							//console.log(data);
							img.src=data.personinfo.p_image;
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
							if(edu_experience.length>0){
								$(".jiaoyu .e-con").remove();
							}
							for(var i=0; i<edu_experience.length; i++){
								var str = "";
								if(i!=edu_experience.length-1){
									str+='<div class="e-con border-b">';
								}
								else{
									str+='<div class="e-con">';
								}
								str += '<span class="e-span" data-e_id="'+ data.edu_experience[i].e_id +'">';
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
							var pro_experience = data.pro_experience;
							if(pro_experience.length>0){
								$(".xiangmu .e-con").remove();
							}
							for(var i=0; i<pro_experience.length; i++){
								var str = '';
								if(i!=pro_experience.length-1){
									str+='<div class="e-con x-con border-b" data-pro_id="' + pro_experience[i].pro_id +'">';
								}
								else{
									str+='<div class="e-con x-con" data-pro_id="' + pro_experience[i].pro_id +'">';
								}
								str += '<span><label>项目名称：</label>';
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
							var working_experience = data.working_experience;
							if(working_experience.length>0){
								$(".gongzuo .e-con").remove();
							}
							for(var i=0;i < working_experience.length; i++){
								var str = '';
								//<div class="e-con i-ron">
								if(i!=pro_experience.length-1){
									str+='<div class="e-con i-ron border-b" data-w_id="' + working_experience[i].w_id +'">';
								}
								else{
									str+='<div class="e-con i-con" data-w_id="' + working_experience[i].w_id +'">';
								}
								str += '<span class=""><label>公司名称：</label>';
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
							/*console.log(data);*/
							var langguage_ability = data.langguage_ability;
							/*加载简历的时候，如果语言能力大于0则，语言选择去掉。*/
							if(langguage_ability.length>0){
								$(".language .dropdown").hide();
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
	});
	$("#interviewplace").on("click",function(){
		$(".form_datetime").datetimepicker("hide");
	})
	
	
};
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
function imgerrorperson(id){
	document.getElementById(id).src="/MicroCV/icon/default.png";
}

function imgerrorlogo(id){
	document.getElementById(id).src="/MicroCV/icon/default.png";
}
function trim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}