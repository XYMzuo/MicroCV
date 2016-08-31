$(function(){
	$.get("/MicroCV/search/lastpos.action",function(data){
		for(var i=0; i<data.length; i++){
			var imgid="img"+(i+1);
			document.getElementById(imgid).src=data[i].logo;
			$('#pos_name'+(i+1)).text(data[i].pos_name);
			$('#pos_name'+(i+1)).attr("data-pos_id",data[i].pos_id);
			$('#salary'+(i+1)).text("￥"+data[i].pos_salary);
			$('#city_name'+(i+1)).text(data[i].city_name);
			$('#release_date'+(i+1)).text(data[i].pos_release_date);
			switch(data[i].record_request){
			case 1:
				$('#record'+(i+1)).text("高中以下");
				break;
			case 2:
				$('#record'+(i+1)).text("中专");
				break;
			case 3:
				$('#record'+(i+1)).text("高中");
				break;
			case 4:
				$('#record'+(i+1)).text("大专");
				break;
			case 5:
				$('#record'+(i+1)).text("本科");
				break;
			case 6:
				$('#record'+(i+1)).text("研究生");
				break;
			case 7:
				$('#record'+(i+1)).text("博士");
				break;
			case 8:
				$('#record'+(i+1)).text("博士后");
				break;
			}
			
		}
	});
	
	$('.carousel').carousel({
		  interval: 3000
		})
	$("#load_nav").load("microcvLayout_th.html");
		var itemheight=$(".hylx-list").css("height");
		$(".label-wrap").css("height",itemheight);
		$(".e-area").css("height",$(".tip-ul").css("height"));
	/**/
	/*跳转至中国人才网*/
	$(".write-p").on("click",function(){
		window.open("http://www.cnrencai.com/mianshiskill/list_12_2.html");
	})
	/*点击职位名称时的页面跳转*/
	$("body").on("click",".zpitem-ul .pos-name",function(){
		$this = $(this);
		window.open("../html/posDetail_th.html?pos_id=" + $this.data("pos_id"));
	});
	/*字的滑入屏幕动画*/
	$(window).scroll(function (event) {
        var offsettop1 = $(".zxzp-word").offset().top;
        if (offsettop1 >= $(window).scrollTop() && offsettop1 < ($(window).scrollTop()+$(window).height())) {
            /*console.log("1div在可视范围");
            console.log(offsettop1);
            console.log($(window).scrollTop());
            console.log($(window).height());
            console.log(($(window).scrollTop()+$(window).height()));*/
            $(".zxzp-word").addClass("animated slideInLeft");
        }
        else {
        	  $(".zxzp-word").removeClass("animated slideInLeft");
        }
        var offsettop2 = $(".msjq-word").offset().top;
        if (offsettop2 >= $(window).scrollTop() && offsettop2 < ($(window).scrollTop()+$(window).height())) {
            $(".msjq-word").addClass("animated slideInLeft");
        }
        else {
      	  $(".msjq-word").removeClass("animated slideInLeft");
        }
        var offsettop3 = $(".zpitem-ul").offset().top;
        if (offsettop3 >= $(window).scrollTop() && offsettop3 < ($(window).scrollTop()+$(window).height())) {
        	$(".zpitem-ul").find("li:nth-child(1)").addClass("animated slideInLeft")
        	$(".zpitem-ul").find("li:nth-child(4)").addClass("animated slideInRight");
        	$(".zpitem-ul").find("li:nth-child(2)").addClass("animated slideInDown")
        	$(".zpitem-ul").find("li:nth-child(3)").addClass("animated slideInUp");
        	}
        else {
        	$(".zpitem-ul").find("li:nth-child(1)").removeClass("animated slideInLeft")
        	$(".zpitem-ul").find("li:nth-child(4)").removeClass("animated slideInRight");
        	$(".zpitem-ul").find("li:nth-child(2)").removeClass("animated slideInDown")
        	$(".zpitem-ul").find("li:nth-child(3)").removeClass("animated slideInUp");
        }	
        var offsettop4 = $(".e-area").offset().top;
        if (offsettop4 >= $(window).scrollTop() && offsettop4 < ($(window).scrollTop()+$(window).height())) {
        	 $(".e-area").addClass("animated slideInRight");
        }
        else {
        	$(".e-area").removeClass("animated slideInRight");
        }
      /* var offsettop5 = $("#twitter .icon i").offset().top;
        if (offsettop5 >= $(window).scrollTop() && offsettop5 < ($(window).scrollTop()+$(window).height())) {
        	$("#twitter .icon i").addClass("animated slideInLeft");
        }
        else {
        	$("#twitter .icon i").removeClass("animated slideInLeft");
        }*/
       });
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationType : 'progress',
       /* paginationType : 'fraction',*/
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        autoplay:1000,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
});

function logoerror(id){
	document.getElementById(id).src="/MicroCV/logo/default.png";
}