$(function(){
	getusername();
	//默认当前月
/*	var today=new Date();
	if(today.getMonth()<10){
		$("#month").text("0"+today.getMonth());
	}*/
	$("body").on("click",".dropdown ul li a",function(){
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());	
		showPositionCreated();
	})
	/*查看*/
	$("body").on("click",".zw-table .view",function(){
		$(".t-div").hide();
		$(".detail-con").show();
		
		var data={pos_id:$(this).data('pos_id')};
		var action="/MicroCV/search/posdetail.action";
		var tdnum=$(this).parents("tr").find(".td-num").text();
		//get到该职位的详细信息
		$.get(action,data,function(data){
			//console.log(data);
			$('#posname').text(data.pos_name);
			$('#possalary').text(data.pos_salary);
			$('#posdate').text(data.pos_release);
			$('#poslastmonth').text(data.pos_lastmonth+'个月');
			$('#deliverynum').text(tdnum);
			if(data.posRequest.record_request==1)
				$('#pos_record').text('高中以下');
			else if(data.posRequest.record_request==2)
				$('#pos_record').text('中专');
			else if(data.posRequest.record_request==3)
				$('#pos_record').text('高中');
			else if(data.posRequest.record_request==4)
				$('#pos_record').text('大专');
			else if(data.posRequest.record_request==5)
				$('#pos_record').text('本科');
			else if(data.posRequest.record_request==6)
				$('#pos_record').text('研究生');
			else if(data.posRequest.record_request==7)
				$('#pos_record').text('博士');
			else 
				$('#pos_record').text('博士后');		
			$('#pos_major').text(data.posRequest.major_request);
			$('#working_seniority').text(data.posRequest.working_seniority+'年以上');
			$('#pos_age').text(data.posRequest.minAge+'-'+data.posRequest.maxAge+'岁');
			$('#pos_lang').text(data.posRequest.language_request);
			if(data.pos_detail!=null){
				$('#div-detail').remove();
				var str = data.pos_detail;
				var strs=str.split("<br/>"); //字符分割 
				var ss ="";
				ss+='<div id="div-detail">';
				for (var i=0;i<strs.length ;i++ ) {
					ss += '<p>' + strs[i] + '</p>';		
				}
				ss+='</div>';
				$('.row3').append(ss);
			}else{
				$('.row3').append("无");
			}
	});
		//get到投递该职位的人员信息
		var data={pos_id:$(this).data('pos_id')};
		var findpersonaction="http://" + window.location.host + "/MicroCV/company/searchpersonbyposid.action";
		$.get(findpersonaction,data,function(data){
			//console.log(data);
			if(data.length>=0){
				$('#personinfotbody').remove();
				var str="";	
				str+='<tbody id="personinfotbody">';
			}
			for(var i=0;i<data.length;i++){
				console.log(data[i]);
				var temp=null;
				if(data[i].p_record==1)
					temp='高中以下';
				if(data[i].p_record==2)
					temp='中专';
				if(data[i].p_record==3)
					temp='高中';
				if(data[i].p_record==4)
					temp='大专';
				if(data[i].p_record==5)
					temp='本科';
				if(data[i].p_record==6)
					temp='研究生';
				if(data[i].p_record==7)
					temp='博士';
				if(data[i].p_record==8)
					temp='博士后';	
				str+='<tr>';
				str+='<td><img src="../img/'+data[i].p_image+'" /></td>';
				str+='<td>'+data[i].p_name+'</td>';
				str+='<td>'+temp+'</td>';
				str+='<td>'+data[i].delivery_date+'</td>';
				if(data[i].p_state==4)
					str+='<td>'+'离职'+'</td>';
				else
					str+='<td>'+'在职'+'</td>';
				//受邀请状态
				if(data[i].delivery_status==4)
					str+='<td>'+'已邀请'+'</td>';
				else if(data[i].delivery_status==3)
					str+='<td>'+'已拒绝'+'</td>';
				else if(data[i].delivery_status==2)
					str+='<td>'+'未查看'+'</td>';
				else
					str+='<td>'+'已查看'+'</td>';
				str+='<td><button class="detail" data-delivery_id="'+data[i].delivery_id+'" data-delivery_status="'+data[i].delivery_status+'">详情</button></td>';
				str+='</tr>';			
			}
				str+='</tbody>';
				$('.ysjl-table').append(str);			
		});
	});
	/*	展开详细信息*/
	$("body").on("click",".zhankai-tr td",function(){
		$(".zhankai-tr").hide();
		$(".con-tr").show();
		$(".shouqi-tr").show();
	})
	/*	收起详细信息*/
	$("body").on("click",".shouqi-tr td",function(){
		$(".zhankai-tr").show();
		$(".con-tr").hide();
		$(".shouqi-tr").hide();
	})
	
	/*详情，跳到简历详情*/
	$("body").on("click",".ysjl-table .detail",function(){
		/*
		 * 点击详情把该次投递的状态设为已查看
		 */
		if($(this).data('delivery_status')==2){
		var data={delivery_id:$(this).data('delivery_id')};
		$.post("http://" + window.location.host + "/MicroCV/company/updateInterview.action",data,function(data){
			if(data=="OK")
				alert("该简历状态已设为已查看");
			else
				alert("简历状态信息更改失败");
		});}
		window.location.href="../html/showResume_th.html?value=" + $(this).data('delivery_id');
	});
	
	showPositionCreated();
});


/*by leo职位管理页面的展示,展示一间公司所发布过的职位*/
function showPositionCreated(){
	if($('#month').text()=='全年')
		var data={release_date:$('#year').text()+'00'};
	else
		var data={release_date:$('#year').text()+$('#month').text()};
	//console.log(data);
	$.get("http://" + window.location.host + "/MicroCV/company/showposcreated.action",data,
			function(data){
			//console.log(data);
			if(data.length>=0){
				$('.tbody').remove();
				var str="";	
				str+='<tbody class="tbody">';
			}
			for(var i=0;i<data.length;i++){
				//console.log(data[i]);

				str+='<tr>';
				str+='<td>'+data[i].pos_name+'</td>';
				str+='<td>'+data[i].pos_salary+'</td>';
				str+='<td>'+data[i].pos_release_date+'</td>';
				str+='<td>'+data[i].pos_lastmonth+'个月'+'</td>';
				str+='<td class="td-num">'+data[i].delivery_num+'</td>';
				str+='<td> <button class="cz-btn view" data-pos_id="'+data[i].pos_id+'">查看'+'</button> <button class="cz-btn delete">删除</button> </td>';		
				str+='</tr>';			
			}
			str+='</tbody>';
			$('.zw-table').append(str);
	});
	$(".back").on("click",function(){
		$(".t-div").show();
		$(".detail-con").hide();
	})
};
