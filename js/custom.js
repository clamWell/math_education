$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "https://img.khan.co.kr/spko/storytelling/2021/edu31/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ 
		window.scrollTo(0, 0);
		AOS.refresh();
	}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
	});



	/*********Fised Slider col 2 **********/
	var $fs = $(".fs-a");
	function checkNowStage(sc){
		var now = sc;
		if( now <  $fs.eq(0).offset().top ){
			checkStageValue("bf");
		}else if( now >= $fs.eq($fs.length-1).offset().top+$fs.eq($fs.length-1).height()-screenHeight){
			checkStageValue("aft");
		}else{
			for(p=0; p<$fs.length; p++){
				var eachStart = $fs.eq(p).offset().top,
					eachEnd = $fs.eq(p).offset().top+$fs.eq(p).height()-screenHeight;
				if( now >= eachStart && now < eachEnd ){
					var scIndex = 0;
					var paraLength =  $fs.eq(p).find(".spacer").length-1;
					if( now<eachStart+screenHeight){
						scIndex = 1;
					}else if(now>=eachStart+screenHeight*(paraLength-1)){
						scIndex = paraLength; 
					}else{
						for(l=1;l<paraLength-1;l++){ 
							if(  now >= eachStart+screenHeight * (l) && now < eachStart+screenHeight * ( l+1) ){
								scIndex = l+1;
							}
						}
					}

					checkStageValue( Number(p+1)+"-stage-"+scIndex+"-para");
				}else if( now >= eachEnd && now < $fs.eq(p+1).offset().top ){
					checkStageValue(p+"-btw-"+Number(p+1));
				}
			}
		}
	}

	var nowStage = "bf";
	function checkStageValue(s){
		if(nowStage!==s){
			nowStage = s;
			console.log(s);
			adjustStage(s);
		}
	};
	
	var line01AniDone = false;

	function adjustStage(s){
		if(typeof(s)=="string"){
			if(s=="bf"){
				$fs.find(".fixed-el").removeClass("fixed-el-fixed");
				$fs.find(".fixed-el").removeClass("fixed-el-bottom");

			}else if(s=="aft"){

				$fs.find(".fixed-el").removeClass("fixed-el-fixed");
				$fs.find(".fixed-el").addClass("fixed-el-bottom");

			}else if(s.indexOf("btw")!==-1){
				var ts = s.split("-");

				$fs.eq(ts[0]).find(".fixed-el").removeClass("fixed-el-fixed");
				$fs.eq(ts[0]).find(".fixed-el").addClass("fixed-el-bottom");
				$fs.eq(ts[2]).find(".fixed-el").removeClass("fixed-el-fixed");
				$fs.eq(ts[2]).find(".fixed-el").removeClass("fixed-el-bottom");


			}else if(s.indexOf("stage")!==-1){
				var ts = s.split("-");

				$fs.eq(ts[0]-1).find(".fixed-el").addClass("fixed-el-fixed");
				$fs.eq(ts[0]-1).find(".fixed-el").removeClass("fixed-el-bottom");
				
				var fi_el_index = (ts[2]*1)-1;
				var $fi_els = $fs.eq(ts[0]-1).find(".slider-item");

				$fs.eq(ts[0]-1).find(".slider-item:not(:eq("+fi_el_index+"))").stop().animate({"opacity":"0"}, 1000);
				$fi_els.eq(fi_el_index).stop().animate({"opacity":"1"}, 500);
				
				//천지영 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==1&&ts[2]==1){
					$(".fs-a--2 .item--01 .img-layer .line-01").animate({"width":"100%"}, 2000, "easeOutSine");
					
				}
				//천지영 그래프 애니메이션

				//이석준 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==2&&ts[2]==1){
					$(".fs-a--3 .item--01 .img-layer .line-01").animate({"width":"100%"}, 2000, "easeOutSine");
					
				}
				if(line01AniDone==false&&ts[0]==2&&ts[2]==2){
					$(".fs-a--3 .item--02 .img-layer .line-02").animate({"width":"100%"}, 2000, "easeOutSine");
					line01AniDone==true;
				}
				//이석준 그래프 애니메이션


				// 양혜원과 김영빈 순서 교체 
				//양혜원 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==4&&ts[2]==1){
					$(".fs-a--4 .item--01 .img-layer .line-01").animate({"width":"100%"}, 2000, "easeOutSine");
					
				}
				if(line01AniDone==false&&ts[0]==4&&ts[2]==3){
					$(".fs-a--4 .item--03 .img-layer .line-02").animate({"width":"100%"}, 2000, "easeOutSine");
					
				}
				//양혜원 그래프 애니메이션

				//김영빈 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==3&&ts[2]==1){
					$(".fs-a--5 .item--01 .img-layer .line-01").animate({"width":"100%"}, 2000, "easeOutSine");
					
				}
				//김영빈 그래프 애니메이션

				//이충훈 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==5&&ts[2]==1){
					$(".fs-a--6 .item--01 .img-layer .line-01").delay(1000).animate({"width":"100%"}, 2000, "easeOutSine");
					$(".fs-a--6 .item--01 .img-layer .line-02").animate({"width":"100%"}, 2900, "easeOutSine");
				}
				//이충훈 그래프 애니메이션


				//김민준 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==6&&ts[2]==1){
					$(".fs-a--7 .item--01 .img-layer .line-01").delay(1000).animate({"width":"100%"}, 2000, "easeOutSine");
					$(".fs-a--7 .item--01 .img-layer .line-02").animate({"width":"100%"}, 2900, "easeOutSine");
				}
				//김민준  그래프 애니메이션

				//위서현 그래프 애니메이션
				if(line01AniDone==false&&ts[0]==7&&ts[2]==1){
					$(".fs-a--8 .item--01 .img-layer .line-01").delay(1000).animate({"width":"100%"}, 2000, "easeOutSine");
					$(".fs-a--8 .item--01 .img-layer .line-02").animate({"width":"100%"}, 2900, "easeOutSine");
				}
				//위서현 그래프 애니메이션


			}
		}
	};	

	
	function settingFixedElOpacity(){
		$(".slider-item").css({"opacity":"0"})
		$(".item--01").css({"opacity":"1"})
	};

	function settingFixedElPos(){
		var $horizon_img = $(".slider-item .vrt-align-center");
		$horizon_img.each(function(){
			var y = screenHeight*0.5 - $(this).height()*0.5;
			$(this).css({"top": y+"px" });

		})
	}

	function setAniLineWidthInMobile(){
		$(".img-layer .line-01").find("img").each(function(i){
			$(this).css({"width": (screenWidth*1)+"px"});
		});
		$(".img-layer .line-02").find("img").each(function(i){
			$(this).css({"width": (screenWidth*1)+"px"});
		});
	}
	/*********Fised Slider col 2 **********/
	

	var titleAniDone = false; 
	function activTitlePathAni(){
		var $titlePath = $("#PAGE_TITLE path");
		for(t=0; t<$titlePath.length;t++){
			$titlePath.eq(t).delay(t*50).animate({"stroke-dashoffset":"0", "fill-opacity":"1"}, 4500);
			if(t == $titlePath.length-1){
				titleAniDone = true;
			}
		};
		animateIntroEl();
	
	}

	function animateIntroBg(){
		var $el = $(".each-deco-el img");
		for(x=0;x<$el.length;x++){
			(function(x){
				setTimeout(function(){
					$el.eq(x).removeClass("beforeInit");
					if(x == $el.length-4){
						activTitlePathAni();
					}
				}, 300*x);
			})(x);
			
		}
	}


	var introAnimationDone = false; 
	function animateIntroEl(){
		$(".story-header-text .title-holder .title-deco-line").animate({"width": ((isMobile==true)? "80%":"500px")}, 800, "swing", function(){
			$(".project-sub-title").animate({"opacity":"1", "top":"0px"}, 1000, "swing",function(){
				$(".story-header-text .title-holder .project-member").animate({"opacity":"0.5", "top":"0px"}, 1000, "swing", function(){
					$(".top-byline").animate({"opacity":"0.5"}, 1000, "swing");
					$("body").removeClass("fixed");
						
				});
			});
		});
	}


	/***개발용 init ***/
	function initDev(){
		$("body").removeClass("fixed");
		settingFixedElOpacity();
		settingFixedElPos();
		AOS.init();

	};
	/***개발용 init ***/

	function init(){
		//animateIntroBg();
		if(isMobile==false&&ieTest==false){
			setMouseMoveEventsAfterLoad();
        }else if(isMobile==true){
			setAniLineWidthInMobile();
			avoid100vh();
		}
		settingFixedElOpacity();
		settingFixedElPos();
		AOS.init();
		setIntroVideo();


	};

	String.prototype.insert_at=function(index, string){
	  return this.substr(0, index) + string + this.substr(index);
	}

	var lineSrcChange = function(src){
		var src = src;
		var srcSplit = src.split(".png")
		var newSrc = srcSplit[0]+"-m.png";
		return newSrc;
	};

	/******** 모바일 전용 조정 ********/	
	if(isMobile==true){
		$("#S02_01").find("img").attr("src","https://img.khan.co.kr/spko/storytelling/2021/edu31/math-curri-table-m.jpg");
		$("#G_01 .graph-body").find("img").attr("src","https://img.khan.co.kr/spko/storytelling/2021/edu31/graph-01-m-notitle.png");
		$(".slider-item .img-layer .base").each(function(){
			$(this).attr("src",lineSrcChange($(this).attr("src")));
		});
		$(".slider-item .img-layer .line-01").each(function(){
			$(this).find("img").attr("src",lineSrcChange($(this).find("img").attr("src")));
		});
		$(".slider-item .img-layer .line-02").each(function(){
			$(this).find("img").attr("src",lineSrcChange($(this).find("img").attr("src")));
		});
		$(".graph-full-src-change").each(function(){
			$(this).attr("src",lineSrcChange($(this).attr("src")));
		});
		
			
	}else{
       
	}
	/******** 모바일 전용 조정 ********/
	function avoid100vh(){
		$(".spacer").height(screenHeight);
		$(".page-title").html("15세, 수학을 말하다");
	}


	var isNowIntro;
	$(".loading-page").fadeOut(1000, function(){
		isNowIntro = true;
		init();
		//initDev();
	});

	/******** fragments mouse move animate ********/	
	var x = 0;
    var y = 0;
    var mx = 0;
	var my = 0;
    var speed = 0.01;
	var _imgArr;

	function setMouseMoveEventsAfterLoad(){
		_imgArr = document.getElementsByClassName("each-deco-el"); 
		window.addEventListener("mousemove", mouseFunc, false);
		//console.log(_imgArr);

		function mouseFunc(e){
			x = (e.clientX - screenWidth / 2); 
			y = (e.clientY - screenHeight / 2);
		}
		loop();
	};
	var rq;

	function loop(){
		mx += (x - mx) * speed;
		my += (y - my) * speed;

		_imgArr[0].style.transform = "translate("+ (mx/12) +"px," + (my/10) +"px)"; 
		_imgArr[1].style.transform = "translate("+ (mx/10) +"px," + (my/8) +"px)"; 
		_imgArr[2].style.transform = "translate("+ (mx/8) +"px," + (my/6) +"px)"; 
		_imgArr[3].style.transform = "translate("+ (mx/4) +"px," + (my/3) +"px)"; 
		_imgArr[4].style.transform = "translate("+ (mx/12) +"px," + (my/8) +"px)"; 
		_imgArr[5].style.transform = "translate("+ (mx/6) +"px," + (my/4) +"px)"; 
		_imgArr[6].style.transform = "translate("+ (mx/7) +"px," + (my/6) +"px)"; 
		_imgArr[7].style.transform = "translate("+ (mx/11) +"px," + (my/8) +"px)"; 
		_imgArr[8].style.transform = "translate("+ (mx/12) +"px," + (my/9) +"px)"; 
		_imgArr[9].style.transform = "translate("+ (mx/7) +"px," + (my/4) +"px)"; 
		_imgArr[10].style.transform = "translate("+ (mx/6) +"px," + (my/9) +"px)"; 
		_imgArr[11].style.transform = "translate("+ (mx/9) +"px," + (my/7) +"px)"; 

		 rq = window.requestAnimationFrame(loop);
	}
    /******** fragments mouse move animate ********/	

	
	/*
	function cancelAnimationFrame(){
		if (rq) {
			window.cancelAnimationFrame(rq);
		}
	}
	function resetAfData(){
		x = 0;
		y = 0;
		mx = 0;
		my = 0;
	}*/

	/*** 인트로 비디오 관련 ***/ 
	var isIntroVdieoMuted = true; 
	$(".sound-icon").on("click",function(){
		$(this).toggleClass("sound-icon-mute");
		isIntroVdieoMuted = !isIntroVdieoMuted;			
		$("#V_INTRO_PC").prop("muted", isIntroVdieoMuted);			
	});

	var introVideoPlay;
	var introVideo = document.getElementById("V_INTRO_PC");
	if(introVideo.readyState === 4){
		setIntroVideo();
	}

	function setIntroVideo(){
		introVideoPlay = true; 
	}
	/*** 인트로 비디오 관련 ***/ 


	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();

		$(".hideme").each(function(i){
			if( nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5 ){
				$(this).animate({"opacity":"1"},1000);
			}
		});


		/*
		if(nowScroll > 1500){
			cancelAnimationFrame();
			resetAfData();
		}else{
			setMouseMoveEventsAfterLoad();
		}*/
		
		if($fs.length >= 1){
			checkNowStage(nowScroll);
		}

		if(nowScroll > screenHeight*0.5){
			$(".going-down").fadeOut(300);
			if(introAnimationDone==false){
				introAnimationDone = true;
				animateIntroBg();
			}
		}else{
			$(".going-down").show();
		}	

		
		if(ieTest==false){
            $(".interviewee-holder .video-tag").each(function(i){
                if( nowScroll + screenHeight*0.5 > $(this).offset().top){
                    $(this).find("video").get(0).play();
                }else{
                    $(this).find("video").get(0).pause();
                }
            });
        }
		
		
		$(".story-header-video").each(function(i){
			if( nowScroll > screenHeight*1){
				if(introVideoPlay == true){
					introVideoPlay = false; 
					$(this).find("video").get(0).pause();
					console.log("pause");
				}
			}else{
				if(introVideoPlay == false){
					introVideoPlay = true;
					$(this).find("video").get(0).play();
					console.log("play");
				}
			}
		});

	});


});

function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
