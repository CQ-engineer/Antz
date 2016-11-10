
$(document).ready(function(){
	/*作品市集*/
	$('.header_list>li:eq(1)').mouseenter(function(){
		$('.works_market').show();
	});
	$('.header_list>li:eq(1)').mouseleave(function(){
		$('.works_market').hide();
	});
	$('.works_market li').on('mouseenter',function(){
		$(this).find('ul').show();	
	});

	$('.works_market li').on('mouseleave',function(){
		$(this).find('ul').hide();
	});
	/*更多*/
	$('.header_list>li:eq(4)').mouseenter(function(){
		$('.more').show();
	});
	$('.header_list>li:eq(4)').mouseleave(function(){
		$('.more').hide();
	});
	$('.more li').on('mouseenter',function(){
		$(this).find('ul').show();	
	});

	$('.more li').on('mouseleave',function(){
		$(this).find('ul').hide();
	});
		
	/*轮播*/
	$(function() {
    	$('.banner1').unslider();
    	$('.colleges').unslider();
	});

	/*prev和next显示和隐藏*/
	$(".banner1").mouseenter(function(){
	    $("#prev").show();
	    $("#next").show();
 	});
  	$(".banner1").mouseleave(function(){
	    $("#prev").hide();
	    $("#next").hide();
  	});
  	
  	/*prev和next点击切换*/
  	$(function(){
	    var unslider = $('.banner1').unslider();

	    $('.unslider-arrow').click(function() {
	        var fn = this.className.split(' ')[1];

	        //  Either do unslider.data('unslider').next() or .prev() depending on the className
	        unslider.data('unslider')[fn]();
    });	
})


		
});

$(function(){
	$('.showtop_left').mouseenter(function(){
		$(this).find('ul').slideDown();
		$(this).find('img').get(0).src='images/show1.png';
	})
	$('.showtop_left').mouseleave(function(){
		$(this).find('ul').slideUp();
		$(this).find('img').get(0).src='images/show3.png';
	})

	$('.showtop_right').mouseenter(function(){
		$(this).find('img').get(0).src='images/show4.png';
		$(this).css('color','#00a0e8');
	})
	$('.showtop_right').mouseleave(function(){
		$(this).find('img').get(0).src='images/show2.png';
		$(this).css('color','#535353');
	})

	$('.partenrstop_left').mouseenter(function(){
		$(this).find('ul').slideDown();
		$(this).find('img').get(0).src='images/show1.png';
	})
	$('.partenrstop_left').mouseleave(function(){
		$(this).find('ul').slideUp();
		$(this).find('img').get(0).src='images/show3.png';
	})

	$('.partenrstop_right').mouseenter(function(){
		$(this).find('img').get(0).src='images/show4.png';
		$(this).css('color','#00a0e8');
	})
	$('.partenrstop_right').mouseleave(function(){
		$(this).find('img').get(0).src='images/show2.png';
		$(this).css('color','#535353');
	})

	$('.antnewstop_left').mouseenter(function(){
		$(this).find('ul').slideDown();
		$(this).find('img').get(0).src='images/show1.png';
	})
	$('.antnewstop_left').mouseleave(function(){
		$(this).find('ul').slideUp();
		$(this).find('img').get(0).src='images/show3.png';
	})

	$('.antnewstop_right').mouseenter(function(){
		$(this).find('img').get(0).src='images/show4.png';
		$(this).css('color','#00a0e8');
	})
	$('.antnewstop_right').mouseleave(function(){
		$(this).find('img').get(0).src='images/show2.png';
		$(this).css('color','#535353');
	})
})

$(function(){
	$('.showbottom li>img').mouseenter(function(){
		$(this).animate({'opacity':'0.8'},50);
	});
	$('.showbottom li>img').mouseleave(function(){
		$(this).animate({'opacity':'1.0'},50);
	});
});

$(function(){
	$('.bootom_left a').click(function(){
		$(this).css('backgroundColor','#a5a39e');
		$('.bootom_right a').css('backgroundColor','#a5a39e');
		$(this).css('backgroundColor','#000');

		$('.organizations').hide();
		$('.colleges').hide();
		$('.colleges').show();
	})
	$('.bootom_right a').click(function(){
		$('.bootom_left a').css('backgroundColor','#a5a39e');
		$(this).css('backgroundColor','#a5a39e');
		$(this).css('backgroundColor','#000');

		$('.organizations').hide();
		$('.colleges').hide();
		$('.organizations').show();
	})
});


$(function(){
   $("#prev1").click(function(){
       $(".page1").css("display","block");
       $(".page2").css("display","none");
   });
   $("#next1").click(function(){
       $(".page1").css("display","none");
       $(".page2").css("display","block");
   });   
})


window.onload=function(){
  var cx =["images/e1.jpg","images/e2.jpg","images/e3.jpg","images/e4.jpg","images/e5.jpg","images/e6.jpg","images/e7.jpg","images/e8.jpg","images/e9.jpg","images/e10.jpg"]
  var tu1=document.getElementById("tu1");
  var Tu1=document.getElementById("Tu1");
  var tu2=document.getElementById("tu2");
  var page1=document.getElementById("page1");
  var page2=document.getElementById("page2");
  var oLi=tu2.getElementsByTagName("li");    
  var timer=null;
  var num=0;
  Tu1.src = cx[num];
    timer=setInterval(fun1,3000);

  for(var i=0;i<oLi.length;i++){
  		oLi[i].Num=i;
      oLi[i].onmouseover=function(){   
        num=this.Num;
        Tu1.src = cx[num];
        for(var i=0;i<oLi.length;i++){         
            oLi[i].className="";    
        }
        this.className="checked";
        num++;
        clearInterval(timer);
      };  
      oLi[i].onmouseout=function(){
        clearInterval(timer);
        timer=setInterval(fun1,3000);
      }
  } 
  function  fun1(){
      timers=setTimeout(function(){
           if (num>cx.length-1) {
            num=0;
          }
          Tu1.src=cx[num];
          for(var c=0;c<oLi.length;c++){         
              oLi[c].className="";    
          }
          oLi[num].className="checked";              
         num++;
          if(num>6){
             page1.style.display="none";
             page2.style.display="block";
          }else{
             page1.style.display="block";
             page2.style.display="none";
          }
      },0);
       oLi[num-1].className="";
    }  
}
