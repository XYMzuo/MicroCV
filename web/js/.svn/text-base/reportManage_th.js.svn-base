$(function(){
	getusername();
	$("body").on("click",".dropdown ul li a",function(){
		$(this).parents(".dropdown").find(".chosen-item").text($(this).text());
		showCountMonth();
	});
	
	//获取报表管理上面那块的信息
	$.get("/MicroCV/company/showcountdelivery.action", 
		function(data){
		console.log(data);
		$('#num_td1').text(data[0]);
		$('#num_td2').text(data[1]);
		$('#num_td3').text(data[2]);
		$('#num_td4').text(data[3]);
	});	
	
	showCountMonth();
});

//获取报表下面那块的信息
function showCountMonth(){
	var data={year:$('.chosen-item').text()};
	console.log(data);
	$.post("http://" + window.location.host + "/MicroCV/company/showcountmonth.action",data, 
			function(data){
			console.log(data);
			$('#mon_td1').text(data[0]);
			$('#mon_td2').text(data[1]);
			$('#mon_td3').text(data[2]);
			$('#mon_td4').text(data[3]);
			$('#mon_td5').text(data[4]);
			$('#mon_td6').text(data[5]);
			$('#mon_td7').text(data[6]);
			$('#mon_td8').text(data[7]);
			$('#mon_td9').text(data[8]);
			$('#mon_td10').text(data[9]);
			$('#mon_td11').text(data[10]);
			$('#mon_td12').text(data[11]);
		});
};